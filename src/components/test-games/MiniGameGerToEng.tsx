import { useState, useEffect } from 'react';
import { useFlashcardLogic } from '../../hooks/useFlashcardLogic.ts';
import GameOver from './GameOver.tsx';

import classes from './MiniGame.module.css';
import { MiniGameProps } from '../../types.ts';

const MiniGameGerToEng = ({ words, handleSetMode }: MiniGameProps) => {
  const {
    cardsToTest,
    setCardsToTest,
    userInputNoun,
    setUserInputNoun,
    testState,
    setTestState,
    hint,
    hintState,
    setHintState,
    message,
    setMessage,
    answerState,
    setAnswerState,
  } = useFlashcardLogic(words, 'ger-eng-mini');

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
        setMessage('');
        setAnswerState('waiting');
      }, 3000);
    }
  }, [answerState, hintState]);

  const handleSubmit = () => {

      const otherEngDefs = cardsToTest[0].notes.otherEngDefinitions;
      const isCorrect = evalAnswerEngNoun(
        userInputNoun,
        cardsToTest[0].eng,
        otherEngDefs,
      );
      setAnswerState(isCorrect ? 'correct' : 'incorrect');
    
  };

  const handleHint = () => {
    setHintState((prev) => {
      if (prev === null) return 'scrambled';
      if (prev === 'scrambled') return 'revealed';
      return prev;
    });
  };
  
  return (
    <>
      <h2>German-to-English Mini Test</h2>
      {testState === 'waiting' && (
        <div>
          <p>
            You're given a noun in German. Write the English definition (in singular).
          </p>
          <p>
            Need help? Click "Hint" to get the answer scrambled. Still stuck? Click "Reveal?" to get the
            answer.
          </p>
          <p>
            Words that were incorrect or required a hint will be returned to
            the deck to review. When the deck is emptied (i.e., you got all
            right without hints), the test is over and you can return to home.
          </p>
          <p>When you're ready, click "Go!".</p>
          <button className={classes.startBtn} onClick={() => setTestState('active')}>Go!</button>
        </div>
      )}
      {testState === 'over' && (
        <GameOver
          title='German-to-English Flashcards Mini'
          onSetMode={handleSetMode}
        />
      )}
      {testState === 'active' && cardsToTest.length > 0 && (
        <section className={classes.engGerMiniGame}>
          <div className={classes.wordsContainer}>
            <div className={classes.originWord}>
              <h3>{cardsToTest[0].article} {cardsToTest[0].noun}</h3>
            </div>

            <div className={classes.targetWord}>
              <p className={classes.hint}>
                {hintState === 'scrambled'
                  ? hint
                  : hintState === 'revealed'
                    ? cardsToTest[0].eng 
                    : message}
              </p>
              <span>the </span>
              
              <input
                type='text'
                id='word'
                value={userInputNoun}
                placeholder="English word"
                onChange={(e) => setUserInputNoun(e.target.value)}
                className={`
                  ${classes.nounAnswer} 
                    ${classes[answerState]}
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

export default MiniGameGerToEng;
