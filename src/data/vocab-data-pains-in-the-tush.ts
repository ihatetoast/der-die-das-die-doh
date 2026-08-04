import { VocabEntry } from "../types";
// figure these out later
export const VOCAB_PITAS: VocabEntry[] = [
  {
    id: 1000000,
    eng: "bank",
    article: "die",
    noun: "Bank",
    plural: "Banken",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote: `Some nouns have multiple plurals that mean different things: \n
      die Bank — die Banken (banks), die Bänke (benches)`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 1000001,
    eng: "bench",
    article: "die",
    noun: "Bank",
    plural: "Bänke",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote: `Some nouns have multiple plurals that mean different things: \n
      die Bank — die Banken (banks), die Bänke (benches)`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 1000002,
    eng: "effect",
    article: "der",
    noun: "Effekt",
    plural: "Effekte",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote: `Some nouns have multiple plurals that mean different things: \n
      der Effekt — die Effekte (effects), die Effekten (personal belongings)`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 1000003,
    eng: "effect",
    article: "der",
    noun: "no singular", // handle this. there is no singular here
    plural: "Effekten",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherEngDefinitions: `securities, stocks`,
      pluralNote: "Exists only in plural form.",
      miscNote: `Some nouns have multiple plurals that mean different things: \n
      der Effekt — die Effekte (effects), die Effekten (personal belongings)`,
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  // die Mutter — die Mütter (mothers), die Muttern (nuts, for bolts),
  // Mutter is already in the main list. don't move it. add the alt here later.
  // {
  //   id: 1000004,
  //   eng: "nut",
  //   article: "die",
  //   noun: "Mutter",
  //   plural: "Muttern",
  //   hasNoPlural: false,
  //   weakMasculine: false,
  //   notes: {
  //     otherEngDefinitions: `screw nut`,

  //     miscNote: `Some nouns have multiple plurals that mean different things: \n
  //     die Mutter — die Mütter (mothers), die Muttern (nuts, for bolts)`,
  //   },
  //   sentences: [
  //     { de: "SATZ1", en: "SENTENCE1", case: "nom" },
  //     { de: "SATZ2", en: "SENTENCE2", case: "acc" },
  //   ],
  //   themes: ["misc"],
  //   completed: false,
  // },
];
