export interface Sentence {
  de: string;
  en: string;
  case: "nom" | "acc" | "dat" | "gen" | "";
}

export interface VocabEntry {
  id: number;
  eng: string;
  article: 'der' | 'die' | 'das';
  noun: string;
  plural: string;
  weakMasculine: boolean;
  notes: Record<string, string> ;
  sentences: Sentence[];
  completed: boolean;
}

export type ModeProp = 'practice' | 'test' | 'home';

export type DeckSize = 5 | 10 | 20;

export type TestType = 'article' | 'plural' | 'german-full' | 'eng-ger-mini' | 'ger-eng-mini' | 'weak-masc';

export type AnswerState = 'waiting' | 'skipped' | 'correct' | 'incorrect';

export type GameState = 'waiting' | 'active' | 'over';