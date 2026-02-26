import { useEffect, useState } from 'react';

import { VOCABULARY_COMMON } from './vocab-data-common.ts';
import { ModeProp, VocabEntry, DeckSize } from './types';
import { shuffle } from './helpers.tsx';

import Header from './components/UI/Header';
import PracticeBoard from './components/PracticeBoard.tsx';
import TestBoard from './components/TestBoard.tsx';

const TEST_COMPLETE = false; // remove when test board is done

function App() {
  const [mode, setMode] = useState<ModeProp>('home');
  const [allShuffledDeck, setAllShuffledDeck] = useState<VocabEntry[]>([]);
  const [deckSize, setDeckSize] = useState<DeckSize | null>(null);
  const [activeDeck, setActiveDeck] = useState<VocabEntry[]>([]);
  const [cardsReviewed, setCardsReviewed] = useState<VocabEntry[]>([]);
  const showBoards = mode !== 'home';
  const deckTooSmall = allShuffledDeck.length < 5;

  console.log('number of possible words: ', allShuffledDeck.length);

  useEffect(() => {
    shuffleDeck();
  }, []);

  const handleSetMode = (mode: ModeProp) => {
    // home is a total refresh
    if (mode === 'home') {
      shuffleDeck();
      setActiveDeck([]);
      setCardsReviewed([]);
      setDeckSize(null);
    }
    setMode(mode);
  };

  // this has one job: handle the start. Only called at start or after total refresh.
  const handleGetInitialActiveDeck = (size: DeckSize) => {
    setDeckSize(size);
    const deck = allShuffledDeck.slice(0, size);
    setActiveDeck(deck);
    setCardsReviewed(deck);
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
    const completedNouns = VOCABULARY_COMMON.filter(
      (noun) => noun.completed === true,
    );
    const shuffled = shuffle(completedNouns);
    setAllShuffledDeck(shuffled);
    // setAllShuffledDeck(shuffled.slice(0, 2)); // to test if i lose all my words.
  }
  return (
    <>
      <Header
        onSetMode={handleSetMode}
        showBoardButtons={!showBoards}
        deckTooSmall={deckTooSmall}
        testComplete={TEST_COMPLETE}
      />
      {deckTooSmall && <div>STYLE ME WITH SADNESS LATER</div>}
      <main>
        {!deckTooSmall && mode === 'home' && (
          <>
            <div className='intro'>
              <p>
                Choose "Learn & Study" to review gender and plural as well as
                see example sentences and notes about the word.{' '}
              </p>
              {TEST_COMPLETE ? (
                <p> Choose "Test" to see what you've learned and what you need to review. </p>
              ) : (
                ``
              )}
            </div>
            <div className='intro-images'>
              <div className='image-container'>
                <img
                  src='/practice-view.png'
                  alt="screenshot of practice mode with a cube showing 'English'"
                />
              </div>
            </div>
          </>
        )}
        {TEST_COMPLETE && mode === 'test' && <TestBoard words={activeDeck} />}
        {mode === 'practice' && (
          <PracticeBoard
            words={activeDeck}
            deckSize={deckSize}
            handleGetInitialActiveDeck={handleGetInitialActiveDeck}
            handleRefillActiveDeck={handleRefillActiveDeck}
          />
        )}
      </main>
    </>
  );
}

export default App;
