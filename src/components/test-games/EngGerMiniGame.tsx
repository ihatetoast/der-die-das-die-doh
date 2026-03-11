
import React from 'react';
import { VocabEntry } from '../types';

import classes from './EngGerMiniGame.module.css';

type EngGerMiniGameProps = {
  words: VocabEntry[];
};

const EngGerMiniGame = ({ words }: EngGerMiniGameProps) => {
  console.log('words in eng to ger man mini game', words);
  return (
    <>
      <h2>Flashcards Mini: English to German</h2>
      <p>You're given a word in English. Please supply the German word.
      </p>
      <p>If you need help, click "Hint" to get the letters needed.</p>
      <section className={classes.engGerMiniGame}>game here</section>
    </>
  );
};

export default EngGerMiniGame;
