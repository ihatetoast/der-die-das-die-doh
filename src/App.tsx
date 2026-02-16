import { useEffect, useState } from 'react';

import { VOCABULARY_COMMON } from './vocab-data-common.ts';
import { ModeProp, VocabEntry } from './types';
import { shuffle } from './helpers.tsx';

import Header from './components/Header';
import LearningCube from './components/LearningCube.tsx';

function App() {
  const [mode, setMode] = useState<ModeProp>(null);
  const [wordList, setWordList] = useState<VocabEntry[]>([]);

  // there are over 1500 words but only a few have been completed. get those.
  // note: after 100 have been done, give option for 5, 10, 20, 50, 100

  // get them on load.
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
  return (
    <>
      <Header onSetMode={handleSetMode} />
      <main>
        {mode === null && <div className='intro'>
          <p>
            In practice mode, you'll go over the nouns' gender, definition,
            plural form, and see examples in sentences. Save ones that need
            reviewing, and when you feel comfortable testing yourself, choose
            "test".
          </p>
        </div>}
        
        {mode === 'test' && <p>Testing. Show if test mode</p>}
        {mode === 'practice' && wordList[0] && (
          <LearningCube word={wordList[0]} />
        )}
      </main>
    </>
  );
}

export default App;
//https://codepen.io/seanemmel/pen/JdzvzX
