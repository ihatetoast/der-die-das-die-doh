import React from 'react';
import { VocabEntry } from '../types';

import classes from './GermanFullGame.module.css';

type GermanFullGameProps = {
  words: VocabEntry[];
};

const GermanFullGame = ({ words }: GermanFullGameProps) => {
  console.log('words in german full game', words);
  return (
    <>
      <h2>Flashcards: Full Word Quiz</h2>
      <p>You're given a word in English. Please supply the German word, the correct article, and the word in plural form.
      </p>
      <p>If you need help, click "Hint" to get the letters needed.</p>
      <section className={classes.germanFullGame}>game here</section>
    </>
  );
};

export default GermanFullGame;
