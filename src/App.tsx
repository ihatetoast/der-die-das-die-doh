import { useEffect, useState } from "react";

// import { VOCABULARY_COMMON } from "./vocab-data-common.ts";
import { ModeProp, VocabEntry, DeckSize, TestType } from "./types";
import { shuffle } from "./helpers.tsx";

import Header from "./components/UI/Header";
import PracticeBoard from "./components/PracticeBoard.tsx";
import TestBoard from "./components/TestBoard.tsx";
import ModeButton from "./components/UI/ModeButton.tsx";

const TEST_COMPLETE = true; // remove when test board is done

// test file with small rep of types of data
import { TEST_VOCAB } from "./data/vocab-test-data.ts"; // dev with this. remove for major testing.

function App() {
  const [mode, setMode] = useState<ModeProp>("home");
  const [sessionComplete, setSessionComplete] = useState(false); // to assist button display
  const [allShuffledDeck, setAllShuffledDeck] = useState<VocabEntry[]>([]);
  const [deckSize, setDeckSize] = useState<DeckSize | null>(null);
  const [activeDeck, setActiveDeck] = useState<VocabEntry[]>([]);
  const [cardsReviewed, setCardsReviewed] = useState<VocabEntry[]>([]);
  const [testType, setTestType] = useState<TestType | null>(null);
  const deckTooSmall = allShuffledDeck.length < 5;

  useEffect(() => {
    shuffleDeck();
  }, []);

  const handleSetMode = (mode: ModeProp) => {
    // home is a total refresh
    if (mode === "home") {
      shuffleDeck();
      setActiveDeck([]);
      setCardsReviewed([]);
      setDeckSize(null);
      setTestType(null);
      setSessionComplete(false);
    }
    // reset the sesh
    if (mode === "practice" || mode === "test") {
      setSessionComplete(false);
    }
    setMode(mode);
  };

  const handleSessionComplete = () => {
    setSessionComplete(true);
  };

  // this has one job: handle the start. Only called at start or after total refresh.
  const handleGetInitialActiveDeck = (size: DeckSize, testType?: TestType) => {
    setDeckSize(size);
    let deck: VocabEntry[];
    if (testType === "weak-masc") {
      const weakPercentage = Math.floor(Math.random() * 76) + 25; // 25-100%
      const weakCount = Math.ceil(size * (weakPercentage / 100));

      const weakNouns = allShuffledDeck.filter((n) => n.weakMasculine);
      const otherNouns = allShuffledDeck.filter((n) => !n.weakMasculine);

      const remaining = size - weakCount;

      const maxWeak = Math.min(weakCount, weakNouns.length);
      const maxOther = Math.min(remaining, otherNouns.length);
      const weakDeck = shuffle(weakNouns).slice(0, maxWeak);
      const otherDeck = shuffle(otherNouns).slice(0, maxOther);

      const finalDeck = shuffle([...weakDeck, ...otherDeck]);

      deck = finalDeck.slice(0, size);
    } else {
      deck = allShuffledDeck.slice(0, size);
    }
    setActiveDeck(deck);
    setCardsReviewed(deck);
  };

  const handleGetTestType = (test: TestType) => {
    setTestType(test);
  };

  // this fn is called after the user has gone through a deck. activedeck is totally reset with new words. all cards updated.
  const handleRefillActiveDeck = (size: DeckSize) => {
    const startIdx = cardsReviewed.length;
    const newDeck = getWrappedSlice(allShuffledDeck, startIdx, size);
    setActiveDeck(newDeck);
    setCardsReviewed((prev) => [...prev, ...newDeck]);
  };

  function getWrappedSlice(
    wordsArr: VocabEntry[],
    startIdx: number,
    count: DeckSize,
  ): VocabEntry[] {
    const len = wordsArr.length;
    startIdx = startIdx % len;

    // first "half"
    const firstWords = wordsArr.slice(startIdx);

    // how many more to get
    const countToFill = count - firstWords.length;

    if (countToFill > 0) {
      const lastWords = wordsArr.slice(0, countToFill);
      return [...firstWords, ...lastWords];
    } else {
      return firstWords.slice(0, count);
    }
  }

  function shuffleDeck() {
    const completedNouns = TEST_VOCAB.filter((noun) => noun.completed === true);
    const shuffled = shuffle(completedNouns);
    setAllShuffledDeck(shuffled);
    // setAllShuffledDeck(shuffled.slice(0, 2)); // to test if i lose all my words.
  }

  return (
    <>
      <Header
        mode={mode}
        onSetMode={handleSetMode}
        deckTooSmall={deckTooSmall}
        sessionComplete={sessionComplete}
      />
      {deckTooSmall && <div>STYLE ME WITH SADNESS LATER</div>}
      <main>
        {!deckTooSmall && mode === "home" && (
          <>
            <div className="images-container">
              <div className="intro-images learn">
                <h2>Learn & Practice</h2>
                <p>
                  Choose "Learn & Practice" to review gender and plural as well
                  as see example sentences and notes about the word.
                </p>
                <div className="mode-image-container">
                  <img
                    src={`${import.meta.env.BASE_URL}practice-view.png`}
                    alt="screenshot of practice mode"
                  />
                </div>
                <ModeButton onClick={handleSetMode} mode="practice" />
              </div>
              <div className="intro-images test">
                <h2>Test</h2>
                <p>
                  Choose "Test" to see what you've learned and what you need to
                  review.
                </p>
                <div className="mode-image-container">
                  <img
                    src={`${import.meta.env.BASE_URL}test-view.png`}
                    alt="screenshot of test mode"
                  />
                </div>
                <ModeButton onClick={handleSetMode} mode="test" />
              </div>
            </div>
          </>
        )}
        {TEST_COMPLETE && mode === "test" && (
          <TestBoard
            words={activeDeck}
            testType={testType}
            handleGetInitialActiveDeck={handleGetInitialActiveDeck}
            handleGetTestType={handleGetTestType}
            handleSetMode={handleSetMode}
            onSessionComplete={handleSessionComplete}
          />
        )}
        {mode === "practice" && (
          <PracticeBoard
            words={activeDeck}
            deckSize={deckSize}
            handleGetInitialActiveDeck={handleGetInitialActiveDeck}
            handleRefillActiveDeck={handleRefillActiveDeck}
            onSessionComplete={handleSessionComplete}
          />
        )}
      </main>
    </>
  );
}

export default App;
