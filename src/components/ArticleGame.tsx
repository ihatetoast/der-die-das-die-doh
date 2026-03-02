import { useState, useEffect } from 'react';

import { VocabEntry } from '../types';

import classes from './ArticleGame.module.css';


type ArticleGameProps = {
  words: VocabEntry[];
};

const TIME_TO_GUESS = 5000;
const ArticleGame = ({ words }: ArticleGameProps) => {
  console.log('words in article game', words);

  const [cardsToReview, setCardsToReview] = useState<VocabEntry[]>([]);
  const [choiceIsMade, setChoiceIsMade] =useState<boolean>(false);


  useEffect(() => {
    if (words.length > 0) setCardsToReview([...words]);
  }, [words]);
  // setCardsToReview((prev) => [...prev.slice(1)])}
  //setCardsToReview((prev) => [...prev.slice(1), prev[0]])
  console.log("cardsToReview", cardsToReview);

  const handleArticleCheck = (article: VocabEntry["article"]) => {
    setChoiceIsMade(true);
    if(article === cardsToReview[0].article) {
      console.log("correct");
      // set a correct class 
      // remove from words to review
    } else {
      //set an incorrect class
      // return to words to review
      console.log("incorrect");
    }
  }
  const secondsAsc = [...Array(TIME_TO_GUESS / 1000)].map((_, idx) => <span key={idx} data-second={idx + 1}>{idx + 1}</span>);
  const secondsDesc = [...secondsAsc].reverse();
// timer: timer needs the duration, and what to do whe ntime is up.
// if the user has answered, pause to show wrong and right via style, if no answer, pause to show correct.
// reset with next word. 
  return (
    <>
      <h2>Article Speed Round</h2>
      <p>
        You have {TIME_TO_GUESS / 1000} seconds to choose the correct article.
      </p>
      <p>{secondsDesc}</p>
      <section className={classes.articleGame}>
        <div className={classes.gameCard}>
          <div className={classes.gameArticle}>
            <button onClick={()=>handleArticleCheck('der')} disabled={choiceIsMade}>der</button> <button  onClick={()=>handleArticleCheck('die')}  disabled={choiceIsMade}>die</button> <button  onClick={()=>handleArticleCheck('das')}  disabled={choiceIsMade}>das</button>
          </div>
          <div className={classes.gameWord}>
            <h3>{cardsToReview[0]?.noun  } </h3> 
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleGame;
