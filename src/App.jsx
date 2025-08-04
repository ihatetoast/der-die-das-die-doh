import Stacks from './components/Stacks';

import germanyImg from './assets/germany-9522335_640.png';
// top section will have cards to study but these cards have more information:
// example sentences, so not just a flip and check. maybe options here? learn (full card), practice (flip), and later test?
// KISS first: just load

// bottom section will be just the english words, so the section can hold more. user selects from these.
// this is just frontend, so nothing like storing missed. yet.
// option to filter by theme or not.
// KISS first: just load (and return to this when I have more data)

function App() {
  return (
    <>
      <header className="pt-3 pb-5 md:p6 bg-green-600">
  <div className="container mx-auto mt-3 text-center text-white">
    <div className="md:flex gap-x-4 items-center justify-center"> 
      <img className="h-20 w-20 mx-auto md:md:mx-0 object-contain " src={germanyImg} alt="map of Germany with the flag's colors" />
      <h1 className="text-xl md:text-3xl font-black mb-2">Der Die Das Die ... DOH!</h1>
      </div>
    

        <p className="text-lg md:text-xl opacity-80">A flashcard app! </p>
        <p className="text-lg md:text-xl opacity-80">Load a stack of cards and pick up to 5 to study</p></div>
      </header>
      <main>
        <Stacks title='study stack. ' />
        <Stacks />
        <Stacks title='main stack. eng word shown' />
        <Stacks />
      </main>
    </>
  );
}

export default App;
