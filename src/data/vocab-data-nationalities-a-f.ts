import type { VocabEntry } from "../types";
// check online for lists of demonyms. UK govt list of countries had differences: Citizens of Blahblah vs colloquial Blahblahian. go for that.
// "Citizen of ..." is kind of wanky
// also include info about nationalities like Bosnia and Herz... or antigua and barb...
// while officially they're "citizens of" they tend to go by their zone. bosnian or antiguan.
// address those later
// https://en.wikipedia.org/wiki/List_of_adjectival_and_demonymic_forms_for_countries_and_nations ENGLISH
// but look here (https://www.auswaertiges-amt.de/de/service/laender/). if not listed, ok to omit here
// and here https://deutsch.lingolia.com/en/vocabulary/laender-nationalitaeten#a-demonyms-vs-adjectives GERMAN
export const VOCAB_NATIONALITIES_A_F: VocabEntry[] = [
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
        de: "Eine Frau aus Afghanistan ist Afghanin.",
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
        de: "Eine Frau aus Albanien ist Albanerin.",
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
        de: "Eine Frau aus Algerien ist Algerierin.",
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
        de: "Eine Frau aus den USA ist Amerikanerin.",
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
        de: "Eine Frau aus Andorra ist Andorranerin.",
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
        de: "Eine Frau aus Angola ist Angolanierin.",
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
        de: "Eine Frau aus Anguilla ist Anguillanerin.",
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
      otherEngDefinitions: "Argentinian",
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
        de: "Eine Frau aus Argentinien ist Argentinierin.",
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
        de: "Eine Frau aus Armenien ist Armenierin.",
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
        de: "Eine Frau aus Australien ist Australierin.",
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
        de: "Eine Frau aus Österreich ist Österreicherin.",
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
      otherEngDefinitions: "Azeri",
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
      otherEngDefinitions: "Azeri",
      miscNote:
        "Azerbaijan sits at the crossroads of Europe and Asia. The country is known for its oil wealth and fire mountains (natural gas fires on hillsides).",
    },
    sentences: [
      {
        de: "Eine Frau aus Aserbaidschan ist Aserbaidschanerin.",
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
        de: "Eine Frau aus den Bahamas ist Bahamaerin.",
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
        de: "Eine Frau aus Bahrain ist Bahrainerin.",
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
        de: "Eine Frau aus Bangladesch ist Bangladescherin.",
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
      otherEngDefinitions: "Bajan",
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
        de: "Eine Frau aus Barbados ist Barbaderin.",
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
        de: "Eine Frau aus Belarus ist Belarussin.",
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
        de: "Eine Frau aus Belgien ist Belgierin.",
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
        de: "Eine Frau aus Belize ist Belizerin.",
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
      otherEngDefinitions: "Beninois",
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
      otherEngDefinitions: "Beninoise",
      miscNote:
        "Benin is a West African country with a rich history of art and storytelling. It's known for its colorful textiles and vibrant markets.",
    },
    sentences: [
      {
        de: "Eine Frau aus Benin ist Beninerin.",
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
      otherEngDefinitions: "Bermudan",
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
        de: "Eine Frau aus Bermuda ist Bermuderin.",
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
        de: "Eine Frau aus Bhutan ist Bhutanerin.",
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
        de: "Eine Frau aus Bolivien ist Bolivianerin.",
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
  // for Bosnia and Herzogovina, use Bosnian and Herzegovinian separately. add a note.
  {
    id: 50037,
    eng: "Bosnian",
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
    eng: "Bosnian",
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
    id: 500377,
    eng: "Herzegovinians",
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
    id: 510377,
    eng: "Herzegovinians",
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
        de: "Eine Frau aus Brasilien ist Brasilianerin.",
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
    id: 50001,
    eng: "British",
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
    eng: "British",
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
        de: "Eine Frau aus Großbritannien ist Britin.",
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
        de: "Eine Frau aus Brunei ist Bruneierin.",
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
        de: "Eine Frau aus Bulgarien ist Bulgarin.",
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
        de: "Eine Frau aus Burkina Faso ist Burkinerin.",
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
        de: "Eine Frau aus Myanmar ist Burmesdin.",
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
      otherEngDefinitions: "Barundi",
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
        de: "Eine Frau aus Burundi ist Burunderin.",
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
        de: "Eine Frau aus Kambodscha ist Kambodschanerin.",
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
        de: "Eine Frau aus Kamerun ist Kamerunerin.",
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
        de: "Eine Frau aus Kanada ist Kanadierin.",
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
    noun: "Kapverdier",
    plural: "Kapverdier",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "die",
      singular: "Kapverdierin",
      plural: "Kapverdierinnen",
    },
    notes: {
      otherEngDefinitions: "Cabo Verdean",
      miscNote:
        "Cape Verde is an island nation off the coast of West Africa. It's known for music, salt mines, and as a whale-watching destination.",
    },
    sentences: [
      {
        de: "Ein Mann aus Kap Verde ist Kapverdier.",
        en: "A man from Cape Verde is a Cape Verdean.",
        case: "nom",
      },
      {
        de: "Der Kapverdier spricht Portugiesisch und Kapverdisches Kreolisch.",
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
    noun: "Kapverdierin",
    plural: "Kapverdierinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Kapverdier",
      plural: "Kapverdier",
    },
    notes: {
      miscNote:
        "Cape Verde is an island nation off the coast of West Africa. It's known for music, salt mines, and as a whale-watching destination.",
    },
    sentences: [
      {
        de: "Eine Frau aus Kap Verde ist Kapverdierin.",
        en: "A woman from Cape Verde is a Cape Verdean.",
        case: "nom",
      },
      {
        de: "Die Kapverdierin spricht Portugiesisch und Französisch.",
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
        de: "Eine Frau aus der Zentralafrikanischen Republik ist Zentralafrikanerin.",
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
        de: "Eine Frau aus Tschad ist Tschaderin.",
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
        de: "Eine Frau aus Chile ist Chilenin.",
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
        de: "Eine Frau aus Kolumbien ist Kolumbianerin.",
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
      otherEngDefinitions: "Comorian",
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
      otherEngDefinitions: "Comorian",
      miscNote:
        "The Comoros is a volcanic island nation in the Indian Ocean. Comorian, French, and Arabic are all spoken; the culture blends African, Arab, and French influences.",
    },
    sentences: [
      {
        de: "Eine Frau aus Komoren ist Komanerin.",
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
        de: "Eine Frau aus dem Kongo ist Kongolesin.",
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
        de: "Eine Frau aus Costa Rica ist Costa-Ricanerin.",
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
        de: "Eine Frau aus Kroatien ist Kroatin.",
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
        de: "Eine Frau aus Kuba ist Kubanerin.",
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
        de: "Eine Frau aus Zypern ist Zyprerin.",
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
        de: "Eine Frau aus Tschechien ist Tschechin.",
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
        de: "Eine Frau aus Dänemark ist Dänin.",
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
        de: "Eine Frau aus Dschibuti ist Dschibruterin.",
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
        de: "Eine Frau aus der Dominikanischen Republik ist Dominikanerin.",
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
      otherEngDefinitions: "Dutchman, Netherlander",
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
      otherEngDefinitions: "Dutchwoman, Netherlander",
      miscNote:
        "The Netherlands is famous for windmills, tulips, canals, and cycling. Many Dutch people speak multiple languages fluently.",
    },
    sentences: [
      {
        de: "Eine Frau aus den Niederlanden ist Niederländerin.",
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
        de: "Eine Frau aus Osttimor ist Timorer.",
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
        de: "Eine Frau aus Ecuador ist Ecuadorianerin.",
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
        de: "Eine Frau aus Ägypten ist Ägypterin.",
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
        de: "Eine Frau aus den VAE ist Emiraterin.",
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
      otherEngDefinitions: "Englishman",
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
      otherEngDefinitions: "Englishwoman",
      miscNote:
        "England is part of the United Kingdom but has its own distinct culture. English is the world's most widely spoken language!",
    },
    sentences: [
      {
        de: "Eine Frau aus England ist Engländerin.",
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
      otherEngDefinitions: "Equatorguinean",
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
      otherEngDefinitions: "Equatorguinean",
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
        de: "Eine Frau aus Äquatorialguinea ist Äquatorialguineerin.",
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
        de: "Eine Frau aus Eritrea ist Eritreerin.",
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
        de: "Eine Frau aus Estland ist Estin.",
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
        de: "Eine Frau aus Äthiopien ist Äthiopierin.",
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
        de: "Eine Frau aus den Färöern ist Färingerin.",
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
        de: "Eine Frau aus Fidschi ist Fidschianerin.",
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
    eng: "Filipina",
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
        de: "Eine Frau aus den Philippinen ist Philippinerin.",
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
    eng: "Finn",
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
        de: "Eine Frau aus Finnland ist Finnin.",
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
      otherEngDefinitions: "Frenchman",
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
      otherEngDefinitions: "Frenchwoman",
      miscNote:
        "France is the world's most visited country. French has influenced English more than any other language!",
    },
    sentences: [
      {
        de: "Eine Frau aus Frankreich ist Französin.",
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
];
