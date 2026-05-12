import { useState, useEffect } from 'react';
import {
  VocabEntry,
  AnswerState,
  HintState,
  GameState,
  ModeProp,
} from '../../types';

import GameOver from './GameOver.tsx';

import classes from './MiniGame.module.css';
import { MiniTestType } from '../../types';
import { scramble } from '../../helpers';

type MiniGameProps = {
  words: VocabEntry[];
  testType: MiniTestType;
  handleSetMode: (value: ModeProp) => void;
};

const MiniGame = ({ words, testType, handleSetMode }: MiniGameProps) => {
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [userInputNoun, setUserInputNoun] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const [testState, setTestState] = useState<GameState>('waiting');
  const [message, setMessage] = useState<string>('');
  // eng to german only
  const [userInputArticle, setUserInputArticle] = useState<
    VocabEntry['article'] | null
  >(null);
  const [articleIsCorrect, setArticleIsCorrect] = useState<boolean | null>(
    null,
  );
  const [gerNounIsCorrect, setGerNounIsCorrect] = useState<boolean | null>(
    null,
  );

  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [hintState, setHintState] = useState<HintState>(null);

  const originWord =
    testType === 'ger-eng-mini' ? cardsToTest[0]?.noun : cardsToTest[0]?.eng;
  const targetWord =
    testType === 'ger-eng-mini' ? cardsToTest[0]?.eng : cardsToTest[0]?.noun;
  const needsGermanArticle = testType === 'eng-ger-mini';

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  useEffect(() => {
    if (cardsToTest.length === 0 && testState === 'active') {
      setTestState('over');
    }
  }, [cardsToTest, testState]);

  let originLanguage = 'German';
  let targetLanguage = 'English';
  if (testType === 'eng-ger-mini') {
    originLanguage = 'English';
    targetLanguage = 'German';
  }

  const evalAnswerEngNoun = (
    userInputNoun: string,
    targetWord: string,
    otherDefs?: string,
  ): boolean => {
    const userAnswer = userInputNoun.trim().toLowerCase();

    if (userAnswer === targetWord) {
      return true;
    }
    if (otherDefs) {
      const altDefs = otherDefs.split(', ').map((def) => def.toLowerCase());
      if (altDefs.includes(userAnswer)) return true;
    }
    return false;
  };

  const evalAnswerGerNoun = (
    userInputNoun: string,
    targetWord: string,
    otherDefs?: string,
  ) => {
    setMessage(''); // to clear any message re hand v Hand
    const userAnswer = userInputNoun.trim().toLowerCase();

    // don't count as wrong, but if user doesn't cap first letter, put a note in hint box reminding them.
    const initial = userInputNoun.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      setMessage('Remember: German nouns begin with an uppercase letter.');
    }
    // to lower case for both to account for sloppy NOuns or crazy sHift keys
    if (userAnswer === targetWord.toLowerCase()) return true;
    if (otherDefs) {
      const otherGerDefs = otherDefs
        .split(', ')
        .map((def) => def.replace(/^(der|die|das)\s+/i, '').toLowerCase());
      if (otherGerDefs.includes(userAnswer)) return true;
    }
    return false;
  };

  // pause for style change. only let user know correct or incorrect, not answer
  useEffect(() => {
    if (answerState === 'incorrect' || answerState === 'correct') {
      setTimeout(() => {
        if (answerState === 'correct' && hintState === null) {
          setCardsToTest((prev) => prev.slice(1));
        } else {
          setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        }
        setHintState(null); // Reset for next word
        setUserInputNoun('');
        setUserInputArticle(null);
        setMessage('');
        setAnswerState('waiting');
        setArticleIsCorrect(null);
        setGerNounIsCorrect(null);
      }, 3000);
    }
  }, [answerState, hintState]);

  useEffect(() => {
    if (hintState === 'scrambled') {
      setHint(scramble(targetWord));
    }

    if (hintState === 'revealed') {
      // give user a chance to see the answer
      setTimeout(() => {
        setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        setHintState(null); // Reset for next word
        setUserInputNoun('');
        setUserInputArticle(null);
        setAnswerState('waiting');
      }, 3000);
    }
  }, [hintState, targetWord]);

  const handleSubmit = () => {
    if (targetLanguage === 'German') {
      if (userInputArticle === null && userInputNoun.trim() !== '') {
        setMessage('Please select an article (der/die/das)');
        return;
      }
      if (userInputNoun.trim() === '' && userInputArticle === null) {
        setAnswerState('skipped');
        return;
      }
      const otherGerDefs = cardsToTest[0].notes.otherGerDefinitions;

      const nounRight = evalAnswerGerNoun(
        userInputNoun,
        targetWord,
        otherGerDefs,
      );
      const articleRight = cardsToTest[0].article === userInputArticle;

      const isCorrect = articleRight && nounRight;
      setArticleIsCorrect(articleRight);
      setGerNounIsCorrect(nounRight);
      setAnswerState(isCorrect ? 'correct' : 'incorrect');
    }
    if (targetLanguage === 'English') {
      const otherEngDefs = cardsToTest[0].notes.otherEngDefinitions;
      const isCorrect = evalAnswerEngNoun(
        userInputNoun,
        targetWord,
        otherEngDefs,
      );
      setAnswerState(isCorrect ? 'correct' : 'incorrect');
    }
  };

  const handleHint = () => {
    setHintState((prev) => {
      if (prev === null) return 'scrambled';
      if (prev === 'scrambled') return 'revealed';
      return prev;
    });
  };
  // html to have originWord atop targetWord col in mob and row in tab
  // div for target will have colors to reflect flag: ger blk, gold, red, eng: red blue white (covers uk and us colours)
  return (
    <>
      <h2>
        {originLanguage} to {targetLanguage} Mini Test
      </h2>
      {testState === 'waiting' && (
        <div>
          <p>
            You're given a noun in {originLanguage}. Please supply the{' '}
            {targetLanguage} noun (in singular).
          </p>
          {originLanguage === 'English' && (
            <p>
              For the article, choose the correct article using the buttons
              provided.
            </p>
          )}
          <p>
            If you need help, click "Hint" to get a scrambled version of{' '}
            {targetLanguage} word. Still stuck? Click "Reveal?" to get the
            answer.
          </p>
          <p>
            Any words that were incorrect or required a hint will be returned to
            the deck to review. When the deck is emptied (i.e., you got all
            right without hints), the test is over and you can return to home.
          </p>
          <p>When you're ready, click "Go!".</p>
          <button onClick={() => setTestState('active')}>Go!</button>
        </div>
      )}
      {testState === 'over' && (
        <GameOver
          title={
            testType === 'ger-eng-mini'
              ? 'German-to-English Flashcards Mini'
              : 'English-to-German Flashcards Mini'
          }
          onSetMode={handleSetMode}
        />
      )}
      {testState === 'active' && cardsToTest.length > 0 && (
        <section className={classes.engGerMiniGame}>
          <div className={classes.wordsContainer}>
            <div className={classes.originWord}>
              <h3>
                {originLanguage}:{' '}
                {originLanguage === 'German'
                  ? `${cardsToTest[0].article}`
                  : ' the '}{' '}
                {originWord}
              </h3>
            </div>

            <div className={classes.targetWord}>
              <p className={classes.hint}>
                {hintState === 'scrambled'
                  ? hint
                  : hintState === 'revealed'
                    ? targetWord
                    : message}
              </p>
              <label htmlFor='word'>
                {targetLanguage}:{needsGermanArticle ? ' ' : ' the '}
              </label>
              {targetLanguage === 'German' && (
                <div className={classes.articleButtonContainer}>
                  <button
                    className={`
                      ${userInputArticle === 'der' ? `${classes.selected}` : ''}
                      ${userInputArticle === 'der' && articleIsCorrect ? `${classes.correct}` : ''}
                      ${userInputArticle === 'der' && articleIsCorrect === false ? `${classes.incorrect}` : ''}
                    `.trim()}
                    onClick={() => setUserInputArticle('der')}
                  >
                    der
                  </button>
                  <button
                    className={`
                      ${userInputArticle === 'die' ? `${classes.selected}` : ''}
                      ${userInputArticle === 'die' && articleIsCorrect ? `${classes.correct}` : ''}
                      ${userInputArticle === 'die' && articleIsCorrect === false ? `${classes.incorrect}` : ''}
                    `.trim()}
                    onClick={() => setUserInputArticle('die')}
                  >
                    die
                  </button>
                  <button
                    className={`
                      ${userInputArticle === 'das' ? `${classes.selected}` : ''}
                      ${userInputArticle === 'das' && articleIsCorrect ? `${classes.correct}` : ''}
                      ${userInputArticle === 'das' && articleIsCorrect === false ? `${classes.incorrect}` : ''}
                    `.trim()}
                    onClick={() => setUserInputArticle('das')}
                  >
                    das
                  </button>
                </div>
              )}
              <input
                type='text'
                id='word'
                value={userInputNoun}
                placeholder={`${targetLanguage} translation`}
                onChange={(e) => setUserInputNoun(e.target.value)}
                className={`
                  ${classes.nounAnswer} 
                    ${classes[answerState]}
                    ${targetLanguage === 'German' && gerNounIsCorrect ? classes.correctGer : ''}
                    ${targetLanguage === 'German' && gerNounIsCorrect === false ? classes.incorrectGer : ''}
                  `.trim()}
              />

              <div className={classes.btnContainer}>
                <button
                  onClick={handleSubmit}
                  disabled={
                    answerState !== 'waiting' || hintState === 'revealed'
                  }
                  className={classes.submitBtn}
                >
                  {userInputNoun.trim() === '' ? 'Skip' : 'Check'}
                </button>
                <button
                  onClick={handleHint}
                  className={`${classes.hintBtn} ${hintState === null ? undefined : classes[hintState]}`}
                  disabled={
                    hintState === 'revealed' || answerState !== 'waiting'
                  }
                >
                  {hintState === null
                    ? 'Hint?'
                    : hintState === 'scrambled'
                      ? 'Reveal?'
                      : 'Reveal'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MiniGame;
