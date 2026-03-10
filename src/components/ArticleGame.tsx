import { useState, useEffect } from 'react';

import { VocabEntry, AnswerState } from '../types';

import classes from './ArticleGame.module.css';
import Timer from './Timer';

type ArticleGameProps = {
  words: VocabEntry[];
};

const TIME_TO_GUESS = 5000;

const ArticleGame = ({ words }: ArticleGameProps) => {
  console.log('words in article game', words);

  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered');

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);
  // setCardsToTest((prev) => [...prev.slice(1)])}
  //setCardsToTest((prev) => [...prev.slice(1), prev[0]])
  console.log('cardsToTest', cardsToTest);

  const handleArticleCheck = (article: VocabEntry['article']) => {
    if (article === cardsToTest[0].article) {
      console.log('correct');
      setAnswerState('correct');
      // set a correct class
      // remove from words to review
    } else {
      //set an incorrect class
      // return to words to review
      console.log('incorrect');
      setAnswerState('incorrect');
    }
  };

  // timer: timer needs the duration, and what to do whe ntime is up.
  // if the user has answered, pause to show wrong and right via style, if no answer, pause to show correct.
  // reset with next word.
  return (
    <>
      <h2>Article Speed Round</h2>
      <Timer duration={TIME_TO_GUESS} answerState={answerState} />
      <section className={classes.articleGame}>
        <div className={classes.gameCard}>
          <div className={classes.gameWord}>
            <h3>{cardsToTest[0]?.noun} </h3>
          </div>
          <div className={classes.gameArticle}>
            <button
              onClick={() => handleArticleCheck('der')}
              disabled={answerState !== 'unanswered'}
            >
              der
            </button>{' '}
            <button
              onClick={() => handleArticleCheck('die')}
              disabled={answerState !== 'unanswered'}
            >
              die
            </button>{' '}
            <button
              onClick={() => handleArticleCheck('das')}
              disabled={answerState !== 'unanswered'}
            >
              das
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleGame;
