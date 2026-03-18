import { useState, useEffect } from 'react';
import { VocabEntry, AnswerState, HintState } from '../../types';

import classes from './MiniGame.module.css';
import { MiniTestType } from '../../types';
type MiniGameProps = {
  words: VocabEntry[];
  testType: MiniTestType;
};

const MiniGame = ({ words, testType }: MiniGameProps) => {
  // console.log('words in eng to ger man mini game', words);
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [userInputNoun, setUserInputNoun] = useState<string>('');
  const [userInputArticle, setUserInputArticle] = useState<
    VocabEntry['article'] | null
  >(null); // eng to german only
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [hintState, setHintState] = useState<HintState>(null);
  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  let originLanguage = 'German';
  let targetLanguage = 'English';
  if (testType === 'eng-ger-mini') {
    originLanguage = 'English';
    targetLanguage = 'German;';
  }

  const evalAnswer = (userInputNoun: string) => {
    let answer = userInputNoun.trim();
    if (answer.length === 0) {
      setAnswerState('skipped');
      return;
    }
    if (targetLanguage === 'English') {
      answer = answer.toLocaleLowerCase();
    }

    if (answer === cardsToTest[0].eng.trim().toLowerCase()) {
      setAnswerState('correct');
    } else {
      setAnswerState('incorrect');
    }
  };

  // pause for style change. only let user know correct or incorrect, not answer
  useEffect(() => {}, [answerState]);

  useEffect(() => {}, [hintState])

  const handleSubmit = () => {};

  const handleHint = () => {
    setHintState((prev) => {
      if (prev === null) return 'scrambled';
      if (prev === 'scrambled') return 'revealed';
      return prev;
    });
  };

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
      <section className={classes.MiniGame}>
        <div>
          <h3>
            {originLanguage}:{' '}
            {originLanguage === 'German' ? `${words[0].article}` : 'the'}{' '}
            {words[0].noun}
          </h3>
          <p className={classes.hint}></p>
          <div className={classes.userAnswers}>
            <span>Answer:</span>
            {targetLanguage === 'English' ? (
              'the'
            ) : (
              <span
                className={`${classes.articleAnswer} ${classes[answerState]}`}
              >
                {userInputArticle}
              </span>
            )}
            <span className={`${classes.nounAnswer} ${classes[answerState]}`}>
              {userInputNoun}
            </span>
          </div>
          <label htmlFor='word'>
            {targetLanguage}:{' '}
            <input
              type='text'
              id='word'
              placeholder={`${targetLanguage} noun`}
              onChange={(e) => setUserInputNoun(e.target.value)}
            />
          </label>
          <div className={classes.btnContainer}>
            <button
              onClick={handleSubmit}
              disabled={answerState !== 'waiting'}
              className={classes.submitBtn}
            >
              {userInputNoun.trim() === '' ? 'Skip' : 'Check'}
            </button>
            <button
              onClick={handleHint}
              className={`${classes.hintBtn} ${hintState === null ? undefined : classes[hintState]}`}
            >
              {hintState === null ? 'Hint?' : 'Reveal'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiniGame;
