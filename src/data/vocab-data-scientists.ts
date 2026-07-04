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
    notes: {
      otherGerDefinitions: "die Biologin (female)",
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
];
