import { useState, useEffect } from 'react';

import { VocabEntry, AnswerState, ModeProp, GameState } from '../../types';

import classes from './ArticleGame.module.css';
import Timer from '../Timer';
import GameOver from './GameOver.tsx';

type ArticleGameProps = {
  words: VocabEntry[];
  handleSetMode: (value: ModeProp) => void;
};

const TIME_TO_GUESS = 5000;

const TIME_TO_NEXT_QUESTION = 2000;
// if they chose, give 2 secs for pause. for style. don't reveal correct answer,
// but reveal that user was right or wrong

const ArticleGame = ({ words, handleSetMode }: ArticleGameProps) => {
  console.log('words in article game', words);

  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const [testState, setTestState] = useState<GameState>('waiting');
  const [userChoice, setUserChoice] = useState<'der' | 'die' | 'das' | null>(
    null,
  );

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  useEffect(() => {
    if (cardsToTest.length === 0 && testState === 'active') {
      setTestState('over');
    }
  }, [cardsToTest, testState]);

  const handleSkipped = () => {
    setAnswerState('skipped');
    setCardsToTest((prev) => [...prev.slice(1), prev[0]]);

    // delay for user to see it was skipped
    setTimeout(() => {
      setAnswerState('waiting');
    }, 500);
    if (cardsToTest.length === 0) {
      setTestState('over');
    }
  };

  const handleUserAnswerSelect = (article: VocabEntry['article']) => {
    setUserChoice(article);
    const isCorrect = article === cardsToTest[0].article;
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
    setTimeout(() => {
      if (isCorrect) {
        setCardsToTest((prev) => prev.slice(1));
      } else {
        setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
      }
      setAnswerState('waiting');
    }, TIME_TO_NEXT_QUESTION);
    if (cardsToTest.length === 0) {
      // test is completed
      setTestState('over');
    }
  };

  return (
    <>
      <h2>Article Speed Round</h2>
      {testState === 'waiting' && (
        <div>
          <p>You will be shown a word. Pick the correct article. </p>
          <p>
            If you picked the correct article, the word will be removed from the
            stack. If you pick the wrong article, the word will be returned the
            stack.
          </p>
          <p>When you're ready, click "Go!".</p>
          <button onClick={() => setTestState('active')}>Go!</button>
        </div>
      )}

      {testState === 'over' && (
        <GameOver title='Article Speed Round' onSetMode={handleSetMode} />
      )}
      {testState === 'active' && (
        <>
          <Timer
            key={cardsToTest[0]?.id || null}
            duration={TIME_TO_GUESS}
            answerState={answerState}
            onTimesUp={handleSkipped}
          />
          <section className={classes.articleGame}>
            <div className={classes.gameCard}>
              <div className={classes.gameWord}>
                <h3>{cardsToTest[0]?.noun} </h3>
              </div>
              <div className={classes.gameArticle}>
                <button
                  onClick={() => handleUserAnswerSelect('der')}
                  data-state={userChoice === 'der' ? answerState : undefined}
                  disabled={answerState !== 'waiting'}
                >
                  der
                </button>{' '}
                <button
                  onClick={() => handleUserAnswerSelect('die')}
                  data-state={userChoice === 'die' ? answerState : undefined}
                  disabled={answerState !== 'waiting'}
                >
                  die
                </button>{' '}
                <button
                  onClick={() => handleUserAnswerSelect('das')}
                  data-state={userChoice === 'das' ? answerState : undefined}
                  disabled={answerState !== 'waiting'}
                >
                  das
                </button>
              </div>
            </div>
          </section>{' '}
        </>
      )}
    </>
  );
};

export default ArticleGame;
