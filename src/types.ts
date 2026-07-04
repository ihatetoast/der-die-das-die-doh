export interface Sentence {
  de: string;
  en: string;
  case: "nom" | "acc" | "dat" | "gen" | "";
}
export type ArticleType = "der" | "die" | "das";

// GenderPair is for Student/Studentin NOT Neffe Niechte
export interface GenderPair {
  article: "der" | "die";
  singular: string;
  plural: string;
}
export const WEAKMASCCOMMENTS = [
  "Nouns ending in '-e' (people, animals)",
  "Nouns ending in '-ant', '-and', '-ent''",
  "Nouns ending in '-loge'",
  "Nouns ending in '-ad'",
  "Nouns ending in '-at'",
  "Nouns ending in '-ist'",
  "Exceptions: add '-n' and not '-en'",
  "Exceptions: Nouns ending in '-e' but take '-ens' in the genitive singular",
] as const;
export type WeakMascComment = (typeof WEAKMASCCOMMENTS)[number];

export const THEMES = [
  "airport",
  "animals",
  "art", // eventually add music, studio art, theater and
  "body",
  "buildings",
  "city", // if mostly in a city, then city.
  "clothing",
  "country", // rural farm, not geo political. if mostly rural country, then here and not city
  "doctor",
  "education",
  "environment",
  "family", // can include pets, marriage, divorce
  "finance",
  "food",
  "home",
  "hospital",
  "hotel",
  "nature",
  "office",
  "people",
  "profession",
  "personal", // covers grooming, things in one's desk or private things
  "religion",
  "restaurant",
  "science", // eventually add biology, geology, zoology
  "shopping",
  "social",
  "sport",
  "time",
  "transportation",
  "travel",
  "vehicles",
  "weather",
  "work",
  "zoo", // exotics. no dog cat. also name for zoo, and also zoo keeper
  "misc", // remove when a theme is assigned
] as const;

export type Theme = (typeof THEMES)[number];

export interface VocabEntry {
  id: number;
  eng: string;
  article: ArticleType;
  noun: string;
  plural: string;
  genderPair?: GenderPair;
  hasNoPlural: boolean; // for things like blood. and remove notes about no plural
  weakMasculine: boolean;
  notes: NotesType;
  sentences: Sentence[];
  themes: [Theme, ...Theme[]];
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
  weakMascHint?: WeakMascComment;
  genitiveNote?: string;
};

export type ModeProp = "practice" | "test" | "home";
// controlling decksize until I have >500 completed: true. egads
export type DeckSize = 5 | 10 | 15 | 20 | 25 | 40 | 50;

export type MiniTestType = "eng-ger-mini" | "ger-eng-mini";
export type TestType =
  | "article"
  | "plural"
  | "german-full"
  | MiniTestType
  | "weak-masc";

export type AnswerState = "waiting" | "skipped" | "correct" | "incorrect";

export type GameState = "waiting" | "active" | "over";

export type HintState = null | "scrambled" | "revealed";

export type WeakMascAnswer = "yes" | "no" | "not-masc";

export type GameProps = {
  words: VocabEntry[];
  handleSetMode: (value: ModeProp) => void;
  onSessionComplete: () => void;
};
