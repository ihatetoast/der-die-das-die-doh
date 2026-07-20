import { ReactElement } from "react";
import { VocabEntry, NoteWithType } from "./types";

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

// fisher-yates again but for shuffling a word
export const scramble = (word: string): string => {
  const wordArr = word.toLowerCase().split("");
  for (let i = wordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = wordArr[i];
    wordArr[i] = wordArr[j];
    wordArr[j] = temp;
  }
  return wordArr.join("");
};

// In practice cube, determine which notes to show
const getPrimaryNote = (word: VocabEntry): NoteWithType[] => {
  const notesToShow: NoteWithType[] = [];

  if (word.weakMasculine && word.notes.weakMascHint) {
    notesToShow.push({ type: "weakMasc", value: word.notes.weakMascHint }); // Always show
  }

  // Random rotation through other notes
  const otherNotes: NoteWithType[] = [
    word.notes.miscNote && { type: "misc", value: word.notes.miscNote },
    word.notes.genderNote && { type: "gender", value: word.notes.genderNote },
    word.notes.pluralNote && { type: "plural", value: word.notes.pluralNote },
    word.notes.genitiveNote && {
      type: "genitive",
      value: word.notes.genitiveNote,
    },
  ].filter(Boolean) as NoteWithType[];

  if (otherNotes.length > 0) {
    notesToShow.push(otherNotes[Math.floor(Math.random() * otherNotes.length)]);
  }
  return notesToShow;
};

export const getNotesContent = (word: VocabEntry): ReactElement => {
  const notesToShow = getPrimaryNote(word);
  if (notesToShow.length > 0) {
    return formatNotesWithLabels(notesToShow);
  }

  // if no notes (all should have something but this should cover if not)
  return getDefaultSummary(word);
};

const getDefaultSummary = (word: VocabEntry): ReactElement => {
  return (
    <>
      <p>Whoops! No notes yet for ...</p>
      <dl>
        <dt>the {word.eng}: </dt>
        <dd>
          {word.article} {word.noun}, {word.plural}
        </dd>
      </dl>
    </>
  );
};

const formatNotesWithLabels = (notesToShow: NoteWithType[]): ReactElement => {
  const labels: Record<string, string> = {
    weakMasc: "Weak masculine hint:",
    misc: "Notes:",
    gender: "Gender notes or tips:",
    plural: "Notes on plural:",
    genitive: "Genitive notes:",
  };

  return (
    <div>
      {notesToShow.map((note, idx) => (
        <p key={idx}>
          <strong>{labels[note.type]}</strong> {note.value}
        </p>
      ))}
    </div>
  );
};
