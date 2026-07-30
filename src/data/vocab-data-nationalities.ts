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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
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
        case: "acc",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
];
