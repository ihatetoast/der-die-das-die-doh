import type { VocabEntry } from "../types";
// except scientists
export const VOCAB_PROFESSIONS: VocabEntry[] = [
  {
    id: 30000,
    eng: "journalist",
    article: "der",
    noun: "Journalist",
    plural: "die Journalisten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderPair: {
        article: "die",
        singular: "Journalistin",
        plural: "die Journalistinnen",
      },
      weakMascNote:
        "Masculine nouns ending in -ist representing people are often weak.",
    },
    sentences: [
      {
        de: "Es ist von dem Journalisten Michael Wolff",
        en: "It is from the journalist Michael Wolff",
        case: "dat",
      },
      {
        de: "Nach dem Krieg ist er Journalist geworden. ",
        en: "After the war, he became a journalist.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 30001,
    eng: "journalist",
    article: "die",
    noun: "Journalistin",
    plural: "die Journalistinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      genderPair: {
        article: "der",
        singular: "Journalist",
        plural: "die Journalisten",
      },
    },
    sentences: [
      {
        de: "Tina Hassel ist eine bekannte Journalistin.",
        en: "Tina Hassel is a well-known journalist.",
        case: "nom",
      },
      {
        de: "Damit ist er ein Vorbild für viele Journalistinnen und Journalisten.",
        en: "That makes him a role model for many female and male journalists.",
        case: "acc",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },

  {
    id: 30002,
    eng: "soldier",
    article: "der",
    noun: "Soldat",
    plural: "die Soldaten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderPair: {
        article: "die",
        singular: "Soldatin",
        plural: "die Soldatinnen",
      },
      weakMascNote:
        "Masculine nouns ending in -at that represent people are often weak.",
    },
    sentences: [
      {
        de: "Der Soldat wurde offiziell für tot erklärt.",
        en: "The soldier was officially declared dead.",
        case: "nom",
      },
      {
        de: "Er schoss einen Pfeil auf den Soldaten.",
        en: "He shot an arrow at the soldier.",
        case: "acc",
      },
    ],
    themes: ["people", "work"],
    completed: true,
  },
  {
    id: 30003,
    eng: "soldier",
    article: "die",
    noun: "Soldatin",
    plural: "die Soldatinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherGerDefinitions: "der Soldat (male)",
    },
    sentences: [
      {
        de: "Die Soldatin erhielt die Schützenschnur in Gold.",
        en: "The soldier received the protective cord in gold.",
        case: "nom",
      },
      {
        de: "Die Soldatin wurde Lehrerin. ",
        en: "The soldier became a teacher.",
        case: "nom",
      },
    ],
    themes: ["people", "work"],
    completed: true,
  },
];
