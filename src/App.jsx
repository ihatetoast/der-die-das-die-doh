import { useState} from 'react';

import WordList from './components/WordList';
import WordCards from './components/WordCards';

import germanyImg from './assets/germany-9522335_640.png';

import { VOCABULARY } from './vocab-data';
// top section will have cards to study but these cards have more information:
// example sentences, so not just a flip and check. maybe options here? learn (full card), practice (flip), and later test?
// KISS first: just load

// bottom section will be just the english words, so the section can hold more. user selects from these.
// this is just frontend, so nothing like storing missed. yet.
// option to filter by theme or not.
// KISS first: just load (and return to this when I have more data)


function App() {
const [wordsToStudy, setWordsToStudy] = useState([]);
const [wordBank, setWordBank] = useState(VOCABULARY);


 function handleSelectWord(id) {
    setWordsToStudy((prevWordsState) => {
      // don't double dip:
      if (prevWordsState.some((word) => word.id === id)) {
        return prevWordsState;
      }

      const word = VOCABULARY.find((word) => word.id === id);
      return [word, ...prevWordsState];
    });
  }

  // jsut get the words right now.
  // fuss about sorting by apha or them or whatever later.
  // fuss about loading more later. Just load and not worry about prev state.



  return (
    <>
      <header className='pt-3 pb-5 md:p6 bg-green-600'>
        <div className='container mx-auto mt-3 text-center text-white'>
          <div className='md:flex gap-x-4 items-center justify-center'>
            <img
              className='h-20 w-20 mx-auto md:md:mx-0 object-contain '
              src={germanyImg}
              alt="map of Germany with the flag's colors"
            />
            <h1 className='text-xl md:text-3xl font-black mb-2'>
              Der Die Das Die ... DOH!
            </h1>
          </div>

          <p className='text-lg md:text-xl opacity-80'>A flashcard app! </p>
          <p className='text-lg md:text-xl opacity-80'>
            Load a stack of cards and pick up to 5 to study
          </p>
        </div>
      </header>
      <main>
        <WordCards title='study stack.' loadingText="Pick 5 words to study:" words={wordsToStudy} />

        <WordList title='Vocab stack:' loadingText="Fetching vocab" words={wordBank} onSelectWord={handleSelectWord}/>

      </main>
    </>
  );
}

export default App;
