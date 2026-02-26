import { useState, useEffect } from 'react';
import classes from './PracticeBoard.module.css';
import { VocabEntry, DeckSize } from '../types.ts';
import LearningCube from './LearningCube.tsx';

type Props = {
  words: VocabEntry[];
  deckSize: DeckSize | null;
  handleGetInitialActiveDeck: (size: DeckSize) => void;
  handleRefillActiveDeck: (size: DeckSize) => void;
};

const PracticeBoard = ({ words,deckSize, handleGetInitialActiveDeck, handleRefillActiveDeck }: Props) => {
  const [cardsToReview, setCardsToReview] = useState<VocabEntry[]>([]);

  useEffect(() => {
    if (words.length > 0) setCardsToReview([...words]);
  }, [words]);

  const handleInitialDeckChoice = (size: DeckSize) => {
    handleGetInitialActiveDeck(size);
  };

  return (
    <div className={classes.practiceBoard}>
      <h2>Let's practice!</h2>
      <p>
        At anytime, you may return to the home page for a complete reset of the
        session (ie you'll get the option for new cards and deck size or change
        to test mode.)
      </p>
      {words.length === 0 && cardsToReview.length === 0 && (
        <section className={classes.instructions}>
          <p>
            You'll have a stack of cubes to practice your vocabulary. Each side
            or face of the cube gives you some information about the word:
          </p>
          <ul>
            <li>
              English <span className={classes.example}>(eg Book)</span>
            </li>
            <li>
              German <span className={classes.example}>(eg Buch)</span>
            </li>
            <li>
              The article (singular){' '}
              <span className={classes.example}>(eg das)</span>
            </li>
            <li>
              Plural <span className={classes.example}>(eg die Bücher)</span>
            </li>
            <li>
              Sentences{' '}
              <span className={classes.example}>
                (eg Ich gebe ihm das Buch. / I give him the book.)
              </span>
            </li>
            <li>
              Notes or review of the word{' '}
              <span className={classes.example}>
                (eg Book, das Buch, die Bücher; or notes if there are any.)
              </span>
            </li>
          </ul>
          <p>Choose the number of words you'd like to practice:</p>
          <div className={classes.btnContainer}>
            <button onClick={() => handleInitialDeckChoice(5)}>5</button>
            <button onClick={() => handleInitialDeckChoice(10)}>10</button>
            <button onClick={() => handleInitialDeckChoice(20)}>20</button>
          </div>
        </section>
      )}
      {cardsToReview.length > 0 && (
        <section className={classes.cubeSection}>
          <div>
            <p>
              Do you feel you know this word or want to review it again after
              going through the deck?
            </p>
            <div className={classes.btnContainer}>
              <button
                onClick={() =>
                  setCardsToReview((prev) => [...prev.slice(1), prev[0]])
                }
              >
                D'oh! I need to review
              </button>
              <button
                onClick={() => setCardsToReview((prev) => [...prev.slice(1)])}
              >
                I got this
              </button>
            </div>
          </div>
          <LearningCube word={cardsToReview[0]} />
        </section>
      )}
      {words.length > 0 && cardsToReview.length === 0 && (
        <section>
          <p>
            Way to go. You've gone through the deck and have no cards to review.
            What's next? New deck and new words? Test yourself? repeat this
            deck? 
          </p>
          <div className={classes.btnContainer}>
            <button onClick={() => setCardsToReview(words)}>
              Review current deck
            </button>
            {deckSize && (
              <button onClick={() => handleRefillActiveDeck(deckSize)}>
                Get {deckSize} new ones!
              </button>
            )}
            <button onClick={() => console.log('go to test page')}>
              Test me on these.
            </button>
          </div>
          <div className={classes.cubePlaceholder}>
            <p>Yay! Deck completed.</p>
          </div>
          <p>
            If you want to completely start over with a clean slate, click "Home" in the header.
          </p>
        </section>
      )}
    </div>
  );
};

export default PracticeBoard;
