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

  const showBoards = mode !== 'home';

  useEffect(() => {
    const completedNouns = VOCABULARY_COMMON.filter(
      (noun) => noun.completed === true,
    );
    const shuffled = shuffle(completedNouns);
    setAllShuffledDeck(shuffled);
  }, []);

  const handleSetMode = (mode: ModeProp) => {
    setMode(mode);
  };

  const handleGetActiveDeck = (size: DeckSize) => {
    setActiveDeck(allShuffledDeck.slice(0, size));
  };
  // testboard will eventually get either the practice deck or a random deck. 
  // practice deck if navigated to from practice. 
  // random if test is chosen first. 

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

        {mode === 'test' && <TestBoard words={activeDeck}/>}
        {mode === 'practice'  && <PracticeBoard words={activeDeck} handleGetActiveDeck={handleGetActiveDeck}/>}
      </main>
    </>
  );
}

export default App;
//https://codepen.io/seanemmel/pen/JdzvzX
