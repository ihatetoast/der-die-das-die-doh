import { useEffect, useState } from 'react';

import { VOCABULARY_COMMON } from './vocab-data-common.ts';
import { ModeProp, VocabEntry, DeckSize } from './types';
import { shuffle } from './helpers.tsx';

import Header from './components/UI/Header';
import PracticeBoard from './components/PracticeBoard.tsx';
import TestBoard from './components/TestBoard.tsx';

function App() {
  const [mode, setMode] = useState<ModeProp>('home');
  const [allShuffledDeck, setAllShuffledDeck] = useState<VocabEntry[]>([]);
  const [activeDeck, setActiveDeck] = useState<VocabEntry[]>([]);
  const [cardsReviewedTotal, setCardReviewedTotal] = useState<number>(0);
  const showBoards = mode !== 'home';
console.log("number of possible words: ", allShuffledDeck.length);
  useEffect(() => {
    shuffleDeck();
  }, []);

  const handleSetMode = (mode: ModeProp) => {
    if (mode === 'home') {
      shuffleDeck();
      setActiveDeck([]);
      setCardReviewedTotal(0);
    }
    setMode(mode);
  };

  const handleGetActiveDeck = (size: DeckSize) => {
    // handle if cardsReviewedTotal = 45 and allShuffledDeck.length = 47 or 
    // cardsReviewedTotal = 45 and allShuffledDeck.length = 50 BUT they're asking for 10 or 20 more
    if(cardsReviewedTotal === allShuffledDeck.length) {
      // if at the end of the deck, reset. 
      setCardReviewedTotal(0);
      setActiveDeck(allShuffledDeck.slice(0, size));
    } else if (cardsReviewedTotal === 0) {
      setActiveDeck(allShuffledDeck.slice(0, size));
    } else {
      setActiveDeck(
        allShuffledDeck.slice(
          cardsReviewedTotal,
          cardsReviewedTotal + size,
        ),
      );
    }
    setCardReviewedTotal((prev) => prev + size);
  };
  // testboard will eventually get either the practice deck or a random deck.
  // practice deck if navigated to from practice.
  // random if test is chosen first.

  function shuffleDeck() {
    const completedNouns = VOCABULARY_COMMON.filter(
      (noun) => noun.completed === true,
    );
    const shuffled = shuffle(completedNouns);
    setAllShuffledDeck(shuffled);
  }
  return (
    <>
      <Header onSetMode={handleSetMode} showButtons={!showBoards} />
      <main>
        {mode === 'home' && (
          <>
            <div className='intro'>
              <p>
                In practice mode, you'll go over the nouns' gender, definition,
                plural form, and see examples in sentences. Save ones that need
                reviewing, and when you feel comfortable testing yourself,
                choose "test".
              </p>
            </div>
            <div>
              <p>
                Eventually screenshots of the look of the test page and the
                practice page for styling.
              </p>
            </div>
          </>
        )}

        {mode === 'test' && <TestBoard words={activeDeck} />}
        {mode === 'practice' && (
          <PracticeBoard
            words={activeDeck}
            handleGetActiveDeck={handleGetActiveDeck}
          />
        )}
      </main>
    </>
  );
}

export default App;
