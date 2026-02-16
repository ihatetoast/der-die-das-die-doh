import { ReactElement } from 'react';
import { VocabEntry } from './types';

// fisher-yates shuffling
export const shuffle = (arr: VocabEntry[]): VocabEntry[] => {
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};

export const getNotesContent = (word: VocabEntry): ReactElement => {
  if (Object.keys(word.notes).length > 0) {
    return formatNotes(word.notes);
  }
  return getDefaultSummary(word);
};

const getDefaultSummary = (word: VocabEntry): ReactElement => {
  return (
    <dl>
      <dt>the {word.eng}: </dt>
      <dd>
        {word.article} {word.noun}, {word.plural}
      </dd>
    </dl>
  );
};

const formatNotes = (notes: Record<string, string>): ReactElement => {
  return (
    <ul>
      {Object.entries(notes).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>
  );
};
