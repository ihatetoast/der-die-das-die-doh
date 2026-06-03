import { useState, useEffect } from 'react';
import { useFlashcardLogic } from '../../hooks/useFlashcardLogic.ts';
import { VocabEntry } from '../../types.ts';

import GameOver from './GameOver.tsx';

import classes from './GermanFullGame.module.css';

type GermanFullGameProps = {
  words: VocabEntry[];
};

const GermanFullGame = ({ words }: GermanFullGameProps) => {
  console.log('words in german full game', words);

    const {
    cardsToTest,
    setCardsToTest,
    userInputNoun,
    setUserInputNoun,
    testState,
    setTestState,
    message,
    setMessage,
    answerState,
    setAnswerState,
  } = useFlashcardLogic(words, 'german-full');

  // structure:
  // English: the Book
  // German: [ das ] [ Buch ], die [ Bücher ]
  // all input fields. message for buch v Buch / bücher v Bücher
  // no hints. this is the test, while the others are quizzes.
  return (
    <>
      <h2>Flashcards: Full Word Test</h2>
      <p>Given a noun in English, please supply the correct German article, translation, and its plural form.
      </p>
      <p>Test is over when all nouns correct (article, translation, plural). No hints in this test.</p>
      <section className={classes.germanFullGame}>game here</section>
    </>
  );
};

export default GermanFullGame;
