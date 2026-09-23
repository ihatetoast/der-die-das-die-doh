import { useState, useEffect, useRef } from "react";
import classes from "./PracticeBoard.module.css";
import { VocabEntry, ModeProp, DeckSize, TestType } from "../types.ts";
import LearningCube from "./LearningCube.tsx";

import GermanFullGame from "./test-games/GermanFullGame.tsx";
import MiniGameGerToEng from "./test-games/MiniGameGerToEng.tsx";
import ArticleGame from "./test-games/ArticleGame.tsx";

type Props = {
  words: VocabEntry[];
  deckSize: DeckSize | null;
  testType: TestType | null;
  handleGetInitialActiveDeck: (size: DeckSize) => void;
  handleGetTestType: (test: TestType) => void;
  handleRefillActiveDeck: (size: DeckSize) => void;
  handleSetMode: (value: ModeProp) => void;
  onSessionComplete: () => void;
};

const PracticeBoard = ({
  words,
  deckSize,
  testType,
  handleGetInitialActiveDeck,
  handleGetTestType,
  handleRefillActiveDeck,
  handleSetMode,
  onSessionComplete,
}: Props) => {
  const [cardsToReview, setCardsToReview] = useState<VocabEntry[]>([]);
  // first length (more than one as it has been filled)
  const prevLengthRef = useRef(cardsToReview.length);
  // first effect gets the cards:
  useEffect(() => {
    if (words.length > 0) setCardsToReview([...words]);
  }, [words]);

  useEffect(() => {
    // before was more than 0        but now is 0, so it has moved to 0
    if (prevLengthRef.current > 0 && cardsToReview.length === 0) {
      onSessionComplete();
    }
    // update the ref (the before for the nex ttime there's a comparison)
    prevLengthRef.current = cardsToReview.length;
  }, [onSessionComplete, cardsToReview.length]);

  const handleInitialDeckChoice = (size: DeckSize) => {
    handleGetInitialActiveDeck(size);
  };
  const handleTestButtonClick = (test: TestType) => {
    handleGetTestType(test);
  };

  return (
    <div>
      {testType === "german-full" && (
        <GermanFullGame
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {testType === "ger-eng-mini" && (
        <MiniGameGerToEng
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {testType === "article" && (
        <ArticleGame
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {!testType && (
        <div className={classes.practiceBoard}>
          {words.length === 0 && cardsToReview.length === 0 && (
            <section className={classes.instructions}>
              <h2>Let's practice!</h2>
              <p>
                Choose a deck of words to practice. Each word will be on a cube.
              </p>
              <p>Cube faces:</p>
              <ul>
                <li>
                  <span className={classes.listEmoji}>🇬🇧</span>
                  The English definition
                  <span className={classes.example}> (eg Book)</span>
                </li>
                <li>
                  <span className={classes.listEmoji}>🇩🇪</span>
                  The German definition
                  <span className={classes.example}> (eg Buch)</span>
                </li>
                <li>
                  <span className={classes.listEmoji}>🇩🇪</span>
                  The singular article
                  <span className={classes.example}> (eg das)</span>
                </li>
                <li>
                  <span className={classes.listEmoji}>🇩🇪</span>
                  The plural form
                  <span className={classes.example}> (eg Bücher)</span>
                </li>
                <li>
                  <span className={classes.listEmoji}>🇩🇪</span>
                  Sentences with the word
                </li>
                <li>
                  <span className={classes.listEmoji}>🇩🇪</span>Notes on the word
                </li>
              </ul>
              <p>
                <span className="highlight">Note:</span> For nouns with a gender
                pair (eg Journalist → der Journalist / die Journalistin), a
                badge will let know which one you're targeting.
              </p>
              <div className={classes.deckBox}>
                <p className="center">Pick a deck size: </p>
                <div className={classes.btnContainer}>
                  <button onClick={() => handleInitialDeckChoice(5)}>5</button>
                  <button onClick={() => handleInitialDeckChoice(10)}>
                    10
                  </button>
                  <button onClick={() => handleInitialDeckChoice(20)}>
                    20
                  </button>
                </div>
              </div>
            </section>
          )}
          {cardsToReview.length > 0 && (
            <section className={classes.cubeSection}>
              <LearningCube word={cardsToReview[0]} />
              <div className={classes.reviewInstructions}>
                <div
                  className={`${classes.btnContainer} ${classes.instructionsBtn}`}
                >
                  <button
                    onClick={() =>
                      setCardsToReview((prev) => [...prev.slice(1)])
                    }
                  >
                    Remove
                  </button>
                  <button
                    className={classes.warning}
                    onClick={() =>
                      setCardsToReview((prev) => [...prev.slice(1), prev[0]])
                    }
                  >
                    Review
                  </button>
                </div>
              </div>
            </section>
          )}
          {words.length > 0 && cardsToReview.length === 0 && (
            <section className={classes.reviewComplete}>
              <p>
                w00t. You've gone through the deck and have no cards to review.
                What's next?
              </p>
              <p>Review me:</p>
              <div className={`${classes.btnContainer} ${classes.reviewBtns}`}>
                <button onClick={() => setCardsToReview(words)}>
                  My current deck
                </button>
                {deckSize && (
                  <button onClick={() => handleRefillActiveDeck(deckSize)}>
                    Get {deckSize} new words
                  </button>
                )}
              </div>
              <p>Test me on this deck:</p>
              <div className={`${classes.btnContainer} ${classes.testBtns}`}>
                <button onClick={() => handleTestButtonClick("german-full")}>
                  <span className={classes.mobileBtn}>Eng to Ger</span>
                  <span>English to German</span>
                </button>
                <button onClick={() => handleTestButtonClick("ger-eng-mini")}>
                  <span className={classes.mobileBtn}>Ger to Eng</span>
                  <span>German to English</span>
                </button>
                <button onClick={() => handleTestButtonClick("article")}>
                  <span className={classes.mobileBtn}>Art speed round</span>
                  <span> Article speed round</span>
                </button>
              </div>
              <div className={classes.cubePlaceholder}>
                <p>Yay! Deck completed. replace or size me later.</p>
              </div>
              <p className="center">Totally new deck? Click "Home".</p>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeBoard;
