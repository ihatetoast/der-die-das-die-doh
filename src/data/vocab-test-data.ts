// smaller completed test file. should have examples of all types
// these entries are elsewhere in the main voc data, so remove once done.
// vocab-data-completed and -professions etc will be the main source.
// voc incomplete is where you're working from

import type { VocabEntry } from "../types";

export const TEST_VOCAB: VocabEntry[] = [
  {
    id: 10000000,
    eng: "time",
    article: "die",
    noun: "Zeit",
    plural: "Zeiten",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      miscNote: `Idioms: "Zeit totschlagen" (lit: to beat time to death) — to kill/waste time while waiting \n
        "Kommt Zeit, kommt Rat" (lit. comes time, comes advice) — time will tell\n
        "Andere Zeiten, andere Sitten" (lit. other times; other morals) — Other times, other manners. / Times change, and customs change with them`,
      otherEngDefinitions: "term, period",
      compoundWords:
        "Jahreszeit (season), Mahlzeit (meal time), Freizeit (free time), Arbeitszeit (working hours), Schlafenszeit (bedtime)",
    },
    sentences: [
      {
        de: "Die guten Zeiten sind vorbei.",
        en: "The good times are over.",
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
    id: 10000001,
    eng: "hand",
    article: "die",
    noun: "Hand",
    plural: "Hände",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      compoundWords: `Freihand (freehand or hands-free), Rückhand (backhand)`,
      pluralNote:
        "Feminine nouns that are monosyllabic with a or u often add ¨-e like Kuh/Kühe and Nuss/Nüsse.",
      miscNote: `Idioms: "Hand und Fuß haben" (lit. to have hand and foot) - to make sense. \n "Hand aufs Herz" - hand on heart`,
    },
    sentences: [
      {
        de: "Mir sind die Hände in Unschuld.",
        en: "I wash my hands of it.",
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
    id: 10000002,
    eng: "way",
    article: "der",
    noun: "Weg",
    plural: "Wege",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      pluralNote: `Most masculine nouns take the -e plural form. It's a good bet when in doubt.`,
      compoundWords:
        "Kreuzweg (crossroad), Spazierweg (promenade / pedestrian area / walkway)",
      otherGerDefinitions: "die Richtung, die Methode",
      otherEngDefinitions: "path, route, alley, driveway, land, track",
      miscNote: `Expressions: "den Weg bahnen" (to blaze a trail), "den Weg versperren" (to bar the way) "auf kürzestem Weg" (lit. on the shortest way) - as the crow flies, "ein umsändlicher Weg" (a roundabout way)`,
    },
    sentences: [
      {
        de: "Der Weg zum erfolg ist oft steinig",
        en: "The way to success is often rocky",
        case: "nom",
      },
      {
        de: "Viele Wege führen nach Rom.",
        en: "Many roads lead to Rome.",
        case: "nom",
      },
    ],
    themes: ["misc"],
    completed: true,
  },

  {
    id: 10000003,
    eng: "eye",
    article: "das",
    noun: "Auge",
    plural: "Augen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      pluralNote: `Only a few singular neuter nouns ending with -e take -n plural form: das Auge, die Augen; das Interesse die Interessen.`,
      compoundWords:
        "Glupschauge (bulgy eyes, colloquial), Falkenauge (eagle eye, lit falcon eye)",
      miscNote: `Expressions/idioms: "im Auge behalten - keep an eye on; \n
      "mit einem blauen Auge davonkommen" (lit. to get away with a blue eye) - get off with a slap on the wrist.\n
      "ein Auge zudrücken" (lit. press close an eye) - turn a blind eye`,
    },
    sentences: [
      { de: "Er hat ein blaues Auge", en: "He has a black eye", case: "acc" },
      {
        de: "Bei manchen sind die Augen größer als der Magen.",
        en: "Some have eyes bigger than their stomach.",
        case: "nom",
      },
    ],
    themes: ["body"],
    completed: true,
  },
  {
    id: 10000004,
    eng: "people",
    article: "die",
    noun: "no singular",
    plural: "Leute",
    hasNoPlural: false,
    hasNoSingular: true,
    weakMasculine: false,
    notes: {
      compoundWords: `Arbeitsleute (workmen, laborers), deutsche/französische/thailändische Landsleute (fellow Germans/French/Thais)`,
      pluralNote: "Exists only in plural form.",
      miscNote: `Expressions/idioms: "Kleider machen Leute" (lit. Clothes make the people) - Clothes make the man / Fine feathers make fine birds\n
      "Hinterm Berge wohnen auch Leute" (lit. Behind the mountain live people, too) - You're not the only pebble on the beach`,
    },
    sentences: [
      {
        de: "Mehr als fünftausend Leute waren bei dem Konzert.",
        en: "More than five thousand people were at the concert.",
        case: "nom",
      },
      {
        de: "Niko mag höfliche Leute.",
        en: "Niko likes polite people.",
        case: "acc",
      },
    ],
    themes: ["people"],
    completed: true,
  },
  {
    id: 10000005,
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
      weakMascHint: "Exceptions: add '-n' and not '-en'",
      miscNote: `Expressions/idioms: "Die Kirschen in Nachbars Garten schmecken immer ein bisschen süßer."
      (lit. The cherries in the neighbor's garden always taste a bit sweeter.) -
      The grass is always greener on the other side of the fence.`,
    },
    sentences: [
      {
        de: "Thomas ist mein directer Nachbar.",
        en: "Thomas is my nextdoor neighbor.",
        case: "nom",
      },
      {
        de: "Er fährt selbst zum Nachbarn mit dem Auto.",
        en: "He drives himself by car to the neighbor.",
        case: "dat",
      },
    ],
    themes: ["people", "city", "social"],
    completed: true,
  },
  {
    id: 10000006,
    eng: "neighbor",
    article: "die",
    noun: "Nachbarin",
    plural: "Nachbarinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Nachbar",
      plural: "Nachbarn",
    },
    notes: {
      miscNote:
        "Use 'direkt' to mean 'nextdoor': direkte Nachbarin (or direkter Nachbar for the male counterpart).",
    },
    sentences: [
      {
        de: "Das ist der Hund von meiner Nachbarin.",
        en: "That's my neighbor's dog.",
        case: "dat",
      },
      {
        de: "Meine Nachbarin ist Ärztin.",
        en: "My neighbor is a doctor.",
        case: "nom",
      },
    ],
    themes: ["people", "city", "social"],
    completed: true,
  },
  {
    id: 10000007,
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
      {
        de: "Der Käse hatte einen entsetzlichen Geruch.",
        en: "The cheese had a terrible smell.",
        case: "nom",
      },
      {
        de: "Käsesorten werden nach ihrem Wassergehalt in Gruppen wie Frischkäse, Schnittkäse und Hartkäse unterteilt.",
        en: "Cheeses (cheese types) are divided into groups like fresh cheese, sliced cheese and hard cheese based on their water content.",
        case: "nom",
      },
    ],
    themes: ["misc"],
    completed: true,
  },
  {
    id: 10000007,
    eng: "mind",
    article: "der",
    noun: "Verstand",
    plural: "no plural",
    hasNoPlural: true,
    weakMasculine: false,
    notes: {
      miscNote: `"Mancher hat mehr Glück als Verstand" (lit: "Some have more luck than understanding") - Fortune favors fools\n
      "bei klarem Verstand sein" (lit: "to be of clear mind") - To keep/have one's wits about`,
      pluralNote: "Verstand and Sinn, both being for 'mind' have no plural",
      compoundWords:
        "Kunstverstand (art appreciation), Menschenverstand (common sense), Unverstand (lack of judgement).",
    },
    sentences: [
      {
        de: "Hast du den Verstand verloren?",
        en: "Have you lost your mind?",
        case: "acc",
      },
      {
        de: "Es geht über ihren Verstand.",
        en: "It's beyond her grasp.",
        case: "acc",
      },
    ],
    themes: ["misc"],
    completed: true,
  },
  {
    id: 100000033,
    eng: "water",
    article: "das",
    noun: "Wasser",
    plural: "Wasser",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      compoundWords:
        "Abwasser (effluent), Badewasser (bathw water), Mineralwasser (mineral water).",
      pluralNote: `Usually uncountable, but can be made plural in two ways.
      \nDie Wasser: Used in a formal or poetic way to mean large bodies of water, oceans, or seas (like the English "waters") and found in set phrases, such as "mit allen Wassern gewaschen" (to be street-smart or cunning).
      \ndie Wässer: Used when talking about different kinds or brands of liquid, medicinal lotions, colognes, or types of schnapps/brandy, and is more common in technical, commercial, or medical contexts when sorting distinct types of fluid
      \nIn test mode, use "Wasser".`,
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
    id: 1000000166,
    eng: "clothes",
    article: "die",
    noun: "Kleidung",
    plural: "Kleidungen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      genderNote: "Words ending in -ung are generally feminine.",
      pluralNote:
        'Kleidung is generally uncountable (likes clothes). "Kleidungen" exists but people generally use "Kleidungsstücke" (items of clothing) or "Kleider" (dresses/clothes).',
    },
    sentences: [
      {
        de: "Wo ist keine Kleidung?.",
        en: "Where are your clothes?",
        case: "nom",
      },
      {
        de: "Meine Kleidung sieht teuer aus.",
        en: "My clothes look expensive.",
        case: "nom",
      },
    ],
    themes: ["personal", "clothing"],
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
];
