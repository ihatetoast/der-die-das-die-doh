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
                You'll have a stack of cubes to practice your vocabulary, and
                each side has information about the word:
              </p>
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
                  <span className={classes.example}>
                    {" "}
                    (or a review of the word if there are no notes)
                  </span>
                </li>
              </ul>
              <p>
                Note: For words with a gender pair (eg Journalist → der
                Journalist or die Journalistin), a small badge will appear so
                you know which one you're practicing. We assume that you know a
                female journalist is die and a male journalist is der.
              </p>
              <p>How many words do you want to practice?</p>
              <div className={classes.btnContainer}>
                <button onClick={() => handleInitialDeckChoice(5)}>5</button>
                <button onClick={() => handleInitialDeckChoice(10)}>10</button>
                <button onClick={() => handleInitialDeckChoice(20)}>20</button>
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
                    Remove from deck
                  </button>
                  <button
                    className={classes.warning}
                    onClick={() =>
                      setCardsToReview((prev) => [...prev.slice(1), prev[0]])
                    }
                  >
                    Keep & review
                  </button>
                </div>
              </div>
            </section>
          )}
          {words.length > 0 && cardsToReview.length === 0 && (
            <section>
              <p>
                Way to go. You've gone through the deck and have no cards to
                review. What's next? New deck and another {deckSize} words? Test
                yourself? repeat this deck?
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

                <button onClick={() => handleTestButtonClick("german-full")}>
                  Test me: English to German
                </button>
                <button onClick={() => handleTestButtonClick("ger-eng-mini")}>
                  Test me: German to English
                </button>
                <button onClick={() => handleTestButtonClick("article")}>
                  Test me: Article speed round!
                </button>
              </div>
              <div className={classes.cubePlaceholder}>
                <p>Yay! Deck completed.</p>
              </div>
              <p>
                If you want to completely start over with a clean slate, click
                "Home" in the header.
              </p>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeBoard;
