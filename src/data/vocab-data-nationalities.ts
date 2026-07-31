import type { VocabEntry } from "../types";
// todo: handle these later because of need for man woman
//  der Chinese (the Chinese man)
// der Russe (the Russian man)
// der Grieche (the Greek man)
// der Türke (the Turkish man)
// idea: note with the instructions that if you feel "man" or "woman" is necessary
// such as Chinese man or British woman, just use Chinese or Briton for ease

// also include info about nationalities like Bosnia and Herz... or antigua and barb...
// while officially they're "citizens of" they tend to go by their zone. bosnian or antiguan.
// address those later

// but look here (https://www.auswaertiges-amt.de/de/service/laender/). if not listed, ok to omit here
// and here https://deutsch.lingolia.com/en/vocabulary/laender-nationalitaeten#a-demonyms-vs-adjectives
export const VOCAB_NATIONALITIES: VocabEntry[] = [
  {
    id: 50000,
    eng: "Frenchman",
    article: "der",
    noun: "Franzose",
    plural: "Franzosen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Französin",
      plural: "Französinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "France is the world's most visited country. French has influenced English more than any other language!",
    },
    sentences: [
      {
        de: "Ein Mann aus Frankreich ist ein Franzose.",
        en: "A man from France is a Frenchman.",
        case: "nom",
      },
      {
        de: "Der Franzose spricht Französisch und Italienisch.",
        en: "The Frenchman speaks French and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51000,
    eng: "Frenchwoman",
    article: "die",
    noun: "Französin",
    plural: "Französinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Franzose",
      plural: "Franzosen",
    },
    notes: {
      miscNote:
        "France is the world's most visited country. French has influenced English more than any other language!",
    },
    sentences: [
      {
        de: "Eine Frau aus Frankreich ist eine Französin.",
        en: "A woman from France is a Frenchwoman.",
        case: "nom",
      },
      {
        de: "Die Französin spricht Französisch und Spanisch.",
        en: "The Frenchwoman speaks French and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50001,
    eng: "Briton",
    article: "der",
    noun: "Brite",
    plural: "Briten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Britin", plural: "Britinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      otherEngDefinitions: "British man",
      miscNote:
        "The UK includes England, Scotland, Wales, and Northern Ireland—each with its own language! Welsh and Scottish Gaelic are official regional languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Großbritannien ist ein Brite.",
        en: "A man from Britain is a Briton.",
        case: "nom",
      },
      {
        de: "Der Brite spricht Englisch und Walisisch.",
        en: "The Briton speaks English and Welsh.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51001,
    eng: "Briton",
    article: "die",
    noun: "Britin",
    plural: "Britinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Brite", plural: "Briten" },
    notes: {
      otherEngDefinitions: "British woman",
      miscNote:
        "The UK includes England, Scotland, Wales, and Northern Ireland—each with its own language! Welsh and Scottish Gaelic are official regional languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Großbritannien ist eine Britin.",
        en: "A woman from Britain is a Briton.",
        case: "nom",
      },
      {
        de: "Die Britin spricht Englisch und Gälisch.",
        en: "The Briton speaks English and Gaelic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50002,
    eng: "Dane",
    article: "der",
    noun: "Däne",
    plural: "Dänen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Dänin", plural: "Däninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      otherEngDefinitions: "Danish man",
      miscNote:
        "Denmark invented 'hygge'—cozy, warm, intimate moments. The Danes consistently rank as the happiest people in the world!",
    },
    sentences: [
      {
        de: "Ein Mann aus Dänemark ist ein Däne.",
        en: "A man from Denmark is a Dane.",
        case: "nom",
      },
      {
        de: "Der Däne spricht Dänisch und Schwedisch.",
        en: "The Dane speaks Danish and Swedish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51002,
    eng: "Dane",
    article: "die",
    noun: "Dänin",
    plural: "Däninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Däne", plural: "Dänen" },
    notes: {
      otherEngDefinitions: "Danish woman",
      miscNote:
        "Denmark invented 'hygge'—cozy, warm, intimate moments. The Danes consistently rank as the happiest people in the world!",
    },
    sentences: [
      {
        de: "Eine Frau aus Dänemark ist eine Dänin.",
        en: "A woman from Denmark is a Dane.",
        case: "nom",
      },
      {
        de: "Die Dänin spricht Dänisch und Norwegisch.",
        en: "The Dane speaks Danish and Norwegian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50003,
    eng: "Bulgarian",
    article: "der",
    noun: "Bulgare",
    plural: "Bulgaren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Bulgarin", plural: "Bulgarinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Bulgaria uses the Cyrillic alphabet—the only EU country to do so.",
    },
    sentences: [
      {
        de: "Ein Mann aus Bulgarien ist ein Bulgare.",
        en: "A man from Bulgaria is a Bulgarian.",
        case: "nom",
      },
      {
        de: "Der Bulgare spricht Bulgarisch und Englisch.",
        en: "The Bulgarian speaks Bulgarian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51003,
    eng: "Bulgarian",
    article: "die",
    noun: "Bulgarin",
    plural: "Bulgarinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Bulgare", plural: "Bulgaren" },
    notes: {
      miscNote:
        "Bulgaria uses the Cyrillic alphabet—the only EU country to do so.",
    },
    sentences: [
      {
        de: "Eine Frau aus Bulgarien ist eine Bulgarin.",
        en: "A woman from Bulgaria is a Bulgarian.",
        case: "nom",
      },
      {
        de: "Die Bulgarin spricht Bulgarisch und Französisch.",
        en: "The Bulgarian speaks Bulgarian and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50004,
    eng: "Chinese",
    article: "der",
    noun: "Chinese",
    plural: "Chinesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Chinesin", plural: "Chinesinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51004,
    eng: "Chinese",
    article: "die",
    noun: "Chinesin",
    plural: "Chinesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Chinese", plural: "Chinesen" },
    notes: {
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50005,
    eng: "Finn",
    article: "der",
    noun: "Finne",
    plural: "Finnen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Finnin", plural: "Finninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Finnish has no grammatical gender—making it refreshingly straightforward!",
    },
    sentences: [
      {
        de: "Ein Mann aus Finnland ist ein Finne.",
        en: "A man from Finland is a Finn.",
        case: "nom",
      },
      {
        de: "Der Finne spricht Finnisch und Schwedisch.",
        en: "The Finn speaks Finnish and Swedish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51005,
    eng: "Finn",
    article: "die",
    noun: "Finnin",
    plural: "Finninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Finne", plural: "Finnen" },
    notes: {
      miscNote:
        "Finnish has no grammatical gender—making it refreshingly straightforward!",
    },
    sentences: [
      {
        de: "Eine Frau aus Finnland ist eine Finnin.",
        en: "A woman from Finland is a Finn.",
        case: "nom",
      },
      {
        de: "Die Finnin spricht Finnisch und Norwegisch.",
        en: "The Finn speaks Finnish and Norwegian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50006,
    eng: "Greek",
    article: "der",
    noun: "Grieche",
    plural: "Griechen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Griechin", plural: "Griechinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51006,
    eng: "Greek",
    article: "die",
    noun: "Griechin",
    plural: "Griechinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Grieche", plural: "Griechen" },
    notes: {
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50007,
    eng: "Irishman",
    article: "der",
    noun: "Ire",
    plural: "Iren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Irin", plural: "Irinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Irish (Gaeilge) is spoken by about 40% of Ireland's population today.",
    },
    sentences: [
      {
        de: "Ein Mann aus Irland ist ein Ire.",
        en: "A man from Ireland is an Irishman.",
        case: "nom",
      },
      {
        de: "Der Ire spricht Irisch und Englisch.",
        en: "The Irishman speaks Irish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51007,
    eng: "Irishwoman",
    article: "die",
    noun: "Irin",
    plural: "Irinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ire", plural: "Iren" },
    notes: {
      miscNote:
        "Irish (Gaeilge) is spoken by about 40% of Ireland's population today.",
    },
    sentences: [
      {
        de: "Eine Frau aus Irland ist eine Irin.",
        en: "A woman from Ireland is an Irishwoman.",
        case: "nom",
      },
      {
        de: "Die Irin spricht Irisch und Deutsch.",
        en: "The Irishwoman speaks Irish and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50008,
    eng: "Pole",
    article: "der",
    noun: "Pole",
    plural: "Polen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Polin", plural: "Polinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Polish has some of the most complex grammar in European languages!",
    },
    sentences: [
      {
        de: "Ein Mann aus Polen ist ein Pole.",
        en: "A man from Poland is a Pole.",
        case: "nom",
      },
      {
        de: "Der Pole spricht Polnisch und Russisch.",
        en: "The Pole speaks Polish and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51008,
    eng: "Pole",
    article: "die",
    noun: "Polin",
    plural: "Polinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Pole", plural: "Polen" },
    notes: {
      miscNote:
        "Polish has some of the most complex grammar in European languages!",
    },
    sentences: [
      {
        de: "Eine Frau aus Polen ist eine Polin.",
        en: "A woman from Poland is a Pole.",
        case: "nom",
      },
      {
        de: "Die Polin spricht Polnisch und Litauisch.",
        en: "The Pole speaks Polish and Lithuanian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50009,
    eng: "Russian",
    article: "der",
    noun: "Russe",
    plural: "Russen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Russin", plural: "Russinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51009,
    eng: "Russian",
    article: "die",
    noun: "Russin",
    plural: "Russinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Russe", plural: "Russen" },
    notes: {
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50010,
    eng: "Scotsman",
    article: "der",
    noun: "Schotte",
    plural: "Schotten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Schottin", plural: "Schottinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Scottish Gaelic (Gàidhlig) is spoken by about 1% of Scotland's population.",
    },
    sentences: [
      {
        de: "Ein Mann aus Schottland ist ein Schotte.",
        en: "A man from Scotland is a Scotsman.",
        case: "nom",
      },
      {
        de: "Der Schotte spricht Schottisch und Englisch.",
        en: "The Scotsman speaks Scottish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51010,
    eng: "Scotswoman",
    article: "die",
    noun: "Schottin",
    plural: "Schottinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Schotte", plural: "Schotten" },
    notes: {
      miscNote:
        "Scottish Gaelic (Gàidhlig) is spoken by about 1% of Scotland's population.",
    },
    sentences: [
      {
        de: "Eine Frau aus Schottland ist eine Schottin.",
        en: "A woman from Scotland is a Scotswoman.",
        case: "nom",
      },
      {
        de: "Die Schottin spricht Schottisch und Spanisch.",
        en: "The Scotswoman speaks Scottish and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50011,
    eng: "Swede",
    article: "der",
    noun: "Schwede",
    plural: "Schweden",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Schwedin", plural: "Swedinnnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Sweden has given the world fika (coffee break culture), Swedish meatballs, and IKEA!",
    },
    sentences: [
      {
        de: "Ein Mann aus Schweden ist ein Schwede.",
        en: "A man from Sweden is a Swede.",
        case: "nom",
      },
      {
        de: "Der Schwede spricht Schwedisch und Norwegisch.",
        en: "The Swede speaks Swedish and Norwegian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51011,
    eng: "Swede",
    article: "die",
    noun: "Schwedin",
    plural: "Swedinnnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Schwede", plural: "Schweden" },
    notes: {
      miscNote:
        "Sweden has given the world fika (coffee break culture), Swedish meatballs, and IKEA!",
    },
    sentences: [
      {
        de: "Eine Frau aus Schweden ist eine Schwedin.",
        en: "A woman from Sweden is a Swede.",
        case: "nom",
      },
      {
        de: "Die Schwedin spricht Schwedisch und Portugiesisch.",
        en: "The Swede speaks Swedish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50012,
    eng: "Turk",
    article: "der",
    noun: "Türke",
    plural: "Türken",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Türkin", plural: "Türkinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51012,
    eng: "Turk",
    article: "die",
    noun: "Türkin",
    plural: "Türkinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Türke", plural: "Türken" },
    notes: {
      miscNote: "PLACEHOLDER - Review for sensitivity & accuracy",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50013,
    eng: "Afghan",
    article: "der",
    noun: "Afghane",
    plural: "Afghanen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Afghanin",
      plural: "Afghanirinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Afghanistan has been a crossroads of cultures for thousands of years. Dari and Pashto are the two main languages spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Afghanistan ist ein Afghane.",
        en: "A man from Afghanistan is an Afghan.",
        case: "nom",
      },
      {
        de: "Der Afghane spricht Dari und Englisch.",
        en: "The Afghan speaks Dari and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51013,
    eng: "Afghan",
    article: "die",
    noun: "Afghanin",
    plural: "Afghanirinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Afghane", plural: "Afghanen" },
    notes: {
      miscNote:
        "Afghanistan has been a crossroads of cultures for thousands of years. Dari and Pashto are the two main languages spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Afghanistan ist eine Afghanin.",
        en: "A woman from Afghanistan is an Afghan.",
        case: "nom",
      },
      {
        de: "Die Afghanin spricht Pashto und Französisch.",
        en: "The Afghan speaks Pashto and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50014,
    eng: "Albanian",
    article: "der",
    noun: "Albaner",
    plural: "Albaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Albanerin",
      plural: "Albanerinnen",
    },
    notes: {
      miscNote:
        "Albanian is the only surviving language of its own language family—it's not related to most European languages!",
    },
    sentences: [
      {
        de: "Ein Mann aus Albanien ist ein Albaner.",
        en: "A man from Albania is an Albanian.",
        case: "nom",
      },
      {
        de: "Der Albaner spricht Albanisch und Italienisch.",
        en: "The Albanian speaks Albanian and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51014,
    eng: "Albanian",
    article: "die",
    noun: "Albanerin",
    plural: "Albanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Albaner", plural: "Albaner" },
    notes: {
      miscNote:
        "Albanian is the only surviving language of its own language family—it's not related to most European languages!",
    },
    sentences: [
      {
        de: "Eine Frau aus Albanien ist eine Albanerin.",
        en: "A woman from Albania is an Albanian.",
        case: "nom",
      },
      {
        de: "Die Albanerin spricht Albanisch und Deutsch.",
        en: "The Albanian speaks Albanian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50015,
    eng: "Algerian",
    article: "der",
    noun: "Algerier",
    plural: "Algerier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Algerierin",
      plural: "Algerierinnen",
    },
    notes: {
      miscNote:
        "Algeria is the largest country in Africa by area. Arabic, French, and Berber (Tamazight) are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Algerien ist ein Algerier.",
        en: "A man from Algeria is an Algerian.",
        case: "nom",
      },
      {
        de: "Der Algerier spricht Arabisch und Französisch.",
        en: "The Algerian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51015,
    eng: "Algerian",
    article: "die",
    noun: "Algerierin",
    plural: "Algerierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Algerier", plural: "Algerier" },
    notes: {
      miscNote:
        "Algeria is the largest country in Africa by area. Arabic, French, and Berber (Tamazight) are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Algerien ist eine Algerierin.",
        en: "A woman from Algeria is an Algerian.",
        case: "nom",
      },
      {
        de: "Die Algerierin spricht Arabisch und Spanisch.",
        en: "The Algerian speaks Arabic and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50016,
    eng: "American",
    article: "der",
    noun: "Amerikaner",
    plural: "Amerikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Amerikanerin",
      plural: "Amerikanerinnen",
    },
    notes: {
      miscNote:
        "The USA is home to over 300 million people and countless regional dialects. Many languages are spoken beyond English!",
    },
    sentences: [
      {
        de: "Ein Mann aus den USA ist ein Amerikaner.",
        en: "A man from the USA is an American.",
        case: "nom",
      },
      {
        de: "Der Amerikaner spricht Englisch und Spanisch.",
        en: "The American speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51016,
    eng: "American",
    article: "die",
    noun: "Amerikanerin",
    plural: "Amerikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Amerikaner",
      plural: "Amerikaner",
    },
    notes: {
      miscNote:
        "The USA is home to over 300 million people and countless regional dialects. Many languages are spoken beyond English!",
    },
    sentences: [
      {
        de: "Eine Frau aus den USA ist eine Amerikanerin.",
        en: "A woman from the USA is an American.",
        case: "nom",
      },
      {
        de: "Die Amerikanerin spricht Englisch und Mandarin.",
        en: "The American speaks English and Mandarin.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50017,
    eng: "Andorran",
    article: "der",
    noun: "Andorraner",
    plural: "Andorraner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Andorranerin",
      plural: "Andorraninnen",
    },
    notes: {
      miscNote:
        "Andorra is a tiny country nestled between France and Spain in the Pyrenees. It has no airports or train stations!",
    },
    sentences: [
      {
        de: "Ein Mann aus Andorra ist ein Andorraner.",
        en: "A man from Andorra is an Andorran.",
        case: "nom",
      },
      {
        de: "Der Andorraner spricht Katalanisch und Französisch.",
        en: "The Andorran speaks Catalan and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51017,
    eng: "Andorran",
    article: "die",
    noun: "Andorranerin",
    plural: "Andorraninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Andorraner",
      plural: "Andorraner",
    },
    notes: {
      miscNote:
        "Andorra is a tiny country nestled between France and Spain in the Pyrenees. It has no airports or train stations!",
    },
    sentences: [
      {
        de: "Eine Frau aus Andorra ist eine Andorranerin.",
        en: "A woman from Andorra is an Andorran.",
        case: "nom",
      },
      {
        de: "Die Andorranerin spricht Katalanisch und Spanisch.",
        en: "The Andorran speaks Catalan and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50018,
    eng: "Angolan",
    article: "der",
    noun: "Angolaner",
    plural: "Angolaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Angolanierin",
      plural: "Angolanerinnen",
    },
    notes: {
      miscNote:
        "Angola is rich in natural resources and has a vibrant music scene. Portuguese is the official language; Bantu languages are also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Angola ist ein Angolaner.",
        en: "A man from Angola is an Angolan.",
        case: "nom",
      },
      {
        de: "Der Angolaner spricht Portugiesisch und Kikongo.",
        en: "The Angolan speaks Portuguese and Kikongo.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51018,
    eng: "Angolan",
    article: "die",
    noun: "Angolanierin",
    plural: "Angolanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Angolaner", plural: "Angolaner" },
    notes: {
      miscNote:
        "Angola is rich in natural resources and has a vibrant music scene. Portuguese is the official language; Bantu languages are also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Angola ist eine Angolanierin.",
        en: "A woman from Angola is an Angolan.",
        case: "nom",
      },
      {
        de: "Die Angolanierin spricht Portugiesisch und Umbundu.",
        en: "The Angolan speaks Portuguese and Umbundu.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50019,
    eng: "Anguillan",
    article: "der",
    noun: "Anguillaner",
    plural: "Anguillaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Anguillanerin",
      plural: "Anguillanerinnen",
    },
    notes: {
      miscNote:
        "Anguilla is a small Caribbean island known for pristine beaches and water sports. English is the official language.",
    },
    sentences: [
      {
        de: "Ein Mann aus Anguilla ist ein Anguillaner.",
        en: "A man from Anguilla is an Anguillan.",
        case: "nom",
      },
      {
        de: "Der Anguillaner spricht Englisch und Kreolisch.",
        en: "The Anguillan speaks English and Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51019,
    eng: "Anguillan",
    article: "die",
    noun: "Anguillanerin",
    plural: "Anguillanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Anguillaner",
      plural: "Anguillaner",
    },
    notes: {
      miscNote:
        "Anguilla is a small Caribbean island known for pristine beaches and water sports. English is the official language.",
    },
    sentences: [
      {
        de: "Eine Frau aus Anguilla ist eine Anguillanerin.",
        en: "A woman from Anguilla is an Anguillan.",
        case: "nom",
      },
      {
        de: "Die Anguillanerin spricht Englisch und Französisch.",
        en: "The Anguillan speaks English and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  //
  // looked up Antigua and Barbuda. and it seems that officially,
  // they'd have the bigger name,
  // individually, they'd have these:
  // Antigua and Barbuda    AntiguanBarbudan    AntiguansBarbudans
  // in German: Antiguaner /-in und BUT the adjective is antiguanisch
  // and for Barbuda, they say Inhaberin/Inwohner von Barbuda or Mensch/Mann/Frau aus ... add as the misc note?
  {
    id: 50020,
    eng: "Antiguan",
    article: "der",
    noun: "Antiguaner",
    plural: "Antiguaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Antiguanerin",
      plural: "Antiguanerinnen",
    },
    notes: {
      miscNote: `Antigua and Barbuda (Antigua und Barbuda) comprises Antigua, Barbuda, and many smaller islands. The English demonym is Antiguan and Barbudan.\n
      The German adjective is antiguanisch. \n
      Although officially they're referred to as Citizens of Antigua and Barbuda, people usually go by the name of the island they're from.`,
    },
    sentences: [
      {
        de: "Ein Mann, der auf Antigua lebt, wird als Antiguaner bezeichnet.",
        en: "A man who lives on Antigua is called an Antiguan.",
        case: "nom",
      },
      {
        de: "Ein Antiguaner spricht Englisch, Spanisch und Kreolisch.",
        en: "An Antiguan speaks English, Spanish, and  Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51020,
    eng: "Antiguan",
    article: "die",
    noun: "Antiguanerin",
    plural: "Antiguanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Antiguaner",
      plural: "Antiguaner",
    },
    notes: {
      miscNote: `Antigua and Barbuda (Antigua und Barbuda) comprises Antigua, Barbuda, and many smaller islands. The English demonym is Antiguan and Barbudan.\n
      Antiguan and Barbudan Creole is natively spoken in Antigua and Barbuda, Saint Kitts and Nevis, Anguilla, Montserrat, and some villages in Dominica.\n
      Antigua has 365 beaches, meaning one for every day of the year.`,
    },
    sentences: [
      {
        de: "Eine Frau, die auf Antigua lebt, wird als Antiguanerin bezeichnet.",
        en: "A woman who lives on Antigua is called an Antiguan.",
        case: "nom",
      },
      {
        de: "Eine Antiguanerin spricht Englisch, Spanisch und Kreolisch.",
        en: "An Antiguan speaks English, Spanish, and  Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50021,
    eng: "Argentine",
    article: "der",
    noun: "Argentinier",
    plural: "Argentinier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Argentinierin",
      plural: "Argentinierinnen",
    },
    notes: {
      miscNote:
        "Argentina is famous for tango dancing, gaucho culture, and incredible beef. Spanish with a distinctive accent is spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Argentinien ist ein Argentinier.",
        en: "A man from Argentina is an Argentine.",
        case: "nom",
      },
      {
        de: "Der Argentinier spricht Spanisch und Italienisch.",
        en: "The Argentine speaks Spanish and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51021,
    eng: "Argentine",
    article: "die",
    noun: "Argentinierin",
    plural: "Argentinierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Argentinier",
      plural: "Argentinier",
    },
    notes: {
      miscNote:
        "Argentina is famous for tango dancing, gaucho culture, and incredible beef. Spanish with a distinctive accent is spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Argentinien ist eine Argentinierin.",
        en: "A woman from Argentina is an Argentine.",
        case: "nom",
      },
      {
        de: "Die Argentinierin spricht Spanisch und Portugiesisch.",
        en: "The Argentine speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50022,
    eng: "Armenian",
    article: "der",
    noun: "Armenier",
    plural: "Armenier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Armenierin",
      plural: "Armenierinnen",
    },
    notes: {
      miscNote:
        "Armenia was the first country to officially adopt Christianity as its state religion in 301 AD. Armenian is written in its own unique alphabet.",
    },
    sentences: [
      {
        de: "Ein Mann aus Armenien ist ein Armenier.",
        en: "A man from Armenia is an Armenian.",
        case: "nom",
      },
      {
        de: "Der Armenier spricht Armenisch und Russisch.",
        en: "The Armenian speaks Armenian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51022,
    eng: "Armenian",
    article: "die",
    noun: "Armenierin",
    plural: "Armenierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Armenier", plural: "Armenier" },
    notes: {
      miscNote:
        "Armenia was the first country to officially adopt Christianity as its state religion in 301 AD. Armenian is written in its own unique alphabet.",
    },
    sentences: [
      {
        de: "Eine Frau aus Armenien ist eine Armenierin.",
        en: "A woman from Armenia is an Armenian.",
        case: "nom",
      },
      {
        de: "Die Armenierin spricht Armenisch und Englisch.",
        en: "The Armenian speaks Armenian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50023,
    eng: "Australian",
    article: "der",
    noun: "Australier",
    plural: "Australier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Australierin",
      plural: "Australierinnen",
    },
    notes: {
      miscNote:
        "Australia is the world's largest island and smallest continent. Aboriginal Australians have the world's oldest continuous culture.",
    },
    sentences: [
      {
        de: "Ein Mann aus Australien ist ein Australier.",
        en: "A man from Australia is an Australian.",
        case: "nom",
      },
      {
        de: "Der Australier spricht Englisch und Mandarin.",
        en: "The Australian speaks English and Mandarin.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51023,
    eng: "Australian",
    article: "die",
    noun: "Australierin",
    plural: "Australierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Australier",
      plural: "Australier",
    },
    notes: {
      miscNote:
        "Australia is the world's largest island and smallest continent. Aboriginal Australians have the world's oldest continuous culture.",
    },
    sentences: [
      {
        de: "Eine Frau aus Australien ist eine Australierin.",
        en: "A woman from Australia is an Australian.",
        case: "nom",
      },
      {
        de: "Die Australierin spricht Englisch und Japanisch.",
        en: "The Australian speaks English and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50024,
    eng: "Austrian",
    article: "der",
    noun: "Österreicher",
    plural: "Österreicher",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Österreicherin",
      plural: "Österreicherinnen",
    },
    notes: {
      miscNote:
        "Austria is landlocked and famous for classical music, skiing, and schnitzel. The Austrian German dialect has its own unique charm!",
    },
    sentences: [
      {
        de: "Ein Mann aus Österreich ist ein Österreicher.",
        en: "A man from Austria is an Austrian.",
        case: "nom",
      },
      {
        de: "Der Österreicher spricht Deutsch und Tschechisch.",
        en: "The Austrian speaks German and Czech.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51024,
    eng: "Austrian",
    article: "die",
    noun: "Österreicherin",
    plural: "Österreicherinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Österreicher",
      plural: "Österreicher",
    },
    notes: {
      miscNote:
        "Austria is landlocked and famous for classical music, skiing, and schnitzel. The Austrian German dialect has its own unique charm!",
    },
    sentences: [
      {
        de: "Eine Frau aus Österreich ist eine Österreicherin.",
        en: "A woman from Austria is an Austrian.",
        case: "nom",
      },
      {
        de: "Die Österreicherin spricht Deutsch und Italienisch.",
        en: "The Austrian speaks German and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50025,
    eng: "Azerbaijani",
    article: "der",
    noun: "Aserbaidschaner",
    plural: "Aserbaidschaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Aserbaidschanerin",
      plural: "Aserbaidschanerinnen",
    },
    notes: {
      miscNote:
        "Azerbaijan sits at the crossroads of Europe and Asia. The country is known for its oil wealth and fire mountains (natural gas fires on hillsides).",
    },
    sentences: [
      {
        de: "Ein Mann aus Aserbaidschan ist ein Aserbaidschaner.",
        en: "A man from Azerbaijan is an Azerbaijani.",
        case: "nom",
      },
      {
        de: "Der Aserbaidschaner spricht Aserbaidschanisch und Russisch.",
        en: "The Azerbaijani speaks Azerbaijani and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51025,
    eng: "Azerbaijani",
    article: "die",
    noun: "Aserbaidschanerin",
    plural: "Aserbaidschanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Aserbaidschaner",
      plural: "Aserbaidschaner",
    },
    notes: {
      miscNote:
        "Azerbaijan sits at the crossroads of Europe and Asia. The country is known for its oil wealth and fire mountains (natural gas fires on hillsides).",
    },
    sentences: [
      {
        de: "Eine Frau aus Aserbaidschan ist eine Aserbaidschanerin.",
        en: "A woman from Azerbaijan is an Azerbaijani.",
        case: "nom",
      },
      {
        de: "Die Aserbaidschanerin spricht Aserbaidschanisch und Englisch.",
        en: "The Azerbaijani speaks Azerbaijani and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50026,
    eng: "Bahamian",
    article: "der",
    noun: "Bahamaer",
    plural: "Bahamaer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bahamaerin",
      plural: "Bahamaerinnen",
    },
    notes: {
      miscNote:
        "The Bahamas is an archipelago of 700+ islands. English is the official language, and the islands are famous for crystal-clear waters.",
    },
    sentences: [
      {
        de: "Ein Mann aus den Bahamas ist ein Bahamaer.",
        en: "A man from the Bahamas is a Bahamian.",
        case: "nom",
      },
      {
        de: "Der Bahamaer spricht Englisch und Französisch.",
        en: "The Bahamian speaks English and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51026,
    eng: "Bahamian",
    article: "die",
    noun: "Bahamaerin",
    plural: "Bahamaerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Bahamaer", plural: "Bahamaer" },
    notes: {
      miscNote:
        "The Bahamas is an archipelago of 700+ islands. English is the official language, and the islands are famous for crystal-clear waters.",
    },
    sentences: [
      {
        de: "Eine Frau aus den Bahamas ist eine Bahamaerin.",
        en: "A woman from the Bahamas is a Bahamian.",
        case: "nom",
      },
      {
        de: "Die Bahamaerin spricht Englisch und Spanisch.",
        en: "The Bahamian speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50027,
    eng: "Bahraini",
    article: "der",
    noun: "Bahrainer",
    plural: "Bahrainer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bahrainerin",
      plural: "Bahrainerinnen",
    },
    notes: {
      miscNote:
        "Bahrain is an island nation in the Persian Gulf. It was one of the first Arab states to discover oil and has a long pearl-diving history.",
    },
    sentences: [
      {
        de: "Ein Mann aus Bahrain ist ein Bahrainer.",
        en: "A man from Bahrain is a Bahraini.",
        case: "nom",
      },
      {
        de: "Der Bahrainer spricht Arabisch und Englisch.",
        en: "The Bahraini speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51027,
    eng: "Bahraini",
    article: "die",
    noun: "Bahrainerin",
    plural: "Bahrainerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Bahrainer", plural: "Bahrainer" },
    notes: {
      miscNote:
        "Bahrain is an island nation in the Persian Gulf. It was one of the first Arab states to discover oil and has a long pearl-diving history.",
    },
    sentences: [
      {
        de: "Eine Frau aus Bahrain ist eine Bahrainerin.",
        en: "A woman from Bahrain is a Bahraini.",
        case: "nom",
      },
      {
        de: "Die Bahrainerin spricht Arabisch und Französisch.",
        en: "The Bahraini speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50028,
    eng: "Bangladeshi",
    article: "der",
    noun: "Bangladescher",
    plural: "Bangladescher",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bangladescherin",
      plural: "Bangladescherinnen",
    },
    notes: {
      miscNote:
        "Bangladesh is one of the world's most densely populated countries. It's the birthplace of the Bengal Renaissance and home to incredible literature and film.",
    },
    sentences: [
      {
        de: "Ein Mann aus Bangladesch ist ein Bangladescher.",
        en: "A man from Bangladesh is a Bangladeshi.",
        case: "nom",
      },
      {
        de: "Der Bangladescher spricht Bengalisch und Englisch.",
        en: "The Bangladeshi speaks Bengali and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51028,
    eng: "Bangladeshi",
    article: "die",
    noun: "Bangladescherin",
    plural: "Bangladescherinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Bangladescher",
      plural: "Bangladescher",
    },
    notes: {
      miscNote:
        "Bangladesh is one of the world's most densely populated countries. It's the birthplace of the Bengal Renaissance and home to incredible literature and film.",
    },
    sentences: [
      {
        de: "Eine Frau aus Bangladesch ist eine Bangladescherin.",
        en: "A woman from Bangladesh is a Bangladeshi.",
        case: "nom",
      },
      {
        de: "Die Bangladescherin spricht Bengalisch und Hindi.",
        en: "The Bangladeshi speaks Bengali and Hindi.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50029,
    eng: "Barbadian",
    article: "der",
    noun: "Barbadier",
    plural: "Barbadier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Barabdierin",
      plural: "Barbadierinnen",
    },
    notes: {
      miscNote:
        "Barbados is a Caribbean island famous for rum, cricket, and calypso music. It's one of the most easterly Caribbean islands.",
    },
    sentences: [
      {
        de: "Ein Mann aus Barbados ist ein Barbadier.",
        en: "A man from Barbados is a Barbadian.",
        case: "nom",
      },
      {
        de: "Der Barbadier spricht Englisch und Kreolisch.",
        en: "The Barbadian speaks English and Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51029,
    eng: "Barbadian",
    article: "die",
    noun: "Barbaderin",
    plural: "Barbaderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Barbadier", plural: "Barbadier" },
    notes: {
      miscNote:
        "Barbados is a Caribbean island famous for rum, cricket, and calypso music. It's one of the most easterly Caribbean islands.",
    },
    sentences: [
      {
        de: "Eine Frau aus Barbados ist eine Barbaderin.",
        en: "A woman from Barbados is a Barbadian.",
        case: "nom",
      },
      {
        de: "Die Barbaderin spricht Englisch und Portugiesisch.",
        en: "The Barbadian speaks English and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50030,
    eng: "Belarusian",
    article: "der",
    noun: "Belarusse",
    plural: "Belarussen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Belarussin",
      plural: "Belarussinen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Belarus is known as 'Europe's last dictatorship.' The country has a rich cultural heritage and beautiful forests.",
    },
    sentences: [
      {
        de: "Ein Mann aus Belarus ist ein Belarusse.",
        en: "A man from Belarus is a Belarusian.",
        case: "nom",
      },
      {
        de: "Der Belarusse spricht Belarussisch und Russisch.",
        en: "The Belarusian speaks Belarusian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51030,
    eng: "Belarusian",
    article: "die",
    noun: "Belarussin",
    plural: "Belarussinen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Belarusse", plural: "Belarussen" },
    notes: {
      miscNote:
        "Belarus is known as 'Europe's last dictatorship.' The country has a rich cultural heritage and beautiful forests.",
    },
    sentences: [
      {
        de: "Eine Frau aus Belarus ist eine Belarussin.",
        en: "A woman from Belarus is a Belarusian.",
        case: "nom",
      },
      {
        de: "Die Belarussin spricht Belarussisch und Polnisch.",
        en: "The Belarusian speaks Belarusian and Polish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50031,
    eng: "Belgian",
    article: "der",
    noun: "Belgier",
    plural: "Belgier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Belgierin",
      plural: "Belgierinnen",
    },
    notes: {
      miscNote:
        "Belgium is home to three official languages: Dutch, French, and German. It's famous for chocolate, waffles, and beer!",
    },
    sentences: [
      {
        de: "Ein Mann aus Belgien ist ein Belgier.",
        en: "A man from Belgium is a Belgian.",
        case: "nom",
      },
      {
        de: "Der Belgier spricht Niederländisch und Französisch.",
        en: "The Belgian speaks Dutch and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51031,
    eng: "Belgian",
    article: "die",
    noun: "Belgierin",
    plural: "Belgierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Belgier", plural: "Belgier" },
    notes: {
      miscNote:
        "Belgium is home to three official languages: Dutch, French, and German. It's famous for chocolate, waffles, and beer!",
    },
    sentences: [
      {
        de: "Eine Frau aus Belgien ist eine Belgierin.",
        en: "A woman from Belgium is a Belgian.",
        case: "nom",
      },
      {
        de: "Die Belgierin spricht Niederländisch und Deutsch.",
        en: "The Belgian speaks Dutch and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50032,
    eng: "Belizean",
    article: "der",
    noun: "Belizer",
    plural: "Belizer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Belizerin",
      plural: "Belizerinnen",
    },
    notes: {
      miscNote:
        "Belize is the only English-speaking country in Central America. It's known for the Great Blue Hole, a massive underwater sinkhole.",
    },
    sentences: [
      {
        de: "Ein Mann aus Belize ist ein Belizer.",
        en: "A man from Belize is a Belizean.",
        case: "nom",
      },
      {
        de: "Der Belizer spricht Englisch und Spanisch.",
        en: "The Belizean speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51032,
    eng: "Belizean",
    article: "die",
    noun: "Belizerin",
    plural: "Belizerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Belizer", plural: "Belizer" },
    notes: {
      miscNote:
        "Belize is the only English-speaking country in Central America. It's known for the Great Blue Hole, a massive underwater sinkhole.",
    },
    sentences: [
      {
        de: "Eine Frau aus Belize ist eine Belizerin.",
        en: "A woman from Belize is a Belizean.",
        case: "nom",
      },
      {
        de: "Die Belizerin spricht Englisch und Garifuna.",
        en: "The Belizean speaks English and Garifuna.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50033,
    eng: "Beninese",
    article: "der",
    noun: "Beniner",
    plural: "Beniner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Beninerin",
      plural: "Beninerinnen",
    },
    notes: {
      miscNote:
        "Benin is a West African country with a rich history of art and storytelling. It's known for its colorful textiles and vibrant markets.",
    },
    sentences: [
      {
        de: "Ein Mann aus Benin ist ein Beniner.",
        en: "A man from Benin is a Beninese.",
        case: "nom",
      },
      {
        de: "Der Beniner spricht Französisch und Yoruba.",
        en: "The Beninese speaks French and Yoruba.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51033,
    eng: "Beninese",
    article: "die",
    noun: "Beninerin",
    plural: "Beninerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Beniner", plural: "Beniner" },
    notes: {
      miscNote:
        "Benin is a West African country with a rich history of art and storytelling. It's known for its colorful textiles and vibrant markets.",
    },
    sentences: [
      {
        de: "Eine Frau aus Benin ist eine Beninerin.",
        en: "A woman from Benin is a Beninese.",
        case: "nom",
      },
      {
        de: "Die Beninerin spricht Französisch und Fon.",
        en: "The Beninese speaks French and Fon.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50034,
    eng: "Bermudian",
    article: "der",
    noun: "Bermudier",
    plural: "Bermudier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bermuderin",
      plural: "Bermuderinnen",
    },
    notes: {
      miscNote:
        "Bermuda is a British Overseas Territory famous for pink sand beaches and as a hurricane-prone area. It has no natural freshwater sources!",
    },
    sentences: [
      {
        de: "Ein Mann aus Bermuda ist ein Bermudier.",
        en: "A man from Bermuda is a Bermudian.",
        case: "nom",
      },
      {
        de: "Der Bermudier spricht Englisch und Portugiesisch.",
        en: "The Bermudian speaks English and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51034,
    eng: "Bermudian",
    article: "die",
    noun: "Bermuderin",
    plural: "Bermuderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Bermudier", plural: "Bermudier" },
    notes: {
      miscNote:
        "Bermuda is a British Overseas Territory famous for pink sand beaches and as a hurricane-prone area. It has no natural freshwater sources!",
    },
    sentences: [
      {
        de: "Eine Frau aus Bermuda ist eine Bermuderin.",
        en: "A woman from Bermuda is a Bermudian.",
        case: "nom",
      },
      {
        de: "Die Bermuderin spricht Englisch und Spanisch.",
        en: "The Bermudian speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50035,
    eng: "Bhutanese",
    article: "der",
    noun: "Bhutaner",
    plural: "Bhutaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bhutanerin",
      plural: "Bhutanerinnen",
    },
    notes: {
      miscNote:
        "Bhutan measures 'Gross National Happiness' instead of GDP. It's one of the world's most isolated countries and a global leader in environmental conservation.",
    },
    sentences: [
      {
        de: "Ein Mann aus Bhutan ist ein Bhutaner.",
        en: "A man from Bhutan is a Bhutanese.",
        case: "nom",
      },
      {
        de: "Der Bhutaner spricht Dzongkha und Englisch.",
        en: "The Bhutanese speaks Dzongkha and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51035,
    eng: "Bhutanese",
    article: "die",
    noun: "Bhutanerin",
    plural: "Bhutanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Bhutaner", plural: "Bhutaner" },
    notes: {
      miscNote:
        "Bhutan measures 'Gross National Happiness' instead of GDP. It's one of the world's most isolated countries and a global leader in environmental conservation.",
    },
    sentences: [
      {
        de: "Eine Frau aus Bhutan ist eine Bhutanerin.",
        en: "A woman from Bhutan is a Bhutanese.",
        case: "nom",
      },
      {
        de: "Die Bhutanerin spricht Dzongkha und Tibetisch.",
        en: "The Bhutanese speaks Dzongkha and Tibetan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50036,
    eng: "Bolivian",
    article: "der",
    noun: "Bolivianer",
    plural: "Bolivianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bolivianerin",
      plural: "Bolivianerinnen",
    },
    notes: {
      miscNote:
        "Bolivia is home to the Uyuni Salt Flat, the world's largest salt flat. The country has incredible biodiversity and indigenous cultures.",
    },
    sentences: [
      {
        de: "Ein Mann aus Bolivien ist ein Bolivianer.",
        en: "A man from Bolivia is a Bolivian.",
        case: "nom",
      },
      {
        de: "Der Bolivianer spricht Spanisch und Quechua.",
        en: "The Bolivian speaks Spanish and Quechua.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51036,
    eng: "Bolivian",
    article: "die",
    noun: "Bolivianerin",
    plural: "Bolivianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Bolivianer",
      plural: "Bolivianer",
    },
    notes: {
      miscNote:
        "Bolivia is home to the Uyuni Salt Flat, the world's largest salt flat. The country has incredible biodiversity and indigenous cultures.",
    },
    sentences: [
      {
        de: "Eine Frau aus Bolivien ist eine Bolivianerin.",
        en: "A woman from Bolivia is a Bolivian.",
        case: "nom",
      },
      {
        de: "Die Bolivianerin spricht Spanisch und Aymara.",
        en: "The Bolivian speaks Spanish and Aymara.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50037,
    eng: "Citizen of Bosnia and Herzegovina",
    article: "der",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51037,
    eng: "Citizen of Bosnia and Herzegovina",
    article: "die",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50038,
    eng: "Motswana",
    article: "der",
    noun: "Motswana",
    plural: "Batswana",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Motswana", plural: "Batswana" },
    notes: {
      miscNote:
        "Botswana uses a unique naming system where 'Motswana' is singular and 'Batswana' is plural. The country is famous for the Kalahari Desert and safari tourism.",
    },
    sentences: [
      {
        de: "Ein Mann aus Botswana ist ein Motswana.",
        en: "A man from Botswana is a Motswana.",
        case: "nom",
      },
      {
        de: "Der Motswana spricht Tswana und Englisch.",
        en: "The Motswana speaks Tswana and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51038,
    eng: "Motswana",
    article: "die",
    noun: "Motswana",
    plural: "Batswana",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Motswana", plural: "Batswana" },
    notes: {
      miscNote:
        "Botswana uses a unique naming system where 'Motswana' is singular and 'Batswana' is plural. The country is famous for the Kalahari Desert and safari tourism.",
    },
    sentences: [
      {
        de: "Eine Frau aus Botswana ist ein Motswana.",
        en: "A woman from Botswana is a Motswana.",
        case: "nom",
      },
      {
        de: "Die Motswana spricht Tswana und Afrikaans.",
        en: "The Motswana speaks Tswana and Afrikaans.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50039,
    eng: "Brazilian",
    article: "der",
    noun: "Brasilianer",
    plural: "Brasilianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Brasilianerin",
      plural: "Brasilianerinnen",
    },
    notes: {
      miscNote:
        "Brazil is the largest country in South America and home to the Amazon Rainforest. Portuguese, not Spanish, is the official language!",
    },
    sentences: [
      {
        de: "Ein Mann aus Brasilien ist ein Brasilianer.",
        en: "A man from Brazil is a Brazilian.",
        case: "nom",
      },
      {
        de: "Der Brasilianer spricht Portugiesisch und Englisch.",
        en: "The Brazilian speaks Portuguese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51039,
    eng: "Brazilian",
    article: "die",
    noun: "Brasilianerin",
    plural: "Brasilianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Brasilianer",
      plural: "Brasilianer",
    },
    notes: {
      miscNote:
        "Brazil is the largest country in South America and home to the Amazon Rainforest. Portuguese, not Spanish, is the official language!",
    },
    sentences: [
      {
        de: "Eine Frau aus Brasilien ist eine Brasilianerin.",
        en: "A woman from Brazil is a Brazilian.",
        case: "nom",
      },
      {
        de: "Die Brasilianerin spricht Portugiesisch und Spanisch.",
        en: "The Brazilian speaks Portuguese and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50040,
    eng: "British Virgin Islander",
    article: "der",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51040,
    eng: "British Virgin Islander",
    article: "die",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50041,
    eng: "Bruneian",
    article: "der",
    noun: "Bruneier",
    plural: "Bruneier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Bruneierin",
      plural: "Bruneiierinnen",
    },
    notes: {
      miscNote:
        "Brunei is a small, oil-rich nation on Borneo. It has one of the highest standards of living in Asia.",
    },
    sentences: [
      {
        de: "Ein Mann aus Brunei ist ein Bruneier.",
        en: "A man from Brunei is a Bruneian.",
        case: "nom",
      },
      {
        de: "Der Bruneier spricht Malaiisch und Englisch.",
        en: "The Bruneian speaks Malay and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51041,
    eng: "Bruneian",
    article: "die",
    noun: "Bruneierin",
    plural: "Bruneiierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Bruneier", plural: "Bruneier" },
    notes: {
      miscNote:
        "Brunei is a small, oil-rich nation on Borneo. It has one of the highest standards of living in Asia.",
    },
    sentences: [
      {
        de: "Eine Frau aus Brunei ist eine Bruneierin.",
        en: "A woman from Brunei is a Bruneian.",
        case: "nom",
      },
      {
        de: "Die Bruneierin spricht Malaiisch und Chinesisch.",
        en: "The Bruneian speaks Malay and Chinese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50042,
    eng: "Burkinan",
    article: "der",
    noun: "Burkiner",
    plural: "Burkiner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Burkinerin",
      plural: "Burkinerinnen",
    },
    notes: {
      miscNote:
        "Burkina Faso means 'land of upright people' in the local language. It's known for its vibrant textile traditions and music.",
    },
    sentences: [
      {
        de: "Ein Mann aus Burkina Faso ist ein Burkiner.",
        en: "A man from Burkina Faso is a Burkinan.",
        case: "nom",
      },
      {
        de: "Der Burkiner spricht Französisch und Mooré.",
        en: "The Burkinan speaks French and Mooré.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51042,
    eng: "Burkinan",
    article: "die",
    noun: "Burkinerin",
    plural: "Burkinerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Burkiner", plural: "Burkiner" },
    notes: {
      miscNote:
        "Burkina Faso means 'land of upright people' in the local language. It's known for its vibrant textile traditions and music.",
    },
    sentences: [
      {
        de: "Eine Frau aus Burkina Faso ist eine Burkinerin.",
        en: "A woman from Burkina Faso is a Burkinan.",
        case: "nom",
      },
      {
        de: "Die Burkinerin spricht Französisch und Dioula.",
        en: "The Burkinan speaks French and Dioula.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50043,
    eng: "Burmese",
    article: "der",
    noun: "Burmese",
    plural: "Burmesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Burmesdin",
      plural: "Burmesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Myanmar (formerly Burma) is known for its golden pagodas, street food, and tradition of thanaka (a yellowish cosmetic).",
    },
    sentences: [
      {
        de: "Ein Mann aus Myanmar ist ein Burmese.",
        en: "A man from Myanmar is Burmese.",
        case: "nom",
      },
      {
        de: "Der Burmese spricht Burmesisch und Englisch.",
        en: "The Burmese person speaks Burmese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51043,
    eng: "Burmese",
    article: "die",
    noun: "Burmesdin",
    plural: "Burmesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Burmese", plural: "Burmesen" },
    notes: {
      miscNote:
        "Myanmar (formerly Burma) is known for its golden pagodas, street food, and tradition of thanaka (a yellowish cosmetic).",
    },
    sentences: [
      {
        de: "Eine Frau aus Myanmar ist eine Burmesdin.",
        en: "A woman from Myanmar is Burmese.",
        case: "nom",
      },
      {
        de: "Die Burmesdin spricht Burmesisch und Chinesisch.",
        en: "The Burmese person speaks Burmese and Chinese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50044,
    eng: "Burundian",
    article: "der",
    noun: "Burundier",
    plural: "Burundier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Burunderin",
      plural: "Burunderinnen",
    },
    notes: {
      miscNote:
        "Burundi is one of Africa's smallest countries but has beautiful highland scenery. It's home to mountain gorillas and incredible biodiversity.",
    },
    sentences: [
      {
        de: "Ein Mann aus Burundi ist ein Burundier.",
        en: "A man from Burundi is a Burundian.",
        case: "nom",
      },
      {
        de: "Der Burundier spricht Kirundi und Französisch.",
        en: "The Burundian speaks Kirundi and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51044,
    eng: "Burundian",
    article: "die",
    noun: "Burunderin",
    plural: "Burunderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Burundier", plural: "Burundier" },
    notes: {
      miscNote:
        "Burundi is one of Africa's smallest countries but has beautiful highland scenery. It's home to mountain gorillas and incredible biodiversity.",
    },
    sentences: [
      {
        de: "Eine Frau aus Burundi ist eine Burunderin.",
        en: "A woman from Burundi is a Burundian.",
        case: "nom",
      },
      {
        de: "Die Burunderin spricht Kirundi und Englisch.",
        en: "The Burundian speaks Kirundi and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50045,
    eng: "Cambodian",
    article: "der",
    noun: "Kambodschaner",
    plural: "Kambodschaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kambodschanerin",
      plural: "Kambodschanerinnen",
    },
    notes: {
      miscNote:
        "Cambodia is home to Angkor Wat, the largest religious monument in the world. Khmer is the official language and has its own unique script.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kambodscha ist ein Kambodschaner.",
        en: "A man from Cambodia is a Cambodian.",
        case: "nom",
      },
      {
        de: "Der Kambodschaner spricht Khmer und Französisch.",
        en: "The Cambodian speaks Khmer and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51045,
    eng: "Cambodian",
    article: "die",
    noun: "Kambodschanerin",
    plural: "Kambodschanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Kambodschaner",
      plural: "Kambodschaner",
    },
    notes: {
      miscNote:
        "Cambodia is home to Angkor Wat, the largest religious monument in the world. Khmer is the official language and has its own unique script.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kambodscha ist eine Kambodschanerin.",
        en: "A woman from Cambodia is a Cambodian.",
        case: "nom",
      },
      {
        de: "Die Kambodschanerin spricht Khmer und Englisch.",
        en: "The Cambodian speaks Khmer and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50046,
    eng: "Cameroonian",
    article: "der",
    noun: "Kameruner",
    plural: "Kameruner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kamerunerin",
      plural: "Kamerunerinnen",
    },
    notes: {
      miscNote:
        "Cameroon is called 'Africa in miniature' for its incredible diversity of landscapes, languages, and cultures. Over 280 languages are spoken there!",
    },
    sentences: [
      {
        de: "Ein Mann aus Kamerun ist ein Kameruner.",
        en: "A man from Cameroon is a Cameroonian.",
        case: "nom",
      },
      {
        de: "Der Kameruner spricht Französisch und Englisch.",
        en: "The Cameroonian speaks French and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51046,
    eng: "Cameroonian",
    article: "die",
    noun: "Kamerunerin",
    plural: "Kamerunerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kameruner", plural: "Kameruner" },
    notes: {
      miscNote:
        "Cameroon is called 'Africa in miniature' for its incredible diversity of landscapes, languages, and cultures. Over 280 languages are spoken there!",
    },
    sentences: [
      {
        de: "Eine Frau aus Kamerun ist eine Kamerunerin.",
        en: "A woman from Cameroon is a Cameroonian.",
        case: "nom",
      },
      {
        de: "Die Kamerunerin spricht Französisch und Bantu.",
        en: "The Cameroonian speaks French and Bantu.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50047,
    eng: "Canadian",
    article: "der",
    noun: "Kanadier",
    plural: "Kanadier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kanadierin",
      plural: "Kanadierinnen",
    },
    notes: {
      miscNote:
        "Canada is the world's second-largest country by area. French and English are both official languages, and Indigenous languages are increasingly recognized.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kanada ist ein Kanadier.",
        en: "A man from Canada is a Canadian.",
        case: "nom",
      },
      {
        de: "Der Kanadier spricht Englisch und Französisch.",
        en: "The Canadian speaks English and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51047,
    eng: "Canadian",
    article: "die",
    noun: "Kanadierin",
    plural: "Kanadierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kanadier", plural: "Kanadier" },
    notes: {
      miscNote:
        "Canada is the world's second-largest country by area. French and English are both official languages, and Indigenous languages are increasingly recognized.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kanada ist eine Kanadierin.",
        en: "A woman from Canada is a Canadian.",
        case: "nom",
      },
      {
        de: "Die Kanadierin spricht Englisch und Mandarin.",
        en: "The Canadian speaks English and Mandarin.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50048,
    eng: "Cape Verdean",
    article: "der",
    noun: "Kap-Verdier",
    plural: "Kap-Verdier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kap-Verdierin",
      plural: "Kap-Verdierinnen",
    },
    notes: {
      miscNote:
        "Cape Verde is an island nation off the coast of West Africa. It's known for music, salt mines, and as a whale-watching destination.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kap Verde ist ein Kap-Verdier.",
        en: "A man from Cape Verde is a Cape Verdean.",
        case: "nom",
      },
      {
        de: "Der Kap-Verdier spricht Portugiesisch und Kapverdisches Kreolisch.",
        en: "The Cape Verdean speaks Portuguese and Cape Verdean Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51048,
    eng: "Cape Verdean",
    article: "die",
    noun: "Kap-Verdierin",
    plural: "Kap-Verdierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Kap-Verdier",
      plural: "Kap-Verdier",
    },
    notes: {
      miscNote:
        "Cape Verde is an island nation off the coast of West Africa. It's known for music, salt mines, and as a whale-watching destination.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kap Verde ist eine Kap-Verdierin.",
        en: "A woman from Cape Verde is a Cape Verdean.",
        case: "nom",
      },
      {
        de: "Die Kap-Verdierin spricht Portugiesisch und Französisch.",
        en: "The Cape Verdean speaks Portuguese and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },

  /**
   * Einwohner der Kaimaninseln (Inhabitant of the Cayman Islands)
   * Bürger der Kaimaninseln (Citizen of the Cayman Islands)
   * Die Menschen von den Kaimaninseln (The people from the Cayman Islands)
   */
  {
    id: 50049,
    eng: "Cayman Islander",
    article: "der",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51049,
    eng: "Cayman Islander",
    article: "die",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50050,
    eng: "Central African",
    article: "der",
    noun: "Zentralafrikaner",
    plural: "Zentralafrikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Zentralafrikanerin",
      plural: "Zentralafrikanerinnen",
    },
    notes: {
      miscNote:
        "The Central African Republic is landlocked and known for its diamond reserves. French is official; Sango is widely spoken and has co-official status.",
    },
    sentences: [
      {
        de: "Ein Mann aus der Zentralafrikanischen Republik ist ein Zentralafrikaner.",
        en: "A man from the Central African Republic is a Central African.",
        case: "nom",
      },
      {
        de: "Der Zentralafrikaner spricht Sango und Französisch.",
        en: "The Central African speaks Sango and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51050,
    eng: "Central African",
    article: "die",
    noun: "Zentralafrikanerin",
    plural: "Zentralafrikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Zentralafrikaner",
      plural: "Zentralafrikaner",
    },
    notes: {
      miscNote:
        "The Central African Republic is landlocked and known for its diamond reserves. French is official; Sango is widely spoken and has co-official status.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Zentralafrikanischen Republik ist eine Zentralafrikanerin.",
        en: "A woman from the Central African Republic is a Central African.",
        case: "nom",
      },
      {
        de: "Die Zentralafrikanerin spricht Sango und Englisch.",
        en: "The Central African speaks Sango and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50051,
    eng: "Chadian",
    article: "der",
    noun: "Tschader",
    plural: "Tschader",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Tschaderin",
      plural: "Tschaderinnen",
    },
    notes: {
      miscNote:
        "Chad is a Sahel country with vast desert landscapes. Arabic and French are official; over 120 languages are spoken by various ethnic groups.",
    },
    sentences: [
      {
        de: "Ein Mann aus Tschad ist ein Tschader.",
        en: "A man from Chad is a Chadian.",
        case: "nom",
      },
      {
        de: "Der Tschader spricht Arabisch und Französisch.",
        en: "The Chadian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51051,
    eng: "Chadian",
    article: "die",
    noun: "Tschaderin",
    plural: "Tschaderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tschader", plural: "Tschader" },
    notes: {
      miscNote:
        "Chad is a Sahel country with vast desert landscapes. Arabic and French are official; over 120 languages are spoken by various ethnic groups.",
    },
    sentences: [
      {
        de: "Eine Frau aus Tschad ist eine Tschaderin.",
        en: "A woman from Chad is a Chadian.",
        case: "nom",
      },
      {
        de: "Die Tschaderin spricht Arabisch und Englisch.",
        en: "The Chadian speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50052,
    eng: "Chilean",
    article: "der",
    noun: "Chilene",
    plural: "Chilenen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Chilenin", plural: "Chileninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Chile is the world's longest north-south country and stretches from the Atacama Desert to Patagonia. It's known for wine, copper, and stunning landscapes.",
    },
    sentences: [
      {
        de: "Ein Mann aus Chile ist ein Chilene.",
        en: "A man from Chile is a Chilean.",
        case: "nom",
      },
      {
        de: "Der Chilene spricht Spanisch und Mapudungun.",
        en: "The Chilean speaks Spanish and Mapudungun.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51052,
    eng: "Chilean",
    article: "die",
    noun: "Chilenin",
    plural: "Chileninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Chilene", plural: "Chilenen" },
    notes: {
      miscNote:
        "Chile is the world's longest north-south country and stretches from the Atacama Desert to Patagonia. It's known for wine, copper, and stunning landscapes.",
    },
    sentences: [
      {
        de: "Eine Frau aus Chile ist eine Chilenin.",
        en: "A woman from Chile is a Chilean.",
        case: "nom",
      },
      {
        de: "Die Chilenin spricht Spanisch und Quechua.",
        en: "The Chilean speaks Spanish and Quechua.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50053,
    eng: "Colombian",
    article: "der",
    noun: "Kolumbianer",
    plural: "Kolumbianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kolumbianerin",
      plural: "Kolumbianerinnen",
    },
    notes: {
      miscNote:
        "Colombia is the world's leading coffee producer and has incredible biodiversity. It's home to Gabriel García Márquez and magical realism literature.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kolumbien ist ein Kolumbianer.",
        en: "A man from Colombia is a Colombian.",
        case: "nom",
      },
      {
        de: "Der Kolumbianer spricht Spanisch und Englisch.",
        en: "The Colombian speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51053,
    eng: "Colombian",
    article: "die",
    noun: "Kolumbianerin",
    plural: "Kolumbianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Kolumbianer",
      plural: "Kolumbianer",
    },
    notes: {
      miscNote:
        "Colombia is the world's leading coffee producer and has incredible biodiversity. It's home to Gabriel García Márquez and magical realism literature.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kolumbien ist eine Kolumbianerin.",
        en: "A woman from Colombia is a Colombian.",
        case: "nom",
      },
      {
        de: "Die Kolumbianerin spricht Spanisch und Portugiesisch.",
        en: "The Colombian speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50054,
    eng: "Comoran",
    article: "der",
    noun: "Komoraner",
    plural: "Komoraner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Komanerin",
      plural: "Komanerinnen",
    },
    notes: {
      miscNote:
        "The Comoros is a volcanic island nation in the Indian Ocean. Comorian, French, and Arabic are all spoken; the culture blends African, Arab, and French influences.",
    },
    sentences: [
      {
        de: "Ein Mann aus Komoren ist ein Komoraner.",
        en: "A man from Comoros is a Comoran.",
        case: "nom",
      },
      {
        de: "Der Komoraner spricht Komorisch und Französisch.",
        en: "The Comoran speaks Comorian and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51054,
    eng: "Comoran",
    article: "die",
    noun: "Komanerin",
    plural: "Komanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Komoraner", plural: "Komoraner" },
    notes: {
      miscNote:
        "The Comoros is a volcanic island nation in the Indian Ocean. Comorian, French, and Arabic are all spoken; the culture blends African, Arab, and French influences.",
    },
    sentences: [
      {
        de: "Eine Frau aus Komoren ist eine Komanerin.",
        en: "A woman from Comoros is a Comoran.",
        case: "nom",
      },
      {
        de: "Die Komanerin spricht Komorisch und Arabisch.",
        en: "The Comoran speaks Comorian and Arabic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },

  // for the congos, make only 2 from 4 and add this note:
  // Shared Term: Both nationalities use the root word kongolesisch (adjective) and Kongolese/Kongolesin
  {
    id: 50055,
    eng: "Congolese",
    article: "der",
    noun: "Kongolese",
    plural: "Kongolesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Kongolesin",
      plural: "Kongolesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "PLACEHOLDER - Check: Congo or DRC? This is Republic of the Congo. French and Lingala are official languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Kongo ist ein Kongolese.",
        en: "A man from the Congo is a Congolese.",
        case: "nom",
      },
      {
        de: "Der Kongolese spricht Französisch und Lingala.",
        en: "The Congolese speaks French and Lingala.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51055,
    eng: "Congolese",
    article: "die",
    noun: "Kongolesin",
    plural: "Kongolesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kongolese", plural: "Kongolesen" },
    notes: {
      miscNote:
        "PLACEHOLDER - Check: Congo or DRC? This is Republic of the Congo. French and Lingala are official languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Kongo ist eine Kongolesin.",
        en: "A woman from the Congo is a Congolese.",
        case: "nom",
      },
      {
        de: "Die Kongolesin spricht Französisch und Tshiluba.",
        en: "The Congolese speaks French and Tshiluba.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50056,
    eng: "Congolese",
    article: "der",
    noun: "Kongolese",
    plural: "Kongolesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Kongolesin",
      plural: "Kongolesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "PLACEHOLDER - Check: DRC (Democratic Republic of Congo). French is official; Lingala, Kikongo, Swahili, Tshiluba are widely spoken.",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51056,
    eng: "Congolese",
    article: "die",
    noun: "Kongolesin",
    plural: "Kongolesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kongolese", plural: "Kongolesen" },
    notes: {
      miscNote:
        "PLACEHOLDER - Check: DRC (Democratic Republic of Congo). French is official; Lingala, Kikongo, Swahili, Tshiluba are widely spoken.",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  /**
   * Einwohner der Cookinseln (Inhabitants of the Cook Islands)
   * Bewohner der Cookinseln
   * Note: (an option)word Cookinsulaner used informally in German academic papers, regional news,
   * or church charity pamphlets to avoid repeating "Einwohner" over and over
   *
   * same with Kaimaninsulaner (note for geography?) acknowledge in misc note?
   */
  {
    id: 50057,
    eng: "Cook Islander",
    article: "der",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51057,
    eng: "Cook Islander",
    article: "die",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50058,
    eng: "Costa Rican",
    article: "der",
    noun: "Costa-Ricaner",
    plural: "Costa-Ricaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Costa-Ricanerin",
      plural: "Costa-Ricanerinnen",
    },
    notes: {
      miscNote:
        "Costa Rica abolished its army in 1949—the longest-standing peace in Latin America. It's a biodiversity hotspot and ecotourism leader.",
    },
    sentences: [
      {
        de: "Ein Mann aus Costa Rica ist ein Costa-Ricaner.",
        en: "A man from Costa Rica is a Costa Rican.",
        case: "nom",
      },
      {
        de: "Der Costa-Ricaner spricht Spanisch und Englisch.",
        en: "The Costa Rican speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51058,
    eng: "Costa Rican",
    article: "die",
    noun: "Costa-Ricanerin",
    plural: "Costa-Ricanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Costa-Ricaner",
      plural: "Costa-Ricaner",
    },
    notes: {
      miscNote:
        "Costa Rica abolished its army in 1949—the longest-standing peace in Latin America. It's a biodiversity hotspot and ecotourism leader.",
    },
    sentences: [
      {
        de: "Eine Frau aus Costa Rica ist eine Costa-Ricanerin.",
        en: "A woman from Costa Rica is a Costa Rican.",
        case: "nom",
      },
      {
        de: "Die Costa-Ricanerin spricht Spanisch und Portugiesisch.",
        en: "The Costa Rican speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50059,
    eng: "Croatian",
    article: "der",
    noun: "Kroate",
    plural: "Kroaten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Kroatin", plural: "Kroatinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Croatia joined the EU in 2013. It's known for the Dalmatian coast, Roman ruins, and medieval architecture. Croatian uses three scripts historically!",
    },
    sentences: [
      {
        de: "Ein Mann aus Kroatien ist ein Kroate.",
        en: "A man from Croatia is a Croatian.",
        case: "nom",
      },
      {
        de: "Der Kroate spricht Kroatisch und Englisch.",
        en: "The Croatian speaks Croatian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51059,
    eng: "Croatian",
    article: "die",
    noun: "Kroatin",
    plural: "Kroatinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kroate", plural: "Kroaten" },
    notes: {
      miscNote:
        "Croatia joined the EU in 2013. It's known for the Dalmatian coast, Roman ruins, and medieval architecture. Croatian uses three scripts historically!",
    },
    sentences: [
      {
        de: "Eine Frau aus Kroatien ist eine Kroatin.",
        en: "A woman from Croatia is a Croatian.",
        case: "nom",
      },
      {
        de: "Die Kroatin spricht Kroatisch und Deutsch.",
        en: "The Croatian speaks Croatian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50060,
    eng: "Cuban",
    article: "der",
    noun: "Kubaner",
    plural: "Kubaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kubanerin",
      plural: "Kubanerinnen",
    },
    notes: {
      miscNote:
        "Cuba is the largest Caribbean island and known for cigars, rum, salsa music, and vintage American cars (frozen in time by the embargo).",
    },
    sentences: [
      {
        de: "Ein Mann aus Kuba ist ein Kubaner.",
        en: "A man from Cuba is a Cuban.",
        case: "nom",
      },
      {
        de: "Der Kubaner spricht Spanisch und Englisch.",
        en: "The Cuban speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51060,
    eng: "Cuban",
    article: "die",
    noun: "Kubanerin",
    plural: "Kubanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kubaner", plural: "Kubaner" },
    notes: {
      miscNote:
        "Cuba is the largest Caribbean island and known for cigars, rum, salsa music, and vintage American cars (frozen in time by the embargo).",
    },
    sentences: [
      {
        de: "Eine Frau aus Kuba ist eine Kubanerin.",
        en: "A woman from Cuba is a Cuban.",
        case: "nom",
      },
      {
        de: "Die Kubanerin spricht Spanisch und Französisch.",
        en: "The Cuban speaks Spanish and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50061,
    eng: "Welsh (male)",
    article: "der",
    noun: "Cymro",
    plural: "Cymry",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Cymraes", plural: "Cymraes" },
    notes: {
      miscNote:
        "PLACEHOLDER - Cymro and Cymraes are Welsh speakers. Wales has its own language (Cymraeg), distinct from English. Check German translation.",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51061,
    eng: "Welsh (female)",
    article: "die",
    noun: "Cymraes",
    plural: "Cymraes",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Cymro", plural: "Cymry" },
    notes: {
      miscNote:
        "PLACEHOLDER - Cymro and Cymraes are Welsh speakers. Wales has its own language (Cymraeg), distinct from English. Check German translation.",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50062,
    eng: "Cypriot",
    article: "der",
    noun: "Zyprer",
    plural: "Zyprer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Zyprerin",
      plural: "Zypererinnen",
    },
    notes: {
      miscNote:
        "Cyprus is split between Greek Cypriot and Turkish Cypriot communities. Both Greek and Turkish are spoken; the island has a 10,000-year history.",
    },
    sentences: [
      {
        de: "Ein Mann aus Zypern ist ein Zyprer.",
        en: "A man from Cyprus is a Cypriot.",
        case: "nom",
      },
      {
        de: "Der Zyprer spricht Griechisch und Türkisch.",
        en: "The Cypriot speaks Greek and Turkish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51062,
    eng: "Cypriot",
    article: "die",
    noun: "Zyprerin",
    plural: "Zypererinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Zyprer", plural: "Zyprer" },
    notes: {
      miscNote:
        "Cyprus is split between Greek Cypriot and Turkish Cypriot communities. Both Greek and Turkish are spoken; the island has a 10,000-year history.",
    },
    sentences: [
      {
        de: "Eine Frau aus Zypern ist eine Zyprerin.",
        en: "A woman from Cyprus is a Cypriot.",
        case: "nom",
      },
      {
        de: "Die Zyprerin spricht Griechisch und Englisch.",
        en: "The Cypriot speaks Greek and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50063,
    eng: "Czech",
    article: "der",
    noun: "Tscheche",
    plural: "Tschechen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Tschechin",
      plural: "Tschechinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Czechia (Czech Republic) joined the EU in 2004. It's famous for beer, crystal, and Prague's architectural beauty. Czech has 7 cases!",
    },
    sentences: [
      {
        de: "Ein Mann aus Tschechien ist ein Tscheche.",
        en: "A man from Czechia is a Czech.",
        case: "nom",
      },
      {
        de: "Der Tscheche spricht Tschechisch und Englisch.",
        en: "The Czech speaks Czech and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51063,
    eng: "Czech",
    article: "die",
    noun: "Tschechin",
    plural: "Tschechinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tscheche", plural: "Tschechen" },
    notes: {
      miscNote:
        "Czechia (Czech Republic) joined the EU in 2004. It's famous for beer, crystal, and Prague's architectural beauty. Czech has 7 cases!",
    },
    sentences: [
      {
        de: "Eine Frau aus Tschechien ist eine Tschechin.",
        en: "A woman from Czechia is a Czech.",
        case: "nom",
      },
      {
        de: "Die Tschechin spricht Tschechisch und Deutsch.",
        en: "The Czech speaks Czech and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50065,
    eng: "Djiboutian",
    article: "der",
    noun: "Dschibutier",
    plural: "Dschibutier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Dschibruterin",
      plural: "Dschibuterinnen",
    },
    notes: {
      miscNote:
        "Djibouti is a small strategic country at the mouth of the Red Sea. French and Arabic are official; Somali and Afar are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Dschibuti ist ein Dschibutier.",
        en: "A man from Djibouti is a Djiboutian.",
        case: "nom",
      },
      {
        de: "Der Dschibutier spricht Französisch und Arabisch.",
        en: "The Djiboutian speaks French and Arabic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51065,
    eng: "Djiboutian",
    article: "die",
    noun: "Dschibruterin",
    plural: "Dschibuterinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Dschibutier",
      plural: "Dschibutier",
    },
    notes: {
      miscNote:
        "Djibouti is a small strategic country at the mouth of the Red Sea. French and Arabic are official; Somali and Afar are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Dschibuti ist eine Dschibruterin.",
        en: "A woman from Djibouti is a Djiboutian.",
        case: "nom",
      },
      {
        de: "Die Dschibruterin spricht Französisch und Somali.",
        en: "The Djiboutian speaks French and Somali.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50066,
    eng: "Dominican",
    article: "der",
    noun: "Dominikaner",
    plural: "Dominikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Dominikanerin",
      plural: "Dominikanerinnen",
    },
    notes: {
      miscNote:
        "The Dominican Republic occupies two-thirds of Hispaniola. It's known for baseball, merengue music, and beautiful beaches.",
    },
    sentences: [
      {
        de: "Ein Mann aus der Dominikanischen Republik ist ein Dominikaner.",
        en: "A man from the Dominican Republic is a Dominican.",
        case: "nom",
      },
      {
        de: "Der Dominikaner spricht Spanisch und Englisch.",
        en: "The Dominican speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51066,
    eng: "Dominican",
    article: "die",
    noun: "Dominikanerin",
    plural: "Dominikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Dominikaner",
      plural: "Dominikaner",
    },
    notes: {
      miscNote:
        "The Dominican Republic occupies two-thirds of Hispaniola. It's known for baseball, merengue music, and beautiful beaches.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Dominikanischen Republik ist eine Dominikanerin.",
        en: "A woman from the Dominican Republic is a Dominican.",
        case: "nom",
      },
      {
        de: "Die Dominikanerin spricht Spanisch und Französisch.",
        en: "The Dominican speaks Spanish and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50068,
    eng: "Dutch",
    article: "der",
    noun: "Niederländer",
    plural: "Niederländer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Niederländerin",
      plural: "Niederländerinnen",
    },
    notes: {
      miscNote:
        "The Netherlands is famous for windmills, tulips, canals, and cycling. Many Dutch people speak multiple languages fluently.",
    },
    sentences: [
      {
        de: "Ein Mann aus den Niederlanden ist ein Niederländer.",
        en: "A man from the Netherlands is Dutch.",
        case: "nom",
      },
      {
        de: "Der Niederländer spricht Niederländisch und Englisch.",
        en: "The Dutch person speaks Dutch and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51068,
    eng: "Dutch",
    article: "die",
    noun: "Niederländerin",
    plural: "Niederländerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Niederländer",
      plural: "Niederländer",
    },
    notes: {
      miscNote:
        "The Netherlands is famous for windmills, tulips, canals, and cycling. Many Dutch people speak multiple languages fluently.",
    },
    sentences: [
      {
        de: "Eine Frau aus den Niederlanden ist eine Niederländerin.",
        en: "A woman from the Netherlands is Dutch.",
        case: "nom",
      },
      {
        de: "Die Niederländerin spricht Niederländisch und Deutsch.",
        en: "The Dutch person speaks Dutch and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50069,
    eng: "Timorese",
    article: "der",
    noun: "Timorer",
    plural: "Timorer",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Timorerin",
      plural: "Timorerinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "East Timor gained independence in 2002 after a long struggle. Tetum and Portuguese are official; Indonesian is also widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Osttimor ist ein Timorer.",
        en: "A man from East Timor is East Timorese.",
        case: "nom",
      },
      {
        de: "Der Timorer spricht Tetum und Portugiesisch.",
        en: "The East Timorese speaks Tetum and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51069,
    eng: "Timorese",
    article: "die",
    noun: "Timorerin",
    plural: "Timorerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Timorer", plural: "Timorer" },
    notes: {
      miscNote:
        "East Timor gained independence in 2002 after a long struggle. Tetum and Portuguese are official; Indonesian is also widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Osttimor ist eine Timorer.",
        en: "A woman from East Timor is (East) Timorese.",
        case: "nom",
      },
      {
        de: "Die Timorese spricht Tetum und Englisch.",
        en: "The East Timorese speaks Tetum and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50070,
    eng: "Ecuadorean",
    article: "der",
    noun: "Ecuadorianer",
    plural: "Ecuadorianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Ecuadorianerin",
      plural: "Ecuadorianerinnen",
    },
    notes: {
      miscNote:
        "Ecuador is named after the equator, which runs through it. The country has incredible biodiversity and is home to the Galápagos Islands.",
    },
    sentences: [
      {
        de: "Ein Mann aus Ecuador ist ein Ecuadorianer.",
        en: "A man from Ecuador is an Ecuadorean.",
        case: "nom",
      },
      {
        de: "Der Ecuadorianer spricht Spanisch und Quechua.",
        en: "The Ecuadorean speaks Spanish and Quechua.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51070,
    eng: "Ecuadorean",
    article: "die",
    noun: "Ecuadorianerin",
    plural: "Ecuadorianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Ecuadorianer",
      plural: "Ecuadorianer",
    },
    notes: {
      miscNote:
        "Ecuador is named after the equator, which runs through it. The country has incredible biodiversity and is home to the Galápagos Islands.",
    },
    sentences: [
      {
        de: "Eine Frau aus Ecuador ist eine Ecuadorianerin.",
        en: "A woman from Ecuador is an Ecuadorean.",
        case: "nom",
      },
      {
        de: "Die Ecuadorianerin spricht Spanisch und Aymara.",
        en: "The Ecuadorean speaks Spanish and Aymara.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50071,
    eng: "Egyptian",
    article: "der",
    noun: "Ägypter",
    plural: "Ägypter",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Ägypterin",
      plural: "Ägypterinnen",
    },
    notes: {
      miscNote:
        "Egypt is home to the pyramids and one of the world's oldest civilizations. Arabic is official; many Egyptians also speak English and French.",
    },
    sentences: [
      {
        de: "Ein Mann aus Ägypten ist ein Ägypter.",
        en: "A man from Egypt is an Egyptian.",
        case: "nom",
      },
      {
        de: "Der Ägypter spricht Arabisch und Englisch.",
        en: "The Egyptian speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51071,
    eng: "Egyptian",
    article: "die",
    noun: "Ägypterin",
    plural: "Ägypterinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ägypter", plural: "Ägypter" },
    notes: {
      miscNote:
        "Egypt is home to the pyramids and one of the world's oldest civilizations. Arabic is official; many Egyptians also speak English and French.",
    },
    sentences: [
      {
        de: "Eine Frau aus Ägypten ist eine Ägypterin.",
        en: "A woman from Egypt is an Egyptian.",
        case: "nom",
      },
      {
        de: "Die Ägypterin spricht Arabisch und Französisch.",
        en: "The Egyptian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50072,
    eng: "Emirati",
    article: "der",
    noun: "Emirater",
    plural: "Emirater",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Emiraterin",
      plural: "Emiraterinnen",
    },
    notes: {
      miscNote:
        "The UAE (United Arab Emirates) is known for Dubai, modern architecture, and oil wealth. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Ein Mann aus den VAE ist ein Emirater.",
        en: "A man from the UAE is an Emirati.",
        case: "nom",
      },
      {
        de: "Der Emirater spricht Arabisch und Englisch.",
        en: "The Emirati speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51072,
    eng: "Emirati",
    article: "die",
    noun: "Emiraterin",
    plural: "Emiraterinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Emirater", plural: "Emirater" },
    notes: {
      miscNote:
        "The UAE (United Arab Emirates) is known for Dubai, modern architecture, and oil wealth. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Eine Frau aus den VAE ist eine Emiraterin.",
        en: "A woman from the UAE is an Emirati.",
        case: "nom",
      },
      {
        de: "Die Emiraterin spricht Arabisch und Urdu.",
        en: "The Emirati speaks Arabic and Urdu.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50073,
    eng: "English",
    article: "der",
    noun: "Engländer",
    plural: "Engländer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Engländerin",
      plural: "Engländerinnen",
    },
    notes: {
      miscNote:
        "England is part of the United Kingdom but has its own distinct culture. English is the world's most widely spoken language!",
    },
    sentences: [
      {
        de: "Ein Mann aus England ist ein Engländer.",
        en: "A man from England is English.",
        case: "nom",
      },
      {
        de: "Der Engländer spricht Englisch und Französisch.",
        en: "The English person speaks English and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51073,
    eng: "English",
    article: "die",
    noun: "Engländerin",
    plural: "Engländerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Engländer", plural: "Engländer" },
    notes: {
      miscNote:
        "England is part of the United Kingdom but has its own distinct culture. English is the world's most widely spoken language!",
    },
    sentences: [
      {
        de: "Eine Frau aus England ist eine Engländerin.",
        en: "A woman from England is English.",
        case: "nom",
      },
      {
        de: "Die Engländerin spricht Englisch und Spanisch.",
        en: "The English person speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50074,
    eng: "Equatorial Guinean",
    article: "der",
    noun: "Äquatorialguineer",
    plural: "Äquatorialguineer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Äquatorialguineerin",
      plural: "Äquatorialguineerinnen",
    },
    notes: {
      miscNote:
        "Äquatorialguinea / Die Republik Äquatorialguinea,Multi-word or uncertain nationality - needs verification",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50074,
    eng: "Equatorial Guinean",
    article: "der",
    noun: "Äquatorialguineer",
    plural: "Äquatorialguineer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Äquatorialguineerin",
      plural: "Äquatorialguineerinnen",
    },
    notes: {
      miscNote:
        "Equatorial Guinea is the only Spanish-speaking country in Africa. Spanish, French, and Portuguese are official; Fang and Bube are native languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Äquatorialguinea ist ein Äquatorialguineer.",
        en: "A man from Equatorial Guinea is an Equatorial Guinean.",
        case: "nom",
      },
      {
        de: "Der Äquatorialguineer spricht Spanisch und Französisch.",
        en: "The Equatorial Guinean speaks Spanish and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51074,
    eng: "Equatorial Guinean",
    article: "die",
    noun: "Äquatorialguineerin",
    plural: "Äquatorialguineerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Äquatorialguineer",
      plural: "Äquatorialguineer",
    },
    notes: {
      miscNote:
        "Equatorial Guinea is the only Spanish-speaking country in Africa. Spanish, French, and Portuguese are official; Fang and Bube are native languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Äquatorialguinea ist eine Äquatorialguineerin.",
        en: "A woman from Equatorial Guinea is an Equatorial Guinean.",
        case: "nom",
      },
      {
        de: "Die Äquatorialguineerin spricht Spanisch und Portugiesisch.",
        en: "The Equatorial Guinean speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51075,
    eng: "Eritrean",
    article: "die",
    noun: "Eritreerin",
    plural: "Eritreerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Eritreer", plural: "Eritreer" },
    notes: {
      miscNote:
        "Eritrea gained independence from Ethiopia in 1993. Tigrinya is official; Arabic is also widely spoken. The country has a rich Red Sea coastline.",
    },
    sentences: [
      {
        de: "Eine Frau aus Eritrea ist eine Eritreerin.",
        en: "A woman from Eritrea is an Eritrean.",
        case: "nom",
      },
      {
        de: "Die Eritreerin spricht Tigrinya und Englisch.",
        en: "The Eritrean speaks Tigrinya and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50076,
    eng: "Estonian",
    article: "der",
    noun: "Este",
    plural: "Esten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Estin", plural: "Estinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Estonia is a Baltic country known for digital innovation and tech startups. Estonian is a Uralic language, related to Finnish and Hungarian!",
    },
    sentences: [
      {
        de: "Ein Mann aus Estland ist ein Este.",
        en: "A man from Estonia is an Estonian.",
        case: "nom",
      },
      {
        de: "Der Este spricht Estnisch und Russisch.",
        en: "The Estonian speaks Estonian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51076,
    eng: "Estonian",
    article: "die",
    noun: "Estin",
    plural: "Estinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Este", plural: "Esten" },
    notes: {
      miscNote:
        "Estonia is a Baltic country known for digital innovation and tech startups. Estonian is a Uralic language, related to Finnish and Hungarian!",
    },
    sentences: [
      {
        de: "Eine Frau aus Estland ist eine Estin.",
        en: "A woman from Estonia is an Estonian.",
        case: "nom",
      },
      {
        de: "Die Estin spricht Estnisch und Englisch.",
        en: "The Estonian speaks Estonian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50077,
    eng: "Ethiopian",
    article: "der",
    noun: "Äthiopier",
    plural: "Äthiopier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Äthiopierin",
      plural: "Äthiopierinnen",
    },
    notes: {
      miscNote:
        "Ethiopia is the only African country never colonized. Amharic is official; over 80 languages are spoken. The country has its own calendar!",
    },
    sentences: [
      {
        de: "Ein Mann aus Äthiopien ist ein Äthiopier.",
        en: "A man from Ethiopia is an Ethiopian.",
        case: "nom",
      },
      {
        de: "Der Äthiopier spricht Amharisch und Oromifa.",
        en: "The Ethiopian speaks Amharic and Oromifa.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51077,
    eng: "Ethiopian",
    article: "die",
    noun: "Äthiopierin",
    plural: "Äthiopierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Äthiopier", plural: "Äthiopier" },
    notes: {
      miscNote:
        "Ethiopia is the only African country never colonized. Amharic is official; over 80 languages are spoken. The country has its own calendar!",
    },
    sentences: [
      {
        de: "Eine Frau aus Äthiopien ist eine Äthiopierin.",
        en: "A woman from Ethiopia is an Ethiopian.",
        case: "nom",
      },
      {
        de: "Die Äthiopierin spricht Amharisch und Englisch.",
        en: "The Ethiopian speaks Amharic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50078,
    eng: "Faroese",
    article: "der",
    noun: "Färinger",
    plural: "Färinger",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Färingerin",
      plural: "Färingerinnen",
    },
    notes: {
      miscNote:
        "The Faroe Islands are between Iceland and Norway. Faroese is the official language; most Faroese also speak Danish and English.",
    },
    sentences: [
      {
        de: "Ein Mann aus den Färöern ist ein Färinger.",
        en: "A man from the Faroe Islands is Faroese.",
        case: "nom",
      },
      {
        de: "Der Färinger spricht Färöisch und Dänisch.",
        en: "The Faroese speaks Faroese and Danish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51078,
    eng: "Faroese",
    article: "die",
    noun: "Färingerin",
    plural: "Färingerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Färinger", plural: "Färinger" },
    notes: {
      miscNote:
        "The Faroe Islands are between Iceland and Norway. Faroese is the official language; most Faroese also speak Danish and English.",
    },
    sentences: [
      {
        de: "Eine Frau aus den Färöern ist eine Färingerin.",
        en: "A woman from the Faroe Islands is Faroese.",
        case: "nom",
      },
      {
        de: "Die Färingerin spricht Färöisch und Norwegisch.",
        en: "The Faroese speaks Faroese and Norwegian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50079,
    eng: "Fijian",
    article: "der",
    noun: "Fidschianer",
    plural: "Fidschianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Fidschianerin",
      plural: "Fidschianerin",
    },
    notes: {
      miscNote:
        "Fiji is an island nation in the South Pacific. English and Fijian are official; Hindi is also spoken by a significant population.",
    },
    sentences: [
      {
        de: "Ein Mann aus Fidschi ist ein Fidschianer.",
        en: "A man from Fiji is a Fijian.",
        case: "nom",
      },
      {
        de: "Der Fidschianer spricht Englisch und Fidschi.",
        en: "The Fijian speaks English and Fijian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51079,
    eng: "Fijian",
    article: "die",
    noun: "Fidschianerin",
    plural: "Fidschianerin",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Fidschianer",
      plural: "Fidschianer",
    },
    notes: {
      miscNote:
        "Fiji is an island nation in the South Pacific. English and Fijian are official; Hindi is also spoken by a significant population.",
    },
    sentences: [
      {
        de: "Eine Frau aus Fidschi ist eine Fidschianerin.",
        en: "A woman from Fiji is a Fijian.",
        case: "nom",
      },
      {
        de: "Die Fidschianerin spricht Englisch und Hindi.",
        en: "The Fijian speaks English and Hindi.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50080,
    eng: "Filipino",
    article: "der",
    noun: "Philippiner",
    plural: "Philippiner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Philippinerin",
      plural: "Philippinerinnen",
    },
    notes: {
      miscNote:
        "The Philippines is an archipelago of over 7,000 islands. Filipino and English are official; over 180 languages are spoken across the islands!",
    },
    sentences: [
      {
        de: "Ein Mann aus den Philippinen ist ein Philippiner.",
        en: "A man from the Philippines is a Filipino.",
        case: "nom",
      },
      {
        de: "Der Philippiner spricht Tagalog und Englisch.",
        en: "The Filipino speaks Tagalog and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51080,
    eng: "Filipino",
    article: "die",
    noun: "Philippinerin",
    plural: "Philippinerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Philippiner",
      plural: "Philippiner",
    },
    notes: {
      miscNote:
        "The Philippines is an archipelago of over 7,000 islands. Filipino and English are official; over 180 languages are spoken across the islands!",
    },
    sentences: [
      {
        de: "Eine Frau aus den Philippinen ist eine Philippinerin.",
        en: "A woman from the Philippines is a Filipino.",
        case: "nom",
      },
      {
        de: "Die Philippinerin spricht Tagalog und Spanisch.",
        en: "The Filipino speaks Tagalog and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50081,
    eng: "Finnish",
    article: "der",
    noun: "Finne",
    plural: "Finnen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Finnin", plural: "Finninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Finland is known for saunas, Santa Claus, and tech innovation. Finnish has no grammatical gender, making it refreshingly straightforward!",
    },
    sentences: [
      {
        de: "Ein Mann aus Finnland ist ein Finne.",
        en: "A man from Finland is a Finn.",
        case: "nom",
      },
      {
        de: "Der Finne spricht Finnisch und Schwedisch.",
        en: "The Finn speaks Finnish and Swedish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51081,
    eng: "Finnish",
    article: "die",
    noun: "Finnin",
    plural: "Finninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Finne", plural: "Finnen" },
    notes: {
      miscNote:
        "Finland is known for saunas, Santa Claus, and tech innovation. Finnish has no grammatical gender, making it refreshingly straightforward!",
    },
    sentences: [
      {
        de: "Eine Frau aus Finnland ist eine Finnin.",
        en: "A woman from Finland is a Finn.",
        case: "nom",
      },
      {
        de: "Die Finnin spricht Finnisch und Englisch.",
        en: "The Finn speaks Finnish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50082,
    eng: "French",
    article: "der",
    noun: "Franzose",
    plural: "Franzosen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Französin",
      plural: "Französinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "France is the world's most visited country. French has influenced English more than any other language!",
    },
    sentences: [
      {
        de: "Ein Mann aus Frankreich ist ein Franzose.",
        en: "A man from France is a Frenchman.",
        case: "nom",
      },
      {
        de: "Der Franzose spricht Französisch und Italienisch.",
        en: "The Frenchman speaks French and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51082,
    eng: "French",
    article: "die",
    noun: "Französin",
    plural: "Französinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Franzose", plural: "Franzosen" },
    notes: {
      miscNote:
        "France is the world's most visited country. French has influenced English more than any other language!",
    },
    sentences: [
      {
        de: "Eine Frau aus Frankreich ist eine Französin.",
        en: "A woman from France is a Frenchwoman.",
        case: "nom",
      },
      {
        de: "Die Französin spricht Französisch und Spanisch.",
        en: "The Frenchwoman speaks French and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50083,
    eng: "Gabonese",
    article: "der",
    noun: "Gabuner",
    plural: "Gabuner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Gabunerin",
      plural: "Gabunerinnen",
    },
    notes: {
      miscNote:
        "Gabon is a Central African country known for oil wealth and rainforests. French is official; Fang and Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Gabun ist ein Gabuner.",
        en: "A man from Gabon is a Gabonese.",
        case: "nom",
      },
      {
        de: "Der Gabuner spricht Französisch und Fang.",
        en: "The Gabonese speaks French and Fang.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51083,
    eng: "Gabonese",
    article: "die",
    noun: "Gabunerin",
    plural: "Gabunerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Gabuner", plural: "Gabuner" },
    notes: {
      miscNote:
        "Gabon is a Central African country known for oil wealth and rainforests. French is official; Fang and Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Gabun ist eine Gabunerin.",
        en: "A woman from Gabon is a Gabonese.",
        case: "nom",
      },
      {
        de: "Die Gabunerin spricht Französisch und Bantu.",
        en: "The Gabonese speaks French and Bantu.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50084,
    eng: "Gambian",
    article: "der",
    noun: "Gambier",
    plural: "Gambier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Gambierin",
      plural: "Gambierinnen",
    },
    notes: {
      miscNote:
        "The Gambia is the smallest country in mainland Africa. English is official; Wolof, Mandinka, and Fula are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Gambia ist ein Gambier.",
        en: "A man from the Gambia is a Gambian.",
        case: "nom",
      },
      {
        de: "Der Gambier spricht Englisch und Wolof.",
        en: "The Gambian speaks English and Wolof.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51084,
    eng: "Gambian",
    article: "die",
    noun: "Gambierin",
    plural: "Gambierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Gambier", plural: "Gambier" },
    notes: {
      miscNote:
        "The Gambia is the smallest country in mainland Africa. English is official; Wolof, Mandinka, and Fula are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Gambia ist eine Gambierin.",
        en: "A woman from the Gambia is a Gambian.",
        case: "nom",
      },
      {
        de: "Die Gambierin spricht Englisch und Mandinka.",
        en: "The Gambian speaks English and Mandinka.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50085,
    eng: "Georgian",
    article: "der",
    noun: "Georgier",
    plural: "Georgier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Georgierin",
      plural: "Georgierinnen",
    },
    notes: {
      miscNote:
        "Georgia is located at the crossroads of Europe and Asia. Georgian is written in its own unique alphabet and is one of the world's oldest languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Georgien ist ein Georgier.",
        en: "A man from Georgia is a Georgian.",
        case: "nom",
      },
      {
        de: "Der Georgier spricht Georgisch und Russisch.",
        en: "The Georgian speaks Georgian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51085,
    eng: "Georgian",
    article: "die",
    noun: "Georgierin",
    plural: "Georgierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Georgier", plural: "Georgier" },
    notes: {
      miscNote:
        "Georgia is located at the crossroads of Europe and Asia. Georgian is written in its own unique alphabet and is one of the world's oldest languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Georgien ist eine Georgierin.",
        en: "A woman from Georgia is a Georgian.",
        case: "nom",
      },
      {
        de: "Die Georgierin spricht Georgisch und Englisch.",
        en: "The Georgian speaks Georgian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50086,
    eng: "German",
    article: "der",
    noun: "Deutsche",
    plural: "Deutschen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Deutsche", plural: "Deutschen" },
    notes: {
      miscNote:
        "Germany is Europe's largest economy. German has four cases and three grammatical genders, making it a fascinating language to learn!",
    },
    sentences: [
      {
        de: "Ein Mann aus Deutschland ist ein Deutscher.",
        en: "A man from Germany is a German.",
        case: "nom",
      },
      {
        de: "Der Deutsche spricht Deutsch und Englisch.",
        en: "The German speaks German and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51086,
    eng: "German",
    article: "die",
    noun: "Deutsche",
    plural: "Deutschen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Deutsche", plural: "Deutschen" },
    notes: {
      miscNote:
        "Germany is Europe's largest economy. German has four cases and three grammatical genders, making it a fascinating language to learn!",
    },
    sentences: [
      {
        de: "Eine Frau aus Deutschland ist eine Deutsche.",
        en: "A woman from Germany is a German.",
        case: "nom",
      },
      {
        de: "Die Deutsche spricht Deutsch und Französisch.",
        en: "The German speaks German and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50087,
    eng: "Ghanaian",
    article: "der",
    noun: "Ghanaer",
    plural: "Ghanaer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Ghanaerin",
      plural: "Ghanaerinnen",
    },
    notes: {
      miscNote:
        "Ghana was the first sub-Saharan African country to gain independence. English is official; Akan, Ewe, and Ga are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Ghana ist ein Ghanaer.",
        en: "A man from Ghana is a Ghanaian.",
        case: "nom",
      },
      {
        de: "Der Ghanaer spricht Englisch und Akan.",
        en: "The Ghanaian speaks English and Akan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51087,
    eng: "Ghanaian",
    article: "die",
    noun: "Ghanaerin",
    plural: "Ghanaerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ghanaer", plural: "Ghanaer" },
    notes: {
      miscNote:
        "Ghana was the first sub-Saharan African country to gain independence. English is official; Akan, Ewe, and Ga are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Ghana ist eine Ghanaerin.",
        en: "A woman from Ghana is a Ghanaian.",
        case: "nom",
      },
      {
        de: "Die Ghanaerin spricht Englisch und Ewe.",
        en: "The Ghanaian speaks English and Ewe.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50088,
    eng: "Gibraltarian",
    article: "der",
    noun: "Gibraltarer",
    plural: "Gibraltarer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Gibraltarerin",
      plural: "Gibraltarerinnen",
    },
    notes: {
      miscNote:
        "Gibraltar is a British Overseas Territory at the entrance to the Mediterranean. English and Spanish are both spoken; Arabic influence is also present.",
    },
    sentences: [
      {
        de: "Ein Mann aus Gibraltar ist ein Gibraltarer.",
        en: "A man from Gibraltar is a Gibraltarian.",
        case: "nom",
      },
      {
        de: "Der Gibraltarer spricht Englisch und Spanisch.",
        en: "The Gibraltarian speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51088,
    eng: "Gibraltarian",
    article: "die",
    noun: "Gibraltarerin",
    plural: "Gibraltarerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Gibraltarer",
      plural: "Gibraltarer",
    },
    notes: {
      miscNote:
        "Gibraltar is a British Overseas Territory at the entrance to the Mediterranean. English and Spanish are both spoken; Arabic influence is also present.",
    },
    sentences: [
      {
        de: "Eine Frau aus Gibraltar ist eine Gibraltarerin.",
        en: "A woman from Gibraltar is a Gibraltarian.",
        case: "nom",
      },
      {
        de: "Die Gibraltarerin spricht Englisch und Arabisch.",
        en: "The Gibraltarian speaks English and Arabic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50089,
    eng: "Greek",
    article: "der",
    noun: "Grieche",
    plural: "Griechen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Griechin", plural: "Griechinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Greece is the birthplace of Western philosophy, democracy, and the Olympics. Greek has influenced many European languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Griechenland ist ein Grieche.",
        en: "A man from Greece is a Greek.",
        case: "nom",
      },
      {
        de: "Der Grieche spricht Griechisch und Englisch.",
        en: "The Greek speaks Greek and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51089,
    eng: "Greek",
    article: "die",
    noun: "Griechin",
    plural: "Griechinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Grieche", plural: "Griechen" },
    notes: {
      miscNote:
        "Greece is the birthplace of Western philosophy, democracy, and the Olympics. Greek has influenced many European languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Griechenland ist eine Griechin.",
        en: "A woman from Greece is a Greek.",
        case: "nom",
      },
      {
        de: "Die Griechin spricht Griechisch und Deutsch.",
        en: "The Greek speaks Greek and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50090,
    eng: "Greenlandic",
    article: "der",
    noun: "Grönländer",
    plural: "Grönländer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Grönländerin",
      plural: "Grönländerinnen",
    },
    notes: {
      miscNote:
        "Greenland is the world's largest island and an autonomous territory of Denmark. Greenlandic is the official language; Danish is also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Grönland ist ein Grönländer.",
        en: "A man from Greenland is Greenlandic.",
        case: "nom",
      },
      {
        de: "Der Grönländer spricht Grönländisch und Dänisch.",
        en: "The Greenlandic person speaks Greenlandic and Danish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51090,
    eng: "Greenlandic",
    article: "die",
    noun: "Grönländerin",
    plural: "Grönländerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Grönländer",
      plural: "Grönländer",
    },
    notes: {
      miscNote:
        "Greenland is the world's largest island and an autonomous territory of Denmark. Greenlandic is the official language; Danish is also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Grönland ist eine Grönländerin.",
        en: "A woman from Greenland is Greenlandic.",
        case: "nom",
      },
      {
        de: "Die Grönländerin spricht Grönländisch und Isländisch.",
        en: "The Greenlandic person speaks Greenlandic and Icelandic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50091,
    eng: "Grenadian",
    article: "der",
    noun: "Grenader",
    plural: "Grenader",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Grenaderin",
      plural: "Grenaderinnen",
    },
    notes: {
      miscNote:
        "Grenada is a Caribbean island nation known for spices, chocolate, and beautiful beaches. English is official; French Creole is also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Grenada ist ein Grenader.",
        en: "A man from Grenada is a Grenadian.",
        case: "nom",
      },
      {
        de: "Der Grenader spricht Englisch und Kreolisch.",
        en: "The Grenadian speaks English and Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51091,
    eng: "Grenadian",
    article: "die",
    noun: "Grenaderin",
    plural: "Grenaderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Grenader", plural: "Grenader" },
    notes: {
      miscNote:
        "Grenada is a Caribbean island nation known for spices, chocolate, and beautiful beaches. English is official; French Creole is also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Grenada ist eine Grenaderin.",
        en: "A woman from Grenada is a Grenadian.",
        case: "nom",
      },
      {
        de: "Die Grenaderin spricht Englisch und Französisch.",
        en: "The Grenadian speaks English and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50092,
    eng: "Guamanian",
    article: "der",
    noun: "Guamaner",
    plural: "Guamaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Guamanerin",
      plural: "Guamanerinnen",
    },
    notes: {
      miscNote:
        "Guam is a strategic U.S. territory in the Pacific. English and Chamorro are spoken; it's a crossroads of Asian and American cultures.",
    },
    sentences: [
      {
        de: "Ein Mann aus Guam ist ein Guamaner.",
        en: "A man from Guam is a Guamanian.",
        case: "nom",
      },
      {
        de: "Der Guamaner spricht Englisch und Chamorro.",
        en: "The Guamanian speaks English and Chamorro.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51092,
    eng: "Guamanian",
    article: "die",
    noun: "Guamanerin",
    plural: "Guamanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Guamaner", plural: "Guamaner" },
    notes: {
      miscNote:
        "Guam is a strategic U.S. territory in the Pacific. English and Chamorro are spoken; it's a crossroads of Asian and American cultures.",
    },
    sentences: [
      {
        de: "Eine Frau aus Guam ist eine Guamanerin.",
        en: "A woman from Guam is a Guamanian.",
        case: "nom",
      },
      {
        de: "Die Guamanerin spricht Englisch und Japanisch.",
        en: "The Guamanian speaks English and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50093,
    eng: "Guatemalan",
    article: "der",
    noun: "Guatemalteke",
    plural: "Guatemalteken",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Guatemaltekin",
      plural: "Guatemaltekinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Guatemala has incredible Mayan heritage and biodiversity. Spanish is official; over 20 Mayan languages are still spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Guatemala ist ein Guatemalteke.",
        en: "A man from Guatemala is a Guatemalan.",
        case: "nom",
      },
      {
        de: "Der Guatemalteke spricht Spanisch und K'iche'.",
        en: "The Guatemalan speaks Spanish and K'iche'.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51093,
    eng: "Guatemalan",
    article: "die",
    noun: "Guatemaltekin",
    plural: "Guatemaltekinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Guatemalteke",
      plural: "Guatemalteken",
    },
    notes: {
      miscNote:
        "Guatemala has incredible Mayan heritage and biodiversity. Spanish is official; over 20 Mayan languages are still spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Guatemala ist eine Guatemaltekin.",
        en: "A woman from Guatemala is a Guatemalan.",
        case: "nom",
      },
      {
        de: "Die Guatemaltekin spricht Spanisch und Kaqchikel.",
        en: "The Guatemalan speaks Spanish and Kaqchikel.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50094,
    eng: "Bissau-Guinnean",
    article: "der",
    noun: "Guinea-Bissauer ",
    plural: "Guinea-Bissauer ",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Guinea-Bissauerin",
      plural: "Guinea-Bissauerinnen",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51094,
    eng: "Bissau-Guinean",
    article: "die",
    noun: "Guinea-Bissauerin",
    plural: "Guinea-Bissauerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Guinea-Bissauer",
      plural: "Guinea-Bissauer",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50095,
    eng: "Guinean",
    article: "der",
    noun: "Guineer",
    plural: "Guineer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Guineerin",
      plural: "Guineerinnen",
    },
    notes: {
      miscNote:
        "Guinea is rich in mineral resources and has diverse landscapes from coast to highlands. French is official; Fula and Mandinka are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Guinea ist ein Guineer.",
        en: "A man from Guinea is a Guinean.",
        case: "nom",
      },
      {
        de: "Der Guineer spricht Französisch und Fulfulde.",
        en: "The Guinean speaks French and Fulfulde.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51095,
    eng: "Guinean",
    article: "die",
    noun: "Guineerin",
    plural: "Guineerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Guineer", plural: "Guineer" },
    notes: {
      miscNote:
        "Guinea is rich in mineral resources and has diverse landscapes from coast to highlands. French is official; Fula and Mandinka are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Guinea ist eine Guineerin.",
        en: "A woman from Guinea is a Guinean.",
        case: "nom",
      },
      {
        de: "Die Guineerin spricht Französisch und Mandinka.",
        en: "The Guinean speaks French and Mandinka.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50096,
    eng: "Guyanese",
    article: "der",
    noun: "Guyaner",
    plural: "Guyaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Guyanerin",
      plural: "Guyanerinnen",
    },
    notes: {
      miscNote:
        "Guyana is the only English-speaking country in South America. It has vast rainforests and incredible biodiversity. Amerindian languages are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Guyana ist ein Guyaner.",
        en: "A man from Guyana is a Guyanese.",
        case: "nom",
      },
      {
        de: "Der Guyaner spricht Englisch und Arawakan.",
        en: "The Guyanese speaks English and Arawakan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51096,
    eng: "Guyanese",
    article: "die",
    noun: "Guyanerin",
    plural: "Guyanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Guyaner", plural: "Guyaner" },
    notes: {
      miscNote:
        "Guyana is the only English-speaking country in South America. It has vast rainforests and incredible biodiversity. Amerindian languages are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Guyana ist eine Guyanerin.",
        en: "A woman from Guyana is a Guyanese.",
        case: "nom",
      },
      {
        de: "Die Guyanerin spricht Englisch und Portugiesisch.",
        en: "The Guyanese speaks English and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50097,
    eng: "Haitian",
    article: "der",
    noun: "Haitianer",
    plural: "Haitianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Haitianerin",
      plural: "Haitianerinnen",
    },
    notes: {
      miscNote:
        "Haiti was the first Black republic and the first successful slave revolution. French and Haitian Creole are official languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Haiti ist ein Haitianer.",
        en: "A man from Haiti is a Haitian.",
        case: "nom",
      },
      {
        de: "Der Haitianer spricht Französisch und Kreolisch.",
        en: "The Haitian speaks French and Creole.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51097,
    eng: "Haitian",
    article: "die",
    noun: "Haitianerin",
    plural: "Haitianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Haitianer", plural: "Haitianer" },
    notes: {
      miscNote:
        "Haiti was the first Black republic and the first successful slave revolution. French and Haitian Creole are official languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Haiti ist eine Haitianerin.",
        en: "A woman from Haiti is a Haitian.",
        case: "nom",
      },
      {
        de: "Die Haitianerin spricht Französisch und Englisch.",
        en: "The Haitian speaks French and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50098,
    eng: "Honduran",
    article: "der",
    noun: "Honduraner",
    plural: "Honduraner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Honduranerin",
      plural: "Honduranerinnen",
    },
    notes: {
      miscNote:
        "Honduras is known for the Mesoamerican Barrier Reef and Mayan ruins. Spanish is official; indigenous languages like Garinagu are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Honduras ist ein Honduraner.",
        en: "A man from Honduras is a Honduran.",
        case: "nom",
      },
      {
        de: "Der Honduraner spricht Spanisch und Garífuna.",
        en: "The Honduran speaks Spanish and Garífuna.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51098,
    eng: "Honduran",
    article: "die",
    noun: "Honduranerin",
    plural: "Honduranerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Honduraner",
      plural: "Honduraner",
    },
    notes: {
      miscNote:
        "Honduras is known for the Mesoamerican Barrier Reef and Mayan ruins. Spanish is official; indigenous languages like Garinagu are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Honduras ist eine Honduranerin.",
        en: "A woman from Honduras is a Honduran.",
        case: "nom",
      },
      {
        de: "Die Honduranerin spricht Spanisch und Englisch.",
        en: "The Honduran speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50099,
    eng: "Hongkonger",
    article: "der",
    noun: "Hongkonger",
    plural: "Hongkonger",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Hongkongerin",
      plural: "Hongkongerinin",
    },
    notes: {
      miscNote: "Multi-word or uncertain nationality - needs verification",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51099,
    eng: "Hongkonger",
    article: "die",
    noun: "Hongkongerin",
    plural: "Hongkongerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Hongkonger",
      plural: "Hongkonger",
    },
    notes: {
      miscNote: "Multi-word or uncertain nationality - needs verification",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50100,
    eng: "Hungarian",
    article: "der",
    noun: "Ungar",
    plural: "Ungarn",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Ungarin", plural: "Ungarinnen" },
    notes: {
      miscNote:
        "Hungary is famous for thermal baths, classical music, and the Danube River. Hungarian is a Uralic language, making it unique in Europe!",
    },
    sentences: [
      {
        de: "Ein Mann aus Ungarn ist ein Ungar.",
        en: "A man from Hungary is a Hungarian.",
        case: "nom",
      },
      {
        de: "Der Ungar spricht Ungarisch und Deutsch.",
        en: "The Hungarian speaks Hungarian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51100,
    eng: "Hungarian",
    article: "die",
    noun: "Ungarin",
    plural: "Ungarinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ungar", plural: "Ungarn" },
    notes: {
      miscNote:
        "Hungary is famous for thermal baths, classical music, and the Danube River. Hungarian is a Uralic language, making it unique in Europe!",
    },
    sentences: [
      {
        de: "Eine Frau aus Ungarn ist eine Ungarin.",
        en: "A woman from Hungary is a Hungarian.",
        case: "nom",
      },
      {
        de: "Die Ungarin spricht Ungarisch und Englisch.",
        en: "The Hungarian speaks Hungarian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50101,
    eng: "Icelander",
    article: "der",
    noun: "Isländer",
    plural: "Isländer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Isländerin",
      plural: "Isländerinnen",
    },
    notes: {
      miscNote:
        "Iceland is known for volcanoes, geysers, waterfalls, and the Northern Lights. Icelandic has changed little since Viking times!",
    },
    sentences: [
      {
        de: "Ein Mann aus Island ist ein Isländer.",
        en: "A man from Iceland is an Icelander.",
        case: "nom",
      },
      {
        de: "Der Isländer spricht Isländisch und Dänisch.",
        en: "The Icelander speaks Icelandic and Danish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51101,
    eng: "Icelander",
    article: "die",
    noun: "Isländerin",
    plural: "Isländerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Isländer", plural: "Isländer" },
    notes: {
      miscNote:
        "Iceland is known for volcanoes, geysers, waterfalls, and the Northern Lights. Icelandic has changed little since Viking times!",
    },
    sentences: [
      {
        de: "Eine Frau aus Island ist eine Isländerin.",
        en: "A woman from Iceland is an Icelander.",
        case: "nom",
      },
      {
        de: "Die Isländerin spricht Isländisch und Englisch.",
        en: "The Icelander speaks Icelandic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50102,
    eng: "Indian",
    article: "der",
    noun: "Inder",
    plural: "Inder",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Inderin", plural: "Inderinnen" },
    notes: {
      miscNote:
        "India is the world's most populous democracy with incredible diversity. Hindi and English are official; over 700 languages are spoken!",
    },
    sentences: [
      {
        de: "Ein Mann aus Indien ist ein Inder.",
        en: "A man from India is an Indian.",
        case: "nom",
      },
      {
        de: "Der Inder spricht Hindi und Englisch.",
        en: "The Indian speaks Hindi and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51102,
    eng: "Indian",
    article: "die",
    noun: "Inderin",
    plural: "Inderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Inder", plural: "Inder" },
    notes: {
      miscNote:
        "India is the world's most populous democracy with incredible diversity. Hindi and English are official; over 700 languages are spoken!",
    },
    sentences: [
      {
        de: "Eine Frau aus Indien ist eine Inderin.",
        en: "A woman from India is an Indian.",
        case: "nom",
      },
      {
        de: "Die Inderin spricht Hindi und Tamil.",
        en: "The Indian speaks Hindi and Tamil.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50103,
    eng: "Indonesian",
    article: "der",
    noun: "Indonesier",
    plural: "Indonesier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Indonesierin",
      plural: "Indonesierinnen",
    },
    notes: {
      miscNote:
        "Indonesia is the world's largest archipelago with over 17,000 islands. Indonesian (Bahasa Indonesia) is the official language; hundreds of regional languages exist.",
    },
    sentences: [
      {
        de: "Ein Mann aus Indonesien ist ein Indonesier.",
        en: "A man from Indonesia is an Indonesian.",
        case: "nom",
      },
      {
        de: "Der Indonesier spricht Indonesisch und Englisch.",
        en: "The Indonesian speaks Indonesian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51103,
    eng: "Indonesian",
    article: "die",
    noun: "Indonesierin",
    plural: "Indonesierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Indonesier",
      plural: "Indonesier",
    },
    notes: {
      miscNote:
        "Indonesia is the world's largest archipelago with over 17,000 islands. Indonesian (Bahasa Indonesia) is the official language; hundreds of regional languages exist.",
    },
    sentences: [
      {
        de: "Eine Frau aus Indonesien ist eine Indonesierin.",
        en: "A woman from Indonesia is an Indonesian.",
        case: "nom",
      },
      {
        de: "Die Indonesierin spricht Indonesisch und Javanisch.",
        en: "The Indonesian speaks Indonesian and Javanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50104,
    eng: "Iranian",
    article: "der",
    noun: "Iraner",
    plural: "Iraner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Iranerin", plural: "Iranerinnen" },
    notes: {
      miscNote:
        "Iran has one of the world's oldest continuous civilizations. Persian (Farsi) is official; Kurdish, Baloch, and Turkic languages are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Iran ist ein Iraner.",
        en: "A man from Iran is an Iranian.",
        case: "nom",
      },
      {
        de: "Der Iraner spricht Persisch und Englisch.",
        en: "The Iranian speaks Persian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51104,
    eng: "Iranian",
    article: "die",
    noun: "Iranerin",
    plural: "Iranerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Iraner", plural: "Iraner" },
    notes: {
      miscNote:
        "Iran has one of the world's oldest continuous civilizations. Persian (Farsi) is official; Kurdish, Baloch, and Turkic languages are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Iran ist eine Iranerin.",
        en: "A woman from Iran is an Iranian.",
        case: "nom",
      },
      {
        de: "Die Iranerin spricht Persisch und Französisch.",
        en: "The Iranian speaks Persian and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50105,
    eng: "Iraqi",
    article: "der",
    noun: "Iraker",
    plural: "Iraker",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Irakerin", plural: "Irakerinnen" },
    notes: {
      miscNote:
        "Iraq is in ancient Mesopotamia, the birthplace of civilization. Arabic is official; Kurdish is co-official in the Kurdistan region.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Irak ist ein Iraker.",
        en: "A man from Iraq is an Iraqi.",
        case: "nom",
      },
      {
        de: "Der Iraker spricht Arabisch und Kurdisch.",
        en: "The Iraqi speaks Arabic and Kurdish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51105,
    eng: "Iraqi",
    article: "die",
    noun: "Irakerin",
    plural: "Irakerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Iraker", plural: "Iraker" },
    notes: {
      miscNote:
        "Iraq is in ancient Mesopotamia, the birthplace of civilization. Arabic is official; Kurdish is co-official in the Kurdistan region.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Irak ist eine Irakerin.",
        en: "A woman from Iraq is an Iraqi.",
        case: "nom",
      },
      {
        de: "Die Irakerin spricht Arabisch und Englisch.",
        en: "The Iraqi speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50106,
    eng: "Irish",
    article: "der",
    noun: "Ire",
    plural: "Iren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Irin", plural: "Irinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Ireland is the Emerald Isle known for its green landscapes, pubs, and literature. Irish (Gaeilge) is an official language alongside English.",
    },
    sentences: [
      {
        de: "Ein Mann aus Irland ist ein Ire.",
        en: "A man from Ireland is an Irishman.",
        case: "nom",
      },
      {
        de: "Der Ire spricht Irisch und Englisch.",
        en: "The Irishman speaks Irish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51106,
    eng: "Irish",
    article: "die",
    noun: "Irin",
    plural: "Irinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ire", plural: "Iren" },
    notes: {
      miscNote:
        "Ireland is the Emerald Isle known for its green landscapes, pubs, and literature. Irish (Gaeilge) is an official language alongside English.",
    },
    sentences: [
      {
        de: "Eine Frau aus Irland ist eine Irin.",
        en: "A woman from Ireland is an Irishwoman.",
        case: "nom",
      },
      {
        de: "Die Irin spricht Irisch und Deutsch.",
        en: "The Irishwoman speaks Irish and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50107,
    eng: "Israeli",
    article: "der",
    noun: "Israeli",
    plural: "Israelis",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Israeli", plural: "Israelis" },
    notes: {
      miscNote:
        "Israel is a Middle Eastern country with a history spanning millennia. Hebrew is official; Arabic is also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Israel ist ein Israeli.",
        en: "A man from Israel is an Israeli.",
        case: "nom",
      },
      {
        de: "Der Israeli spricht Hebräisch und Englisch.",
        en: "The Israeli speaks Hebrew and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51107,
    eng: "Israeli",
    article: "die",
    noun: "Israeli",
    plural: "Israelis",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Israeli", plural: "Israelis" },
    notes: {
      miscNote:
        "Israel is a Middle Eastern country with a history spanning millennia. Hebrew is official; Arabic is also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Israel ist eine Israeli.",
        en: "A woman from Israel is an Israeli.",
        case: "nom",
      },
      {
        de: "Die Israeli spricht Hebräisch und Französisch.",
        en: "The Israeli speaks Hebrew and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50108,
    eng: "Italian",
    article: "der",
    noun: "Italiener",
    plural: "Italiener",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Italienerin",
      plural: "Italienerinnen",
    },
    notes: {
      miscNote:
        "Italy is home to Renaissance art, Roman history, and world-famous cuisine. Italian is a Romance language with rich regional dialects.",
    },
    sentences: [
      {
        de: "Ein Mann aus Italien ist ein Italiener.",
        en: "A man from Italy is an Italian.",
        case: "nom",
      },
      {
        de: "Der Italiener spricht Italienisch und Englisch.",
        en: "The Italian speaks Italian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51108,
    eng: "Italian",
    article: "die",
    noun: "Italienerin",
    plural: "Italienerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Italiener", plural: "Italiener" },
    notes: {
      miscNote:
        "Italy is home to Renaissance art, Roman history, and world-famous cuisine. Italian is a Romance language with rich regional dialects.",
    },
    sentences: [
      {
        de: "Eine Frau aus Italien ist eine Italienerin.",
        en: "A woman from Italy is an Italian.",
        case: "nom",
      },
      {
        de: "Die Italienerin spricht Italienisch und Spanisch.",
        en: "The Italian speaks Italian and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50109,
    eng: "Ivorian",
    article: "der",
    noun: "Ivorer",
    plural: "Ivorer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Ivorerin", plural: "Ivorerinnen" },
    notes: {
      miscNote:
        "Côte d'Ivoire (Ivory Coast) is known for cocoa production and vibrant music. French is official; Akan, Kru, and Mandé languages are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Elfenbeinküste ist ein Ivorer.",
        en: "A man from Côte d'Ivoire is an Ivorian.",
        case: "nom",
      },
      {
        de: "Der Ivorer spricht Französisch und Akan.",
        en: "The Ivorian speaks French and Akan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51109,
    eng: "Ivorian",
    article: "die",
    noun: "Ivorerin",
    plural: "Ivorerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ivorer", plural: "Ivorer" },
    notes: {
      miscNote:
        "Côte d'Ivoire (Ivory Coast) is known for cocoa production and vibrant music. French is official; Akan, Kru, and Mandé languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Elfenbeinküste ist eine Ivorerin.",
        en: "A woman from Côte d'Ivoire is an Ivorian.",
        case: "nom",
      },
      {
        de: "Die Ivorerin spricht Französisch und Yoruba.",
        en: "The Ivorian speaks French and Yoruba.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },

  {
    id: 50110,
    eng: "Jamaican",
    article: "der",
    noun: "Jamaikaner",
    plural: "Jamaikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Jamaikanerin",
      plural: "Jamaikanerinnen",
    },
    notes: {
      miscNote:
        "Jamaica is a Caribbean island known for reggae music, Bob Marley, and track and field. English is official; Jamaican Patois is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Jamaika ist ein Jamaikaner.",
        en: "A man from Jamaica is a Jamaican.",
        case: "nom",
      },
      {
        de: "Der Jamaikaner spricht Englisch und Patois.",
        en: "The Jamaican speaks English and Patois.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51110,
    eng: "Jamaican",
    article: "die",
    noun: "Jamaikanerin",
    plural: "Jamaikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Jamaikaner",
      plural: "Jamaikaner",
    },
    notes: {
      miscNote:
        "Jamaica is a Caribbean island known for reggae music, Bob Marley, and track and field. English is official; Jamaican Patois is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Jamaika ist eine Jamaikanerin.",
        en: "A woman from Jamaica is a Jamaican.",
        case: "nom",
      },
      {
        de: "Die Jamaikanerin spricht Englisch und Spanisch.",
        en: "The Jamaican speaks English and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50111,
    eng: "Japanese",
    article: "der",
    noun: "Japaner",
    plural: "Japaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Japanerin",
      plural: "Japanerinnen",
    },
    notes: {
      miscNote:
        "Japan is an island nation known for technology, anime, and beautiful gardens. Japanese has three writing systems: hiragana, katakana, and kanji!",
    },
    sentences: [
      {
        de: "Ein Mann aus Japan ist ein Japaner.",
        en: "A man from Japan is a Japanese.",
        case: "nom",
      },
      {
        de: "Der Japaner spricht Japanisch und Englisch.",
        en: "The Japanese person speaks Japanese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51111,
    eng: "Japanese",
    article: "die",
    noun: "Japanerin",
    plural: "Japanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Japaner", plural: "Japaner" },
    notes: {
      miscNote:
        "Japan is an island nation known for technology, anime, and beautiful gardens. Japanese has three writing systems: hiragana, katakana, and kanji!",
    },
    sentences: [
      {
        de: "Eine Frau aus Japan ist eine Japanerin.",
        en: "A woman from Japan is a Japanese.",
        case: "nom",
      },
      {
        de: "Die Japanerin spricht Japanisch und Koreanisch.",
        en: "The Japanese person speaks Japanese and Korean.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50112,
    eng: "Jordanian",
    article: "der",
    noun: "Jordanier",
    plural: "Jordanier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Jordanierin",
      plural: "Jordanierinnen",
    },
    notes: {
      miscNote:
        "Jordan is home to Petra, one of the Seven Wonders. Arabic is official; English is widely spoken among the younger generation.",
    },
    sentences: [
      {
        de: "Ein Mann aus Jordanien ist ein Jordanier.",
        en: "A man from Jordan is a Jordanian.",
        case: "nom",
      },
      {
        de: "Der Jordanier spricht Arabisch und Englisch.",
        en: "The Jordanian speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51112,
    eng: "Jordanian",
    article: "die",
    noun: "Jordanierin",
    plural: "Jordanierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Jordanier", plural: "Jordanier" },
    notes: {
      miscNote:
        "Jordan is home to Petra, one of the Seven Wonders. Arabic is official; English is widely spoken among the younger generation.",
    },
    sentences: [
      {
        de: "Eine Frau aus Jordanien ist eine Jordanierin.",
        en: "A woman from Jordan is a Jordanian.",
        case: "nom",
      },
      {
        de: "Die Jordanierin spricht Arabisch und Französisch.",
        en: "The Jordanian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50113,
    eng: "Kazakh",
    article: "der",
    noun: "Kasache",
    plural: "Kasachen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Kasachin", plural: "Kasachinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Kazakhstan is the world's largest landlocked country. Kazakh is official; Russian is widely spoken as a second language.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kasachstan ist ein Kasache.",
        en: "A man from Kazakhstan is a Kazakh.",
        case: "nom",
      },
      {
        de: "Der Kasache spricht Kasachisch und Russisch.",
        en: "The Kazakh speaks Kazakh and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51113,
    eng: "Kazakh",
    article: "die",
    noun: "Kasachin",
    plural: "Kasachinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kasache", plural: "Kasachen" },
    notes: {
      miscNote:
        "Kazakhstan is the world's largest landlocked country. Kazakh is official; Russian is widely spoken as a second language.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kasachstan ist eine Kasachin.",
        en: "A woman from Kazakhstan is a Kazakh.",
        case: "nom",
      },
      {
        de: "Die Kasachin spricht Kasachisch und Englisch.",
        en: "The Kazakh speaks Kazakh and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50114,
    eng: "Kenyan",
    article: "der",
    noun: "Kenianer",
    plural: "Kenianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kenianerin",
      plural: "Kenianerinnen",
    },
    notes: {
      miscNote:
        "Kenya is known for its wildlife, safaris, and long-distance runners. Swahili and English are official; many ethnic languages are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kenia ist ein Kenianer.",
        en: "A man from Kenya is a Kenyan.",
        case: "nom",
      },
      {
        de: "Der Kenianer spricht Swahili und Englisch.",
        en: "The Kenyan speaks Swahili and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51114,
    eng: "Kenyan",
    article: "die",
    noun: "Kenianerin",
    plural: "Kenianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kenianer", plural: "Kenianer" },
    notes: {
      miscNote:
        "Kenya is known for its wildlife, safaris, and long-distance runners. Swahili and English are official; many ethnic languages are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kenia ist eine Kenianerin.",
        en: "A woman from Kenya is a Kenyan.",
        case: "nom",
      },
      {
        de: "Die Kenianerin spricht Swahili und Französisch.",
        en: "The Kenyan speaks Swahili and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },

  // There is no standard, official single-word demonym or adjective for someone from St. Kitts and Nevis in German.
  // Official style guides—including the German, Austrian, and Swiss foreign offices—use "von St. Kitts und Nevis"
  // (from St. Kitts and Nevis) for both the adjective and the citizen designation
  {
    id: 50115,
    eng: "Kittitian", // Kittitian Nevisian
    article: "der",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote:
        "Multi-word or uncertain nationality - needs verification (St. Kitts and Nevis)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51115,
    eng: "Kittitian",
    article: "die",
    noun: "PLACEHOLDER",
    plural: "PLACEHOLDER",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "PLACEHOLDER",
      plural: "PLACEHOLDER",
    },
    notes: {
      miscNote:
        "Multi-word or uncertain nationality - needs verification (St. Kitts and Nevis)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50116,
    eng: "Citizen of Kiribati",
    article: "der",
    noun: "Kiribatier",
    plural: "Kiribatier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kiribatierin",
      plural: "Kiribatierinnen",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51116,
    eng: "Citizen of Kiribati",
    article: "die",
    noun: "Kiribatierin",
    plural: "Kiribatierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Kiribatier",
      plural: "Kiribatier",
    },
    notes: {
      miscNote: "Multi-word nationality - needs review for German translation",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50117,
    eng: "Kosovan",
    article: "der",
    noun: "Kosovare",
    plural: "Kosovaren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Kosovarin",
      plural: "Kosovarinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Kosovo is a young country that declared independence in 2008. Albanian is official; Serbian is also spoken, reflecting the region's history.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Kosovo ist ein Kosovare.",
        en: "A man from Kosovo is a Kosovan.",
        case: "nom",
      },
      {
        de: "Der Kosovare spricht Albanisch und Serbisch.",
        en: "The Kosovan speaks Albanian and Serbian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51117,
    eng: "Kosovan",
    article: "die",
    noun: "Kosovarin",
    plural: "Kosovarinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kosovare", plural: "Kosovaren" },
    notes: {
      miscNote:
        "Kosovo is a young country that declared independence in 2008. Albanian is official; Serbian is also spoken, reflecting the region's history.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Kosovo ist eine Kosovarin.",
        en: "A woman from Kosovo is a Kosovan.",
        case: "nom",
      },
      {
        de: "Die Kosovarin spricht Albanisch und Englisch.",
        en: "The Kosovan speaks Albanian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
];
