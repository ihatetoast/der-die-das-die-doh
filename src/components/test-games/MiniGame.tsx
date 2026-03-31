import { useState, useEffect } from 'react';
import { VocabEntry, AnswerState, HintState } from '../../types';

import classes from './MiniGame.module.css';
import { MiniTestType } from '../../types';
import { scramble } from '../../helpers';

type MiniGameProps = {
  words: VocabEntry[];
  testType: MiniTestType;
};

const MiniGame = ({ words, testType }: MiniGameProps) => {
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [userInputNoun, setUserInputNoun] = useState<string>('');
  const [hint, setHint] = useState<string>('');
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

  let originLanguage = 'German';
  let targetLanguage = 'English';
  if (testType === 'eng-ger-mini') {
    originLanguage = 'English';
    targetLanguage = 'German';
  }

  const evalAnswerNoun = (userInputNoun: string) => {
    const answer = userInputNoun.trim();
    if (answer.length === 0) {
      console.log('user skipped');
      setAnswerState('skipped');
      return;
    }

    // handle the cap of first letter in german later. maybe a warning? but don't count as wrong. we can be lazy.
    // maybe an alert message "Remember, nouns in German are capitalized"
    if (answer.toLocaleLowerCase() === targetWord.trim().toLowerCase()) {
      console.log('user was correct');
      setAnswerState('correct');
    } else {
      console.log('user was incorrect');
      setAnswerState('incorrect');
    }
  };

  // pause for style change. only let user know correct or incorrect, not answer
  useEffect(() => {
    if (answerState === 'incorrect' || answerState === 'correct') {
      setTimeout(() => {
        setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
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
    // both modes eval the noun
    evalAnswerNoun(userInputNoun);
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
      <p>
        You're given a noun in {originLanguage}. Please supply the{' '}
        {targetLanguage} noun (in singular).
      </p>
      <p>If you need help, click "Hint" to get the letters needed.</p>
      <section className={classes.engGerMiniGame}>
        <div className={classes.wordsContainer}>
          <div className={classes.originWord}>
            <h3>
              {originLanguage}:{' '}
              {needsGermanArticle ? `${cardsToTest[0].article}` : 'the'}{' '}
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
                disabled={answerState !== 'waiting' || hintState === 'revealed'}
                className={classes.submitBtn}
              >
                {userInputNoun.trim() === '' ? 'Skip' : 'Check'}
              </button>
              <button
                onClick={handleHint}
                className={`${classes.hintBtn} ${hintState === null ? undefined : classes[hintState]}`}
                disabled={hintState === 'revealed' || answerState !== 'waiting'}
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
    </>
  );
};

export default MiniGame;
