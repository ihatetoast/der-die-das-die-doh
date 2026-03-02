import React from 'react';
import { VocabEntry } from '../types';

import classes from './PluralGame.module.css';

type PluralGameProps = {
  words: VocabEntry[];
};

const PluralGame = ({ words }: PluralGameProps) => {
  console.log('words in plural game', words);
  return (
    <>
      <h2>Plural Quiz</h2>
      <p>Given a Germa singular noun, write its plural in the blank given.
      </p>
      <section className={classes.pluralGame}></section>
    </>
  );
};

export default PluralGame;
