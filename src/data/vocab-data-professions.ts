import type { VocabEntry } from "../types";
// no gender pair for king queen because queen is different word (vs journalist journalist)
// except scientists

// professions to mean true job or profession but also anything that can relate to someone's work
// such as colleague or expert
export const VOCAB_PROFESSIONS: VocabEntry[] = [
  {
    id: 30000,
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
    id: 30001,
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
  {
    id: 30002,
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
    id: 30003,
    eng: "soldier",
    article: "die",
    noun: "Soldatin",
    plural: "Soldatinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Soldat",
      plural: "Soldaten",
    },
    notes: {},
    sentences: [
      {
        de: "Die Soldatin erhielt die Schützenschnur in Gold.",
        en: "The soldier received the protective cord in gold.",
        case: "nom",
      },
      {
        de: "Die Soldatin wurde Lehrerin.",
        en: "The soldier became a teacher.",
        case: "nom",
      },
    ],
    themes: ["people", "work"],
    completed: true,
  },
  {
    id: 30004,
    eng: "king",
    article: "der",
    noun: "König",
    plural: "Könige",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      genderNote: "Words ending in -ig are usually masculine.",
      miscNote:
        "Der Froschkönig is translated to English more often as The Frog Prince.",
    },
    sentences: [
      {
        de: "Der König ist geschlagen.",
        en: "The king is defeated.",
        case: "nom",
      },
      {
        de: "In Europa gibt es noch Könige.",
        en: "In Europe there are still kings.",
        case: "acc",
      },
    ],
    themes: ["misc"],
    completed: true,
  },
  {
    id: 30005,
    eng: "queen",
    article: "die",
    noun: "Königin",
    plural: "Königinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      genderNote: "Words ending in -ig are usually masculine.",
      miscNote:
        "Der Froschkönig is translated to English more often as The Frog Prince.",
    },
    sentences: [
      {
        de: "Der König ist geschlagen.",
        en: "The king is defeated.",
        case: "nom",
      },
      {
        de: "In Europa gibt es noch Könige.",
        en: "In Europe there are still kings.",
        case: "acc",
      },
    ],
    themes: ["misc"],
    completed: true,
  },
  {
    id: 30006,
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
    id: 30007,
    eng: "president",
    article: "die",
    noun: "Präsidentin",
    plural: "Präsidentinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Präsident",
      plural: "Präsidenten",
    },
    notes: {},
    sentences: [
      {
        de: "Wo ist die Präsidentin?",
        en: "Where is the president?",
        case: "nom",
      },
      {
        de: "Oskar ist der Sekretär der Präsidentin.",
        en: "Oskar is the president's secretary.",
        case: "gen",
      },
    ],
    themes: ["people", "work"],
    completed: true,
  },
  {
    id: 30008,
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
    id: 30009,
    eng: "student",
    article: "die",
    noun: "Studentin",
    plural: "Studentinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Student",
      plural: "Studenten",
    },
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
    id: 300010,
    eng: "agent",
    article: "der",
    noun: "Agent",
    plural: "Agenten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherGerDefinitions: "die Agentin (female)",
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
    id: 300011,
    eng: "agent",
    article: "die",
    noun: "Agentin",
    plural: "Agentinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherGerDefinitions: "der  Agent (male)",
    },
    sentences: [
      {
        de: "Die Tarnung der Agentin ist aufgeflogen.",
        en: "The agent's cover was blown (The disguise was uncovered).",
        case: "gen",
      },
      {
        de: "Hauptberuflich arbeitet sie als Agentin.",
        en: "She works as an agent full-time.",
        case: "nom",
      },
    ],
    themes: ["work", "people"],
    completed: true,
  },

  {
    id: 300012,
    eng: "officer",
    article: "der",
    noun: "Beamte",
    plural: "Beamten",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: { article: "die", singular: "Beamtin", plural: "Beamtinnen" },
    notes: {
      otherEngDefinitions: "civil servant",
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
    id: 300013,
    eng: "officer",
    article: "die",
    noun: "Beamtin",
    plural: "Beamtinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: { article: "der", singular: "Beamte", plural: "Beamten" },
    notes: {
      otherEngDefinitions: "civil servant, clerk, appointee, public servant",
    },
    sentences: [
      {
        de: "Agnes will unbedingt Beamtin werden.",
        en: "Agness definitely wants to become a civil servant.",
        case: "nom",
      },
      {
        de: "In unserer Behörde arbeiten mehr Beamtinnen als Beamte.",
        en: "In our agency, more female officials work than male officials.",
        case: "nom",
      },
    ],
    themes: ["profession", "people"],
    completed: true,
  },
  // katy start here to fix
  {
    id: 300014,
    eng: "policeman",
    article: "der",
    noun: "Polizist",
    plural: "Polizisten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherEngDefinitions: "police officer, cop, copper, trooper",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 300015,
    eng: "policewoman",
    article: "die",
    noun: "Polizistin",
    plural: "Polizistinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherEngDefinitions: "police officer, cop, copper, trooper",
    },
    sentences: [
      { de: "SATZ1", en: "SENTENCE1", case: "nom" },
      { de: "SATZ2", en: "SENTENCE2", case: "acc" },
    ],
    themes: ["misc"],
    completed: false,
  },
  {
    id: 300016,
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
    id: 300017,
    eng: "messenger",
    article: "die",
    noun: "Botin",
    plural: "Botinnin",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Bote",
      plural: "Boten",
    },
    notes: {},
    sentences: [
      {
        de: "Sie ist die Botin.",
        en: "She is the messenger.",
        case: "nom",
      },
      {
        de: "Endlich fand sich die Botin drüben wieder ein.",
        en: "Finally, the messenger found herself over there again.",
        case: "nom",
      },
    ],
    themes: ["profession", "people"],
    completed: true,
  },
  {
    id: 300018,
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
    id: 300019,
    eng: "pilot",
    article: "die",
    noun: "Pilotin",
    plural: "Pilotinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Pilot",
      plural: "Piloten",
    },
    notes: {},
    sentences: [
      {
        de: "Frau Bruce war die erste Pilotin, die zwischen England und Japan flog.",
        en: "Mrs. Bruce was the first female pilot to fly between England and Japan.",
        case: "nom",
      },
      {
        de: "Sie wurde bei der Luftwaffe zur Pilotin ausgebildet.",
        en: "The Air Force trained her to become a pilot.",
        case: "dat",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 2230,
    eng: "philosopher",
    article: "der",
    noun: "Philosophin",
    plural: "Philosophinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Philosoph",
      plural: "Philosophen",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Meine Tochter war schon immer eine Philosophin.",
        en: "My daughter has always been a philosopher.",
        case: "nom",
      },
      {
        de: "Die berühmte Philosophin schrieb ein Buch über Ethik.",
        en: "The famous philopher wrote a book on ethics.",
        case: "nom",
      },
    ],
    themes: ["people", "profession", "education"],
    completed: true,
  },
  {
    id: 2229,
    eng: "philosopher",
    article: "der",
    noun: "Philosoph",
    plural: "Philosophen",
    hasNoPlural: false,
    weakMasculine: true,
    genderPair: {
      article: "die",
      singular: "Philosophin",
      plural: "Philosophinnen",
    },
    notes: { weakMascHint: "Nouns ending in '-f', '-ph'" },
    sentences: [
      {
        de: "Viele Philosophen kommen aus Griechenland.",
        en: "Many philosophers come from Greece.",
        case: "nom",
      },
      {
        de: "Ein Bart macht noch keinen Philosophen.",
        en: "The beard does not make the philosopher.",
        case: "acc",
      },
    ],
    themes: ["people", "profession", "education"],
    completed: true,
  },
  {
    id: 2433,
    eng: "patient",
    article: "die",
    noun: "Patientin",
    plural: "Patienten",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Patient",
      plural: "Patienten",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Die Patientin geht es von Tag zu Tag schlechter.",
        en: "The patient is getting worse day by day.",
        case: "dat",
      },
      {
        de: "Die Patientin ist über den Berg.",
        en: "The patient is over the critical stage.",
        case: "nom",
      },
    ],
    themes: ["work", "doctor", "hospital"],
    completed: true,
  },
  {
    id: 615,
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
    id: 2448,
    eng: "colleague",
    article: "die",
    noun: "Kollegin",
    plural: "Kolleginnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Kollege",
      plural: "Kollegen",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Die Mutter unserer Kollegin ist gestorben.",
        en: "Our colleague's mother died.",
        case: "gen",
      },
      {
        de: "Meine Kollegin ist Kroatin.",
        en: "My colleague is Croatian.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1304,
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
    id: 2450,
    eng: "senator",
    article: "die",
    noun: "Senatorin",
    plural: "Senatorinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Senator",
      plural: "Senatoren",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Die Senatorin traf sich mit dem Bürgermeister, um das neue Stadtentwicklungsprojekt zu besprechen.",
        en: "The senator met with the mayor to discuss the new urban development project.",
        case: "nom",
      },
      {
        de: "Die beiden Senatorinnen äußerten sich besorgt über die aktuelle Finanzlage.",
        en: "The two senators expressed concern about the current financial situation.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1731,
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
    id: 2451,
    eng: "photographer",
    article: "die",
    noun: "Fotografin",
    plural: "Fotografinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Fotograf",
      plural: "Fotografen",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Maria ist Fotografin.",
        en: "Maria is a photographer.",
        case: "nom",
      },
      {
        de: "Ich bin freischaffende Fotografin.",
        en: "I am a freelance photographer.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1748,
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
    id: 2452,
    eng: "inspector",
    article: "die",
    noun: "Inspektorin",
    plural: "Inspektorinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Inspektor",
      plural: "Inspektoren",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Sie arbeitet als Inspektorin im gehobenen Dienst.",
        en: "She works as an inspector in the higher service.",
        case: "nom",
      },
      {
        de: "Die Inspektorin der Schulbehörde hat ihren Rundgang abgeschlossen.",
        en: "The inspector of the school authority has completed her tour.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },
  {
    id: 1874,
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
    id: 2454,
    eng: "expert",
    article: "die",
    noun: "Expertin",
    plural: "Expertinnen",
    hasNoPlural: false,
    weakMasculine: false,
    genderPair: {
      article: "der",
      singular: "Experte",
      plural: "Experten",
    },
    notes: {}, // KATY FILL
    sentences: [
      {
        de: "Loretta ist die Experte hier.",
        en: "Loretta is the expert here.",
        case: "nom",
      },
      {
        de: "Expertinnen und Experten aus verschiedenen Ländern sollen jetzt herausfinden, warum das Flugzeug abgestürzt ist.",
        en: "Experts from various countries are now to find out why the airplane crashed.",
        case: "nom",
      },
    ],
    themes: ["people", "profession"],
    completed: true,
  },

  {
    id: 1318,
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
    id: 1117,
    eng: "assistant",
    article: "der",
    noun: "Assistent",
    plural: "Assistenten",
    hasNoPlural: false,
    weakMasculine: true,
    notes: {
      otherGerDefinitions: "die Assistentin (female)",
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
    id: 2434,
    eng: "assistant",
    article: "die",
    noun: "Assistentin",
    plural: "Assistentinnen",
    hasNoPlural: false,
    weakMasculine: false,
    notes: {
      otherGerDefinitions: "der Assistent (male)",
    },
    sentences: [
      {
        de: "Ich bin nicht mehr deine Assistentin.",
        en: "I am no longer your assistant.",
        case: "nom",
      },
      {
        de: "Dem Hochschulprofessor wurden zwei Assistentinnen zur Seite gestellt.",
        en: "The university professor was given two assistants.",
        case: "acc",
      },
    ],
    themes: ["work", "profession", "people"],
    completed: true,
  },
];
