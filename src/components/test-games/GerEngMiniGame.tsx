
import React from 'react';
import { VocabEntry } from '../types';

import classes from './GerEngMiniGame.module.css';

type GerEngMiniGameProps = {
  words: VocabEntry[];
};

const GerEngMiniGame = ({ words }: GerEngMiniGameProps) => {
  console.log('words in ger to eng mini game', words);
  return (
    <>
      <h2>Flashcards Mini: German to English</h2>
      <p>You're given a word in German. Please supply the English word.
      </p>
      <p>If you need help, click "Hint" to get the letters needed.</p>
      <section className={classes.gerEngMiniGame}>game here</section>
    </>
  );
};

export default GerEngMiniGame;
