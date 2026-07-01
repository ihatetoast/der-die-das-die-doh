import type { VocabEntry } from "../types";

export const TEST_VOCAB: VocabEntry[] = [
  {
    id: 1000001,
    eng: "time",
    article: "die",
    noun: "Zeit",
    plural: "die Zeiten",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherEngDefinitions: "term, period",
      miscNote:
        "Other words: Jahreszeit (season), Mahlzeit (meal time), Freizeit (free time), Arbeitszeit (working hours), Schlafenszeit (bedtime)",
    },
    sentences: [
      {
        de: "Andere Zeiten, andere Sitten.",
        en: "Other times, other manners. / Times change, and customs change with them.",
        case: "nom",
      },
      {
        de: "Es ist nur eine Frage der Zeit.",
        en: "It is merely a matter of time.",
        case: "gen",
      },
    ],
    themes: ["time"],
    completed: true,
  },
  {
    id: 1000002,
    eng: "hand",
    article: "die",
    noun: "Hand",
    plural: "die Hände",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {},
    sentences: [
      {
        de: "Mir sind die Hände in Unschuld.",
        en: "I wash my hands of it",
        case: "nom",
      },
      {
        de: "Sie leben von der Hand in den Mund.",
        en: "They live from hand to mouth.",
        case: "dat",
      },
    ],
    themes: ["body"],
    completed: true,
  },
  {
    id: 1000004,
    eng: "day",
    article: "der",
    noun: "Tag",
    plural: "die Tage",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {},
    sentences: [
      {
        de: "Der Tag fängt gerade erst an, und ich bin schon erschöpt.",
        en: "The day just started, but I'm already exhausted.",
        case: "nom",
      },
      {
        de: "In den nächsten Tagen habe ich viel zu tun.",
        en: "In the next days, I (will) have a lot to do.",
        case: "dat",
      },
    ],
    themes: ["time"],
    completed: true,
  },
  {
    id: 10000024,
    eng: "boy",
    article: "der",
    noun: "Junge",
    plural: "die Jungen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "Masculine nouns of people or animals that end in -e are often weak.",
      miscNote:
        "Other words: Bäckerjunge (baker's boy ~ apprentice), Gassenjungen (raggamuffin), Strichjunge (hustler, male sex worker).",
    },
    sentences: [
      {
        de: "Der Junge trinkt Mineralwasser.",
        en: "The boy drinks mineral water.",
        case: "nom",
      },
      {
        de: "Ich sehen den Jungen.",
        en: "I see the boy.",
        case: "acc",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 10000030,
    eng: "moment",
    article: "der",
    noun: "Moment",
    plural: "die Momente",
    hasNoPlural: false,
    weakMasculine: false,
    notes: { genderNote: "Words ending in -ent are often masculine." },
    sentences: [
      {
        de: "Hast du einen Moment Zeit?",
        en: "Do you have a minute (moment)?",
        case: "acc",
      },
      {
        de: "Das Telefon funktioniert im Moment nicht.",
        en: "The telephone is out of order at the moment.",
        case: "dat",
      },
    ],
    themes: ["time"],
    completed: true,
  },

  {
    id: 10000033,
    eng: "water",
    article: "das",
    noun: "Wasser",
    plural: "die Wasser",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote:
        "Other words: Abwasser (effluent), Badewasser (bathw water), Mineralwasser (mineral water).",
      pluralNote:
        "Usually uncountable, but when referring to different waters or water types, the plural is used. For Example: Die Wasser des Rheins und der Mosel fließen im Frühjahr besonders stark zusammen.",
    },
    sentences: [
      { de: "Das Wasser kocht.", en: "The water's boiling.", case: "nom" },
      {
        de: "Ich trinke nur warmes Wasser.",
        en: "I only drink warm water.",
        case: "acc",
      },
    ],
    themes: ["nature", "food"],
    completed: true,
  },
  {
    id: 10000034,
    eng: "light",
    article: "das",
    noun: "Licht",
    plural: "die Lichter",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote:
        "Other words: Flutlicht (flood light), Bremslicht (stop light, brake light).",
    },
    sentences: [
      {
        de: "Ich mache das Licht aus.",
        en: "I turn off the light",
        case: "acc",
      },
      {
        de: "Alle Lichter sind ausgegangen.",
        en: "All the lights went out.",
        case: "nom",
      },
    ],
    themes: ["nature", "science"],
    completed: true,
  },
  {
    id: 10000069,
    eng: "dock",
    article: "der",
    noun: "Hafen",
    plural: "die Häfen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherEngDefinitions: "harbor, port",
      miscNote:
        "Other words: Flughafen (airport), Freihafen (free port), Ölhafen (oil port), Fährhafen (ferry harbor), and Handelshafen (commercial harbor).",
    },
    sentences: [
      {
        de: "Das Feuerwerk war wie jedes Jahr am Hafen.",
        en: "The fireworks were like every year at the harbor.",
        case: "dat",
      },
      {
        de: "Wann wird die Blockade des Hafens aufgehoben?",
        en: "When will the blockade at the dock be lifted?",
        case: "gen",
      },
    ],
    themes: ["transportation"],
    completed: true,
  },
  {
    id: 10000052,
    eng: "guy",
    article: "der",
    noun: "Typ",
    plural: "die Typen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherGerDefinitions: "der Kerl",
      otherEngDefinitions: "type, character, bloke, model, version",
    },
    sentences: [
      {
        de: "Er ist ein normaler Typ.",
        en: "He is a normal guy.",
        case: "nom",
      },
      {
        de: "Ich war hin und weg von dem Typ",
        en: "I was blown away by the guy.",
        case: "dat",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 10000051,
    eng: "chap",
    article: "der",
    noun: "Kerl",
    plural: "die Kerle",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherEngDefinitions: "guy, fellow, bloke",
      otherGerDefinitions: "der Typ",
      miscNote:
        "Other words: Dreckskerl (scumbag), Lausekerl (rascal), Scheißkerl (shithead).",
    },
    sentences: [
      {
        de: "Er ist der gemeinste Kerl.",
        en: "He is the mneanest guy.",
        case: "nom",
      },
      {
        de: "Ich kenne die Kerle alle.",
        en: "I know all those dudes.",
        case: "acc",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 100000104,
    eng: "blood",
    article: "das",
    noun: "Blut",
    plural: "no plural",
    hasNoPlural: true,
    weakMasculine: false,
    notes: { pluralNote: "There is no plural" },
    sentences: [
      { de: "Ist das Blut?", en: "Is that blood?", case: "nom" },
      {
        de: "Das Lügen liegt ihm im (in dem) Blut.",
        en: "Lying is second nature to him.",
        case: "dat",
      },
    ],
    themes: ["body", "hospital"],
    completed: true,
  },
  {
    id: 1000002188,
    eng: "luggage",
    article: "das",
    noun: "Handgepäck",
    plural: "no plural",
    hasNoPlural: true,
    weakMasculine: false,
    notes: { miscNote: "Usually means carry-on or hand luggage." },
    sentences: [
      {
        de: "Ich reise nur mit Handgepäck.",
        en: "I only travel with carry-on luggage.",
        case: "dat",
      },
      {
        de: "Sie hatte sehr viel Handgepäck.",
        en: "She had a lot of carry-on luggage.",
        case: "acc",
      },
    ],
    themes: ["misc", "travel"],
    completed: true,
  },
  {
    id: 100000151,
    eng: "gentleman",
    article: "der",
    noun: "Herr",
    plural: "die Herren",
    hasNoPlural: false,
    weakMasculine: true,
    notes: { otherEngDefinitions: "sir, lord, gent, mister" },
    sentences: [
      {
        de: "Ich kenne Herrn Becker schon seit drei Jahren.",
        en: "I've known Mr. Becker for three years.",
        case: "acc",
      },
      {
        de: "Herr Dietz ist ein sehr böser Mann.",
        en: "Mr. Dietz is a very bad man.",
        case: "nom",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 10000698,
    eng: "client",
    article: "der",
    noun: "Kunde",
    plural: "die Kunden",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherEngDefinitions: "customer",
      genderNote:
        "Masculine nouns of people or animals that end in -e are often weak.",
    },
    sentences: [
      {
        de: "Der Kunde ist König",
        en: "The customer is always right (The customer is king.)",
        case: "nom",
      },
      {
        de: "Ich habe gerade einen Kunden.",
        en: "I'm with a client",
        case: "acc",
      },
    ],
    themes: ["work"],
    completed: true,
  },
  {
    id: 1000002111,
    eng: "hare",
    article: "der",
    noun: "Hase",
    plural: "die Hasen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "Masculine nouns of people or animals that end in -e are often weak.",
    },
    sentences: [
      {
        de: "Da liegt der Hase im Pfeffer.",
        en: "That's the fly in the ointment! ",
        case: "nom",
      },
      {
        de: "Ich habe meinen Hasen schon gefüttert.",
        en: "I have already fed my rabbit.",
        case: "acc",
      },
    ],
    themes: ["animals"],
    completed: true,
  },
  {
    id: 1000001288,
    eng: "lion",
    article: "der",
    noun: "Löwe",
    plural: "die Löwen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "Masculine nouns of people or animals that end in -e are often weak.",
    },
    sentences: [
      {
        de: "Die Zähne eines Löwen sind scharf.",
        en: "The teeth of a lion are sharp.",
        case: "gen",
      },
      {
        de: "Der Löwe trinkt Wasser.",
        en: "The lion is drinking water.",
        case: "nom",
      },
    ],
    themes: ["animals", "zoo"],
    completed: true,
  },
  {
    id: 2169,
    eng: "nephew",
    article: "der",
    noun: "Neffe",
    plural: "die Neffen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "Masculine nouns of people or animals that end in -e are often weak.",
    },
    sentences: [
      {
        de: "Mein Neffe heißt Tristan.",
        en: "My nephew is named Tristan.",
        case: "nom",
      },
      {
        de: "Meine Schwester hat zwei Söhne, somit habe ich zwei Neffen.",
        en: "My sister has two sons, so I have two nephews.",
        case: "acc",
      },
    ],
    themes: ["people", "family"],
    completed: true,
  },
  {
    id: 1000002424,
    eng: "raven",
    article: "der",
    noun: "Rabe",
    plural: "Raben",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "Masculine nouns of people or animals that end in -e are often weak.",
    },
    sentences: [
      {
        de: "Sprach der Rabe: 'Nimmermehr.'",
        en: "Quoth the raven, 'Nevermore'.",
        case: "nom",
      },
      {
        de: "Raben zeugen keine Tauben",
        en: "Ravens don't lay doves (idiom: A wild goose never laid a tame egg.",
        case: "nom",
      },
    ],
    themes: ["animals"],
    completed: true,
  },
  {
    id: 219,
    eng: "student",
    article: "der",
    noun: "Student",
    plural: "die Studenten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherGerDefinitions: "die Studentin (female)",
      genderNote: "Masculine nouns ending in -and, -ant, -ent are often weak.",
    },
    sentences: [
      { de: "Ich bin Student.", en: "I am a student.", case: "nom" },
      {
        de: "Es ist für jeden Studenten ein tolles Thema.",
        en: "It is a great topic for every student.",
        case: "acc",
      },
    ],
    themes: ["personal", "education"],
    completed: true,
  },
  {
    id: 2429,
    eng: "student",
    article: "die",
    noun: "Studentin",
    plural: "die Studentinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherGerDefinitions: "der Student (male)",
    },
    sentences: [
      {
        de: "Die Studentin heißt Maria.",
        en: "The student is named Maria.",
        case: "nom",
      },
      {
        de: "Ich habe die Studentin gestern gesehen.",
        en: "I saw the student yesterday.",
        case: "acc",
      },
    ],
    themes: ["personal", "education"],
    completed: true,
  },
];
