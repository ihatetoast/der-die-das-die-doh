import type { VocabEntry } from "../types";
// check online for lists of demonyms. UK govt list of countries had differences: Citizens of Blahblah vs colloquial Blahblahian. go for that.
// "Citizen of ..." is kind of wanky
// also include info about nationalities like Bosnia and Herz... or antigua and barb...
// while officially they're "citizens of" they tend to go by their zone. bosnian or antiguan.
// address those later
// https://en.wikipedia.org/wiki/List_of_adjectival_and_demonymic_forms_for_countries_and_nations ENGLISH
// but look here (https://www.auswaertiges-amt.de/de/service/laender/). if not listed, ok to omit here
// and here https://deutsch.lingolia.com/en/vocabulary/laender-nationalitaeten#a-demonyms-vs-adjectives GERMAN
export const VOCAB_NATIONALITIES_T_Z: VocabEntry[] = [
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
      otherEngDefinitions: "Tajikistani",
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
      otherEngDefinitions: "Tajikistani",
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
  // deal with Trinidadian and Tobagonian. one country, but go by name?
  {
    id: 50207,
    eng: "Trinidadian",
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
    eng: "Trinidadian",
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
    id: 502077,
    eng: "Tobagonian",
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
    id: 512077,
    eng: "Trinidadian",
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
      otherEngDefinitions: "Emiri, Emirian",
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
      otherEngDefinitions: "Emiri, Emirian",
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
      otherEngDefinitions: "Uzbekistani",
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
      otherEngDefinitions: "Uzbekistani",
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
    eng: "Ni-Vanuatu",
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
      otherEngDefinitions: "Vanuatan",
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
    eng: "Ni-Vanuatu",
    article: "die",
    noun: "Vanuatuerin",
    plural: "Vanuatuerinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Vanuatuer", plural: "Vanuatuer" },
    notes: {
      otherEngDefinitions: "Vanuatan",
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
      otherEngDefinitions: "Welshman",
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
      otherEngDefinitions: "Welshwoman",
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
