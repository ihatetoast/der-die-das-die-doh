import { useEffect, useState } from 'react';

import { VOCABULARY_COMMON } from './vocab-data-common.ts';
import { ModeProp, VocabEntry } from './types';
import { shuffle } from './helpers.tsx';

import Header from './components/UI/Header';
import PracticeBoard from './components/PracticeBoard.tsx';
import TestBoard from './components/TestBoard.tsx';

function App() {
  const [mode, setMode] = useState<ModeProp>('home');
  const [wordList, setWordList] = useState<VocabEntry[]>([]);

  const showBoards = mode !== 'home';

  useEffect(() => {
    const completedNouns = VOCABULARY_COMMON.filter(
      (noun) => noun.completed === true,
    );
    const shuffled = shuffle(completedNouns);
    setWordList(shuffled);
  }, []);

  const handleSetMode = (mode: ModeProp) => {
    setMode(mode);
  };

  // handleSetDeck. in practice mode,
  // the user will choose 5, 10, or 20 (50 after I fill out 50 nouns in the data)

  // that size and the deck nouns will be known here that after a user picks in practice her decksize and gets her deck,
  // the app can know this for testing later. so handle d

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

        {mode === 'test' && <TestBoard />}
        {mode === 'practice' && wordList.length > 0 && (
          <PracticeBoard words={wordList} />
        )}
      </main>
    </>
  );
}

export default App;
//https://codepen.io/seanemmel/pen/JdzvzX
