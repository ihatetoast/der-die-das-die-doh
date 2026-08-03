import type { VocabEntry } from "../types";
// check online for lists of demonyms. UK govt list of countries had differences: Citizens of Blahblah vs colloquial Blahblahian. go for that.
// "Citizen of ..." is kind of wanky
// also include info about nationalities like Bosnia and Herz... or antigua and barb...
// while officially they're "citizens of" they tend to go by their zone. bosnian or antiguan.
// address those later
// https://en.wikipedia.org/wiki/List_of_adjectival_and_demonymic_forms_for_countries_and_nations ENGLISH
// but look here (https://www.auswaertiges-amt.de/de/service/laender/). if not listed, ok to omit here
// and here https://deutsch.lingolia.com/en/vocabulary/laender-nationalitaeten#a-demonyms-vs-adjectives GERMAN
export const VOCAB_NATIONALITIES_G_M: VocabEntry[] = [
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
      otherEngDefinitions: "Gabonaise",
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
      otherEngDefinitions: "Gabonaise",
      miscNote:
        "Gabon is a Central African country known for oil wealth and rainforests. French is official; Fang and Bantu languages are widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Gabun ist Gabunerin.",
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
        de: "Eine Frau aus Gambia ist Gambierin.",
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
        de: "Eine Frau aus Georgien ist Georgierin.",
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
        de: "Eine Frau aus Deutschland ist Deutsche.",
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
        de: "Eine Frau aus Ghana ist Ghanaerin.",
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
        de: "Eine Frau aus Gibraltar ist Gibraltarerin.",
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
      otherEngDefinitions: "Hellene",
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
      otherEngDefinitions: "Hellene",
      miscNote:
        "Greece is the birthplace of Western philosophy, democracy, and the Olympics. Greek has influenced many European languages.",
    },
    sentences: [
      {
        de: "Eine Frau aus Griechenland ist Griechin.",
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
        de: "Eine Frau aus Grönland ist Grönländerin.",
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
        de: "Eine Frau aus Grenada ist Grenaderin.",
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
        de: "Eine Frau aus Guam ist Guamanerin.",
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
        de: "Eine Frau aus Guatemala ist Guatemaltekin.",
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
        de: "Eine Frau aus Guinea ist Guineerin.",
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
        de: "Eine Frau aus Guyana ist Guyanerin.",
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
        de: "Eine Frau aus Haiti ist Haitianerin.",
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
        de: "Eine Frau aus Honduras ist Honduranerin.",
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
      otherEngDefinitions: "Hong Kongese",
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
      otherEngDefinitions: "Hong Kongese",
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
      otherEngDefinitions: "Magyar",
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
      otherEngDefinitions: "Magyar",
      miscNote:
        "Hungary is famous for thermal baths, classical music, and the Danube River. Hungarian is a Uralic language, making it unique in Europe!",
    },
    sentences: [
      {
        de: "Eine Frau aus Ungarn ist Ungarin.",
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
        de: "Eine Frau aus Island ist Isländerin.",
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
        de: "Eine Frau aus Indien ist Inderin.",
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
        de: "Eine Frau aus Indonesien ist Indonesierin.",
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
        de: "Eine Frau aus dem Iran ist Iranerin.",
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
        de: "Eine Frau aus dem Irak ist Irakerin.",
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
      otherEngDefinitions: "Irishman",
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
      otherEngDefinitions: "Irishwoman",
      miscNote:
        "Ireland is the Emerald Isle known for its green landscapes, pubs, and literature. Irish (Gaeilge) is an official language alongside English.",
    },
    sentences: [
      {
        de: "Eine Frau aus Irland ist Irin.",
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
        de: "Eine Frau aus Israel ist Israeli.",
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
        de: "Eine Frau aus Italien ist Italienerin.",
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
        "Elfenbeinküste / Côte d'Ivoire (Ivory Coast) is known for cocoa production and vibrant music. French is official; Akan, Kru, and Mandé languages are widely spoken.",
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
        de: "Eine Frau aus Elfenbeinküste ist Ivorerin.",
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
        de: "Eine Frau aus Jamaika ist Jamaikanerin.",
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
        de: "Eine Frau aus Japan ist Japanerin.",
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
        de: "Eine Frau aus Jordanien ist Jordanierin.",
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
      otherEngDefinitions: "Kazakhstani",
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
      otherEngDefinitions: "Kazakhstani",
      miscNote:
        "Kazakhstan is the world's largest landlocked country. Kazakh is official; Russian is widely spoken as a second language.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kasachstan ist Kasachin.",
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
        de: "Eine Frau aus Kenia ist Kenianerin.",
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
        de: "Eine Frau aus dem Kosovo ist Kosovarin.",
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
        de: "Eine Frau aus Kuwait ist Kuwaiterin.",
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
      otherEngDefinitions: "Kyrgyzstani, Kirgiz, Kirghiz",
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
      otherEngDefinitions: "Kyrgyzstani, Kirgiz, Kirghiz",
      miscNote:
        "Kyrgyzstan is a mountainous country in Central Asia. Kyrgyz is official; Russian is widely spoken as a second language.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kirgisistan ist Kirgisin.",
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
      otherEngDefinitions: "Laotian",
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
      otherEngDefinitions: "Laotian",
      miscNote:
        "Laos is a Southeast Asian country known for temples and the Mekong River. Lao is official; French is still understood by older generations.",
    },
    sentences: [
      {
        de: "Eine Frau aus Laos ist Laotin.",
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
      otherEngDefinitions: "Lett",
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
      otherEngDefinitions: "Lett",
      miscNote:
        "Latvia is a Baltic country known for its pine forests and amber. Latvian is official; Russian is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Lettland ist Lettin.",
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
        de: "Eine Frau aus dem Libanon ist Libanesin.",
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
        de: "Eine Frau aus Liberia ist Liberianerin.",
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
        de: "Eine Frau aus Libyen ist Libyerin.",
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
        de: "Eine Frau aus Litauen ist Litauerin.",
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
        de: "Eine Frau aus Luxemburg ist Luxemburgerin.",
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
        de: "Eine Frau aus Macau ist Makauerin.",
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
        de: "Eine Frau aus Nordmazedonien ist Makedonerin.",
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
      otherEngDefinitions: "Madagascans",
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
      otherEngDefinitions: "Madagascans",
      miscNote:
        "Madagascar is the world's fourth-largest island with unique wildlife found nowhere else. Malagasy is official; French is widely spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Madagaskar ist Madagassin.",
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
        de: "Eine Frau aus Malawi ist Malawerin.",
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
        de: "Eine Frau aus Malaysia ist Malaysierin.",
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
        de: "Eine Frau aus den Malediven ist Malediverin.",
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
        de: "Eine Frau aus Mali ist Malierin.",
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
        de: "Eine Frau aus Malta ist Malteserin.",
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
        de: "Eine Frau aus den Marshallinseln ist Marschalsin.",
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
      otherEngDefinitions: "Martiniquais",
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
      otherEngDefinitions: "Martiniquaise",
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
        de: "Eine Frau aus Mauretanien ist Mauretanierin.",
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
        de: "Eine Frau aus Mauritius ist Mauritierin.",
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
        de: "Eine Frau aus Mexiko ist Mexikanerin.",
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
        de: "Eine Frau aus Mikronesien ist Mikronesierin.",
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
        de: "Eine Frau aus Moldau ist Moldauerin.",
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
    eng: "Monégasque",
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
      otherEngDefinitions: "Monacan",
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
    eng: "Monégasque",
    article: "die",
    noun: "Monegassin",
    plural: "Monegassinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Monegasse", plural: "Monegassen" },
    notes: {
      otherEngDefinitions: "Monacan",
      miscNote:
        "Monaco is a tiny but glamorous principality on the French Riviera. French is official; Monegasque (a local language) and Italian are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Monaco ist Monegassin.",
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
      otherEngDefinitions: "Mongol",
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
      otherEngDefinitions: "Mongol",
      miscNote:
        "Mongolia is a vast country known for the Gobi Desert and nomadic traditions. Mongolian is official; Russian and English are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Mongolei ist Mongolinnen.",
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
        de: "Eine Frau aus Montenegro ist Montenegrinerin.",
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
        de: "Eine Frau aus Marokko ist Marokkanerin.",
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
        de: "Eine Frau aus Mosambik ist Mosambikanerin.",
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
];
