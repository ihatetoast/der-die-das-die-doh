import type { VocabEntry } from "../types";

export const VOCAB_FOODS: VocabEntry[] = [
  {
    id: 9000,
    eng: "cheese",
    article: "der",
    noun: "Käse",
    plural: "no plural",
    hasNoPlural: true,
    weakMasculine: false,
    notes: {
      pluralNote: `The Germans use a roundabout way to express plurals for some nouns: \n
      der Käse becomes die Käsesorten`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 9001,
    eng: "cabbage",
    article: "der",
    noun: "Kohl",
    plural: "no plural",
    hasNoPlural: true,
    weakMasculine: false,
    notes: {
      pluralNote: `The Germans use a roundabout way to express plurals for some nouns: \n
      der Kohl becomes die Kohlköpfe (cabbage heads)`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 9002,
    eng: "tomato",
    article: "die",
    noun: "Tomate",
    plural: "Tomaten",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote: `Idioms: "Tomaten auf den Augen haben" (lit. to have tomatoes on one's eyes) - to be oblivious to what is going on around you\n`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["food"],
    completed: false,
  },
  {
    id: 9003,
    eng: "milk",
    article: "die",
    noun: "Milch",
    plural: "REPLACE",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["food"],
    completed: false,
  },
];
