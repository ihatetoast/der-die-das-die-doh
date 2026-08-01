import type { VocabEntry } from "../types";
// todo: handle these later because of need for man woman
//  der Chinese (the Chinese man)
// der Russe (the Russian man)
// der Grieche (the Greek man)
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
        de: "Ein Mann aus Frankreich ist Franzose.",
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
        de: "Eine Frau aus Frankreich ist  Französin.",
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
        de: "Ein Mann aus Großbritannien ist Brite.",
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
        de: "Eine Frau aus Großbritannien ist  Britin.",
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
        de: "Ein Mann aus Dänemark ist Däne.",
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
        de: "Eine Frau aus Dänemark ist  Dänin.",
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
        de: "Ein Mann aus Bulgarien ist Bulgare.",
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
        de: "Eine Frau aus Bulgarien ist  Bulgarin.",
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
        de: "Ein Mann aus Finnland ist Finne.",
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
        de: "Eine Frau aus Finnland ist  Finnin.",
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
        de: "Ein Mann aus Irland ist Ire.",
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
        de: "Eine Frau aus Irland ist  Irin.",
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
        de: "Ein Mann aus Polen ist Pole.",
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
        de: "Eine Frau aus Polen ist  Polin.",
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
        de: "Ein Mann aus Schottland ist Schotte.",
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
        de: "Eine Frau aus Schottland ist  Schottin.",
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
        de: "Ein Mann aus Schweden ist Schwede.",
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
        de: "Eine Frau aus Schweden ist  Schwedin.",
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
        de: "Ein Mann aus Afghanistan ist Afghane.",
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
        de: "Eine Frau aus Afghanistan ist  Afghanin.",
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
        de: "Ein Mann aus Albanien ist Albaner.",
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
        de: "Eine Frau aus Albanien ist  Albanerin.",
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
        de: "Ein Mann aus Algerien ist Algerier.",
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
        de: "Eine Frau aus Algerien ist  Algerierin.",
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
        de: "Ein Mann aus den USA ist Amerikaner.",
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
        de: "Eine Frau aus den USA ist  Amerikanerin.",
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
        de: "Ein Mann aus Andorra ist Andorraner.",
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
        de: "Eine Frau aus Andorra ist  Andorranerin.",
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
        de: "Ein Mann aus Angola ist Angolaner.",
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
        de: "Eine Frau aus Angola ist  Angolanierin.",
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
        de: "Ein Mann aus Anguilla ist Anguillaner.",
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
        de: "Eine Frau aus Anguilla ist  Anguillanerin.",
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
        de: "Ein Mann aus Argentinien ist Argentinier.",
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
        de: "Eine Frau aus Argentinien ist  Argentinierin.",
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
        de: "Ein Mann aus Armenien ist Armenier.",
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
        de: "Eine Frau aus Armenien ist  Armenierin.",
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
        de: "Ein Mann aus Australien ist Australier.",
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
        de: "Eine Frau aus Australien ist  Australierin.",
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
        de: "Ein Mann aus Österreich ist Österreicher.",
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
        de: "Eine Frau aus Österreich ist  Österreicherin.",
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
        de: "Ein Mann aus Aserbaidschan ist Aserbaidschaner.",
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
        de: "Eine Frau aus Aserbaidschan ist  Aserbaidschanerin.",
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
        de: "Ein Mann aus den Bahamas ist Bahamaer.",
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
        de: "Eine Frau aus den Bahamas ist  Bahamaerin.",
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
        de: "Ein Mann aus Bahrain ist Bahrainer.",
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
        de: "Eine Frau aus Bahrain ist  Bahrainerin.",
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
        de: "Ein Mann aus Bangladesch ist Bangladescher.",
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
        de: "Eine Frau aus Bangladesch ist  Bangladescherin.",
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
        de: "Ein Mann aus Barbados ist Barbadier.",
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
        de: "Eine Frau aus Barbados ist  Barbaderin.",
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
        de: "Ein Mann aus Belarus ist Belarusse.",
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
        de: "Eine Frau aus Belarus ist  Belarussin.",
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
        de: "Ein Mann aus Belgien ist Belgier.",
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
        de: "Eine Frau aus Belgien ist  Belgierin.",
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
        de: "Ein Mann aus Belize ist Belizer.",
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
        de: "Eine Frau aus Belize ist  Belizerin.",
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
        de: "Ein Mann aus Benin ist Beniner.",
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
        de: "Eine Frau aus Benin ist  Beninerin.",
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
        de: "Ein Mann aus Bermuda ist Bermudier.",
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
        de: "Eine Frau aus Bermuda ist  Bermuderin.",
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
        de: "Ein Mann aus Bhutan ist Bhutaner.",
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
        de: "Eine Frau aus Bhutan ist  Bhutanerin.",
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
        de: "Ein Mann aus Bolivien ist Bolivianer.",
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
        de: "Eine Frau aus Bolivien ist  Bolivianerin.",
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
        de: "Ein Mann aus Botswana ist Motswana.",
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
        de: "Eine Frau aus Botswana ist Motswana.",
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
        de: "Ein Mann aus Brasilien ist Brasilianer.",
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
        de: "Eine Frau aus Brasilien ist  Brasilianerin.",
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
  // General Term: Jungferninselbewohner (ami or brit added. )
  // Specific Island Demonyms
  // (Local/English terms commonly used):St. Croix: Crucian / CrucianerSt.
  // Thomas: Thomian / St. ThomianerSt. John: Johnian / St. Johnianer
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
        de: "Ein Mann aus Brunei ist Bruneier.",
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
        de: "Eine Frau aus Brunei ist  Bruneierin.",
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
        de: "Ein Mann aus Burkina Faso ist Burkiner.",
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
        de: "Eine Frau aus Burkina Faso ist  Burkinerin.",
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
        de: "Ein Mann aus Myanmar ist Burmese.",
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
        de: "Eine Frau aus Myanmar ist  Burmesdin.",
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
        de: "Ein Mann aus Burundi ist Burundier.",
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
        de: "Eine Frau aus Burundi ist  Burunderin.",
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
        de: "Ein Mann aus Kambodscha ist Kambodschaner.",
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
        de: "Eine Frau aus Kambodscha ist  Kambodschanerin.",
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
        de: "Ein Mann aus Kamerun ist Kameruner.",
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
        de: "Eine Frau aus Kamerun ist  Kamerunerin.",
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
        de: "Ein Mann aus Kanada ist Kanadier.",
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
        de: "Eine Frau aus Kanada ist  Kanadierin.",
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
        de: "Ein Mann aus Kap Verde ist Kap-Verdier.",
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
        de: "Eine Frau aus Kap Verde ist  Kap-Verdierin.",
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
        de: "Ein Mann aus der Zentralafrikanischen Republik ist Zentralafrikaner.",
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
        de: "Eine Frau aus der Zentralafrikanischen Republik ist  Zentralafrikanerin.",
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
        de: "Ein Mann aus Tschad ist Tschader.",
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
        de: "Eine Frau aus Tschad ist  Tschaderin.",
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
        de: "Ein Mann aus Chile ist Chilene.",
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
        de: "Eine Frau aus Chile ist  Chilenin.",
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
        de: "Ein Mann aus Kolumbien ist Kolumbianer.",
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
        de: "Eine Frau aus Kolumbien ist  Kolumbianerin.",
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
        de: "Ein Mann aus Komoren ist Komoraner.",
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
        de: "Eine Frau aus Komoren ist  Komanerin.",
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
        de: "Ein Mann aus dem Kongo ist Kongolese.",
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
        de: "Eine Frau aus dem Kongo ist  Kongolesin.",
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
        de: "Ein Mann aus Costa Rica ist Costa-Ricaner.",
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
        de: "Eine Frau aus Costa Rica ist  Costa-Ricanerin.",
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
        de: "Ein Mann aus Kroatien ist Kroate.",
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
        de: "Eine Frau aus Kroatien ist  Kroatin.",
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
        de: "Ein Mann aus Kuba ist Kubaner.",
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
        de: "Eine Frau aus Kuba ist  Kubanerin.",
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
        de: "Ein Mann aus Zypern ist Zyprer.",
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
        de: "Eine Frau aus Zypern ist  Zyprerin.",
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
        de: "Ein Mann aus Tschechien ist Tscheche.",
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
        de: "Eine Frau aus Tschechien ist  Tschechin.",
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
        de: "Ein Mann aus Dschibuti ist Dschibutier.",
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
        de: "Eine Frau aus Dschibuti ist  Dschibruterin.",
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
        de: "Ein Mann aus der Dominikanischen Republik ist Dominikaner.",
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
        de: "Eine Frau aus der Dominikanischen Republik ist  Dominikanerin.",
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
        de: "Ein Mann aus den Niederlanden ist Niederländer.",
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
        de: "Eine Frau aus den Niederlanden ist  Niederländerin.",
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
        de: "Ein Mann aus Osttimor ist Timorer.",
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
        de: "Eine Frau aus Osttimor ist  Timorer.",
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
        de: "Ein Mann aus Ecuador ist Ecuadorianer.",
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
        de: "Eine Frau aus Ecuador ist  Ecuadorianerin.",
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
        de: "Ein Mann aus Ägypten ist Ägypter.",
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
        de: "Eine Frau aus Ägypten ist  Ägypterin.",
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
        de: "Ein Mann aus den VAE ist Emirater.",
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
        de: "Eine Frau aus den VAE ist  Emiraterin.",
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
        de: "Ein Mann aus England ist Engländer.",
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
        de: "Eine Frau aus England ist  Engländerin.",
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
        de: "Ein Mann aus Äquatorialguinea ist Äquatorialguineer.",
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
        de: "Eine Frau aus Äquatorialguinea ist  Äquatorialguineerin.",
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
        de: "Eine Frau aus Eritrea ist  Eritreerin.",
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
        de: "Ein Mann aus Estland ist Este.",
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
        de: "Eine Frau aus Estland ist  Estin.",
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
        de: "Ein Mann aus Äthiopien ist Äthiopier.",
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
        de: "Eine Frau aus Äthiopien ist  Äthiopierin.",
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
        de: "Ein Mann aus den Färöern ist Färinger.",
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
        de: "Eine Frau aus den Färöern ist  Färingerin.",
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
        de: "Ein Mann aus Fidschi ist Fidschianer.",
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
        de: "Eine Frau aus Fidschi ist  Fidschianerin.",
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
        de: "Ein Mann aus den Philippinen ist Philippiner.",
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
        de: "Eine Frau aus den Philippinen ist  Philippinerin.",
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
        de: "Ein Mann aus Finnland ist Finne.",
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
        de: "Eine Frau aus Finnland ist  Finnin.",
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
        de: "Ein Mann aus Frankreich ist Franzose.",
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
        de: "Eine Frau aus Frankreich ist  Französin.",
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
        de: "Ein Mann aus Gabun ist Gabuner.",
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
        de: "Eine Frau aus Gabun ist  Gabunerin.",
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
        de: "Ein Mann aus Gambia ist Gambier.",
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
        de: "Eine Frau aus Gambia ist  Gambierin.",
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
        de: "Ein Mann aus Georgien ist Georgier.",
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
        de: "Eine Frau aus Georgien ist  Georgierin.",
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
        de: "Ein Mann aus Deutschland ist Deutscher.",
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
        de: "Eine Frau aus Deutschland ist  Deutsche.",
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
        de: "Ein Mann aus Ghana ist Ghanaer.",
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
        de: "Eine Frau aus Ghana ist  Ghanaerin.",
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
        de: "Ein Mann aus Gibraltar ist Gibraltarer.",
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
        de: "Eine Frau aus Gibraltar ist  Gibraltarerin.",
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
        de: "Ein Mann aus Griechenland ist Grieche.",
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
        de: "Eine Frau aus Griechenland ist  Griechin.",
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
        de: "Ein Mann aus Grönland ist Grönländer.",
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
        de: "Eine Frau aus Grönland ist  Grönländerin.",
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
        de: "Ein Mann aus Grenada ist Grenader.",
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
        de: "Eine Frau aus Grenada ist  Grenaderin.",
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
        de: "Ein Mann aus Guam ist Guamaner.",
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
        de: "Eine Frau aus Guam ist  Guamanerin.",
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
        de: "Ein Mann aus Guatemala ist Guatemalteke.",
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
        de: "Eine Frau aus Guatemala ist  Guatemaltekin.",
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
    noun: "Guinea-Bissauer",
    plural: "Guinea-Bissauer",
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
        de: "Ein Mann aus Guinea ist Guineer.",
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
        de: "Eine Frau aus Guinea ist  Guineerin.",
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
        de: "Ein Mann aus Guyana ist Guyaner.",
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
        de: "Eine Frau aus Guyana ist  Guyanerin.",
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
        de: "Ein Mann aus Haiti ist Haitianer.",
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
        de: "Eine Frau aus Haiti ist  Haitianerin.",
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
        de: "Ein Mann aus Honduras ist Honduraner.",
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
        de: "Eine Frau aus Honduras ist  Honduranerin.",
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
        de: "Ein Mann aus Ungarn ist Ungar.",
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
        de: "Eine Frau aus Ungarn ist  Ungarin.",
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
        de: "Ein Mann aus Island ist Isländer.",
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
        de: "Eine Frau aus Island ist  Isländerin.",
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
        de: "Ein Mann aus Indien ist Inder.",
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
        de: "Eine Frau aus Indien ist  Inderin.",
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
        de: "Ein Mann aus Indonesien ist Indonesier.",
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
        de: "Eine Frau aus Indonesien ist  Indonesierin.",
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
        de: "Ein Mann aus dem Iran ist Iraner.",
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
        de: "Eine Frau aus dem Iran ist  Iranerin.",
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
        de: "Ein Mann aus dem Irak ist Iraker.",
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
        de: "Eine Frau aus dem Irak ist  Irakerin.",
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
        de: "Ein Mann aus Irland ist Ire.",
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
        de: "Eine Frau aus Irland ist  Irin.",
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
        de: "Ein Mann aus Israel ist Israeli.",
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
        de: "Eine Frau aus Israel ist  Israeli.",
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
        de: "Ein Mann aus Italien ist Italiener.",
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
        de: "Eine Frau aus Italien ist  Italienerin.",
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
        de: "Ein Mann aus Elfenbeinküste ist Ivorer.",
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
        de: "Eine Frau aus Elfenbeinküste ist  Ivorerin.",
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
        de: "Ein Mann aus Jamaika ist Jamaikaner.",
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
        de: "Eine Frau aus Jamaika ist  Jamaikanerin.",
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
        de: "Ein Mann aus Japan ist Japaner.",
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
        de: "Eine Frau aus Japan ist  Japanerin.",
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
        de: "Ein Mann aus Jordanien ist Jordanier.",
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
        de: "Eine Frau aus Jordanien ist  Jordanierin.",
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
        de: "Ein Mann aus Kasachstan ist Kasache.",
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
        de: "Eine Frau aus Kasachstan ist  Kasachin.",
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
        de: "Ein Mann aus Kenia ist Kenianer.",
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
        de: "Eine Frau aus Kenia ist  Kenianerin.",
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
    eng: "I-Kiribati",
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
    eng: "I-Kiribati",
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
        de: "Ein Mann aus dem Kosovo ist Kosovare.",
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
        de: "Eine Frau aus dem Kosovo ist  Kosovarin.",
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
  {
    id: 50118,
    eng: "Kuwaiti",
    article: "der",
    noun: "Kuwaiter",
    plural: "Kuwaiter",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kuwaiterin",
      plural: "Kuwaiterinnen",
    },
    notes: {
      miscNote:
        "Kuwait is a wealthy Gulf state known for oil reserves. Arabic is official; English is widely spoken in business and education.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kuwait ist Kuwaiter.",
        en: "A man from Kuwait is a Kuwaiti.",
        case: "nom",
      },
      {
        de: "Der Kuwaiter spricht Arabisch und Englisch.",
        en: "The Kuwaiti speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51118,
    eng: "Kuwaiti",
    article: "die",
    noun: "Kuwaiterin",
    plural: "Kuwaiterinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kuwaiter", plural: "Kuwaiter" },
    notes: {
      miscNote:
        "Kuwait is a wealthy Gulf state known for oil reserves. Arabic is official; English is widely spoken in business and education.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kuwait ist  Kuwaiterin.",
        en: "A woman from Kuwait is a Kuwaiti.",
        case: "nom",
      },
      {
        de: "Die Kuwaiterin spricht Arabisch und Französisch.",
        en: "The Kuwaiti speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50119,
    eng: "Kyrgyz",
    article: "der",
    noun: "Kirgise",
    plural: "Kirgisen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Kirgisin", plural: "Kirgisinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Kyrgyzstan is a mountainous country in Central Asia. Kyrgyz is official; Russian is widely spoken as a second language.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kirgisistan ist Kirgise.",
        en: "A man from Kyrgyzstan is a Kyrgyz.",
        case: "nom",
      },
      {
        de: "Der Kirgise spricht Kirgisisch und Russisch.",
        en: "The Kyrgyz speaks Kyrgyz and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51119,
    eng: "Kyrgyz",
    article: "die",
    noun: "Kirgisin",
    plural: "Kirgisinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Kirgise", plural: "Kirgisen" },
    notes: {
      miscNote:
        "Kyrgyzstan is a mountainous country in Central Asia. Kyrgyz is official; Russian is widely spoken as a second language.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kirgisistan ist  Kirgisin.",
        en: "A woman from Kyrgyzstan is a Kyrgyz.",
        case: "nom",
      },
      {
        de: "Die Kirgisin spricht Kirgisisch und Englisch.",
        en: "The Kyrgyz speaks Kyrgyz and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50120,
    eng: "Lao",
    article: "der",
    noun: "Laote",
    plural: "Laoten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Laotin", plural: "Laotinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Laos is a Southeast Asian country known for temples and the Mekong River. Lao is official; French is still understood by older generations.",
    },
    sentences: [
      {
        de: "Ein Mann aus Laos ist Laote.",
        en: "A man from Laos is a Lao.",
        case: "nom",
      },
      {
        de: "Der Laote spricht Laotisch und Englisch.",
        en: "The Lao speaks Lao and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51120,
    eng: "Lao",
    article: "die",
    noun: "Laotin",
    plural: "Laotinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Laote", plural: "Laoten" },
    notes: {
      miscNote:
        "Laos is a Southeast Asian country known for temples and the Mekong River. Lao is official; French is still understood by older generations.",
    },
    sentences: [
      {
        de: "Eine Frau aus Laos ist  Laotin.",
        en: "A woman from Laos is a Lao.",
        case: "nom",
      },
      {
        de: "Die Laotin spricht Laotisch und Vietnamesisch.",
        en: "The Lao speaks Lao and Vietnamese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50121,
    eng: "Latvian",
    article: "der",
    noun: "Lette",
    plural: "Letten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Lettin", plural: "Lettinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Latvia is a Baltic country known for its pine forests and amber. Latvian is official; Russian is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Lettland ist Lette.",
        en: "A man from Latvia is a Latvian.",
        case: "nom",
      },
      {
        de: "Der Lette spricht Lettisch und Russisch.",
        en: "The Latvian speaks Latvian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51121,
    eng: "Latvian",
    article: "die",
    noun: "Lettin",
    plural: "Lettinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Lette", plural: "Letten" },
    notes: {
      miscNote:
        "Latvia is a Baltic country known for its pine forests and amber. Latvian is official; Russian is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Lettland ist  Lettin.",
        en: "A woman from Latvia is a Latvian.",
        case: "nom",
      },
      {
        de: "Die Lettin spricht Lettisch und Englisch.",
        en: "The Latvian speaks Latvian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50122,
    eng: "Lebanese",
    article: "der",
    noun: "Libanese",
    plural: "Libanesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Libanesin",
      plural: "Libanesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Lebanon is a Middle Eastern country with stunning Mediterranean coastline. Arabic is official; French and English are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Libanon ist Libanese.",
        en: "A man from Lebanon is a Lebanese.",
        case: "nom",
      },
      {
        de: "Der Libanese spricht Arabisch und Französisch.",
        en: "The Lebanese speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51122,
    eng: "Lebanese",
    article: "die",
    noun: "Libanesin",
    plural: "Libanesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Libanese", plural: "Libanesen" },
    notes: {
      miscNote:
        "Lebanon is a Middle Eastern country with stunning Mediterranean coastline. Arabic is official; French and English are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Libanon ist  Libanesin.",
        en: "A woman from Lebanon is a Lebanese.",
        case: "nom",
      },
      {
        de: "Die Libanesin spricht Arabisch und Englisch.",
        en: "The Lebanese speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50123,
    eng: "Liberian",
    article: "der",
    noun: "Liberianer",
    plural: "Liberianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Liberianerin",
      plural: "Liberianerinnen",
    },
    notes: {
      miscNote:
        "Liberia is the only African country founded by freed American slaves. English is official; Mande and Kru languages are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Liberia ist Liberianer.",
        en: "A man from Liberia is a Liberian.",
        case: "nom",
      },
      {
        de: "Der Liberianer spricht Englisch und Mande.",
        en: "The Liberian speaks English and Mande.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51123,
    eng: "Liberian",
    article: "die",
    noun: "Liberianerin",
    plural: "Liberianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Liberianer",
      plural: "Liberianer",
    },
    notes: {
      miscNote:
        "Liberia is the only African country founded by freed American slaves. English is official; Mande and Kru languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Liberia ist  Liberianerin.",
        en: "A woman from Liberia is a Liberian.",
        case: "nom",
      },
      {
        de: "Die Liberianerin spricht Englisch und Kru.",
        en: "The Liberian speaks English and Kru.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50124,
    eng: "Libyan",
    article: "der",
    noun: "Libyer",
    plural: "Libyer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Libyerin", plural: "Libyerinnen" },
    notes: {
      miscNote:
        "Libya is a North African country with Saharan landscapes. Arabic is official; Berber languages are spoken by indigenous populations.",
    },
    sentences: [
      {
        de: "Ein Mann aus Libyen ist Libyer.",
        en: "A man from Libya is a Libyan.",
        case: "nom",
      },
      {
        de: "Der Libyer spricht Arabisch und Tamazight.",
        en: "The Libyan speaks Arabic and Tamazight.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51124,
    eng: "Libyan",
    article: "die",
    noun: "Libyerin",
    plural: "Libyerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Libyer", plural: "Libyer" },
    notes: {
      miscNote:
        "Libya is a North African country with Saharan landscapes. Arabic is official; Berber languages are spoken by indigenous populations.",
    },
    sentences: [
      {
        de: "Eine Frau aus Libyen ist  Libyerin.",
        en: "A woman from Libya is a Libyan.",
        case: "nom",
      },
      {
        de: "Die Libyerin spricht Arabisch und Englisch.",
        en: "The Libyan speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50125,
    eng: "Liechtensteiner", //der Liechtensteiner, die Liechtensteinerin
    article: "der",
    noun: "Liechtensteiner",
    plural: "Liechtensteiner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Liechtensteinerin",
      plural: "Liechtensteinerinnen",
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
    id: 51125,
    eng: "Liechtensteiner",
    article: "die",
    noun: "Liechtensteinerin",
    plural: "Liechtensteinerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Liechtensteiner",
      plural: "Liechtensteiner",
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
    id: 50126,
    eng: "Lithuanian",
    article: "der",
    noun: "Litauer",
    plural: "Litauer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Litauerin",
      plural: "Litauerinnen",
    },
    notes: {
      miscNote:
        "Lithuania is a Baltic country known for its lakes and forests. Lithuanian is official; Russian is understood by older generations.",
    },
    sentences: [
      {
        de: "Ein Mann aus Litauen ist Litauer.",
        en: "A man from Lithuania is a Lithuanian.",
        case: "nom",
      },
      {
        de: "Der Litauer spricht Litauisch und Russisch.",
        en: "The Lithuanian speaks Lithuanian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51126,
    eng: "Lithuanian",
    article: "die",
    noun: "Litauerin",
    plural: "Litauerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Litauer", plural: "Litauer" },
    notes: {
      miscNote:
        "Lithuania is a Baltic country known for its lakes and forests. Lithuanian is official; Russian is understood by older generations.",
    },
    sentences: [
      {
        de: "Eine Frau aus Litauen ist  Litauerin.",
        en: "A woman from Lithuania is a Lithuanian.",
        case: "nom",
      },
      {
        de: "Die Litauerin spricht Litauisch und Englisch.",
        en: "The Lithuanian speaks Lithuanian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50127,
    eng: "Luxembourger",
    article: "der",
    noun: "Luxemburger",
    plural: "Luxemburger",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Luxemburgerin",
      plural: "Luxemburgerinnen",
    },
    notes: {
      miscNote:
        "Luxembourg is a small but prosperous country. French, German, and Luxembourgish are all official languages!",
    },
    sentences: [
      {
        de: "Ein Mann aus Luxemburg ist Luxemburger.",
        en: "A man from Luxembourg is a Luxembourger.",
        case: "nom",
      },
      {
        de: "Der Luxemburger spricht Luxemburgisch und Französisch.",
        en: "The Luxembourger speaks Luxembourgish and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51127,
    eng: "Luxembourger",
    article: "die",
    noun: "Luxemburgerin",
    plural: "Luxemburgerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Luxemburger",
      plural: "Luxemburger",
    },
    notes: {
      miscNote:
        "Luxembourg is a small but prosperous country. French, German, and Luxembourgish are all official languages!",
    },
    sentences: [
      {
        de: "Eine Frau aus Luxemburg ist  Luxemburgerin.",
        en: "A woman from Luxembourg is a Luxembourger.",
        case: "nom",
      },
      {
        de: "Die Luxemburgerin spricht Luxemburgisch und Deutsch.",
        en: "The Luxembourger speaks Luxembourgish and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50128,
    eng: "Macau people",
    article: "der",
    noun: "Makauer",
    plural: "Makauer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Makauerin",
      plural: "Makaerinnen",
    },
    notes: {
      miscNote:
        "Macau is a Special Administrative Region of China known for gambling and Portuguese colonial architecture. Cantonese and Mandarin are official; Portuguese is also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Macau ist Makauer.",
        en: "A man from Macau is a Macanese.",
        case: "nom",
      },
      {
        de: "Der Makauer spricht Kantonesisch und Mandarin.",
        en: "The Macanese speaks Cantonese and Mandarin.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51128,
    eng: "Macau people",
    article: "die",
    noun: "Makauerin",
    plural: "Makaerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Makauer", plural: "Makauer" },
    notes: {
      miscNote:
        "Macau is a Special Administrative Region of China known for gambling and Portuguese colonial architecture. Cantonese and Mandarin are official; Portuguese is also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Macau ist  Makauerin.",
        en: "A woman from Macau is a Macanese.",
        case: "nom",
      },
      {
        de: "Die Makauerin spricht Kantonesisch und Portugiesisch.",
        en: "The Macanese speaks Cantonese and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50129,
    eng: "Macedonian",
    article: "der",
    noun: "Mazedonier",
    plural: "Mazedonier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Makedonerin",
      plural: "Makedonerinnen",
    },
    notes: {
      miscNote:
        "North Macedonia is a Balkan country known for its lakes and mountains. Macedonian is official; Albanian is also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Nordmazedonien ist Mazedonier.",
        en: "A man from North Macedonia is a Macedonian.",
        case: "nom",
      },
      {
        de: "Der Mazedonier spricht Makedonisch und Albanisch.",
        en: "The Macedonian speaks Macedonian and Albanian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51129,
    eng: "Macedonian",
    article: "die",
    noun: "Makedonerin",
    plural: "Makedonerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Mazedonier",
      plural: "Mazedonier",
    },
    notes: {
      miscNote:
        "North Macedonia is a Balkan country known for its lakes and mountains. Macedonian is official; Albanian is also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nordmazedonien ist  Makedonerin.",
        en: "A woman from North Macedonia is a Macedonian.",
        case: "nom",
      },
      {
        de: "Die Makedonerin spricht Makedonisch und Englisch.",
        en: "The Macedonian speaks Macedonian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50130,
    eng: "Malagasy",
    article: "der",
    noun: "Madagasse",
    plural: "Madagassen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Madagassin",
      plural: "Madagassinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Madagascar is the world's fourth-largest island with unique wildlife found nowhere else. Malagasy is official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Madagaskar ist Madagasse.",
        en: "A man from Madagascar is Malagasy.",
        case: "nom",
      },
      {
        de: "Der Madagasse spricht Malagassisch und Französisch.",
        en: "The Malagasy speaks Malagasy and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51130,
    eng: "Malagasy",
    article: "die",
    noun: "Madagassin",
    plural: "Madagassinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Madagasse", plural: "Madagassen" },
    notes: {
      miscNote:
        "Madagascar is the world's fourth-largest island with unique wildlife found nowhere else. Malagasy is official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Madagaskar ist  Madagassin.",
        en: "A woman from Madagascar is Malagasy.",
        case: "nom",
      },
      {
        de: "Die Madagassin spricht Malagassisch und Englisch.",
        en: "The Malagasy speaks Malagasy and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50131,
    eng: "Malawian",
    article: "der",
    noun: "Malawier",
    plural: "Malawier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Malawerin",
      plural: "Malawerinnen",
    },
    notes: {
      miscNote:
        "Malawi is known for Lake Malawi, one of Africa's largest lakes. English and Chichewa are official; over 15 languages are spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Malawi ist Malawier.",
        en: "A man from Malawi is a Malawian.",
        case: "nom",
      },
      {
        de: "Der Malawier spricht Englisch und Chichewa.",
        en: "The Malawian speaks English and Chichewa.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51131,
    eng: "Malawian",
    article: "die",
    noun: "Malawerin",
    plural: "Malawerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Malawier", plural: "Malawier" },
    notes: {
      miscNote:
        "Malawi is known for Lake Malawi, one of Africa's largest lakes. English and Chichewa are official; over 15 languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Malawi ist  Malawerin.",
        en: "A woman from Malawi is a Malawian.",
        case: "nom",
      },
      {
        de: "Die Malawerin spricht Englisch und Yao.",
        en: "The Malawian speaks English and Yao.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50132,
    eng: "Malaysian",
    article: "der",
    noun: "Malaysier",
    plural: "Malaysier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Malaysierin",
      plural: "Malaysierinnen",
    },
    notes: {
      miscNote:
        "Malaysia is a Southeast Asian country spanning Peninsular Malaysia and the island of Borneo. Malay is official; English is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Malaysia ist Malaysier.",
        en: "A man from Malaysia is a Malaysian.",
        case: "nom",
      },
      {
        de: "Der Malaysier spricht Malaiisch und Englisch.",
        en: "The Malaysian speaks Malay and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51132,
    eng: "Malaysian",
    article: "die",
    noun: "Malaysierin",
    plural: "Malaysierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Malaysier", plural: "Malaysier" },
    notes: {
      miscNote:
        "Malaysia is a Southeast Asian country spanning Peninsular Malaysia and the island of Borneo. Malay is official; English is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Malaysia ist  Malaysierin.",
        en: "A woman from Malaysia is a Malaysian.",
        case: "nom",
      },
      {
        de: "Die Malaysierin spricht Malaiisch und Chinesisch.",
        en: "The Malaysian speaks Malay and Chinese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50133,
    eng: "Maldivian",
    article: "der",
    noun: "Malediver",
    plural: "Malediver",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Malediverin",
      plural: "Maledivinnen",
    },
    notes: {
      miscNote:
        "The Maldives is a tropical island nation in the Indian Ocean, famous for coral reefs and luxury resorts. Dhivehi is official; English is widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus den Malediven ist Malediver.",
        en: "A man from the Maldives is a Maldivian.",
        case: "nom",
      },
      {
        de: "Der Malediver spricht Dhivehi und Englisch.",
        en: "The Maldivian speaks Dhivehi and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51133,
    eng: "Maldivian",
    article: "die",
    noun: "Malediverin",
    plural: "Maledivinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Malediver", plural: "Malediver" },
    notes: {
      miscNote:
        "The Maldives is a tropical island nation in the Indian Ocean, famous for coral reefs and luxury resorts. Dhivehi is official; English is widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus den Malediven ist  Malediverin.",
        en: "A woman from the Maldives is a Maldivian.",
        case: "nom",
      },
      {
        de: "Die Malediverin spricht Dhivehi und Französisch.",
        en: "The Maldivian speaks Dhivehi and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50134,
    eng: "Malian",
    article: "der",
    noun: "Malier",
    plural: "Malier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Malierin", plural: "Malierinnen" },
    notes: {
      miscNote:
        "Mali is a West African country with rich musical traditions and Timbuktu's historic libraries. French is official; Bambara is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Mali ist Malier.",
        en: "A man from Mali is a Malian.",
        case: "nom",
      },
      {
        de: "Der Malier spricht Französisch und Bambara.",
        en: "The Malian speaks French and Bambara.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51134,
    eng: "Malian",
    article: "die",
    noun: "Malierin",
    plural: "Malierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Malier", plural: "Malier" },
    notes: {
      miscNote:
        "Mali is a West African country with rich musical traditions and Timbuktu's historic libraries. French is official; Bambara is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Mali ist  Malierin.",
        en: "A woman from Mali is a Malian.",
        case: "nom",
      },
      {
        de: "Die Malierin spricht Französisch und Songhai.",
        en: "The Malian speaks French and Songhai.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50135,
    eng: "Maltese",
    article: "der",
    noun: "Malteser",
    plural: "Malteser",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Malteserin",
      plural: "Malteserinnen",
    },
    notes: {
      miscNote:
        "Malta is a Mediterranean island nation with ancient temples. Maltese and English are both official; Italian is also understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Malta ist Malteser.",
        en: "A man from Malta is a Maltese.",
        case: "nom",
      },
      {
        de: "Der Malteser spricht Maltesisch und Englisch.",
        en: "The Maltese speaks Maltese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51135,
    eng: "Maltese",
    article: "die",
    noun: "Malteserin",
    plural: "Malteserinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Malteser", plural: "Malteser" },
    notes: {
      miscNote:
        "Malta is a Mediterranean island nation with ancient temples. Maltese and English are both official; Italian is also understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Malta ist  Malteserin.",
        en: "A woman from Malta is a Maltese.",
        case: "nom",
      },
      {
        de: "Die Malteserin spricht Maltesisch und Italienisch.",
        en: "The Maltese speaks Maltese and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50136,
    eng: "Marshallese",
    article: "der",
    noun: "Marschallese",
    plural: "Marschalesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Marschalsin",
      plural: "Marschalsinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "The Marshall Islands is a Pacific island nation. English is official; Marshallese is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus den Marshallinseln ist Marschallese.",
        en: "A man from the Marshall Islands is Marshallese.",
        case: "nom",
      },
      {
        de: "Der Marschallese spricht Englisch und Marshallisch.",
        en: "The Marshallese speaks English and Marshallese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51136,
    eng: "Marshallese",
    article: "die",
    noun: "Marschalsin",
    plural: "Marschalsinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Marschallese",
      plural: "Marschalesen",
    },
    notes: {
      miscNote:
        "The Marshall Islands is a Pacific island nation. English is official; Marshallese is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus den Marshallinseln ist  Marschalsin.",
        en: "A woman from the Marshall Islands is Marshallese.",
        case: "nom",
      },
      {
        de: "Die Marschalsin spricht Englisch und Japanisch.",
        en: "The Marshallese speaks English and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50137,
    eng: "Martinican",
    article: "der",
    noun: "Martinikaner",
    plural: "Martinikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Martinikanerin",
      plural: "Martinikanerinnen",
    },
    notes: {
      miscNote:
        "Multi-word or uncertain nationality - needs verification (Martinique)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51137,
    eng: "Martinican",
    article: "die",
    noun: "Martinikanerin",
    plural: "Martinikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Martinikaner",
      plural: "Martinikaner",
    },
    notes: {
      miscNote:
        "Multi-word or uncertain nationality - needs verification (Martinique)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50138,
    eng: "Mauritanian",
    article: "der",
    noun: "Mauretanier",
    plural: "Mauretanier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Mauretanierin",
      plural: "Mauretanierinnen",
    },
    notes: {
      miscNote:
        "Mauritania is a North African country with vast Saharan landscapes. Arabic is official; French and Berber languages are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Mauretanien ist Mauretanier.",
        en: "A man from Mauritania is a Mauritanian.",
        case: "nom",
      },
      {
        de: "Der Mauretanier spricht Arabisch und Französisch.",
        en: "The Mauritanian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51138,
    eng: "Mauritanian",
    article: "die",
    noun: "Mauretanierin",
    plural: "Mauretanierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Mauretanier",
      plural: "Mauretanier",
    },
    notes: {
      miscNote:
        "Mauritania is a North African country with vast Saharan landscapes. Arabic is official; French and Berber languages are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Mauretanien ist  Mauretanierin.",
        en: "A woman from Mauritania is a Mauritanian.",
        case: "nom",
      },
      {
        de: "Die Mauretanierin spricht Arabisch und Tamazight.",
        en: "The Mauritanian speaks Arabic and Tamazight.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50139,
    eng: "Mauritian",
    article: "der",
    noun: "Mauritier",
    plural: "Mauritier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Mauritierin",
      plural: "Mauritierinnen",
    },
    notes: {
      miscNote:
        "Mauritius is an island nation in the Indian Ocean. English and French are official; Mauritian Creole is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Mauritius ist Mauritier.",
        en: "A man from Mauritius is a Mauritian.",
        case: "nom",
      },
      {
        de: "Der Mauritier spricht Französisch und Englisch.",
        en: "The Mauritian speaks French and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51139,
    eng: "Mauritian",
    article: "die",
    noun: "Mauritierin",
    plural: "Mauritierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Mauritier", plural: "Mauritier" },
    notes: {
      miscNote:
        "Mauritius is an island nation in the Indian Ocean. English and French are official; Mauritian Creole is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Mauritius ist  Mauritierin.",
        en: "A woman from Mauritius is a Mauritian.",
        case: "nom",
      },
      {
        de: "Die Mauritierin spricht Französisch und Hindi.",
        en: "The Mauritian speaks French and Hindi.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50140,
    eng: "Mexican",
    article: "der",
    noun: "Mexikaner",
    plural: "Mexikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Mexikanerin",
      plural: "Mexikanerinnen",
    },
    notes: {
      miscNote:
        "Mexico is a vibrant country with ancient Aztec ruins, colorful culture, and incredible cuisine. Spanish is official; many indigenous languages are spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Mexiko ist Mexikaner.",
        en: "A man from Mexico is a Mexican.",
        case: "nom",
      },
      {
        de: "Der Mexikaner spricht Spanisch und Englisch.",
        en: "The Mexican speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51140,
    eng: "Mexican",
    article: "die",
    noun: "Mexikanerin",
    plural: "Mexikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Mexikaner", plural: "Mexikaner" },
    notes: {
      miscNote:
        "Mexico is a vibrant country with ancient Aztec ruins, colorful culture, and incredible cuisine. Spanish is official; many indigenous languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Mexiko ist  Mexikanerin.",
        en: "A woman from Mexico is a Mexican.",
        case: "nom",
      },
      {
        de: "Die Mexikanerin spricht Spanisch und Nahuatl.",
        en: "The Mexican speaks Spanish and Nahuatl.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50141,
    eng: "Micronesian",
    article: "der",
    noun: "Mikronesier",
    plural: "Mikronesier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Mikronesierin",
      plural: "Mikronesierinnen",
    },
    notes: {
      miscNote:
        "The Federated States of Micronesia is a Pacific island nation. English is official; Chuukese, Pohnpeian, and Kosraean are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Mikronesien ist Mikronesier.",
        en: "A man from Micronesia is a Micronesian.",
        case: "nom",
      },
      {
        de: "Der Mikronesier spricht Englisch und Chuukesisch.",
        en: "The Micronesian speaks English and Chuukese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51141,
    eng: "Micronesian",
    article: "die",
    noun: "Mikronesierin",
    plural: "Mikronesierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Mikronesier",
      plural: "Mikronesier",
    },
    notes: {
      miscNote:
        "The Federated States of Micronesia is a Pacific island nation. English is official; Chuukese, Pohnpeian, and Kosraean are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Mikronesien ist  Mikronesierin.",
        en: "A woman from Micronesia is a Micronesian.",
        case: "nom",
      },
      {
        de: "Die Mikronesierin spricht Englisch und Pohnpeisch.",
        en: "The Micronesian speaks English and Pohnpeian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50142,
    eng: "Moldovan",
    article: "der",
    noun: "Moldauer",
    plural: "Moldauer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Moldauerin",
      plural: "Moldauerinnen",
    },
    notes: {
      miscNote:
        "Moldova is a small Eastern European country known for wine production. Moldovan (essentially Romanian) is official; Russian is widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Moldau ist Moldauer.",
        en: "A man from Moldova is a Moldovan.",
        case: "nom",
      },
      {
        de: "Der Moldauer spricht Moldauisch und Russisch.",
        en: "The Moldovan speaks Moldovan and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51142,
    eng: "Moldovan",
    article: "die",
    noun: "Moldauerin",
    plural: "Moldauerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Moldauer", plural: "Moldauer" },
    notes: {
      miscNote:
        "Moldova is a small Eastern European country known for wine production. Moldovan (essentially Romanian) is official; Russian is widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Moldau ist  Moldauerin.",
        en: "A woman from Moldova is a Moldovan.",
        case: "nom",
      },
      {
        de: "Die Moldauerin spricht Moldauisch und Ukrainisch.",
        en: "The Moldovan speaks Moldovan and Ukrainian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50143,
    eng: "Monegasque",
    article: "der",
    noun: "Monegasse",
    plural: "Monegassen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Monegassin",
      plural: "Monegassinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Monaco is a tiny but glamorous principality on the French Riviera. French is official; Monegasque (a local language) and Italian are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Monaco ist Monegasse.",
        en: "A man from Monaco is a Monegasque.",
        case: "nom",
      },
      {
        de: "Der Monegasse spricht Französisch und Italienisch.",
        en: "The Monegasque speaks French and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51143,
    eng: "Monegasque",
    article: "die",
    noun: "Monegassin",
    plural: "Monegassinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Monegasse", plural: "Monegassen" },
    notes: {
      miscNote:
        "Monaco is a tiny but glamorous principality on the French Riviera. French is official; Monegasque (a local language) and Italian are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Monaco ist  Monegassin.",
        en: "A woman from Monaco is a Monegasque.",
        case: "nom",
      },
      {
        de: "Die Monegassin spricht Französisch und Deutsch.",
        en: "The Monegasque speaks French and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50144,
    eng: "Mongolian",
    article: "der",
    noun: "Mongole",
    plural: "Mongolen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Mongolin",
      plural: "Mongolinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Mongolia is a vast country known for the Gobi Desert and nomadic traditions. Mongolian is official; Russian and English are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus der Mongolei ist Mongole.",
        en: "A man from Mongolia is a Mongolian.",
        case: "nom",
      },
      {
        de: "Der Mongole spricht Mongolisch und Russisch.",
        en: "The Mongolian speaks Mongolian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51144,
    eng: "Mongolian",
    article: "die",
    noun: "Mongolin",
    plural: "Mongolinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Mongole", plural: "Mongolen" },
    notes: {
      miscNote:
        "Mongolia is a vast country known for the Gobi Desert and nomadic traditions. Mongolian is official; Russian and English are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Mongolei ist  Mongolinnen.",
        en: "A woman from Mongolia is a Mongolian.",
        case: "nom",
      },
      {
        de: "Die Mongolinnen spricht Mongolisch und Englisch.",
        en: "The Mongolian speaks Mongolian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50145,
    eng: "Montenegrin",
    article: "der",
    noun: "Montenegriner",
    plural: "Montenegriner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Montenegrinerin",
      plural: "Montenegrinerinnen",
    },
    notes: {
      miscNote:
        "Montenegro is a small Balkan country on the Adriatic Sea. Serbian is official; Albanian and Bosnian are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Montenegro ist Montenegriner.",
        en: "A man from Montenegro is a Montenegrin.",
        case: "nom",
      },
      {
        de: "Der Montenegriner spricht Serbisch und Englisch.",
        en: "The Montenegrin speaks Serbian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51145,
    eng: "Montenegrin",
    article: "die",
    noun: "Montenegrinerin",
    plural: "Montenegrinerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Montenegriner",
      plural: "Montenegriner",
    },
    notes: {
      miscNote:
        "Montenegro is a small Balkan country on the Adriatic Sea. Serbian is official; Albanian and Bosnian are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Montenegro ist  Montenegrinerin.",
        en: "A woman from Montenegro is a Montenegrin.",
        case: "nom",
      },
      {
        de: "Die Montenegrinerin spricht Serbisch und Albanisch.",
        en: "The Montenegrin speaks Serbian and Albanian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50146,
    eng: "Moroccan",
    article: "der",
    noun: "Marokkaner",
    plural: "Marokkaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Marokkanerin",
      plural: "Marokkanerinnen",
    },
    notes: {
      miscNote:
        "Morocco is a North African country where Africa meets Europe across the Strait of Gibraltar. Arabic and Tamazight (Berber) are official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Marokko ist Marokkaner.",
        en: "A man from Morocco is a Moroccan.",
        case: "nom",
      },
      {
        de: "Der Marokkaner spricht Arabisch und Französisch.",
        en: "The Moroccan speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51146,
    eng: "Moroccan",
    article: "die",
    noun: "Marokkanerin",
    plural: "Marokkanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Marokkaner",
      plural: "Marokkaner",
    },
    notes: {
      miscNote:
        "Morocco is a North African country where Africa meets Europe across the Strait of Gibraltar. Arabic and Tamazight (Berber) are official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Marokko ist  Marokkanerin.",
        en: "A woman from Morocco is a Moroccan.",
        case: "nom",
      },
      {
        de: "Die Marokkanerin spricht Arabisch und Tamazight.",
        en: "The Moroccan speaks Arabic and Tamazight.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50147,
    eng: "Mosotho",
    article: "der",
    noun: "Lesother",
    plural: "Lesother",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Mosotho", plural: "Basotho" },
    notes: {
      miscNote:
        "Lesotho uses a unique naming system and in English, the demonym is Mosotho (singular) and Basotho (plural). English and Sesotho are official; the country is completely surrounded by South Africa.",
    },
    sentences: [
      {
        de: "Ein Mann aus Lesotho ist Mosotho.",
        en: "A man from Lesotho is a Mosotho.",
        case: "nom",
      },
      {
        de: "Der Mosotho spricht Sesotho und Englisch.",
        en: "The Mosotho speaks Sesotho and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51147,
    eng: "Mosotho",
    article: "die",
    noun: "Lesotherin",
    plural: "Lesotherinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Mosotho", plural: "Basotho" },
    notes: {
      miscNote:
        "Lesotho uses a unique naming system and in English, the demonym is Mosotho (singular) and Basotho (plural). English and Sesotho are official; the country is completely surrounded by South Africa.",
    },
    sentences: [
      {
        de: "Eine Frau aus Lesotho ist Mosotho.",
        en: "A woman from Lesotho is a Mosotho.",
        case: "nom",
      },
      {
        de: "Die Mosotho spricht Sesotho und Afrikaans.",
        en: "The Mosotho speaks Sesotho and Afrikaans.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50148,
    eng: "Mozambican",
    article: "der",
    noun: "Mosambikaner",
    plural: "Mosambikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Mosambikanerin",
      plural: "Mosambikanerinnen",
    },
    notes: {
      miscNote:
        "Mozambique is a Southern African country known for beautiful beaches and coral reefs. Portuguese is official; Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Mosambik ist Mosambikaner.",
        en: "A man from Mozambique is a Mozambican.",
        case: "nom",
      },
      {
        de: "Der Mosambikaner spricht Portugiesisch und Makua.",
        en: "The Mozambican speaks Portuguese and Makua.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51148,
    eng: "Mozambican",
    article: "die",
    noun: "Mosambikanerin",
    plural: "Mosambikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Mosambikaner",
      plural: "Mosambikaner",
    },
    notes: {
      miscNote:
        "Mozambique is a Southern African country known for beautiful beaches and coral reefs. Portuguese is official; Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Mosambik ist  Mosambikanerin.",
        en: "A woman from Mozambique is a Mozambican.",
        case: "nom",
      },
      {
        de: "Die Mosambikanerin spricht Portugiesisch und Englisch.",
        en: "The Mozambican speaks Portuguese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50149,
    eng: "Namibian",
    article: "der",
    noun: "Namibier",
    plural: "Namibier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Namibierin",
      plural: "Namibierinnen",
    },
    notes: {
      miscNote:
        "Namibia is known for the Namib Desert and stunning landscapes. English is official; Afrikaans is widely spoken; many indigenous languages are used.",
    },
    sentences: [
      {
        de: "Ein Mann aus Namibia ist Namibier.",
        en: "A man from Namibia is a Namibian.",
        case: "nom",
      },
      {
        de: "Der Namibier spricht Englisch und Afrikaans.",
        en: "The Namibian speaks English and Afrikaans.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51149,
    eng: "Namibian",
    article: "die",
    noun: "Namibierin",
    plural: "Namibierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Namibier", plural: "Namibier" },
    notes: {
      miscNote:
        "Namibia is known for the Namib Desert and stunning landscapes. English is official; Afrikaans is widely spoken; many indigenous languages are used.",
    },
    sentences: [
      {
        de: "Eine Frau aus Namibia ist  Namibierin.",
        en: "A woman from Namibia is a Namibian.",
        case: "nom",
      },
      {
        de: "Die Namibierin spricht Englisch und Oshiwambo.",
        en: "The Namibian speaks English and Oshiwambo.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50150,
    eng: "Nauruan",
    article: "der",
    noun: "Nauruer",
    plural: "Nauruer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Nauruerin", plural: "Nauerinnen" },
    notes: {
      miscNote:
        "Nauru is the world's smallest island nation. English and Nauruan are official; it's known for phosphate mining and environmental challenges.",
    },
    sentences: [
      {
        de: "Ein Mann aus Nauru ist Nauruer.",
        en: "A man from Nauru is a Nauruan.",
        case: "nom",
      },
      {
        de: "Der Nauruer spricht Englisch und Nauruisch.",
        en: "The Nauruan speaks English and Nauruan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51150,
    eng: "Nauruan",
    article: "die",
    noun: "Nauruerin",
    plural: "Nauerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Nauruer", plural: "Nauruer" },
    notes: {
      miscNote:
        "Nauru is the world's smallest island nation. English and Nauruan are official; it's known for phosphate mining and environmental challenges.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nauru ist  Nauruerin.",
        en: "A woman from Nauru is a Nauruan.",
        case: "nom",
      },
      {
        de: "Die Nauruerin spricht Englisch und Japanisch.",
        en: "The Nauruan speaks English and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50151,
    eng: "Nepalese",
    article: "der",
    noun: "Nepale",
    plural: "Nepalen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Nepalin", plural: "Nepalinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Nepal is home to Mount Everest and rich Buddhist and Hindu traditions. Nepali is official; over 120 languages are spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Nepal ist Nepale.",
        en: "A man from Nepal is Nepalese.",
        case: "nom",
      },
      {
        de: "Der Nepale spricht Nepali und Englisch.",
        en: "The Nepalese speaks Nepali and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51151,
    eng: "Nepalese",
    article: "die",
    noun: "Nepalin",
    plural: "Nepalinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Nepale", plural: "Nepalen" },
    notes: {
      miscNote:
        "Nepal is home to Mount Everest and rich Buddhist and Hindu traditions. Nepali is official; over 120 languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nepal ist  Nepalin.",
        en: "A woman from Nepal is Nepalese.",
        case: "nom",
      },
      {
        de: "Die Nepalin spricht Nepali und Tibetisch.",
        en: "The Nepalese speaks Nepali and Tibetan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50152,
    eng: "New Zealander",
    article: "der",
    noun: "Neuseeländer",
    plural: "Neuseeländer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Neuseeländerin",
      plural: "Neuseeländerinnen",
    },
    notes: {
      miscNote:
        "New Zealand is known for stunning landscapes, the Maori culture, and the Lord of the Rings films. English is official; Te Reo Maori is co-official.",
    },
    sentences: [
      {
        de: "Ein Mann aus Neuseeland ist Neuseeländer.",
        en: "A man from New Zealand is a New Zealander.",
        case: "nom",
      },
      {
        de: "Der Neuseeländer spricht Englisch und Te Reo Maori.",
        en: "The New Zealander speaks English and Te Reo Maori.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51152,
    eng: "New Zealander",
    article: "die",
    noun: "Neuseeländerin",
    plural: "Neuseeländerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Neuseeländer",
      plural: "Neuseeländer",
    },
    notes: {
      miscNote:
        "New Zealand is known for stunning landscapes, the Maori culture, and the Lord of the Rings films. English is official; Te Reo Maori is co-official.",
    },
    sentences: [
      {
        de: "Eine Frau aus Neuseeland ist  Neuseeländerin.",
        en: "A woman from New Zealand is a New Zealander.",
        case: "nom",
      },
      {
        de: "Die Neuseeländerin spricht Englisch und Samoanisch.",
        en: "The New Zealander speaks English and Samoan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50153,
    eng: "Nicaraguan",
    article: "der",
    noun: "Nicaraguaner",
    plural: "Nicaraguaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Nicaraguanerin",
      plural: "Nicaraguanerinnen",
    },
    notes: {
      miscNote:
        "Nicaragua is a Central American country with lakes, volcanoes, and Caribbean beaches. Spanish is official; Miskito and Creole are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Nicaragua ist Nicaraguaner.",
        en: "A man from Nicaragua is a Nicaraguan.",
        case: "nom",
      },
      {
        de: "Der Nicaraguaner spricht Spanisch und Englisch.",
        en: "The Nicaraguan speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51153,
    eng: "Nicaraguan",
    article: "die",
    noun: "Nicaraguanerin",
    plural: "Nicaraguanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Nicaraguaner",
      plural: "Nicaraguaner",
    },
    notes: {
      miscNote:
        "Nicaragua is a Central American country with lakes, volcanoes, and Caribbean beaches. Spanish is official; Miskito and Creole are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nicaragua ist  Nicaraguanerin.",
        en: "A woman from Nicaragua is a Nicaraguan.",
        case: "nom",
      },
      {
        de: "Die Nicaraguanerin spricht Spanisch und Portugiesisch.",
        en: "The Nicaraguan speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50154,
    eng: "Nigerian",
    article: "der",
    noun: "Nigerianer",
    plural: "Nigerianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Nigerianerin",
      plural: "Nigerianerinnen",
    },
    notes: {
      miscNote:
        "Nigeria is Africa's most populous country known for Nollywood films and vibrant music. English is official; over 500 languages are spoken!",
    },
    sentences: [
      {
        de: "Ein Mann aus Nigeria ist Nigerianer.",
        en: "A man from Nigeria is a Nigerian.",
        case: "nom",
      },
      {
        de: "Der Nigerianer spricht Englisch und Yoruba.",
        en: "The Nigerian speaks English and Yoruba.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51154,
    eng: "Nigerian",
    article: "die",
    noun: "Nigerianerin",
    plural: "Nigerianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Nigerianer",
      plural: "Nigerianer",
    },
    notes: {
      miscNote:
        "Nigeria is Africa's most populous country known for Nollywood films and vibrant music. English is official; over 500 languages are spoken!",
    },
    sentences: [
      {
        de: "Eine Frau aus Nigeria ist  Nigerianerin.",
        en: "A woman from Nigeria is a Nigerian.",
        case: "nom",
      },
      {
        de: "Die Nigerianerin spricht Englisch und Igbo.",
        en: "The Nigerian speaks English and Igbo.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50155,
    eng: "Nigerien",
    article: "der",
    noun: "Niger",
    plural: "Niger",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Nigerin", plural: "Nigerinnen" },
    notes: {
      miscNote:
        "Niger is a West African country with Saharan landscapes. French is official; Hausa and Djerma are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Niger ist Niger.",
        en: "A man from Niger is a Nigerien.",
        case: "nom",
      },
      {
        de: "Der Niger spricht Französisch und Hausa.",
        en: "The Nigerien speaks French and Hausa.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51155,
    eng: "Nigerien",
    article: "die",
    noun: "Nigerin",
    plural: "Nigerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Niger", plural: "Niger" },
    notes: {
      miscNote:
        "Niger is a West African country with Saharan landscapes. French is official; Hausa and Djerma are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Niger ist  Nigerin.",
        en: "A woman from Niger is a Nigerien.",
        case: "nom",
      },
      {
        de: "Die Nigerin spricht Französisch und Djerma.",
        en: "The Nigerien speaks French and Djerma.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50156,
    eng: "Niuean",
    article: "der",
    noun: "Niueer",
    plural: "Niueer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Niueerin", plural: "Niueerinnen" },
    notes: {
      miscNote:
        "Niue is a small Pacific island nation in free association with New Zealand. English and Niuean are official languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Niue ist Niueer.",
        en: "A man from Niue is a Niuean.",
        case: "nom",
      },
      {
        de: "Der Niueer spricht Englisch und Niueanisch.",
        en: "The Niuean speaks English and Niuean.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51156,
    eng: "Niuean",
    article: "die",
    noun: "Niueerin",
    plural: "Niueerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Niueer", plural: "Niueer" },
    notes: {
      miscNote:
        "Niue is a small Pacific island nation in free association with New Zealand. English and Niuean are official languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Niue ist  Niueerin.",
        en: "A woman from Niue is a Niuean.",
        case: "nom",
      },
      {
        de: "Die Niueerin spricht Englisch und Samoanisch.",
        en: "The Niuean speaks English and Samoan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50157,
    eng: "North Korean",
    article: "der",
    noun: "Nordkoreaner",
    plural: "Nordkoreaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Nordkoreanierin",
      plural: "Nordkoreanerinnen",
    },
    notes: {
      miscNote:
        "North Korea is officially the Democratic People's Republic of Korea. Korean is official; it's one of the world's most isolated countries.",
    },
    sentences: [
      {
        de: "Ein Mann aus Nordkorea ist Nordkoreaner.",
        en: "A man from North Korea is a North Korean.",
        case: "nom",
      },
      {
        de: "Der Nordkoreaner spricht Koreanisch und Russisch.",
        en: "The North Korean speaks Korean and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51157,
    eng: "North Korean",
    article: "die",
    noun: "Nordkoreanierin",
    plural: "Nordkoreanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Nordkoreaner",
      plural: "Nordkoreaner",
    },
    notes: {
      miscNote:
        "North Korea is officially the Democratic People's Republic of Korea. Korean is official; it's one of the world's most isolated countries.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nordkorea ist  Nordkoreanierin.",
        en: "A woman from North Korea is a North Korean.",
        case: "nom",
      },
      {
        de: "Die Nordkoreanierin spricht Koreanisch und Chinesisch.",
        en: "The North Korean speaks Korean and Chinese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50158,
    eng: "Northern Irish",
    article: "der",
    noun: "Nordire",
    plural: "Nordiren",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Nordirin", plural: "Nordirinen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Northern Ireland is part of the United Kingdom and the island of Ireland. English is official; Irish (Gaeilge) is increasingly being learned.",
    },
    sentences: [
      {
        de: "Ein Mann aus Nordirland ist Nordire.",
        en: "A man from Northern Ireland is Northern Irish.",
        case: "nom",
      },
      {
        de: "Der Nordire spricht Englisch und Irisch.",
        en: "The Northern Irish speaks English and Irish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51158,
    eng: "Northern Irish",
    article: "die",
    noun: "Nordirin",
    plural: "Nordirinen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Nordire", plural: "Nordiren" },
    notes: {
      miscNote:
        "Northern Ireland is part of the United Kingdom and the island of Ireland. English is official; Irish (Gaeilge) is increasingly being learned.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nordirland ist  Nordirin.",
        en: "A woman from Northern Ireland is Northern Irish.",
        case: "nom",
      },
      {
        de: "Die Nordirin spricht Englisch und Gälisch.",
        en: "The Northern Irish speaks English and Gaelic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50159,
    eng: "Norwegian",
    article: "der",
    noun: "Norweger",
    plural: "Norweger",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Norwegerin",
      plural: "Norwegerinnen",
    },
    notes: {
      miscNote:
        "Norway is known for the Northern Lights, fjords, and skiing. Norwegian is official; Swedish and English are also widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Norwegen ist Norweger.",
        en: "A man from Norway is a Norwegian.",
        case: "nom",
      },
      {
        de: "Der Norweger spricht Norwegisch und Englisch.",
        en: "The Norwegian speaks Norwegian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51159,
    eng: "Norwegian",
    article: "die",
    noun: "Norwegerin",
    plural: "Norwegerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Norweger", plural: "Norweger" },
    notes: {
      miscNote:
        "Norway is known for the Northern Lights, fjords, and skiing. Norwegian is official; Swedish and English are also widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Norwegen ist  Norwegerin.",
        en: "A woman from Norway is a Norwegian.",
        case: "nom",
      },
      {
        de: "Die Norwegerin spricht Norwegisch und Deutsch.",
        en: "The Norwegian speaks Norwegian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50160,
    eng: "Omani",
    article: "der",
    noun: "Omaner",
    plural: "Omaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Omanerin", plural: "Omanerinnen" },
    notes: {
      miscNote:
        "Oman is a Gulf state known for mountain landscapes and frankincense. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Ein Mann aus Oman ist Omaner.",
        en: "A man from Oman is an Omani.",
        case: "nom",
      },
      {
        de: "Der Omaner spricht Arabisch und Englisch.",
        en: "The Omani speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51160,
    eng: "Omani",
    article: "die",
    noun: "Omanerin",
    plural: "Omanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Omaner", plural: "Omaner" },
    notes: {
      miscNote:
        "Oman is a Gulf state known for mountain landscapes and frankincense. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Eine Frau aus Oman ist  Omanerin.",
        en: "A woman from Oman is an Omani.",
        case: "nom",
      },
      {
        de: "Die Omanerin spricht Arabisch und Französisch.",
        en: "The Omani speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50161,
    eng: "Pakistani",
    article: "der",
    noun: "Pakistaner",
    plural: "Pakistaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Pakistanerin",
      plural: "Pakistanerinnen",
    },
    notes: {
      miscNote:
        "Pakistan is a South Asian country with diverse landscapes from mountains to deserts. Urdu is official; English is widely spoken; dozens of languages are used.",
    },
    sentences: [
      {
        de: "Ein Mann aus Pakistan ist Pakistaner.",
        en: "A man from Pakistan is a Pakistani.",
        case: "nom",
      },
      {
        de: "Der Pakistaner spricht Urdu und Englisch.",
        en: "The Pakistani speaks Urdu and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51161,
    eng: "Pakistani",
    article: "die",
    noun: "Pakistanerin",
    plural: "Pakistanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Pakistaner",
      plural: "Pakistaner",
    },
    notes: {
      miscNote:
        "Pakistan is a South Asian country with diverse landscapes from mountains to deserts. Urdu is official; English is widely spoken; dozens of languages are used.",
    },
    sentences: [
      {
        de: "Eine Frau aus Pakistan ist  Pakistanerin.",
        en: "A woman from Pakistan is a Pakistani.",
        case: "nom",
      },
      {
        de: "Die Pakistanerin spricht Urdu und Punjabi.",
        en: "The Pakistani speaks Urdu and Punjabi.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50162,
    eng: "Palauan",
    article: "der",
    noun: "Palaer",
    plural: "Palaer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Palaerin", plural: "Palaerinnen" },
    notes: {
      miscNote:
        "Palau is a Pacific island nation known for world-class diving and marine biodiversity. English and Palauan are official; Japanese is also widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Palau ist Palaer.",
        en: "A man from Palau is a Palauan.",
        case: "nom",
      },
      {
        de: "Der Palaer spricht Englisch und Palauisch.",
        en: "The Palauan speaks English and Palauan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51162,
    eng: "Palauan",
    article: "die",
    noun: "Palaerin",
    plural: "Palaerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Palaer", plural: "Palaer" },
    notes: {
      miscNote:
        "Palau is a Pacific island nation known for world-class diving and marine biodiversity. English and Palauan are official; Japanese is also widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Palau ist  Palaerin.",
        en: "A woman from Palau is a Palauan.",
        case: "nom",
      },
      {
        de: "Die Palaerin spricht Englisch und Japanisch.",
        en: "The Palauan speaks English and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50163,
    eng: "Palestinian",
    article: "der",
    noun: "Palästinenser",
    plural: "Palästinenser",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Palästinenserin",
      plural: "Palästinenserinnen",
    },
    notes: {
      miscNote:
        "Palestine is a region in the Middle East with deep historical and cultural significance. Arabic is the primary language; many Palestinians also speak English or Hebrew.",
    },
    sentences: [
      {
        de: "Ein Mann aus Palästina ist Palästinenser.",
        en: "A man from Palestine is a Palestinian.",
        case: "nom",
      },
      {
        de: "Der Palästinenser spricht Arabisch und Englisch.",
        en: "The Palestinian speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51163,
    eng: "Palestinian",
    article: "die",
    noun: "Palästinenserin",
    plural: "Palästinenserinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Palästinenser",
      plural: "Palästinenser",
    },
    notes: {
      miscNote:
        "Palestine is a region in the Middle East with deep historical and cultural significance. Arabic is the primary language; many Palestinians also speak English or Hebrew.",
    },
    sentences: [
      {
        de: "Eine Frau aus Palästina ist  Palästinenserin.",
        en: "A woman from Palestine is a Palestinian.",
        case: "nom",
      },
      {
        de: "Die Palästinenserin spricht Arabisch und Französisch.",
        en: "The Palestinian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50164,
    eng: "Panamanian",
    article: "der",
    noun: "Panamaner",
    plural: "Panamaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Panamanerin",
      plural: "Panamanerinnen",
    },
    notes: {
      miscNote:
        "Panama is a Central American country famous for the Panama Canal. Spanish is official; English is widely spoken, especially around the canal zone.",
    },
    sentences: [
      {
        de: "Ein Mann aus Panama ist Panamaner.",
        en: "A man from Panama is a Panamanian.",
        case: "nom",
      },
      {
        de: "Der Panamaner spricht Spanisch und Englisch.",
        en: "The Panamanian speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51164,
    eng: "Panamanian",
    article: "die",
    noun: "Panamanerin",
    plural: "Panamanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Panamaner", plural: "Panamaner" },
    notes: {
      miscNote:
        "Panama is a Central American country famous for the Panama Canal. Spanish is official; English is widely spoken, especially around the canal zone.",
    },
    sentences: [
      {
        de: "Eine Frau aus Panama ist  Panamanerin.",
        en: "A woman from Panama is a Panamanian.",
        case: "nom",
      },
      {
        de: "Die Panamanerin spricht Spanisch und Französisch.",
        en: "The Panamanian speaks Spanish and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50165,
    eng: "Papua New Guinean",
    article: "der",
    noun: "der Papua-Neuguineer",
    plural: "die Papua-Neuguineer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Papua-Neuguineerin",
      plural: "Papua-Neuguineerinnen",
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
    id: 51165,
    eng: "Papua New Guinean",
    article: "die",
    noun: "Papua-Neuguineerin",
    plural: "Papua-Neuguineerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Papua-Neuguineer",
      plural: "Papua-Neuguineer",
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
    id: 50166,
    eng: "Paraguayan",
    article: "der",
    noun: "Paraguayer",
    plural: "Paraguayer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Paraguayerin",
      plural: "Paraguayerinnen",
    },
    notes: {
      miscNote:
        "Paraguay is a South American country known for the Iguazu Falls and Jesuit missions. Spanish is official; Guarani is co-official and widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Paraguay ist Paraguayer.",
        en: "A man from Paraguay is a Paraguayan.",
        case: "nom",
      },
      {
        de: "Der Paraguayer spricht Spanisch und Guarani.",
        en: "The Paraguayan speaks Spanish and Guarani.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51166,
    eng: "Paraguayan",
    article: "die",
    noun: "Paraguayerin",
    plural: "Paraguayerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Paraguayer",
      plural: "Paraguayer",
    },
    notes: {
      miscNote:
        "Paraguay is a South American country known for the Iguazu Falls and Jesuit missions. Spanish is official; Guarani is co-official and widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Paraguay ist  Paraguayerin.",
        en: "A woman from Paraguay is a Paraguayan.",
        case: "nom",
      },
      {
        de: "Die Paraguayerin spricht Spanisch und Portugiesisch.",
        en: "The Paraguayan speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50167,
    eng: "Peruvian",
    article: "der",
    noun: "Peruaner",
    plural: "Peruaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Peruanerin",
      plural: "Peruanerinnen",
    },
    notes: {
      miscNote:
        "Peru is home to Machu Picchu and rich Inca heritage. Spanish is official; Quechua and Aymara are also official regional languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Peru ist Peruaner.",
        en: "A man from Peru is a Peruvian.",
        case: "nom",
      },
      {
        de: "Der Peruaner spricht Spanisch und Quechua.",
        en: "The Peruvian speaks Spanish and Quechua.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51167,
    eng: "Peruvian",
    article: "die",
    noun: "Peruanerin",
    plural: "Peruanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Peruaner", plural: "Peruaner" },
    notes: {
      miscNote:
        "Peru is home to Machu Picchu and rich Inca heritage. Spanish is official; Quechua and Aymara are also official regional languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Peru ist  Peruanerin.",
        en: "A woman from Peru is a Peruvian.",
        case: "nom",
      },
      {
        de: "Die Peruanerin spricht Spanisch und Aymara.",
        en: "The Peruvian speaks Spanish and Aymara.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50168,
    eng: "Pitcairn Islander",
    article: "der",
    noun: "Pitcairner",
    plural: "Pitcairner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Pitcairnerin",
      plural: "Pitcairnerinnen",
    },
    notes: {
      miscNote:
        "Multi-word nationality - needs review for German translation (Pitcairn Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51168,
    eng: "Pitcairn Islander",
    article: "die",
    noun: "Pitcairnerin",
    plural: "Pitcairnerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Pitcairner",
      plural: "Pitcairner",
    },
    notes: {
      miscNote:
        "Multi-word nationality - needs review for German translation (Pitcairn Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50169,
    eng: "Polish",
    article: "der",
    noun: "Pole",
    plural: "Polen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Polin", plural: "Polinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Poland is a Central European country with rich history and culture. Polish has some of the most complex grammar in European languages!",
    },
    sentences: [
      {
        de: "Ein Mann aus Polen ist Pole.",
        en: "A man from Poland is a Pole.",
        case: "nom",
      },
      {
        de: "Der Pole spricht Polnisch und Englisch.",
        en: "The Pole speaks Polish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51169,
    eng: "Polish",
    article: "die",
    noun: "Polin",
    plural: "Polinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Pole", plural: "Polen" },
    notes: {
      miscNote:
        "Poland is a Central European country with rich history and culture. Polish has some of the most complex grammar in European languages!",
    },
    sentences: [
      {
        de: "Eine Frau aus Polen ist  Polin.",
        en: "A woman from Poland is a Pole.",
        case: "nom",
      },
      {
        de: "Die Polin spricht Polnisch und Deutsch.",
        en: "The Pole speaks Polish and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50170,
    eng: "Portuguese",
    article: "der",
    noun: "Portugiese",
    plural: "Portugiesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Portugiesin",
      plural: "Portugiesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Portugal is one of Europe's oldest nations with Age of Discovery heritage. Portuguese is spoken by over 250 million people worldwide!",
    },
    sentences: [
      {
        de: "Ein Mann aus Portugal ist Portugiese.",
        en: "A man from Portugal is a Portuguese.",
        case: "nom",
      },
      {
        de: "Der Portugiese spricht Portugiesisch und Englisch.",
        en: "The Portuguese speaks Portuguese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51170,
    eng: "Portuguese",
    article: "die",
    noun: "Portugiesin",
    plural: "Portugiesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Portugiese",
      plural: "Portugiesen",
    },
    notes: {
      miscNote:
        "Portugal is one of Europe's oldest nations with Age of Discovery heritage. Portuguese is spoken by over 250 million people worldwide!",
    },
    sentences: [
      {
        de: "Eine Frau aus Portugal ist  Portugiesin.",
        en: "A woman from Portugal is a Portuguese.",
        case: "nom",
      },
      {
        de: "Die Portugiesin spricht Portugiesisch und Spanisch.",
        en: "The Portuguese speaks Portuguese and Spanish.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50171,
    eng: "Puerto Rican",
    article: "der",
    noun: "Puerto-Ricaner",
    plural: "Puerto-Ricaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Puerto-Ricanerin",
      plural: "Puerto-Ricanerinnen",
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
    id: 51171,
    eng: "Puerto Rican",
    article: "die",
    noun: "Puerto-Ricanerin",
    plural: "Puerto-Ricanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Puerto-Ricaner",
      plural: "Puerto-Ricaner",
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
    id: 50172,
    eng: "Qatari",
    article: "der",
    noun: "Qatarer",
    plural: "Qatarer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Qatarerin",
      plural: "Qatarerinnen",
    },
    notes: {
      miscNote:
        "Qatar is a wealthy Gulf state known for hosting the FIFA World Cup in 2022. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Ein Mann aus Katar ist Qatarer.",
        en: "A man from Qatar is a Qatari.",
        case: "nom",
      },
      {
        de: "Der Qatarer spricht Arabisch und Englisch.",
        en: "The Qatari speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51172,
    eng: "Qatari",
    article: "die",
    noun: "Qatarerin",
    plural: "Qatarerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Qatarer", plural: "Qatarer" },
    notes: {
      miscNote:
        "Qatar is a wealthy Gulf state known for hosting the FIFA World Cup in 2022. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Eine Frau aus Katar ist  Qatarerin.",
        en: "A woman from Qatar is a Qatari.",
        case: "nom",
      },
      {
        de: "Die Qatarerin spricht Arabisch und Französisch.",
        en: "The Qatari speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50173,
    eng: "Romanian",
    article: "der",
    noun: "Rumäne",
    plural: "Rumänen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Rumänin", plural: "Rumäninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Romania is a Balkan country known for the Carpathian Mountains and Dracula legends. Romanian is official; Hungarian is also widely spoken in Transylvania.",
    },
    sentences: [
      {
        de: "Ein Mann aus Rumänien ist Rumäne.",
        en: "A man from Romania is a Romanian.",
        case: "nom",
      },
      {
        de: "Der Rumäne spricht Rumänisch und Englisch.",
        en: "The Romanian speaks Romanian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51173,
    eng: "Romanian",
    article: "die",
    noun: "Rumänin",
    plural: "Rumäninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Rumäne", plural: "Rumänen" },
    notes: {
      miscNote:
        "Romania is a Balkan country known for the Carpathian Mountains and Dracula legends. Romanian is official; Hungarian is also widely spoken in Transylvania.",
    },
    sentences: [
      {
        de: "Eine Frau aus Rumänien ist  Rumänin.",
        en: "A woman from Romania is a Romanian.",
        case: "nom",
      },
      {
        de: "Die Rumänin spricht Rumänisch und Ungarisch.",
        en: "The Romanian speaks Romanian and Hungarian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50174,
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
    id: 51174,
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
    id: 50175,
    eng: "Rwandan",
    article: "der",
    noun: "Ruander",
    plural: "Ruander",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Ruanderin",
      plural: "Ruanderinnen",
    },
    notes: {
      miscNote:
        "Rwanda is a small East African country with beautiful landscapes. Kinyarwanda is official; French and English are also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Ruanda ist Ruander.",
        en: "A man from Rwanda is a Rwandan.",
        case: "nom",
      },
      {
        de: "Der Ruander spricht Kinyarwanda und Englisch.",
        en: "The Rwandan speaks Kinyarwanda and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51175,
    eng: "Rwandan",
    article: "die",
    noun: "Ruanderin",
    plural: "Ruanderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ruander", plural: "Ruander" },
    notes: {
      miscNote:
        "Rwanda is a small East African country with beautiful landscapes. Kinyarwanda is official; French and English are also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Ruanda ist  Ruanderin.",
        en: "A woman from Rwanda is a Rwandan.",
        case: "nom",
      },
      {
        de: "Die Ruanderin spricht Kinyarwanda und Französisch.",
        en: "The Rwandan speaks Kinyarwanda and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50176,
    eng: "Salvadorean",
    article: "der",
    noun: "Salvadorianer",
    plural: "Salvadorianer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Salvadorianerin",
      plural: "Salvadorianerinnen",
    },
    notes: {
      miscNote:
        "El Salvador is the smallest Central American country. Spanish is official; Nahuatl is also spoken by indigenous communities.",
    },
    sentences: [
      {
        de: "Ein Mann aus El Salvador ist Salvadorianer.",
        en: "A man from El Salvador is a Salvadorean.",
        case: "nom",
      },
      {
        de: "Der Salvadorianer spricht Spanisch und Englisch.",
        en: "The Salvadorean speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51176,
    eng: "Salvadorean",
    article: "die",
    noun: "Salvadorianerin",
    plural: "Salvadorianerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Salvadorianer",
      plural: "Salvadorianer",
    },
    notes: {
      miscNote:
        "El Salvador is the smallest Central American country. Spanish is official; Nahuatl is also spoken by indigenous communities.",
    },
    sentences: [
      {
        de: "Eine Frau aus El Salvador ist  Salvadorianerin.",
        en: "A woman from El Salvador is a Salvadorean.",
        case: "nom",
      },
      {
        de: "Die Salvadorianerin spricht Spanisch und Nahuatl.",
        en: "The Salvadorean speaks Spanish and Nahuatl.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50177,
    eng: "Sammarinese",
    article: "der",
    noun: "Sanmarineser",
    plural: "Sanmarineser",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Sanmarinerin",
      plural: "Sanmarinerinnen",
    },
    notes: {
      miscNote:
        "San Marino is one of the world's smallest and oldest republics, surrounded by Italy. Italian is official; it's known for postage stamps and crossbows!",
    },
    sentences: [
      {
        de: "Ein Mann aus San Marino ist Sanmarineser.",
        en: "A man from San Marino is a Sammarinese.",
        case: "nom",
      },
      {
        de: "Der Sanmarineser spricht Italienisch und Englisch.",
        en: "The Sammarinese speaks Italian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51177,
    eng: "Sammarinese",
    article: "die",
    noun: "Sanmarinerin",
    plural: "Sanmarinerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Sanmarineser",
      plural: "Sanmarineser",
    },
    notes: {
      miscNote:
        "San Marino is one of the world's smallest and oldest republics, surrounded by Italy. Italian is official; it's known for postage stamps and crossbows!",
    },
    sentences: [
      {
        de: "Eine Frau aus San Marino ist  Sanmarinerin.",
        en: "A woman from San Marino is a Sammarinese.",
        case: "nom",
      },
      {
        de: "Die Sanmarinerin spricht Italienisch und Deutsch.",
        en: "The Sammarinese speaks Italian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50178,
    eng: "Samoan",
    article: "der",
    noun: "Samoaner",
    plural: "Samoaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Samoanerin",
      plural: "Samoanerinnen",
    },
    notes: {
      miscNote:
        "Samoa is a Pacific island nation known for beautiful beaches and Polynesian culture. Samoan and English are official languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Samoa ist Samoaner.",
        en: "A man from Samoa is a Samoan.",
        case: "nom",
      },
      {
        de: "Der Samoaner spricht Samoanisch und Englisch.",
        en: "The Samoan speaks Samoan and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51178,
    eng: "Samoan",
    article: "die",
    noun: "Samoanerin",
    plural: "Samoanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Samoaner", plural: "Samoaner" },
    notes: {
      miscNote:
        "Samoa is a Pacific island nation known for beautiful beaches and Polynesian culture. Samoan and English are official languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Samoa ist  Samoanerin.",
        en: "A woman from Samoa is a Samoan.",
        case: "nom",
      },
      {
        de: "Die Samoanerin spricht Samoanisch und Japanisch.",
        en: "The Samoan speaks Samoan and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50179,
    eng: "Sao Tomean",
    article: "der",
    noun: "Sao-Tomeer",
    plural: "Sao-Tomeer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Sao-Tomeerin",
      plural: "Sao-Tomeerinnen",
    },
    notes: {
      miscNote:
        "São Tomé and Príncipe is a small island nation off the coast of West Africa. Portuguese is official; Forro and other Creole languages are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus São Tomé und Príncipe ist Sao-Tomeer.",
        en: "A man from São Tomé and Príncipe is a Sao Tomean.",
        case: "nom",
      },
      {
        de: "Der Sao-Tomeer spricht Portugiesisch und Forro.",
        en: "The Sao Tomean speaks Portuguese and Forro.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51179,
    eng: "Sao Tomean",
    article: "die",
    noun: "Sao-Tomeerin",
    plural: "Sao-Tomeerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Sao-Tomeer",
      plural: "Sao-Tomeer",
    },
    notes: {
      miscNote:
        "São Tomé and Príncipe is a small island nation off the coast of West Africa. Portuguese is official; Forro and other Creole languages are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus São Tomé und Príncipe ist  Sao-Tomeerin.",
        en: "A woman from São Tomé and Príncipe is a Sao Tomean.",
        case: "nom",
      },
      {
        de: "Die Sao-Tomeerin spricht Portugiesisch und Englisch.",
        en: "The Sao Tomean speaks Portuguese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50180,
    eng: "Saudi Arabian",
    article: "der",
    noun: "Saudi-Araber",
    plural: "Saudi-Araber",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Saudi-Araberin",
      plural: "Saudi-Araberinnen",
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
    id: 51180,
    eng: "Saudi Arabian",
    article: "die",
    noun: "Saudi-Araberin",
    plural: "Saudi-Araberinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Saudi-Araber",
      plural: "Saudi-Araber",
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
    id: 50181,
    eng: "Scottish",
    article: "der",
    noun: "Schotte",
    plural: "Schotten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Schottin", plural: "Schottinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Scotland is part of the United Kingdom with its own rich culture and traditions. Scottish Gaelic and Scots are spoken alongside English.",
    },
    sentences: [
      {
        de: "Ein Mann aus Schottland ist Schotte.",
        en: "A man from Scotland is a Scot.",
        case: "nom",
      },
      {
        de: "Der Schotte spricht Englisch und Gälisch.",
        en: "The Scot speaks English and Gaelic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51181,
    eng: "Scottish",
    article: "die",
    noun: "Schottin",
    plural: "Schottinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Schotte", plural: "Schotten" },
    notes: {
      miscNote:
        "Scotland is part of the United Kingdom with its own rich culture and traditions. Scottish Gaelic and Scots are spoken alongside English.",
    },
    sentences: [
      {
        de: "Eine Frau aus Schottland ist  Schottin.",
        en: "A woman from Scotland is a Scot.",
        case: "nom",
      },
      {
        de: "Die Schottin spricht Englisch und Schottisch.",
        en: "The Scot speaks English and Scots.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50182,
    eng: "Senegalese",
    article: "der",
    noun: "Senegalese",
    plural: "Senegalesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Senegalin",
      plural: "Senegalesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Senegal is a West African country known for Dakar and vibrant music. French is official; Wolof is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Senegal ist Senegalese.",
        en: "A man from Senegal is a Senegalese.",
        case: "nom",
      },
      {
        de: "Der Senegalese spricht Französisch und Wolof.",
        en: "The Senegalese speaks French and Wolof.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51182,
    eng: "Senegalese",
    article: "die",
    noun: "Senegalin",
    plural: "Senegalesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Senegalese",
      plural: "Senegalesen",
    },
    notes: {
      miscNote:
        "Senegal is a West African country known for Dakar and vibrant music. French is official; Wolof is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Senegal ist  Senegalin.",
        en: "A woman from Senegal is a Senegalese.",
        case: "nom",
      },
      {
        de: "Die Senegalin spricht Französisch und Peul.",
        en: "The Senegalese speaks French and Peul.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50183,
    eng: "Serbian",
    article: "der",
    noun: "Serbe",
    plural: "Serben",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Serbin", plural: "Serbin­nen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Serbia is a Balkan country with rich Byzantine heritage. Serbian is official; Hungarian is also spoken in northern regions.",
    },
    sentences: [
      {
        de: "Ein Mann aus Serbien ist Serbe.",
        en: "A man from Serbia is a Serbian.",
        case: "nom",
      },
      {
        de: "Der Serbe spricht Serbisch und Englisch.",
        en: "The Serbian speaks Serbian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51183,
    eng: "Serbian",
    article: "die",
    noun: "Serbin",
    plural: "Serbinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Serbe", plural: "Serben" },
    notes: {
      miscNote:
        "Serbia is a Balkan country with rich Byzantine heritage. Serbian is official; Hungarian is also spoken in northern regions.",
    },
    sentences: [
      {
        de: "Eine Frau aus Serbien ist  Serbin.",
        en: "A woman from Serbia is a Serbian.",
        case: "nom",
      },
      {
        de: "Die Serbin spricht Serbisch und Deutsch.",
        en: "The Serbian speaks Serbian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50184,
    eng: "Seychellois",
    article: "der",
    noun: "Seycheller",
    plural: "Seycheller",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Seychellerin",
      plural: "Seychellerinnen",
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
    id: 51184,
    eng: "Seychelloise",
    article: "die",
    noun: "Seychellerin",
    plural: "Seychellerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Seycheller",
      plural: "Seycheller",
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
    id: 50185,
    eng: "Sierra Leonean",
    article: "der",
    noun: "Sierra-Leoner",
    plural: "Sierra-Leoner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Sierra-Leonerin",
      plural: "Sierra-Leonerinnen",
    },
    notes: {
      miscNote:
        "Sierra Leone is a West African country with diamond reserves and stunning beaches. English is official; Mende, Temne, and Krio are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Sierra Leone ist Sierra-Leoner.",
        en: "A man from Sierra Leone is a Sierra Leonean.",
        case: "nom",
      },
      {
        de: "Der Sierra-Leoner spricht Englisch und Mende.",
        en: "The Sierra Leonean speaks English and Mende.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51185,
    eng: "Sierra Leonean",
    article: "die",
    noun: "Sierra-Leonerin",
    plural: "Sierra-Leonerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Sierra-Leoner",
      plural: "Sierra-Leoner",
    },
    notes: {
      miscNote:
        "Sierra Leone is a West African country with diamond reserves and stunning beaches. English is official; Mende, Temne, and Krio are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Sierra Leone ist  Sierra-Leonerin.",
        en: "A woman from Sierra Leone is a Sierra Leonean.",
        case: "nom",
      },
      {
        de: "Die Sierra-Leonerin spricht Englisch und Temne.",
        en: "The Sierra Leonean speaks English and Temne.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50186,
    eng: "Singaporean",
    article: "der",
    noun: "Singapurer",
    plural: "Singapurer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Singapurerin",
      plural: "Singapurerinnen",
    },
    notes: {
      miscNote:
        "Singapore is a highly developed city-state known for its efficient systems and multicultural society. Four languages are official: English, Mandarin, Malay, and Tamil!",
    },
    sentences: [
      {
        de: "Ein Mann aus Singapur ist Singapurer.",
        en: "A man from Singapore is a Singaporean.",
        case: "nom",
      },
      {
        de: "Der Singapurer spricht Englisch und Mandarin.",
        en: "The Singaporean speaks English and Mandarin.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51186,
    eng: "Singaporean",
    article: "die",
    noun: "Singapurerin",
    plural: "Singapurerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Singapurer",
      plural: "Singapurer",
    },
    notes: {
      miscNote:
        "Singapore is a highly developed city-state known for its efficient systems and multicultural society. Four languages are official: English, Mandarin, Malay, and Tamil!",
    },
    sentences: [
      {
        de: "Eine Frau aus Singapur ist  Singapurerin.",
        en: "A woman from Singapore is a Singaporean.",
        case: "nom",
      },
      {
        de: "Die Singapurerin spricht Englisch und Tamil.",
        en: "The Singaporean speaks English and Tamil.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50187,
    eng: "Slovak",
    article: "der",
    noun: "Slowake",
    plural: "Slowaken",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Slowakin", plural: "Slowakinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Slovakia is a Central European country known for its High Tatras mountains. Slovak is official; Hungarian is spoken by the Hungarian minority.",
    },
    sentences: [
      {
        de: "Ein Mann aus der Slowakei ist Slowake.",
        en: "A man from Slovakia is a Slovak.",
        case: "nom",
      },
      {
        de: "Der Slowake spricht Slowakisch und Englisch.",
        en: "The Slovak speaks Slovak and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51187,
    eng: "Slovak",
    article: "die",
    noun: "Slowakin",
    plural: "Slowakinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Slowake", plural: "Slowaken" },
    notes: {
      miscNote:
        "Slovakia is a Central European country known for its High Tatras mountains. Slovak is official; Hungarian is spoken by the Hungarian minority.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Slowakei ist  Slowakin.",
        en: "A woman from Slovakia is a Slovak.",
        case: "nom",
      },
      {
        de: "Die Slowakin spricht Slowakisch und Deutsch.",
        en: "The Slovak speaks Slovak and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50188,
    eng: "Slovenian",
    article: "der",
    noun: "Slowene",
    plural: "Slowenen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Slowenin", plural: "Sloweninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Slovenia is a Central European country with Alpine mountains and Mediterranean coastline. Slovenian is official; Italian and Hungarian are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Slowenien ist Slowene.",
        en: "A man from Slovenia is a Slovenian.",
        case: "nom",
      },
      {
        de: "Der Slowene spricht Slowenisch und Italienisch.",
        en: "The Slovenian speaks Slovenian and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51188,
    eng: "Slovenian",
    article: "die",
    noun: "Slowenin",
    plural: "Sloweninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Slowene", plural: "Slowenen" },
    notes: {
      miscNote:
        "Slovenia is a Central European country with Alpine mountains and Mediterranean coastline. Slovenian is official; Italian and Hungarian are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Slowenien ist  Slowenin.",
        en: "A woman from Slovenia is a Slovenian.",
        case: "nom",
      },
      {
        de: "Die Slowenin spricht Slowenisch und Deutsch.",
        en: "The Slovenian speaks Slovenian and German.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    // der Salomoner, die Salomonerin
    id: 50189,
    eng: "Solomon Islander",
    article: "der",
    noun: "Salomoner",
    plural: "Salomoner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Salomonerin",
      plural: "Salomonerinnen",
    },
    notes: {
      miscNote:
        "Multi-word nationality - needs review for German translation (Solomon Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51189,
    eng: "Solomon Islander",
    article: "die",
    noun: "Salomonerin",
    plural: "Salomonerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Salomoner",
      plural: "Salomoner",
    },
    notes: {
      miscNote:
        "Multi-word nationality - needs review for German translation (Solomon Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50190,
    eng: "Somali",
    article: "der",
    noun: "Somali",
    plural: "Somalis",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Somali", plural: "Somalis" },
    notes: {
      miscNote:
        "Somalia is a country in the Horn of Africa. Somali and Arabic are official; English is widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Somalia ist Somali.",
        en: "A man from Somalia is a Somali.",
        case: "nom",
      },
      {
        de: "Der Somali spricht Somali und Arabisch.",
        en: "The Somali speaks Somali and Arabic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51190,
    eng: "Somali",
    article: "die",
    noun: "Somali",
    plural: "Somalis",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Somali", plural: "Somalis" },
    notes: {
      miscNote:
        "Somalia is a country in the Horn of Africa. Somali and Arabic are official; English is widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Somalia ist  Somali.",
        en: "A woman from Somalia is a Somali.",
        case: "nom",
      },
      {
        de: "Die Somali spricht Somali und Englisch.",
        en: "The Somali speaks Somali and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50191,
    eng: "South African",
    article: "der",
    noun: "Südafrikaner",
    plural: "Südafrikaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Südafrikanerin",
      plural: "Südafrikanerinnen",
    },
    notes: {
      miscNote:
        "South Africa is a diverse country with 11 official languages. It's known for wildlife, Table Mountain, and Nelson Mandela's legacy.",
    },
    sentences: [
      {
        de: "Ein Mann aus Südafrika ist Südafrikaner.",
        en: "A man from South Africa is a South African.",
        case: "nom",
      },
      {
        de: "Der Südafrikaner spricht Englisch und Zulu.",
        en: "The South African speaks English and Zulu.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51191,
    eng: "South African",
    article: "die",
    noun: "Südafrikanerin",
    plural: "Südafrikanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Südafrikaner",
      plural: "Südafrikaner",
    },
    notes: {
      miscNote:
        "South Africa is a diverse country with 11 official languages. It's known for wildlife, Table Mountain, and Nelson Mandela's legacy.",
    },
    sentences: [
      {
        de: "Eine Frau aus Südafrika ist  Südafrikanerin.",
        en: "A woman from South Africa is a South African.",
        case: "nom",
      },
      {
        de: "Die Südafrikanerin spricht Englisch und Xhosa.",
        en: "The South African speaks English and Xhosa.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50192,
    eng: "South Korean",
    article: "der",
    noun: "Südkoreaner",
    plural: "Südkoreaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Südkoreanierin",
      plural: "Südkoreanerinnen",
    },
    notes: {
      miscNote:
        "South Korea is a highly developed East Asian country known for technology, K-pop, and Korean cuisine. Korean is official; English is widely studied.",
    },
    sentences: [
      {
        de: "Ein Mann aus Südkorea ist Südkoreaner.",
        en: "A man from South Korea is a South Korean.",
        case: "nom",
      },
      {
        de: "Der Südkoreaner spricht Koreanisch und Englisch.",
        en: "The South Korean speaks Korean and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51192,
    eng: "South Korean",
    article: "die",
    noun: "Südkoreanierin",
    plural: "Südkoreanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Südkoreaner",
      plural: "Südkoreaner",
    },
    notes: {
      miscNote:
        "South Korea is a highly developed East Asian country known for technology, K-pop, and Korean cuisine. Korean is official; English is widely studied.",
    },
    sentences: [
      {
        de: "Eine Frau aus Südkorea ist  Südkoreanierin.",
        en: "A woman from South Korea is a South Korean.",
        case: "nom",
      },
      {
        de: "Die Südkoreanierin spricht Koreanisch und Chinesisch.",
        en: "The South Korean speaks Korean and Chinese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50193,
    eng: "South Sudanese",
    article: "der",
    noun: "Südsudaner",
    plural: "Südsudaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Südsudanerin",
      plural: "Südsudanerinnen",
    },
    notes: {
      miscNote:
        "South Sudan is the world's youngest country, having gained independence in 2011. English is official; Arabic and Dinka are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Südsudan ist Südsudaner.",
        en: "A man from South Sudan is South Sudanese.",
        case: "nom",
      },
      {
        de: "Der Südsudaner spricht Englisch und Dinka.",
        en: "The South Sudanese speaks English and Dinka.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51193,
    eng: "South Sudanese",
    article: "die",
    noun: "Südsudanerin",
    plural: "Südsudanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Südsudaner",
      plural: "Südsudaner",
    },
    notes: {
      miscNote:
        "South Sudan is the world's youngest country, having gained independence in 2011. English is official; Arabic and Dinka are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Südsudan ist Südsudanerin.",
        en: "A woman from South Sudan is South Sudanese.",
        case: "nom",
      },
      {
        de: "Die Südsudanerin spricht Englisch und Nuer.",
        en: "The South Sudanese speaks English and Nuer.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  // CHUNK P: Spanish through Swiss (IDs 50194-50205 & 51194-51205)

  {
    id: 50194,
    eng: "Spanish",
    article: "der",
    noun: "Spanier",
    plural: "Spanier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Spanierin",
      plural: "Spanierinnen",
    },
    notes: {
      miscNote:
        "Spain is a vibrant Mediterranean country known for flamenco, paella, and Gaudí architecture. Spanish (Castilian) is official; regional languages like Catalan and Basque are also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Spanien ist Spanier.",
        en: "A man from Spain is a Spaniard.",
        case: "nom",
      },
      {
        de: "Der Spanier spricht Spanisch und Englisch.",
        en: "The Spaniard speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51194,
    eng: "Spanish",
    article: "die",
    noun: "Spanierin",
    plural: "Spanierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Spanier", plural: "Spanier" },
    notes: {
      miscNote:
        "Spain is a vibrant Mediterranean country known for flamenco, paella, and Gaudí architecture. Spanish (Castilian) is official; regional languages like Catalan and Basque are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Spanien ist Spanierin.",
        en: "A woman from Spain is a Spaniard.",
        case: "nom",
      },
      {
        de: "Die Spanierin spricht Spanisch und Katalanisch.",
        en: "The Spaniard speaks Spanish and Catalan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50195,
    eng: "Sri Lankan",
    article: "der",
    noun: "Sri-Lanker",
    plural: "Sri-Lanker",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Sri-Lankerin",
      plural: "Sri-Lankerinnen",
    },
    notes: {
      miscNote:
        "Sri Lanka is an island nation off India's coast known for tea, ancient temples, and beautiful beaches. Sinhala is official; Tamil is also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Sri Lanka ist Sri-Lanker.",
        en: "A man from Sri Lanka is a Sri Lankan.",
        case: "nom",
      },
      {
        de: "Der Sri-Lanker spricht Sinhalesisch und Englisch.",
        en: "The Sri Lankan speaks Sinhala and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51195,
    eng: "Sri Lankan",
    article: "die",
    noun: "Sri-Lankerin",
    plural: "Sri-Lankerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Sri-Lanker",
      plural: "Sri-Lanker",
    },
    notes: {
      miscNote:
        "Sri Lanka is an island nation off India's coast known for tea, ancient temples, and beautiful beaches. Sinhala is official; Tamil is also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Sri Lanka ist Sri-Lankerin.",
        en: "A woman from Sri Lanka is a Sri Lankan.",
        case: "nom",
      },
      {
        de: "Die Sri-Lankerin spricht Sinhalesisch und Tamil.",
        en: "The Sri Lankan speaks Sinhala and Tamil.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50196,
    eng: "Sudanese",
    article: "der",
    noun: "Sudanese",
    plural: "Sudanesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Sudanin", plural: "Sudaninnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Sudan is the largest country in Africa by area with the Nile River running through it. Arabic is official; Nubian and other African languages are spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Sudan ist Sudanese.",
        en: "A man from Sudan is a Sudanese.",
        case: "nom",
      },
      {
        de: "Der Sudanese spricht Arabisch und Nubisch.",
        en: "The Sudanese speaks Arabic and Nubian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51196,
    eng: "Sudanese",
    article: "die",
    noun: "Sudanin",
    plural: "Sudaninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Sudanese", plural: "Sudanesen" },
    notes: {
      miscNote:
        "Sudan is the largest country in Africa by area with the Nile River running through it. Arabic is official; Nubian and other African languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Sudan ist Sudanin.",
        en: "A woman from Sudan is a Sudanese.",
        case: "nom",
      },
      {
        de: "Die Sudanin spricht Arabisch und Englisch.",
        en: "The Sudanese speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50197,
    eng: "Surinamese",
    article: "der",
    noun: "Surinamer",
    plural: "Surinamer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Surinamerin",
      plural: "Surinamerinnen",
    },
    notes: {
      miscNote:
        "Suriname is the smallest country in South America with a diverse population. Dutch is official; English, Sranan Tongo, and Hindustani are also widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Surinam ist Surinamer.",
        en: "A man from Suriname is a Surinamese.",
        case: "nom",
      },
      {
        de: "Der Surinamer spricht Niederländisch und Englisch.",
        en: "The Surinamese speaks Dutch and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51197,
    eng: "Surinamese",
    article: "die",
    noun: "Surinamerin",
    plural: "Surinamerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Surinamer", plural: "Surinamer" },
    notes: {
      miscNote:
        "Suriname is the smallest country in South America with a diverse population. Dutch is official; English, Sranan Tongo, and Hindustani are also widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Surinam ist Surinamerin.",
        en: "A woman from Suriname is a Surinamese.",
        case: "nom",
      },
      {
        de: "Die Surinamerin spricht Niederländisch und Hindi.",
        en: "The Surinamese speaks Dutch and Hindi.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50198,
    eng: "Swedish",
    article: "der",
    noun: "Schwede",
    plural: "Schweden",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Schwedin", plural: "Schwedinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Sweden is a Nordic country known for stunning nature, IKEA, and Spotify. Swedish is official; English is widely spoken and understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Schweden ist Schwede.",
        en: "A man from Sweden is a Swede.",
        case: "nom",
      },
      {
        de: "Der Schwede spricht Schwedisch und Englisch.",
        en: "The Swede speaks Swedish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51198,
    eng: "Swedish",
    article: "die",
    noun: "Schwedin",
    plural: "Schwedinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Schwede", plural: "Schweden" },
    notes: {
      miscNote:
        "Sweden is a Nordic country known for stunning nature, IKEA, and Spotify. Swedish is official; English is widely spoken and understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Schweden ist Schwedin.",
        en: "A woman from Sweden is a Swede.",
        case: "nom",
      },
      {
        de: "Die Schwedin spricht Schwedisch und Norwegisch.",
        en: "The Swede speaks Swedish and Norwegian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50199,
    eng: "Swiss",
    article: "der",
    noun: "Schweizer",
    plural: "Schweizer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Schweizerin",
      plural: "Schweizerinnen",
    },
    notes: {
      miscNote:
        "Switzerland is a neutral country known for watches, chocolate, and banking. Four languages are official: German, French, Italian, and Romansh!",
    },
    sentences: [
      {
        de: "Ein Mann aus der Schweiz ist Schweizer.",
        en: "A man from Switzerland is a Swiss.",
        case: "nom",
      },
      {
        de: "Der Schweizer spricht Deutsch und Französisch.",
        en: "The Swiss speaks German and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51199,
    eng: "Swiss",
    article: "die",
    noun: "Schweizerin",
    plural: "Schweizerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Schweizer", plural: "Schweizer" },
    notes: {
      miscNote:
        "Switzerland is a neutral country known for watches, chocolate, and banking. Four languages are official: German, French, Italian, and Romansh!",
    },
    sentences: [
      {
        de: "Eine Frau aus der Schweiz ist Schweizerin.",
        en: "A woman from Switzerland is a Swiss.",
        case: "nom",
      },
      {
        de: "Die Schweizerin spricht Französisch und Italienisch.",
        en: "The Swiss speaks French and Italian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  // CHUNK Q: Syrian through Turkish (IDs 50200-50211 & 51200-51211)

  {
    id: 50200,
    eng: "Syrian",
    article: "der",
    noun: "Syrer",
    plural: "Syrer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Syrerin", plural: "Syrerinnen" },
    notes: {
      miscNote:
        "Syria is a Middle Eastern country with ancient history and culture. Arabic is official; Kurdish is also spoken in northern regions.",
    },
    sentences: [
      {
        de: "Ein Mann aus Syrien ist Syrer.",
        en: "A man from Syria is a Syrian.",
        case: "nom",
      },
      {
        de: "Der Syrer spricht Arabisch und Englisch.",
        en: "The Syrian speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51200,
    eng: "Syrian",
    article: "die",
    noun: "Syrerin",
    plural: "Syrerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Syrer", plural: "Syrer" },
    notes: {
      miscNote:
        "Syria is a Middle Eastern country with ancient history and culture. Arabic is official; Kurdish is also spoken in northern regions.",
    },
    sentences: [
      {
        de: "Eine Frau aus Syrien ist Syrerin.",
        en: "A woman from Syria is a Syrian.",
        case: "nom",
      },
      {
        de: "Die Syrerin spricht Arabisch und Französisch.",
        en: "The Syrian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50201,
    eng: "Taiwanese",
    article: "der",
    noun: "Taiwaner",
    plural: "Taiwaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Taiwanerin",
      plural: "Taiwanerinnen",
    },
    notes: {
      miscNote:
        "Taiwan is an island off the coast of China known for technology and vibrant culture. Mandarin Chinese is official; Taiwanese (a Creole) is also spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Taiwan ist Taiwaner.",
        en: "A man from Taiwan is a Taiwanese.",
        case: "nom",
      },
      {
        de: "Der Taiwaner spricht Mandarin und Englisch.",
        en: "The Taiwanese speaks Mandarin and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51201,
    eng: "Taiwanese",
    article: "die",
    noun: "Taiwanerin",
    plural: "Taiwanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Taiwaner", plural: "Taiwaner" },
    notes: {
      miscNote:
        "Taiwan is an island off the coast of China known for technology and vibrant culture. Mandarin Chinese is official; Taiwanese (a Creole) is also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Taiwan ist Taiwanerin.",
        en: "A woman from Taiwan is a Taiwanese.",
        case: "nom",
      },
      {
        de: "Die Taiwanerin spricht Mandarin und Japanisch.",
        en: "The Taiwanese speaks Mandarin and Japanese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50202,
    eng: "Tajik",
    article: "der",
    noun: "Tadschike",
    plural: "Tadschiken",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Tadschikikin",
      plural: "Tadschikinen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Tajikistan is a mountainous Central Asian country. Tajiki (a Persian dialect) is official; Russian is widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Tadschikistan ist Tadschike.",
        en: "A man from Tajikistan is a Tajik.",
        case: "nom",
      },
      {
        de: "Der Tadschike spricht Tadschikisch und Russisch.",
        en: "The Tajik speaks Tajiki and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51202,
    eng: "Tajik",
    article: "die",
    noun: "Tadschikikin",
    plural: "Tadschikinen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tadschike", plural: "Tadschiken" },
    notes: {
      miscNote:
        "Tajikistan is a mountainous Central Asian country. Tajiki (a Persian dialect) is official; Russian is widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Tadschikistan ist Tadschikikin.",
        en: "A woman from Tajikistan is a Tajik.",
        case: "nom",
      },
      {
        de: "Die Tadschikikin spricht Tadschikisch und Englisch.",
        en: "The Tajik speaks Tajiki and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50203,
    eng: "Tanzanian",
    article: "der",
    noun: "Tansanier",
    plural: "Tansanier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Tansanierin",
      plural: "Tansanierinnen",
    },
    notes: {
      miscNote:
        "Tanzania is an East African country home to Mount Kilimanjaro and the Serengeti. Swahili and English are official; Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Tansania ist Tansanier.",
        en: "A man from Tanzania is a Tanzanian.",
        case: "nom",
      },
      {
        de: "Der Tansanier spricht Swahili und Englisch.",
        en: "The Tanzanian speaks Swahili and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51203,
    eng: "Tanzanian",
    article: "die",
    noun: "Tansanierin",
    plural: "Tansanierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tansanier", plural: "Tansanier" },
    notes: {
      miscNote:
        "Tanzania is an East African country home to Mount Kilimanjaro and the Serengeti. Swahili and English are official; Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Tansania ist Tansanierin.",
        en: "A woman from Tanzania is a Tanzanian.",
        case: "nom",
      },
      {
        de: "Die Tansanierin spricht Swahili und Französisch.",
        en: "The Tanzanian speaks Swahili and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50204,
    eng: "Thai",
    article: "der",
    noun: "Thailänder",
    plural: "Thailänder",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Thailänderin",
      plural: "Thailänderinnen",
    },
    notes: {
      miscNote:
        "Thailand is a Southeast Asian country known for temples, beaches, and amazing food. Thai is official; English is widely spoken in tourism.",
    },
    sentences: [
      {
        de: "Ein Mann aus Thailand ist Thailänder.",
        en: "A man from Thailand is a Thai.",
        case: "nom",
      },
      {
        de: "Der Thailänder spricht Thailändisch und Englisch.",
        en: "The Thai speaks Thai and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51204,
    eng: "Thai",
    article: "die",
    noun: "Thailänderin",
    plural: "Thailänderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Thailänder",
      plural: "Thailänder",
    },
    notes: {
      miscNote:
        "Thailand is a Southeast Asian country known for temples, beaches, and amazing food. Thai is official; English is widely spoken in tourism.",
    },
    sentences: [
      {
        de: "Eine Frau aus Thailand ist Thailänderin.",
        en: "A woman from Thailand is a Thai.",
        case: "nom",
      },
      {
        de: "Die Thailänderin spricht Thailändisch und Laotisch.",
        en: "The Thai speaks Thai and Lao.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50205,
    eng: "Togolese",
    article: "der",
    noun: "Togoer",
    plural: "Togoer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Togoerin", plural: "Togoerinnen" },
    notes: {
      miscNote:
        "Togo is a West African country known for its beaches and diverse wildlife. French is official; Ewe and other African languages are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Togo ist Togoer.",
        en: "A man from Togo is a Togolese.",
        case: "nom",
      },
      {
        de: "Der Togoer spricht Französisch und Ewe.",
        en: "The Togolese speaks French and Ewe.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51205,
    eng: "Togolese",
    article: "die",
    noun: "Togoerin",
    plural: "Togoerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Togoer", plural: "Togoer" },
    notes: {
      miscNote:
        "Togo is a West African country known for its beaches and diverse wildlife. French is official; Ewe and other African languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Togo ist Togoerin.",
        en: "A woman from Togo is a Togolese.",
        case: "nom",
      },
      {
        de: "Die Togoerin spricht Französisch und Kabye.",
        en: "The Togolese speaks French and Kabye.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50206,
    eng: "Tongan",
    article: "der",
    noun: "Tongaer",
    plural: "Tongaer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Tongaerin",
      plural: "Tongaerinnen",
    },
    notes: {
      miscNote:
        "Tonga is a Pacific island kingdom known for whale watching and Polynesian culture. Tongan and English are official languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Tonga ist Tongaer.",
        en: "A man from Tonga is a Tongan.",
        case: "nom",
      },
      {
        de: "Der Tongaer spricht Tongaisch und Englisch.",
        en: "The Tongan speaks Tongan and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51206,
    eng: "Tongan",
    article: "die",
    noun: "Tongaerin",
    plural: "Tongaerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tongaer", plural: "Tongaer" },
    notes: {
      miscNote:
        "Tonga is a Pacific island kingdom known for whale watching and Polynesian culture. Tongan and English are official languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Tonga ist Tongaerin.",
        en: "A woman from Tonga is a Tongan.",
        case: "nom",
      },
      {
        de: "Die Tongaerin spricht Tongaisch und Neuseeländisches Englisch.",
        en: "The Tongan speaks Tongan and New Zealand English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50207,
    eng: "Trinidadian and Tobagonian",
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
        "German has no official or standardized single-word demonym for Trinidad and Tobago. Instead, standard German relies on descriptive phrases. In English, they're colloquially known as Trinis or Trinbagonians.",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51207,
    eng: "Trinidadian and Tobagonian",
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
        "German has no official or standardized single-word demonym for Trinidad and Tobago. Instead, standard German relies on descriptive phrases. In English, they're colloquially known as Trinis or Trinbagonians.",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50208,
    eng: "Tunisian",
    article: "der",
    noun: "Tunesier",
    plural: "Tunesier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Tunesierin",
      plural: "Tunesierinnen",
    },
    notes: {
      miscNote:
        "Tunisia is a North African country with ancient Roman ruins and Mediterranean beaches. Arabic is official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Tunesien ist Tunesier.",
        en: "A man from Tunisia is a Tunisian.",
        case: "nom",
      },
      {
        de: "Der Tunesier spricht Arabisch und Französisch.",
        en: "The Tunisian speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51208,
    eng: "Tunisian",
    article: "die",
    noun: "Tunesierin",
    plural: "Tunesierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tunesier", plural: "Tunesier" },
    notes: {
      miscNote:
        "Tunisia is a North African country with ancient Roman ruins and Mediterranean beaches. Arabic is official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Tunesien ist Tunesierin.",
        en: "A woman from Tunisia is a Tunisian.",
        case: "nom",
      },
      {
        de: "Die Tunesierin spricht Arabisch und Englisch.",
        en: "The Tunisian speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50209,
    eng: "Turkish",
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
    id: 51209,
    eng: "Turkish",
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
  // CHUNK R: Turkmen through Yemeni (IDs 50210-50225 & 51210-51225)

  {
    id: 50210,
    eng: "Turkmen",
    article: "der",
    noun: "Turkmen",
    plural: "Turkmenen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Turkmenin",
      plural: "Turkmeninnen",
    },
    notes: {
      miscNote:
        "Turkmenistan is a Central Asian country rich in natural gas reserves. Turkmen is official; Russian is widely understood.",
    },
    sentences: [
      {
        de: "Ein Mann aus Turkmenistan ist Turkmen.",
        en: "A man from Turkmenistan is a Turkmen.",
        case: "nom",
      },
      {
        de: "Der Turkmen spricht Turkmenisch und Russisch.",
        en: "The Turkmen speaks Turkmen and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51210,
    eng: "Turkmen",
    article: "die",
    noun: "Turkmenin",
    plural: "Turkmeninnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Turkmen", plural: "Turkmenen" },
    notes: {
      miscNote:
        "Turkmenistan is a Central Asian country rich in natural gas reserves. Turkmen is official; Russian is widely understood.",
    },
    sentences: [
      {
        de: "Eine Frau aus Turkmenistan ist Turkmenin.",
        en: "A woman from Turkmenistan is a Turkmen.",
        case: "nom",
      },
      {
        de: "Die Turkmenin spricht Turkmenisch und Englisch.",
        en: "The Turkmen speaks Turkmen and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    // Bewohner der Turks- und Caicosinseln
    id: 50211,
    eng: "Turks and Caicos Islander",
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
        "Multi-word nationality - needs review for German translation (Turks and Caicos Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51211,
    eng: "Turks and Caicos Islander",
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
        "Multi-word nationality - needs review for German translation (Turks and Caicos Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50212,
    eng: "Tuvaluan",
    article: "der",
    noun: "Tuvaluer",
    plural: "Tuvaluer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Tuvaluerin",
      plural: "Tuvaluerinnen",
    },
    notes: {
      miscNote:
        "Tuvalu is a tiny Pacific island nation and one of the world's smallest countries. English and Tuvaluan are official; it's at risk from rising sea levels.",
    },
    sentences: [
      {
        de: "Ein Mann aus Tuvalu ist Tuvaluer.",
        en: "A man from Tuvalu is a Tuvaluan.",
        case: "nom",
      },
      {
        de: "Der Tuvaluer spricht Englisch und Tuvaluisch.",
        en: "The Tuvaluan speaks English and Tuvaluan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51212,
    eng: "Tuvaluan",
    article: "die",
    noun: "Tuvaluerin",
    plural: "Tuvaluerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Tuvaluer", plural: "Tuvaluer" },
    notes: {
      miscNote:
        "Tuvalu is a tiny Pacific island nation and one of the world's smallest countries. English and Tuvaluan are official; it's at risk from rising sea levels.",
    },
    sentences: [
      {
        de: "Eine Frau aus Tuvalu ist Tuvaluerin.",
        en: "A woman from Tuvalu is a Tuvaluan.",
        case: "nom",
      },
      {
        de: "Die Tuvaluerin spricht Englisch und Samoanisch.",
        en: "The Tuvaluan speaks English and Samoan.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50213,
    eng: "Ugandan",
    article: "der",
    noun: "Ugander",
    plural: "Ugander",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Uganderin",
      plural: "Uganderinnen",
    },
    notes: {
      miscNote:
        "Uganda is an East African country known for gorilla trekking and the Nile River. English is official; over 40 African languages are spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Uganda ist Ugander.",
        en: "A man from Uganda is a Ugandan.",
        case: "nom",
      },
      {
        de: "Der Ugander spricht Englisch und Luganda.",
        en: "The Ugandan speaks English and Luganda.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51213,
    eng: "Ugandan",
    article: "die",
    noun: "Uganderin",
    plural: "Uganderinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ugander", plural: "Ugander" },
    notes: {
      miscNote:
        "Uganda is an East African country known for gorilla trekking and the Nile River. English is official; over 40 African languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Uganda ist Uganderin.",
        en: "A woman from Uganda is a Ugandan.",
        case: "nom",
      },
      {
        de: "Die Uganderin spricht Englisch und Acholi.",
        en: "The Ugandan speaks English and Acholi.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50214,
    eng: "Ukrainian",
    article: "der",
    noun: "Ukrainer",
    plural: "Ukrainer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Ukrainerin",
      plural: "Ukrainerinnen",
    },
    notes: {
      miscNote:
        "Ukraine is an Eastern European country with rich history and culture. Ukrainian is official; Russian is widely spoken, especially by older generations.",
    },
    sentences: [
      {
        de: "Ein Mann aus der Ukraine ist Ukrainer.",
        en: "A man from Ukraine is a Ukrainian.",
        case: "nom",
      },
      {
        de: "Der Ukrainer spricht Ukrainisch und Russisch.",
        en: "The Ukrainian speaks Ukrainian and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51214,
    eng: "Ukrainian",
    article: "die",
    noun: "Ukrainerin",
    plural: "Ukrainerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Ukrainer", plural: "Ukrainer" },
    notes: {
      miscNote:
        "Ukraine is an Eastern European country with rich history and culture. Ukrainian is official; Russian is widely spoken, especially by older generations.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Ukraine ist Ukrainerin.",
        en: "A woman from Ukraine is a Ukrainian.",
        case: "nom",
      },
      {
        de: "Die Ukrainerin spricht Ukrainisch und Englisch.",
        en: "The Ukrainian speaks Ukrainian and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50215,
    eng: "Emirati",
    article: "der",
    noun: "Emiratier",
    plural: "Emiratier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Emiraterin",
      plural: "Emiraterinnen",
    },
    notes: {
      miscNote:
        "The United Arab Emirates is a federation of seven emirates known for modern cities like Dubai. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Ein Mann aus den VAE ist Emiratier.",
        en: "A man from the UAE is an Emirati.",
        case: "nom",
      },
      {
        de: "Der Emiratier spricht Arabisch und Englisch.",
        en: "The Emirati speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51215,
    eng: "Emirati",
    article: "die",
    noun: "Emiraterin",
    plural: "Emiraterinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Emiratier", plural: "Emiratier" },
    notes: {
      miscNote:
        "The United Arab Emirates is a federation of seven emirates known for modern cities like Dubai. Arabic is official; English is widely spoken in business.",
    },
    sentences: [
      {
        de: "Eine Frau aus den VAE ist Emiraterin.",
        en: "A woman from the UAE is an Emirati.",
        case: "nom",
      },
      {
        de: "Die Emiraterin spricht Arabisch und Französisch.",
        en: "The Emirati speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50216,
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
        "The United States is a vast country known for diverse landscapes, culture, and entertainment. English is the de facto language; Spanish is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus den USA ist Amerikaner.",
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
    id: 51216,
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
        "The United States is a vast country known for diverse landscapes, culture, and entertainment. English is the de facto language; Spanish is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus den USA ist Amerikanerin.",
        en: "A woman from the USA is an American.",
        case: "nom",
      },
      {
        de: "Die Amerikanerin spricht Englisch und Französisch.",
        en: "The American speaks English and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50217,
    eng: "Uruguayan",
    article: "der",
    noun: "Uruguayer",
    plural: "Uruguayer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Uruguayerin",
      plural: "Uruguayerinnen",
    },
    notes: {
      miscNote:
        "Uruguay is a South American country known for its progressive politics and stable economy. Spanish is official; Portuguese is understood near Brazil.",
    },
    sentences: [
      {
        de: "Ein Mann aus Uruguay ist Uruguayer.",
        en: "A man from Uruguay is a Uruguayan.",
        case: "nom",
      },
      {
        de: "Der Uruguayer spricht Spanisch und Portugiesisch.",
        en: "The Uruguayan speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51217,
    eng: "Uruguayan",
    article: "die",
    noun: "Uruguayerin",
    plural: "Uruguayerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Uruguayer", plural: "Uruguayer" },
    notes: {
      miscNote:
        "Uruguay is a South American country known for its progressive politics and stable economy. Spanish is official; Portuguese is understood near Brazil.",
    },
    sentences: [
      {
        de: "Eine Frau aus Uruguay ist Uruguayerin.",
        en: "A woman from Uruguay is a Uruguayan.",
        case: "nom",
      },
      {
        de: "Die Uruguayerin spricht Spanisch und Englisch.",
        en: "The Uruguayan speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50218,
    eng: "Uzbek",
    article: "der",
    noun: "Usbeke",
    plural: "Usbeken",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Usbekin", plural: "Usbekinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Uzbekistan is a Central Asian country with ancient Silk Road cities. Uzbek is official; Russian is widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Usbekistan ist Usbeke.",
        en: "A man from Uzbekistan is an Uzbek.",
        case: "nom",
      },
      {
        de: "Der Usbeke spricht Usbekisch und Russisch.",
        en: "The Uzbek speaks Uzbek and Russian.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51218,
    eng: "Uzbek",
    article: "die",
    noun: "Usbekin",
    plural: "Usbekinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Usbeke", plural: "Usbeken" },
    notes: {
      miscNote:
        "Uzbekistan is a Central Asian country with ancient Silk Road cities. Uzbek is official; Russian is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Usbekistan ist Usbekin.",
        en: "A woman from Uzbekistan is an Uzbek.",
        case: "nom",
      },
      {
        de: "Die Usbekin spricht Usbekisch und Englisch.",
        en: "The Uzbek speaks Uzbek and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50219,
    eng: "Vanuatuan",
    article: "der",
    noun: "Vanuatuer",
    plural: "Vanuatuer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Vanuatuerin",
      plural: "Vanuatuerinnen",
    },
    notes: {
      miscNote:
        "Vanuatu is a Pacific island nation known for stunning beaches and custom culture. Bislama, English, and French are all official languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Vanuatu ist Vanuatuer.",
        en: "A man from Vanuatu is a Vanuatuan.",
        case: "nom",
      },
      {
        de: "Der Vanuatuer spricht Bislama und Englisch.",
        en: "The Vanuatuan speaks Bislama and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51219,
    eng: "Vanuatuan",
    article: "die",
    noun: "Vanuatuerin",
    plural: "Vanuatuerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Vanuatuer", plural: "Vanuatuer" },
    notes: {
      miscNote:
        "Vanuatu is a Pacific island nation known for stunning beaches and custom culture. Bislama, English, and French are all official languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Vanuatu ist Vanuatuerin.",
        en: "A woman from Vanuatu is a Vanuatuan.",
        case: "nom",
      },
      {
        de: "Die Vanuatuerin spricht Bislama und Französisch.",
        en: "The Vanuatuan speaks Bislama and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    //The German demonym and descriptive phrase for a Vatican citizen is vatikanischer Staatsbürger (male)
    // or vatikanische Staatsbürgerin (female),
    id: 50220,
    eng: "Vatican citizen",
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
        "Multi-word nationality - needs review for German translation (Vatican City)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51220,
    eng: "Vatican citizen",
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
        "Multi-word nationality - needs review for German translation (Vatican City)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50221,
    eng: "Venezuelan",
    article: "der",
    noun: "Venezolaner",
    plural: "Venezolaner",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Venezolanerin",
      plural: "Venezolanerinnen",
    },
    notes: {
      miscNote:
        "Venezuela is a South American country known for natural resources and Angel Falls. Spanish is official; English is increasingly studied by young people.",
    },
    sentences: [
      {
        de: "Ein Mann aus Venezuela ist Venezolaner.",
        en: "A man from Venezuela is a Venezuelan.",
        case: "nom",
      },
      {
        de: "Der Venezolaner spricht Spanisch und Englisch.",
        en: "The Venezuelan speaks Spanish and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51221,
    eng: "Venezuelan",
    article: "die",
    noun: "Venezolanerin",
    plural: "Venezolanerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Venezolaner",
      plural: "Venezolaner",
    },
    notes: {
      miscNote:
        "Venezuela is a South American country known for natural resources and Angel Falls. Spanish is official; English is increasingly studied by young people.",
    },
    sentences: [
      {
        de: "Eine Frau aus Venezuela ist Venezolanerin.",
        en: "A woman from Venezuela is a Venezuelan.",
        case: "nom",
      },
      {
        de: "Die Venezolanerin spricht Spanisch und Portugiesisch.",
        en: "The Venezuelan speaks Spanish and Portuguese.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50222,
    eng: "Vietnamese",
    article: "der",
    noun: "Vietnamese",
    plural: "Vietnamesen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Vietnamesin",
      plural: "Vietnamesinnen",
    },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      miscNote:
        "Vietnam is a Southeast Asian country with rich history and stunning landscapes. Vietnamese is official; French and English are studied as foreign languages.",
    },
    sentences: [
      {
        de: "Ein Mann aus Vietnam ist Vietnamese.",
        en: "A man from Vietnam is a Vietnamese.",
        case: "nom",
      },
      {
        de: "Der Vietnamese spricht Vietnamesisch und Englisch.",
        en: "The Vietnamese speaks Vietnamese and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51222,
    eng: "Vietnamese",
    article: "die",
    noun: "Vietnamesin",
    plural: "Vietnamesinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Vietnamese",
      plural: "Vietnamesen",
    },
    notes: {
      miscNote:
        "Vietnam is a Southeast Asian country with rich history and stunning landscapes. Vietnamese is official; French and English are studied as foreign languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Vietnam ist Vietnamesin.",
        en: "A woman from Vietnam is a Vietnamese.",
        case: "nom",
      },
      {
        de: "Die Vietnamesin spricht Vietnamesisch und Französisch.",
        en: "The Vietnamese speaks Vietnamese and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50223,
    eng: "Virgin Islander",
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
        "Multi-word nationality - needs review for German translation (Virgin Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 51223,
    eng: "Virgin Islander",
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
        "Multi-word nationality - needs review for German translation (Virgin Islands)",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "nom" },
    ],
    themes: ["people", "geography"],
    completed: false,
  },
  {
    id: 50224,
    eng: "Welsh",
    article: "der",
    noun: "Waliser",
    plural: "Waliser",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "die", singular: "Waliserin", plural: "Walerinnen" },
    notes: {
      miscNote:
        "Wales is part of the United Kingdom with its own distinct culture and language. Welsh and English are both official; Welsh is increasingly being learned.",
    },
    sentences: [
      {
        de: "Ein Mann aus Wales ist Waliser.",
        en: "A man from Wales is a Welshman.",
        case: "nom",
      },
      {
        de: "Der Waliser spricht Englisch und Walisisch.",
        en: "The Welshman speaks English and Welsh.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51224,
    eng: "Welsh",
    article: "die",
    noun: "Waliserin",
    plural: "Walerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Waliser", plural: "Waliser" },
    notes: {
      miscNote:
        "Wales is part of the United Kingdom with its own distinct culture and language. Welsh and English are both official; Welsh is increasingly being learned.",
    },
    sentences: [
      {
        de: "Eine Frau aus Wales ist Waliserin.",
        en: "A woman from Wales is a Welshwoman.",
        case: "nom",
      },
      {
        de: "Die Waliserin spricht Englisch und Gälisch.",
        en: "The Welshwoman speaks English and Gaelic.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50225,
    eng: "Yemeni",
    article: "der",
    noun: "Jemenit",
    plural: "Jemeniten",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Jemeniterin",
      plural: "Jemenitinnen",
    },
    notes: {
      miscNote:
        "Yemen is a Middle Eastern country on the Arabian Peninsula. Arabic is official; English is understood among educated populations.",
    },
    sentences: [
      {
        de: "Ein Mann aus dem Jemen ist Jemenit.",
        en: "A man from Yemen is a Yemeni.",
        case: "nom",
      },
      {
        de: "Der Jemenit spricht Arabisch und Englisch.",
        en: "The Yemeni speaks Arabic and English.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51225,
    eng: "Yemeni",
    article: "die",
    noun: "Jemeniterin",
    plural: "Jemenitinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Jemenit", plural: "Jemeniten" },
    notes: {
      miscNote:
        "Yemen is a Middle Eastern country on the Arabian Peninsula. Arabic is official; English is understood among educated populations.",
    },
    sentences: [
      {
        de: "Eine Frau aus dem Jemen ist Jemeniterin.",
        en: "A woman from Yemen is a Yemeni.",
        case: "nom",
      },
      {
        de: "Die Jemeniterin spricht Arabisch und Französisch.",
        en: "The Yemeni speaks Arabic and French.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  // CHUNK S: Zambia & Zimbabwe (IDs 50226-50227 & 51226-51227)

  {
    id: 50226,
    eng: "Zambian",
    article: "der",
    noun: "Sambier",
    plural: "Sambier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Sambierin",
      plural: "Sambierinnen",
    },
    notes: {
      miscNote:
        "Zambia is an East African country known for Victoria Falls and wildlife. English is official; over 70 African languages are spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Sambia ist Sambier.",
        en: "A man from Zambia is a Zambian.",
        case: "nom",
      },
      {
        de: "Der Sambier spricht Englisch und Bemba.",
        en: "The Zambian speaks English and Bemba.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51226,
    eng: "Zambian",
    article: "die",
    noun: "Sambierin",
    plural: "Sambierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Sambier", plural: "Sambier" },
    notes: {
      miscNote:
        "Zambia is an East African country known for Victoria Falls and wildlife. English is official; over 70 African languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Sambia ist Sambierin.",
        en: "A woman from Zambia is a Zambian.",
        case: "nom",
      },
      {
        de: "Die Sambierin spricht Englisch und Nyanja.",
        en: "The Zambian speaks English and Nyanja.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 50227,
    eng: "Zimbabwean",
    article: "der",
    noun: "Simbabwer",
    plural: "Simbabwer",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Simbabwerin",
      plural: "Simbabwerinnen",
    },
    notes: {
      miscNote:
        "Zimbabwe is a Southern African country known for Victoria Falls and wildlife reserves. English is official; Shona and Ndebele are widely spoken.",
    },
    sentences: [
      {
        de: "Ein Mann aus Simbabwe ist Simbabwer.",
        en: "A man from Zimbabwe is a Zimbabwean.",
        case: "nom",
      },
      {
        de: "Der Simbabwer spricht Englisch und Shona.",
        en: "The Zimbabwean speaks English and Shona.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
  {
    id: 51227,
    eng: "Zimbabwean",
    article: "die",
    noun: "Simbabwerin",
    plural: "Simbabwerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Simbabwer", plural: "Simbabwer" },
    notes: {
      miscNote:
        "Zimbabwe is a Southern African country known for Victoria Falls and wildlife reserves. English is official; Shona and Ndebele are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Simbabwe ist Simbabwerin.",
        en: "A woman from Zimbabwe is a Zimbabwean.",
        case: "nom",
      },
      {
        de: "Die Simbabwerin spricht Englisch und Ndebele.",
        en: "The Zimbabwean speaks English and Ndebele.",
        case: "nom",
      },
    ],
    themes: ["people", "geography"],
    completed: true,
  },
];
