import type { VocabEntry } from "../types";

export const VOCAB_SCIENTISTS: VocabEntry[] = [
  {
    id: 40000,
    eng: "biologist",
    article: "der",
    noun: "Biologe",
    plural: "die Biologen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Biologin",
      plural: "Biologinnen",
    },
    notes: {
      miscNote:
        "The suffix '-loge' comes from the Ancient Greek word *lógos* (doctrine, word, reason) and is the equivalent of '-logist' in English.",
      weakMascHint: "Nouns ending in '-loge'",
    },
    sentences: [
      {
        de: "Der Biologe installierte eine Kamera im Adlerhorst.",
        en: "The biologist installed a camera in the eagle's nest.",
        case: "nom",
      },
      {
        de: "Ich dachte an einen Onkel von mir, einen Biologen, der mich mit ein Mikroskop beschenkt hatte.",
        en: "I was thinking of an uncle of mine, a biologist, who had given me a microscope.",
        case: "acc",
      },
    ],
    themes: ["work", "people", "science", "profession"],
    completed: true,
  },
  {
    id: 40001,
    eng: "biologist",
    article: "die",
    noun: "Biologin",
    plural: "Biologinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Biologe",
      plural: "Biologen",
    },
    notes: {
      miscNote:
        "The suffix '-loge' (male) comes from the Ancient Greek word *lógos* (doctrine, word, reason) and is the equivalent of '-logist' in English.",
    },
    sentences: [
      {
        de: "Die Biologin installierte eine Kamera im Adlerhorst.",
        en: "The biologist installed a camera in the eagle's nest.",
        case: "nom",
      },
      {
        de: "Ich dachte an eine Tante von mir, eine Biologin, die mich mit ein Mikroskop beschenkt hatte.",
        en: "I was thinking of an uncle of mine, a biologist, who had given me a microscope.",
        case: "acc",
      },
    ],
    themes: ["work", "people", "science", "profession"],
    completed: true,
  },
];
