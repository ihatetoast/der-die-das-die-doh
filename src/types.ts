export interface Sentence {
  de: string;
  en: string;
  case: 'nom' | 'acc' | 'dat' | 'gen' | '';
}
export type ArticleType = 'der' | 'die' | 'das';
export interface VocabEntry {
  id: number;
  eng: string;
  article: ArticleType;
  noun: string;
  plural: string;
  hasNoPlural: boolean; // for things like blood. and remove notes about no plural
  weakMasculine: boolean;
  notes: NotesType;
  sentences: Sentence[];
  completed: boolean;
  // theme: 'airport' | 'animals' | 'body' | 'house' | 'family' | 'misc';
}
// add theme as you reorg data. using text books you've bought
// consider using completed: true; to find what are done to add them to new file so incompleted are not even seen.
// keep completed as a bool for that and in case you change your mind about a sentence or whatever, you can prevent
// it from being chosen while it's being edited.
// fill in with others until red squiggles disappear
type NotesType = {
  otherEngDefinitions?: string;
  otherGerDefinitions?: string;
  pluralNote?: string;
  miscNote?: string;
  genderNote?: string;
  weakMascNote?: string;
  genitiveNote?: string;
};

export type ModeProp = 'practice' | 'test' | 'home';
// controlling decksize until I have >500 completed: true. egads
export type DeckSize = 5 | 10 | 20 | 25 | 50;

export type MiniTestType = 'eng-ger-mini' | 'ger-eng-mini';
export type TestType =
  | 'article'
  | 'plural'
  | 'german-full'
  | MiniTestType
  | 'weak-masc';

export type AnswerState = 'waiting' | 'skipped' | 'correct' | 'incorrect';

export type GameState = 'waiting' | 'active' | 'over';

export type HintState = null | 'scrambled' | 'revealed';

export type WeakMascAnswer = 'yes' | 'no' | 'not-masc';

export type GameProps = {
  words: VocabEntry[];
  handleSetMode: (value: ModeProp) => void;
};
