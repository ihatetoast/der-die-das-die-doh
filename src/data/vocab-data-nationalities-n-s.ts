import type { VocabEntry } from "../types";
// check online for lists of demonyms. UK govt list of countries had differences: Citizens of Blahblah vs colloquial Blahblahian. go for that.
// "Citizen of ..." is kind of wanky
// also include info about nationalities like Bosnia and Herz... or antigua and barb...
// while officially they're "citizens of" they tend to go by their zone. bosnian or antiguan.
// address those later
// https://en.wikipedia.org/wiki/List_of_adjectival_and_demonymic_forms_for_countries_and_nations ENGLISH
// but look here (https://www.auswaertiges-amt.de/de/service/laender/). if not listed, ok to omit here
// and here https://deutsch.lingolia.com/en/vocabulary/laender-nationalitaeten#a-demonyms-vs-adjectives GERMAN
export const VOCAB_NATIONALITIES_N_S: VocabEntry[] = [
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
        de: "Eine Frau aus Namibia ist Namibierin.",
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
        de: "Eine Frau aus Nauru ist Nauruerin.",
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
      otherEngDefinitions: "Nepali",
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
      otherEngDefinitions: "Nepali",
      miscNote:
        "Nepal is home to Mount Everest and rich Buddhist and Hindu traditions. Nepali is official; over 120 languages are spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Nepal ist Nepalin.",
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
        de: "Eine Frau aus Neuseeland ist Neuseeländerin.",
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
        de: "Eine Frau aus Nicaragua ist Nicaraguanerin.",
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
        de: "Eine Frau aus Nigeria ist Nigerianerin.",
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
        de: "Eine Frau aus Niger ist Nigerin.",
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
        de: "Eine Frau aus Niue ist Niueerin.",
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
        de: "Eine Frau aus Nordkorea ist Nordkoreanierin.",
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
        de: "Eine Frau aus Nordirland ist Nordirin.",
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
        de: "Eine Frau aus Norwegen ist Norwegerin.",
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
        de: "Eine Frau aus Oman ist Omanerin.",
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
        de: "Eine Frau aus Pakistan ist Pakistanerin.",
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
        de: "Eine Frau aus Palau ist Palaerin.",
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
        de: "Eine Frau aus Palästina ist Palästinenserin.",
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
        de: "Eine Frau aus Panama ist Panamanerin.",
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
      otherEngDefinitions: "Papuan",
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
      otherEngDefinitions: "Papuan",
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
        de: "Eine Frau aus Paraguay ist Paraguayerin.",
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
        de: "Eine Frau aus Peru ist Peruanerin.",
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
    eng: "Pole",
    article: "der",
    noun: "Pole",
    plural: "Polen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Polin", plural: "Polinnen" },
    notes: {
      weakMascHint: "Nouns ending in '-e' (people, animals)",
      otherEngDefinitions: "Polish",
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
    eng: "Pole",
    article: "die",
    noun: "Polin",
    plural: "Polinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Pole", plural: "Polen" },
    notes: {
      otherEngDefinitions: "Polish",
      miscNote:
        "Poland is a Central European country with rich history and culture. Polish has some of the most complex grammar in European languages!",
    },
    sentences: [
      {
        de: "Eine Frau aus Polen ist Polin.",
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
        de: "Eine Frau aus Portugal ist Portugiesin.",
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
        de: "Eine Frau aus Katar ist Qatarerin.",
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
        de: "Eine Frau aus Rumänien ist Rumänin.",
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
        de: "Eine Frau aus Ruanda ist Ruanderin.",
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
        de: "Eine Frau aus El Salvador ist Salvadorianerin.",
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
        de: "Eine Frau aus San Marino ist Sanmarinerin.",
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
        de: "Eine Frau aus Samoa ist Samoanerin.",
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
        de: "Eine Frau aus São Tomé und Príncipe ist Sao-Tomeerin.",
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
      otherEngDefinitions: "Saudi",
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
      otherEngDefinitions: "Saudi",
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
    eng: "Scot",
    article: "der",
    noun: "Schotte",
    plural: "Schotten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Schottin", plural: "Schottinnen" },
    notes: {
      otherEngDefinitions: "Scottish, Scotsman",
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
    eng: "Scot",
    article: "die",
    noun: "Schottin",
    plural: "Schottinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Schotte", plural: "Schotten" },
    notes: {
      otherEngDefinitions: "Scottish, Scotswoman",
      miscNote:
        "Scotland is part of the United Kingdom with its own rich culture and traditions. Scottish Gaelic and Scots are spoken alongside English.",
    },
    sentences: [
      {
        de: "Eine Frau aus Schottland ist Schottin.",
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
        de: "Eine Frau aus Senegal ist Senegalin.",
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
      otherEngDefinitions: "Serb",
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
      otherEngDefinitions: "Serb",
      miscNote:
        "Serbia is a Balkan country with rich Byzantine heritage. Serbian is official; Hungarian is also spoken in northern regions.",
    },
    sentences: [
      {
        de: "Eine Frau aus Serbien ist Serbin.",
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
        de: "Eine Frau aus Sierra Leone ist Sierra-Leonerin.",
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
        de: "Eine Frau aus Singapur ist Singapurerin.",
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
      otherEngDefinitions: "Slovakian",
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
      otherEngDefinitions: "Slovakian",
      miscNote:
        "Slovakia is a Central European country known for its High Tatras mountains. Slovak is official; Hungarian is spoken by the Hungarian minority.",
    },
    sentences: [
      {
        de: "Eine Frau aus der Slowakei ist Slowakin.",
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
      otherEngDefinitions: "Slovene",
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
      otherEngDefinitions: "Slovene",
      miscNote:
        "Slovenia is a Central European country with Alpine mountains and Mediterranean coastline. Slovenian is official; Italian and Hungarian are also spoken.",
    },
    sentences: [
      {
        de: "Eine Frau aus Slowenien ist Slowenin.",
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
        de: "Eine Frau aus Somalia ist Somali.",
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
        de: "Eine Frau aus Südafrika ist Südafrikanerin.",
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
        de: "Eine Frau aus Südkorea ist Südkoreanierin.",
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
    eng: "Swede",
    article: "der",
    noun: "Schwede",
    plural: "Schweden",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Schwedin", plural: "Schwedinnen" },
    notes: {
      otherEngDefinitions: "Swedish",
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
      otherEngDefinitions: "Swedish",
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
];
