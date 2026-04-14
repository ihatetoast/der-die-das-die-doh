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

  // eng to german only
  const [userInputArticle, setUserInputArticle] = useState<
    VocabEntry['article'] | null
  >(null);
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [hintState, setHintState] = useState<HintState>(null);

  const originWord =
    testType === 'ger-eng-mini' ? cardsToTest[0]?.noun : cardsToTest[0].eng;
  const targetWord =
    testType === 'ger-eng-mini' ? cardsToTest[0]?.eng : cardsToTest[0].noun;
  const needsGermanArticle = testType === 'eng-ger-mini';

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

// CLAUDE why is this not working?
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
  ):boolean => {
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
        setAnswerState('waiting');
      }, 2000);
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
      }, 2000);
    }
  }, [hintState, targetWord]);

  const handleSubmit = () => {
    if (targetLanguage === 'German') {
      // handle article check here
    }
    if (targetLanguage === 'English') {
      const otherDefs = cardsToTest[0].notes.otherEngDefinitions;
      const isCorrect = evalAnswerEngNoun(userInputNoun, targetWord, otherDefs);
      setAnswerState(isCorrect ? 'correct' : 'incorrect')
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
                {originLanguage === 'German' ? `${cardsToTest[0].article}` : ' the '}{' '}
                {originWord}
              </h3>
            </div>

            <div className={classes.targetWord}>
              <p className={classes.hint}>
                {hintState === 'scrambled'
                  ? hint
                  : hintState === 'revealed'
                    ? targetWord
                    : null}
              </p>
              <label htmlFor='word'>
                {targetLanguage}:{needsGermanArticle ? ' ' : ' the '}
                <input
                  type='text'
                  id='word'
                  value={userInputNoun}
                  placeholder={`${targetLanguage} translation`}
                  onChange={(e) => setUserInputNoun(e.target.value)}
                  className={`${classes.nounAnswer} ${classes[answerState]}`}
                />
              </label>
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
