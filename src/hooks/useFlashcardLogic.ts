import { useState, useEffect } from 'react';
import { scramble } from '../helpers';
import { VocabEntry, AnswerState, HintState, GameState } from '../types';
export function useFlashcardLogic(words: VocabEntry[]) {
  // todo move shared logic here
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [userInputNoun, setUserInputNoun] = useState<string>('');
  const [hint, setHint] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [testState, setTestState] = useState<GameState>('waiting');
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');

  const [hintState, setHintState] = useState<HintState>(null);

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  useEffect(() => {
    if (hintState === 'scrambled') {
      setHint(scramble(targetWord));
    }

    useEffect(() => {
      if (cardsToTest.length === 0 && testState === 'active') {
        setTestState('over');
      }
    }, [cardsToTest, testState]);

    if (hintState === 'revealed') {
      // give user a chance to see the answer
      setTimeout(() => {
        setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        setHintState(null); // Reset for next word
        setUserInputNoun('');
        setAnswerState('waiting');
      }, 3000);
    }
  }, [hintState, targetWord]);

  return {
    cardsToTest,
    setCardsToTest,
    userInputNoun,
    setUserInputNoun,
    answerState,
    setAnswerState,
    hint,
    setHint,
    hintState,
    setHintState,
    testState,
    setTestState,
    message,
    setMessage,
  };
}
