// smaller completed test file. should have examples of all types
// these entries are elsewhere in the main voc data, so remove once done.
// vocab-data-completed and -professions etc will be the main source.
// voc incomplete is where you're working from

import type { VocabEntry } from "../types";

export const TEST_VOCAB: VocabEntry[] = [
  {
    id: 1000001,
    eng: "time",
    article: "die",
    noun: "Zeit",
    plural: "Zeiten",
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
    plural: "Hände",
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
    plural: "Tage",
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
    plural: "Jungen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
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
    plural: "Momente",
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
    plural: "Wasser",
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
    plural: "Lichter",
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
    plural: "Häfen",
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
    plural: "Typen",
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
    plural: "Kerle",
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
    plural: "Herren",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "An exception to the typical masculine noun pattern in that it adds -n and not -en for accusative, dative, and genitive singular: den/dem/des Herrn.",
      otherEngDefinitions: "sir, lord, gent, mister",
    },
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
    id: 100000698,
    eng: "client",
    article: "der",
    noun: "Kunde",
    plural: "Kunden",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherEngDefinitions: "customer",
      weakMascHint: "Nouns ending in '-e' (people, animals)",
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
    plural: "Hasen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Da liegt der Hase im Pfeffer.",
        en: "That's the fly in the ointment!",
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
    plural: "Löwen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
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
    id: 1000002169,
    eng: "nephew",
    article: "der",
    noun: "Neffe",
    plural: "Neffen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
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
      weakMascHint: "Nouns ending in '-e' (people, animals)",
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
    id: 100000219,
    eng: "student",
    article: "der",
    noun: "Student",
    plural: "Studenten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Studentin",
      plural: "Studentinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
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
    id: 1000002429,
    eng: "student",
    article: "die",
    noun: "Studentin",
    plural: "Studentinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Student", plural: "Studenten" },
    notes: {},
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
  {
    id: 10000036,
    eng: "name",
    article: "der",
    noun: "Name",
    plural: "Namen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      miscNote:
        "Other words: Nachname (last name), Spitzname (nickname), Doppelname (double-barrelled name).",
      weakMascHint:
        "Exceptions: Nouns ending in '-e' but take '-ens' in the genitive singular",
    },
    sentences: [
      { de: "Ich kenne ihren Namen", en: "I know her name", case: "acc" },
      {
        de: "Françoise ist ein französischer Name.",
        en: "Françoise is a French name.",
        case: "nom",
      },
    ],
    themes: ["misc"],
    completed: true,
  },
  {
    id: 10000096,
    eng: "thought",
    article: "der",
    noun: "Gedanke",
    plural: "Gedanken",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      pluralNote: "Usually seen in the plural",
      weakMascHint:
        "Exceptions: Nouns ending in '-e' but take '-ens' in the genitive singular",
    },
    sentences: [
      {
        de: "Das war mein erster Gedanke.",
        en: "That was my first thought.",
        case: "nom",
      },
      {
        de: "Hier war der Wunsch der Vater des Gedankens.",
        en: "Here the wish was the father of the thought.",
        case: "gen",
      },
    ],
    themes: ["personal", "religion"],
    completed: true,
  },
  {
    id: 100000229,
    eng: "will",
    article: "der",
    noun: "Wille",
    plural: "Willen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      pluralNote: "Rarely seen in the plural",
      weakMascHint:
        "Exceptions: Nouns ending in '-e' but take '-ens' in the genitive singular",
    },
    sentences: [
      {
        de: "Haben die Menschen einen freien Willen?",
        en: "Do people have free will?",
        case: "acc",
      },
      {
        de: "Wo ein Wille ist, ist auch ein Weg.",
        en: "Where there's a will, there's a way.",
        case: "nom",
      },
    ],
    themes: ["personal", "religion"],
    completed: true,
  },
  {
    id: 100000252,
    eng: "officer",
    article: "der",
    noun: "Beamte",
    plural: "Beamten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Beamtin", plural: "Beamtinnen" },
    notes: {
      otherEngDefinitions: "civil servant, clerk, appointee, public servant",
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Beamte arbeiten für den Staat.",
        en: "Civil servants work for the state.",
        case: "nom",
      },
      {
        de: "Die Asylbewerberinnen wurden von einem Beamten befragt.",
        en: "The asylum seekers were interviewed by an official.",
        case: "dat",
      },
    ],
    themes: ["profession", "people"],
    completed: true,
  },
  {
    id: 100000357,
    eng: "president",
    article: "der",
    noun: "Präsident",
    plural: "Präsidenten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Präsidentin",
      plural: "Präsidentinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
    },
    sentences: [
      {
        de: "Wo ist der Präsident?",
        en: "Where is the president?",
        case: "nom",
      },
      {
        de: "Mayla ist die Sekretärin des Präsidenten.",
        en: "Mayla is the president's secretary.",
        case: "gen",
      },
    ],
    themes: ["people", "work"],
    completed: true,
  },
  {
    id: 100002120,
    eng: "bear",
    article: "der",
    noun: "Bär",
    plural: "Bären",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Der große Bär frisst Honig.",
        en: "The big bear eats honey.",
        case: "nom",
      },
      {
        de: "Ich habe Angst vor dem Bären.",
        en: "I am afraid of the bear.",
        case: "dat",
      },
    ],
    themes: ["zoo", "animals"],
    completed: true,
  },

  {
    id: 100002219,
    eng: "messenger",
    article: "der",
    noun: "Bote",
    plural: "Boten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Botin",
      plural: "Botinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Man erschlägt den Boten nicht.",
        en: "Don't kill the messener",
        case: "acc",
      },
      {
        de: "Der berittene Bote begehrte Einlass an der Zugbrücke.",
        en: "The mounted messenger requested entry at the drawbridge.",
        case: "nom",
      },
    ],
    themes: ["profession", "people"],
    completed: true,
  },
  {
    id: 100000412,
    eng: "neighbor",
    article: "der",
    noun: "Nachbar",
    plural: "Nachbarn",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Nachbarin",
      plural: "Nachbarinnen",
    },
    notes: {
      miscNote: "Use 'direkt' to mean 'nextdoor': direkter Nachbar.",
      weakMascHint: "Exceptions: add '-n' and not '-en'",
    },
    sentences: [
      {
        de: "Thomas ist mein directer Nachbar.",
        en: "Thomas is my nextdoor neighbour.",
        case: "nom",
      },
      {
        de: "Er fährt selbst zum Nachbarn mit dem Auto.",
        en: "He drives himself by car to the neighbour.",
        case: "dat",
      },
    ],
    themes: ["people", "city", "social"],
    completed: true,
  },
  {
    id: 100000429,
    eng: "agent",
    article: "der",
    noun: "Agent",
    plural: "Agenten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Agentin", plural: "Agentinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
    },
    sentences: [
      {
        de: "Agenten vom FBI haben Vals Haus zwei Wochen lang überwacht.",
        en: "FBI agents staked out Val's house for 2 weeks.",
        case: "nom",
      },
      {
        de: "Wie jeder Agent kann ich meine Quellen nicht preisgeben.",
        en: "Like every agent, I cannot reveal my sources.",
        case: "nom",
      },
    ],
    themes: ["work", "people"],
    completed: true,
  },
  {
    id: 100000440,
    eng: "stranger",
    article: "der",
    noun: "Fremde",
    plural: "Fremden",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      genderNote:
        'Usually male. Although "die Fremde" exists as a female stranger, "die Fremde" usually means "foreign lands or parts".',
      otherEngDefinitions: "non-native, foreigner",
    },
    sentences: [
      {
        de: "Nehmt keine Süßigkeiten von Fremden.",
        en: "Don't take candy from strangers",
        case: "dat",
      },
      {
        de: "Der Fremde schwieg nicht lange.",
        en: "The stranger did not stay silent for long.",
        case: "nom",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 100000455,
    eng: "planet",
    article: "der",
    noun: "Planet",
    plural: "Planeten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: { weakMascHint: "Nouns ending in '-at', '-et', '-ot'" },
    sentences: [
      {
        de: "Die Erde ist ein Planet, kein Stern.",
        en: "The earth is a planet, not a star.",
        case: "nom",
      },
      {
        de: "Ich muss nun auf meinen Planeten zurückkehren.",
        en: "I have to get back to my planet now.",
        case: "acc",
      },
    ],
    themes: ["science"],
    completed: true,
  },
  {
    id: 100000463,
    eng: "human",
    article: "der",
    noun: "Mensch",
    plural: "Menschen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint:
        "Group of nouns with no easy rule to follow such as Bauer, Bär, Held, Herr, Nachbar, & Mensch.",
    },
    sentences: [
      {
        de: "Menschen sind dumme Tiere.",
        en: "Humans are stupid animals",
        case: "nom",
      },
      {
        de: "Niemand mag langweilige Menschen.",
        en: "No one likes boring people.",
        case: "acc",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 100000615,
    eng: "patient",
    article: "der",
    noun: "Patient",
    plural: "Patienten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Patientin",
      plural: "Patientinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
    },
    sentences: [
      {
        de: "Der Patient hatte kein Fieber.",
        en: "The patient had no fever.",
        case: "nom",
      },
      {
        de: "Der Arzt untersucht den Patienten.",
        en: "The doctor examines the patient.",
        case: "acc",
      },
    ],
    themes: ["work", "doctor", "hospital"],
    completed: true,
  },
  {
    id: 100000696,
    eng: "fool",
    article: "der",
    noun: "Narr",
    plural: "Narren",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint:
        "Group of nouns with no easy rule to follow such as Bauer, Bär, Held, Herr, Nachbar, & Mensch.",
    },
    sentences: [
      {
        de: "Die Welt ist voller Narren.",
        en: "The world is full of fools.",
        case: "dat",
      },
      {
        de: "Nur ein Narr macht keine Experimente.",
        en: "Only a fool does't experiment.",
        case: "nom",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  // no genderpair for prince since fem is Prinzessin and not Prinzin
  {
    id: 100000709,
    eng: "prince",
    article: "der",
    noun: "Prinz",
    plural: "Prinzen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      genderNote:
        "The female equivalent is Prinzessin (note the ess), not Prinzin.",
    },
    sentences: [
      {
        de: "Die Prinzessin verliebte sich in den Prinzen.",
        en: "The princess fell in love with the prince",
        case: "acc",
      },
      {
        de: "Der Prinz ist fast hundert Jahre alt.",
        en: "The prince is almost 100 years old.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000000724,
    eng: "faith",
    article: "der",
    noun: "Glaube",
    plural: "no plural",
    hasNoPlural: true,
    weakMasculine: true,
    notes: {
      otherEngDefinitions: "belief, credence, religion, credence",
      weakMascHint:
        "Exceptions: Nouns ending in '-e' but take '-ens' in the genitive singular",
    },
    sentences: [
      {
        de: "Der Glaube an sich selbst ist der erste Schritt zum Erfolg.",
        en: "Belief in oneself is the first step to success.",
        case: "nom",
      },
      {
        de: "Das ist eine Frage des Glaubens.",
        en: "That is a question of belief.",
        case: "gen",
      },
    ],
    themes: ["religion"],
    completed: true,
  },
  {
    id: 1000000797,
    eng: "dragon",
    article: "der",
    noun: "Drache",
    plural: "Drachen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      miscNote: "Careful: dragon - der Drache BUT kite - der Drachen",
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      { de: "Hier sind Drachen!", en: "Here be dragons", case: "nom" },
      {
        de: "Ich kenne eine Geschichte über den Drachen.",
        en: "I know a story about a dragon.",
        case: "acc",
      },
    ],
    themes: ["animals", "fantasy"],
    completed: true,
  },
  {
    id: 1000000802,
    eng: "adult",
    article: "der",
    noun: "Erwachsene",
    plural: "Erwachsenen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      pluralNote:
        "Technically a nominalized adjective, so the ending changes depending on the article that precedes it: die/den/dem/des Erwachsenen but ein Erwachsener (Er ist ein Erwachsener).",
      otherEngDefinitions: "grownup",
    },
    sentences: [
      {
        de: "Auch die Erwachsenen gingen äußerlich ihrem normalen Tagewerk nach.",
        en: "The adults also outwardly went about their normal daily work.",
        case: "nom",
      },
      {
        de: "Ich habe gestern Abend den Erwachsenen nach dem Weg gefragt.",
        en: "I asked the adult for directions yesterday evening.",
        case: "acc",
      },
    ],
    themes: ["people", "family"],
    completed: true,
  },
  {
    id: 1000000817,
    eng: "pilot",
    article: "der",
    noun: "Pilot",
    plural: "Piloten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Pilotin",
      plural: "Pilotinnen",
    },
    notes: { weakMascHint: "Nouns ending in '-at', '-et', '-ot'" },
    sentences: [
      {
        de: "Hier spricht der Pilot.",
        en: "This is your pilot speaking.",
        case: "nom",
      },
      {
        de: "Das ist der schlimmste Albtraum jedes Piloten.",
        en: "This is every pilot's worst nightmare.",
        case: "gen",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000000953,
    eng: "prisoner",
    article: "der",
    noun: "Gefangene",
    plural: "Gefangenen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: { weakMascHint: "Nouns ending in '-e' (people, animals)" },
    sentences: [
      {
        de: "Der gefährlichste Gefangene floh.",
        en: "The most dangerous prisoner escaped.",
        case: "nom",
      },
      {
        de: "Die Wache führte den Gefangenen in seine Zelle.",
        en: "The guard led the prisoner to his cell.",
        case: "acc",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  // NO genderPair because fem is Bäuerin and not Bauerin. more than just in and innen
  {
    id: 1000001028,
    eng: "farmer",
    article: "der",
    noun: "Bauer",
    plural: "Bauern",
    hasNoPlural: false,
    weakMasculine: true,

    notes: {
      genderNote:
        "The female form for farmer is Bäuerin and not Bauerin. Note the ä!",
      weakMascHint:
        "Group of nouns with no easy rule to follow such as Bauer, Bär, Held, Herr, Nachbar, & Mensch.",
    },
    sentences: [
      {
        de: "Er wollte Bauer werden",
        en: "He wanted to become a farmer",
        case: "nom",
      },
      {
        de: "Regen bringt dem Bauern Segen.",
        en: "Rain brings blessings to the farmer",
        case: "dat",
      },
    ],
    themes: ["country", "people", "profession"],
    completed: true,
  },
  {
    id: 1000001056,
    eng: "diamond",
    article: "der",
    noun: "Diamant",
    plural: "Diamanten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
    },
    sentences: [
      {
        de: "Er rannte mit dem Diamanten davon.",
        en: "He ran away with the diamond.",
        case: "nom",
      },
      {
        de: "Wissen Sie, wo Niko den Diamanten gefunden hat?",
        en: "Do you know where Niko found the diamond?",
        case: "acc",
      },
    ],
    themes: ["nature", "science"],
    completed: true,
  },
  {
    id: 100000072,
    eng: "tourist",
    article: "der",
    noun: "Tourist",
    plural: "Touristen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Touristin",
      plural: "Touristinnen",
    },
    notes: {
      genderNote:
        "Masculine nouns ending in -ist representing people are usually weak masculine nouns.",
    },
    sentences: [
      { de: "Ich bin Tourist.", en: "I am a tourist.", case: "nom" },
      {
        de: "Ich habe mit einem Touristen gesprochen.",
        en: "I spoke with a tourist.",
        case: "acc",
      },
    ],
    themes: ["people", "travel"],
    completed: true,
  },
  {
    id: 1000001100,
    eng: "saint",
    article: "der",
    noun: "Heilige",
    plural: "Heiligen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Es gibt keinen Heiligen, der ohne Makel ist.",
        en: "There is no saint without flaw.",
        case: "acc",
      },
      {
        de: "Jeder Heilige hat eine Vergangenheit, und jeder Sünder hat eine Zukunft.",
        en: "Every saint has a past, and every sinner has a future.",
        case: "nom",
      },
    ],
    themes: ["people", "religion"],
    completed: true,
  },
  {
    id: 1000001117,
    eng: "assistant",
    article: "der",
    noun: "Assistent",
    plural: "Assistenten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Assistentin",
      plural: "Assistentinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
    },
    sentences: [
      {
        de: "Ich habe einen Assistenten.",
        en: "I have an assistant.",
        case: "acc",
      },
      {
        de: "Thomas ist mein Assistent",
        en: "Thomas is my assistant.",
        case: "nom",
      },
    ],
    themes: ["work", "profession", "people"],
    completed: true,
  },
  {
    id: 1000001106,
    eng: "commander",
    article: "der",
    noun: "Kommandant",
    plural: "Kommandanten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Kommandantin",
      plural: "Kommandatinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
      miscNote:
        "-ant Words mostly originate from Latin or French and almost always describe people (often professions or roles).",
    },
    sentences: [
      {
        de: "Ein Kommandant darf seinen Untergebenen Befehle erteilen.",
        en: "A commander may give orders to their subordinates.",
        case: "nom",
      },
      {
        de: "Soldaten müssen ihren Kommandanten gehorchen.",
        en: "Soldiers must obey their commanders.",
        case: "acc",
      },
    ],
    themes: ["profession", "people"],
    completed: true,
  },
  {
    id: 1000001134,
    eng: "witness",
    article: "der",
    noun: "Zeuge",
    plural: "Zeugen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      { de: "Es gab einen Zeugen.", en: "There was a witness", case: "acc" },
      {
        de: "Der Richter glaubt dem Zeugen.",
        en: "The judge believes the witness.",
        case: "dat",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 1000001203,
    eng: "idiot",
    article: "der",
    noun: "Idiot",
    plural: "Idioten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-at', '-et', '-ot'",
      otherEngDefinitions: "fool",
    },
    sentences: [
      {
        de: "Du benimmst dich wie ein Idiot.",
        en: "You're acting like a fool.",
        case: "nom",
      },
      {
        de: "Hältst du mich für einen Idioten?",
        en: "Do you think I'm an idiot?",
        case: "acc",
      },
    ],
    themes: ["people"],
    completed: true,
  },

  {
    id: 1000001243,
    eng: "monkey",
    article: "der",
    noun: "Affe",
    plural: "Affen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherEngDefinitions: "ape",
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Der Affe kletterte auf einen Baum.",
        en: "The monkey climbed a tree.",
        case: "nom",
      },
      {
        de: "Ich habe den Affen im Tierpark gesehen.",
        en: "I saw the ape in the zoo.",
        case: "acc",
      },
    ],
    themes: ["animals", "zoo"],
    completed: true,
  },
  {
    id: 1000001304,
    eng: "colleague",
    article: "der",
    noun: "Kollege",
    plural: "Kollegen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Kollegin",
      plural: "Kolleginnen",
    },
    notes: { weakMascHint: "Nouns ending in '-e' (people, animals)" },
    sentences: [
      {
        de: "Der Austausch mit den Kollegen fehlt mir immer mehr.",
        en: "I miss the exchange with my colleagues more and more.",
        case: "dat",
      },
      { de: "Er war mein Kollege.", en: "He was my colleague.", case: "nom" },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000001318,
    eng: "expert",
    article: "der",
    noun: "Experte",
    plural: "Experten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Expertin",
      plural: "Expertinnen",
    },
    notes: { weakMascHint: "Nouns ending in '-e' (people, animals)" },
    sentences: [
      {
        de: "Merten ist ein Experte in seinem Beruf.",
        en: "Merten is an expert in his profession.",
        case: "nom",
      },
      {
        de: "Am besten überlässt man die Reparatur einem Experten.",
        en: "It is best to leave the repair to an expert.",
        case: "dat",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000001398,
    eng: "giant",
    article: "der",
    noun: "Riese",
    plural: "Riesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Riesin",
      plural: "Riesinnen",
    },
    notes: {
      otherEngDefinitions: "colossus, grand",
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Der Boxer war ein Riese, über zwei Meter groß.",
        en: "The boxer was a giant, over two meters tall.",
        case: "nom",
      },
      {
        de: "Die Riesen fraßen die Pilze und die Schlümpfe, die drin waren, gleich mit.",
        en: "The giants ate the mushrooms and the smurfs that were inside.",
        case: "nom",
      },
    ],
    themes: ["people", "fantasy"],
    completed: true,
  },
  {
    id: 1000001530,
    eng: "spark",
    article: "der",
    noun: "Funke",
    plural: "Funken",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint:
        "Exceptions: Nouns ending in '-e' but take '-ens' in the genitive singular",
    },
    sentences: [
      {
        de: "Feuer fängt mit Funken an.",
        en: "Fire starts with sparks.",
        case: "dat",
      },
      {
        de: "Der Funke durchbrannte das Tischtuch.",
        en: "The spark burned through the tablecloth.",
        case: "nom",
      },
    ],
    themes: ["nature"],
    completed: true,
  },
  {
    id: 1000001569,
    eng: "archer",
    article: "der",
    noun: "Bogenschütze",
    plural: "Bogenschützen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint:
        "Group of nouns with no easy rule to follow such as Bauer, Bär, Held, Herr, Nachbar, & Mensch.",
    },
    sentences: [
      {
        de: "In den Armeen des Mittelalters kämpften Speerträger und Bogenschützen.",
        en: "In the armies of the Middle Ages, spear bearers and archers fought.",
        case: "nom",
      },
      {
        de: "Die Schilde schützten die Ritter vor den Pfeilen der Bogenschützen.",
        en: "The shields protected the knights from the arrows of the archers.",
        case: "gen",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000001572,
    eng: "shepherd",
    article: "der",
    noun: "Hirte",
    plural: "Hirten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
    },
    sentences: [
      {
        de: "Der Hirte hütet seine Schafe.",
        en: "The shepherd guards his sheep.",
        case: "nom",
      },
      {
        de: "Ein furchtbar wütend Schrecknis ist der Krieg, die Herde schlägt er und den Hirten.",
        en: "A terribly angry horror is war, it strikes the flock and the shepherd.",
        case: "acc",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },

  {
    id: 1000001609,
    eng: "pirate",
    article: "der",
    noun: "Pirat",
    plural: "Piraten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-at', '-et', '-ot'",
    },
    sentences: [
      {
        de: "Die Piraten vergruben den Schatz in der Erde.",
        en: "The pirates buried their treasure in the ground.",
        case: "nom",
      },
      {
        de: "Schwarzbart war einer der berüchtigtsten Piraten.",
        en: "Blackbeard is one of the most famous pirates.",
        case: "gen",
      },
    ],
    themes: ["people", "profession", "fantasy"],
    completed: true,
  },
  {
    id: 1000001615,
    eng: "elephant",
    article: "der",
    noun: "Elefant",
    plural: "Elefanten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      miscNote:
        "-ant Words mostly originate from Latin or French and almost always describe people (often professions or roles).",
      weakMascHint: "Nouns ending in '-ant', '-and', '-ent'",
    },
    sentences: [
      {
        de: "Ich habe einen Elefanten im Zoo gesehen.",
        en: "I saw an elephant at the zoo.",
        case: "acc",
      },
      {
        de: "Der Elfant heißt Stefan und mag Schokoladeneis",
        en: "The elephant is named Stefan and likes chocolate ice cream.",
        case: "nom",
      },
    ],
    themes: ["zoo", "animals"],
    completed: true,
  },
  {
    id: 1000001634,
    eng: "soldier",
    article: "der",
    noun: "Soldat",
    plural: "Soldaten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Soldatin",
      plural: "Soldatinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-at', '-et', '-ot'",
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
    id: 1000001731,
    eng: "senator",
    article: "der",
    noun: "Senator",
    plural: "Senatoren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Senatorin",
      plural: "Senatorinnen",
    },
    notes: { weakMascHint: "Nouns ending in '-or'" },
    sentences: [
      {
        de: "Der Senator bewahrte in der heftigen Debatte seine Neutralität.",
        en: "The senator maintained his neutrality in the heated debate.",
        case: "nom",
      },
      {
        de: "Die Senatoren werden meine Aktion loben.",
        en: "The senators will praise my action.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000001748,
    eng: "photographer",
    article: "der",
    noun: "Fotograf",
    plural: "Fotografen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Fotografin",
      plural: "Fotografinnen",
    },
    notes: { weakMascHint: "Nouns ending in '-f', '-ph'" },
    sentences: [
      {
        de: "Du bist wirklich ein guter Fotograf.",
        en: "You are a really good photographer.",
        case: "nom",
      },
      {
        de: "Franz ist einer der teuersten Fotografen der Welt.",
        en: "Franz is one of the most expensive photographers in the world.",
        case: "gen",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000001820,
    eng: "satellite",
    article: "der",
    noun: "Satellit",
    plural: "Satelliten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint:
        "Group of nouns with no easy rule to follow such as Bauer, Bär, Held, Herr, Nachbar, & Mensch.",
    },
    sentences: [
      {
        de: "Der Mond ist ein Satellit der Erde.",
        en: "The moon is a satellite of the Earth.",
        case: "nom",
      },
      {
        de: "Das Fernsehsignal kommt vom Satelliten.",
        en: "The TV signal comes from satellites.",
        case: "dat",
      },
    ],
    themes: ["science"],
    completed: true,
  },
  {
    id: 1000001822,
    eng: "puppy",
    article: "der",
    noun: "Welpe",
    plural: "Welpen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: { weakMascHint: "Nouns ending in '-e' (people, animals)" },
    sentences: [
      { de: "Ich liebe Welpen.", en: "I love puppies", case: "acc" },
      {
        de: "Julia wollte ihren Welpen Jetzie nennen.",
        en: "Julia wanted to name her puppy Jetzie.",
        case: "acc",
      },
    ],
    themes: ["animals", "family"],
    completed: true,
  },
  {
    id: 1000001859,
    eng: "ancestor",
    article: "der",
    noun: "Vorfahr",
    plural: "Vorfahren",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint:
        "Group of nouns with no easy rule to follow such as Bauer, Bär, Held, Herr, Nachbar, & Mensch.",
    },
    sentences: [
      {
        de: "Sind Mensch und Affe Abarten eines gemeinsamen Vorfahren?",
        en: "Are humans and apes varieties of a common ancestor?",
        case: "gen",
      },
      {
        de: "Woher kommen eure Vorfahren?",
        en: "Where are your ancestors from?",
        case: "nom",
      },
    ],
    themes: ["people", "family"],
    completed: true,
  },
  {
    id: 1000001874,
    eng: "inspector",
    article: "der",
    noun: "Inspektor",
    plural: "Inspektoren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Inspektorin",
      plural: "Inspektorinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-or'",
    },
    sentences: [
      {
        de: "Der Inspektor hat seine Untersuchung abgeschlossen.",
        en: "The inspector has completed his investigation.",
        case: "nom",
      },
      {
        de: "Der Verdächtige belog den Inspektor.",
        en: "The suspect told a lie to the inspector.",
        case: "acc",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1000001910,
    eng: "elf",
    article: "der",
    noun: "Elf",
    plural: "Elfen",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      weakMascHint: "Nouns ending in '-f', '-ph'",
    },
    sentences: [
      {
        de: "Der Elf hatte spitze Ohren und trug ein grünes Gewand.",
        en: "The elf had pointy ears and wore a green garment.",
        case: "nom",
      },
      {
        de: "Elfen sind die kleinen Helfer des Weihnachtsmannes.",
        en: "Elves are Santa's little helpbers",
        case: "acc",
      },
    ],
    themes: ["fantasy", "people"],
    completed: true,
  },
  {
    id: 1000002440,
    eng: "journalist",
    article: "der",
    noun: "Journalist",
    plural: "Journalisten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Journalistin",
      plural: "Journalistinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-ist'",
    },
    sentences: [
      {
        de: "Es ist von dem Journalisten Michael Wolff",
        en: "It is from the journalist Michael Wolff",
        case: "dat",
      },
      {
        de: "Nach dem Krieg ist er Journalist geworden.",
        en: "After the war, he became a journalist.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },

  {
    id: 10000030001,
    eng: "journalist",
    article: "die",
    noun: "Journalistin",
    plural: "Journalistinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Journalist",
      plural: "Journalisten",
    },
    notes: {},
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
];
