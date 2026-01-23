//  notes: { genderNotes:[], pluralHints:[],}, as i find them. empty notes:{} until i do
//     weakMasculine: false,
//     notes: {}, change to true when i get to them.
// gender hints
// Nouns ending in -e (der Junge,  der Beamte)
// Nouns ending in -ant, -ent, -ist (der Präsident, der Student, der Journalist)
// A few irregular ones (der Herr, der Nachbar, der Bauer)
// Some nationalities (der Franzose, der Grieche)

// there are 2000 words coming in. 
export const VOCABULARY_COMMON = [
  {
    id: 1,
    eng: 'time', // MAIN FACE ON LOAD
    article: 'die', // RIGHT SIDE, ONE CLICK RIGHT
    noun: 'Zeit', // TOP SIDE, ONE CLICK UP
    plural: 'die Zeiten', // LEFT SIDE, ONE CLICK LEFT
    weakMasculine: false, // ?? BACK SIDE WITH ANY NOTES? TWO CLICKS ANY DIRECTION
    notes: {},
    sentences: [ // BOTTOM SIDE, ONE CLICK DOWN
      {
        de: 'Unsere Zeit ist abgelaufen',
        en: 'Our time has expired',
        case: 'nom',
      },
      {
        de: 'Es ist nur eine Frage der Zeit',
        en: 'It is merely a matter of time',
        case: 'gen',
      },
    ],
    completed: false,
  },
  {
    id: 2,
    eng: 'man',
    article: 'der',
    noun: 'Mann',
    plural: 'die Männer',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 3,
    eng: 'hand',
    article: 'die',
    noun: 'Hand',
    plural: 'die Hände',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 4,
    eng: 'day',
    article: 'der',
    noun: 'Tag',
    plural: 'die Tage',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 5,
    eng: 'way',
    article: 'der',
    noun: 'Weg',
    plural: 'die Wege',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 6,
    eng: 'eye',
    article: 'das',
    noun: 'Auge',
    plural: 'die Augen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 7,
    eng: 'thing',
    article: 'die',
    noun: 'Sache',
    plural: 'die Sachen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 8,
    eng: 'head',
    article: 'der',
    noun: 'Kopf',
    plural: 'die Köpfe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 9,
    eng: 'year',
    article: 'das',
    noun: 'Jahr',
    plural: 'die Jahre',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 10,
    eng: 'room',
    article: 'das',
    noun: 'Zimmer',
    plural: 'die Zimmer',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 11,
    eng: 'door',
    article: 'die',
    noun: 'Tür',
    plural: 'die Türen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 12,
    eng: 'woman',
    article: 'die',
    noun: 'Frau',
    plural: 'die Frauen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 13,
    eng: 'face',
    article: 'das',
    noun: 'Gesicht',
    plural: 'die Gesichter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 14,
    eng: 'mother',
    article: 'die',
    noun: 'Mutter',
    plural: 'die Mütter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 15,
    eng: 'people',
    article: 'die',
    noun: 'Leute',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 16,
    eng: 'night',
    article: 'die',
    noun: 'Nacht',
    plural: 'die Nächte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 17,
    eng: 'house',
    article: 'das',
    noun: 'Haus',
    plural: 'die Häuser',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 18,
    eng: 'father',
    article: 'der',
    noun: 'Vater',
    plural: 'die Väter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 19,
    eng: 'life',
    article: 'das',
    noun: 'Leben',
    plural: 'die Leben',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 20,
    eng: 'back',
    article: 'der',
    noun: 'Rücken',
    plural: 'die Rücken',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 21,
    eng: 'voice',
    article: 'die',
    noun: 'Stimme',
    plural: 'die Stimmen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 22,
    eng: 'girl',
    article: 'das',
    noun: 'Mädchen',
    plural: 'die Mädchen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 23,
    eng: 'place',
    article: 'der',
    noun: 'Ort',
    plural: 'die Orte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 24,
    eng: 'boy',
    article: 'der',
    noun: 'Junge',
    plural: 'die Jungen',
    weakMasculine: true,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 25,
    eng: 'car',
    article: 'das',
    noun: 'Auto',
    plural: 'die Autos',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 26,
    eng: 'side',
    article: 'die',
    noun: 'Seite',
    plural: 'die Seiten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 27,
    eng: 'arm',
    article: 'der',
    noun: 'Arm',
    plural: 'die Arme',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 28,
    eng: 'child',
    article: 'das',
    noun: 'Kind',
    plural: 'die Kinder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 29,
    eng: 'word',
    article: 'das',
    noun: 'Wort',
    plural: 'die Wörter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 30,
    eng: 'moment',
    article: 'der',
    noun: 'Moment',
    plural: 'die Momente',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 31,
    eng: 'hair',
    article: 'das',
    noun: 'Haar',
    plural: 'die Haare',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 32,
    eng: 'foot',
    article: 'der',
    noun: 'Fuß',
    plural: 'die Füße',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 33,
    eng: 'water',
    article: 'das',
    noun: 'Wasser',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 34,
    eng: 'light',
    article: 'das',
    noun: 'Licht',
    plural: 'die Lichter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 35,
    eng: 'world',
    article: 'die',
    noun: 'Welt',
    plural: 'die Welten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 36,
    eng: 'name',
    article: 'der',
    noun: 'Name',
    plural: 'die Namen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 37,
    eng: 'friend',
    article: 'der',
    noun: 'Freund',
    plural: 'die Freunde',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 38,
    eng: 'window',
    article: 'das',
    noun: 'Fenster',
    plural: 'die Fenster',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 39,
    eng: 'body',
    article: 'der',
    noun: 'Körper',
    plural: 'die Körper',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 40,
    eng: 'table',
    article: 'der',
    noun: 'Tisch',
    plural: 'die Tische',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 41,
    eng: 'morning',
    article: 'der',
    noun: 'Morgen',
    plural: 'die Morgen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 42,
    eng: 'bed',
    article: 'das',
    noun: 'Bett',
    plural: 'die Betten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 43,
    eng: 'wall',
    article: 'die',
    noun: 'Wand',
    plural: 'die Wände',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 44,
    eng: 'street',
    article: 'die',
    noun: 'Straße',
    plural: 'die Straßen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 45,
    eng: 'school',
    article: 'die',
    noun: 'Schule',
    plural: 'die Schulen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 46,
    eng: 'air',
    article: 'die',
    noun: 'Luft',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 47,
    eng: 'floor',
    article: 'der',
    noun: 'Boden',
    plural: 'die Böden',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 48,
    eng: 'hour',
    article: 'die',
    noun: 'Stunde',
    plural: 'die Stunden',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 49,
    eng: 'end',
    article: 'das',
    noun: 'Ende',
    plural: 'die Enden',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 50,
    eng: 'family',
    article: 'die',
    noun: 'Familie',
    plural: 'die Familien',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 51,
    eng: 'guy',
    article: 'der',
    noun: 'Kerl',
    plural: 'die Kerle',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 52,
    eng: 'guy/type',
    article: 'der',
    noun: 'Typ',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 53,
    eng: 'type/kind/species',
    article: 'die',
    noun: 'Art',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 54,
    eng: 'kind (of variety)',
    article: 'die',
    noun: 'Sorte',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 55,
    eng: 'minute',
    article: 'die',
    noun: 'Minute',
    plural: 'die Minuten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 56,
    eng: 'story',
    article: 'die',
    noun: 'Geschichte',
    plural: 'die Geschichten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 57,
    eng: 'god',
    article: 'der',
    noun: 'Gott',
    plural: 'die Götter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 58,
    eng: 'week',
    article: 'die',
    noun: 'Woche',
    plural: 'die Wochen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 59,
    eng: 'work',
    article: 'die',
    noun: 'Arbeit',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 60,
    eng: 'shoulder',
    article: 'die',
    noun: 'Schulter',
    plural: 'die Schultern',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 61,
    eng: 'part',
    article: 'der',
    noun: 'Teil',
    plural: 'die Teile',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 62,
    eng: 'mind',
    article: 'der',
    noun: 'Verstand',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 63,
    eng: 'book',
    article: 'das',
    noun: 'Buch',
    plural: 'die Bücher',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 64,
    eng: 'finger',
    article: 'der',
    noun: 'Finger',
    plural: 'die Finger',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 65,
    eng: 'mouth',
    article: 'der',
    noun: 'Mund',
    plural: 'die Münder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 66,
    eng: 'kid',
    article: 'das',
    noun: 'Kind',
    plural: 'die Kinder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 67,
    eng: 'glass',
    article: 'das',
    noun: 'Glas',
    plural: 'die Gläser',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 68,
    eng: 'tree',
    article: 'der',
    noun: 'Baum',
    plural: 'die Bäume',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 69,
    eng: 'sound',
    article: 'der',
    noun: 'Klang',
    plural: 'die Klänge',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 70,
    eng: 'line',
    article: 'die',
    noun: 'Linie',
    plural: 'die Linien',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 71,
    eng: 'wife',
    article: 'die',
    noun: 'Ehefrau',
    plural: 'die Ehefrauen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 72,
    eng: 'heart',
    article: 'das',
    noun: 'Herz',
    plural: 'die Herzen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 73,
    eng: 'money',
    article: 'das',
    noun: 'Geld',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 74,
    eng: 'phone',
    article: 'das',
    noun: 'Telefon',
    plural: 'die Telefone',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 75,
    eng: 'look',
    article: 'der',
    noun: 'Blick',
    plural: 'die Blicke',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 76,
    eng: 'leg',
    article: 'das',
    noun: 'Bein',
    plural: 'die Beine',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 77,
    eng: 'chair',
    article: 'der',
    noun: 'Stuhl',
    plural: 'die Stühle',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 78,
    eng: 'office',
    article: 'das',
    noun: 'Büro',
    plural: 'die Büros',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 79,
    eng: 'brother',
    article: 'der',
    noun: 'Bruder',
    plural: 'die Brüder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 80,
    eng: 'question',
    article: 'die',
    noun: 'Frage',
    plural: 'die Fragen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 81,
    eng: 'city',
    article: 'die',
    noun: 'Stadt',
    plural: 'die Städte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 82,
    eng: 'month',
    article: 'der',
    noun: 'Monat',
    plural: 'die Monate',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 83,
    eng: 'baby',
    article: 'das',
    noun: 'Baby',
    plural: 'die Babys',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 84,
    eng: 'home',
    article: 'das',
    noun: 'Zuhause',
    plural: 'die Zuhause',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 85,
    eng: 'dog',
    article: 'der',
    noun: 'Hund',
    plural: 'die Hunde',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 86,
    eng: 'road',
    article: 'die',
    noun: 'Straße',
    plural: 'die Straßen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 87,
    eng: 'idea',
    article: 'die',
    noun: 'Idee',
    plural: 'die Ideen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 88,
    eng: 'kitchen',
    article: 'die',
    noun: 'Küche',
    plural: 'die Küchen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 89,
    eng: 'lot',
    article: 'das',
    noun: 'Grundstück',
    plural: 'die Grundstücke',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 90,
    eng: 'son',
    article: 'der',
    noun: 'Sohn',
    plural: 'die Söhne',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 91,
    eng: 'job',
    article: 'der',
    noun: 'Job',
    plural: 'die Jobs',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 92,
    eng: 'paper',
    article: 'das',
    noun: 'Papier',
    plural: 'die Papiere',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 93,
    eng: 'sister',
    article: 'die',
    noun: 'Schwester',
    plural: 'die Schwestern',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 94,
    eng: 'smile',
    article: 'das',
    noun: 'Lächeln',
    plural: 'die Lächeln',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 95,
    eng: 'point',
    article: 'der',
    noun: 'Punkt',
    plural: 'die Punkte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 96,
    eng: 'thought',
    article: 'der',
    noun: 'Gedanke',
    plural: 'die Gedanken',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 97,
    eng: 'love',
    article: 'die',
    noun: 'Liebe',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 98,
    eng: 'town',
    article: 'die',
    noun: 'Stadt',
    plural: 'die Städte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 99,
    eng: 'death',
    article: 'der',
    noun: 'Tod',
    plural: 'die Tode',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 100,
    eng: 'ground',
    article: 'der',
    noun: 'Boden',
    plural: 'die Böden',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 101,
    eng: 'others',
    article: 'die',
    noun: 'Anderen',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 102,
    eng: 'fire',
    article: 'das',
    noun: 'Feuer',
    plural: 'die Feuer',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 103,
    eng: 'step',
    article: 'der',
    noun: 'Schritt',
    plural: 'die Schritte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 104,
    eng: 'blood',
    article: 'das',
    noun: 'Blut',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 105,
    eng: 'fact',
    article: 'die',
    noun: 'Tatsache',
    plural: 'die Tatsachen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 106,
    eng: 'breath',
    article: 'der',
    noun: 'Atem',
    plural: 'die Atemzüge',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 107,
    eng: 'lip',
    article: 'die',
    noun: 'Lippe',
    plural: 'die Lippen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 108,
    eng: 'sun',
    article: 'die',
    noun: 'Sonne',
    plural: 'die Sonnen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 109,
    eng: 'building',
    article: 'das',
    noun: 'Gebäude',
    plural: 'die Gebäude',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 110,
    eng: 'number',
    article: 'die',
    noun: 'Nummer',
    plural: 'die Nummern',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 111,
    eng: 'husband',
    article: 'der',
    noun: 'Ehemann',
    plural: 'die Ehemänner',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 112,
    eng: 'parent',
    article: 'der',
    noun: 'Elternteil',
    plural: 'die Elternteile',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 113,
    eng: 'corner',
    article: 'die',
    noun: 'Ecke',
    plural: 'die Ecken',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 114,
    eng: 'problem',
    article: 'das',
    noun: 'Problem',
    plural: 'die Probleme',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 115,
    eng: 'couple',
    article: 'das',
    noun: 'Paar',
    plural: 'die Paare',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 116,
    eng: 'daughter',
    article: 'die',
    noun: 'Tochter',
    plural: 'die Töchter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 117,
    eng: 'bag',
    article: 'die',
    noun: 'Tasche',
    plural: 'die Taschen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 118,
    eng: 'hell',
    article: 'die',
    noun: 'Hölle',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 119,
    eng: 'rest',
    article: 'die',
    noun: 'Ruhe',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 120,
    eng: 'business',
    article: 'das',
    noun: 'Geschäft',
    plural: 'die Geschäfte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 121,
    eng: 'sky',
    article: 'der',
    noun: 'Himmel',
    plural: 'die Himmel',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 122,
    eng: 'box',
    article: 'die',
    noun: 'Schachtel',
    plural: 'die Schachteln',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 123,
    eng: 'person',
    article: 'die',
    noun: 'Person',
    plural: 'die Personen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 124,
    eng: 'reason',
    article: 'der',
    noun: 'Grund',
    plural: 'die Gründe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 125,
    eng: 'right',
    article: 'das',
    noun: 'Recht',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 126,
    eng: 'skin',
    article: 'die',
    noun: 'Haut',
    plural: 'die Häute',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 127,
    eng: 'dad',
    article: 'der',
    noun: 'Vater',
    plural: 'die Väter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 128,
    eng: 'case',
    article: 'der',
    noun: 'Fall',
    plural: 'die Fälle',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 129,
    eng: 'piece',
    article: 'das',
    noun: 'Stück',
    plural: 'die Stücke',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 130,
    eng: 'doctor',
    article: 'der',
    noun: 'Arzt',
    plural: 'die Ärzte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 131,
    eng: 'edge',
    article: 'der',
    noun: 'Rand',
    plural: 'die Ränder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 132,
    eng: 'mom',
    article: 'die',
    noun: 'Mutter',
    plural: 'die Mütter',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 133,
    eng: 'picture',
    article: 'das',
    noun: 'Bild',
    plural: 'die Bilder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 134,
    eng: 'sense',
    article: 'der',
    noun: 'Sinn',
    plural: 'die Sinne',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 135,
    eng: 'ear',
    article: 'das',
    noun: 'Ohr',
    plural: 'die Ohren',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 136,
    eng: 'second',
    article: 'die',
    noun: 'Sekunde',
    plural: 'die Sekunden',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 137,
    eng: 'lady',
    article: 'die',
    noun: 'Dame',
    plural: 'die Damen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 138,
    eng: 'neck',
    article: 'der',
    noun: 'Hals',
    plural: 'die Hälse',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 139,
    eng: 'wind',
    article: 'der',
    noun: 'Wind',
    plural: 'die Winde',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 140,
    eng: 'desk',
    article: 'der',
    noun: 'Schreibtisch',
    plural: 'die Schreibtische',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 141,
    eng: 'gun',
    article: 'die',
    noun: 'Waffe',
    plural: 'die Waffen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 142,
    eng: 'stone',
    article: 'der',
    noun: 'Stein',
    plural: 'die Steine',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 143,
    eng: 'coffee',
    article: 'der',
    noun: 'Kaffee',
    plural: 'die Kaffees',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 144,
    eng: 'ship',
    article: 'das',
    noun: 'Schiff',
    plural: 'die Schiffe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 145,
    eng: 'earth',
    article: 'die',
    noun: 'Erde',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 146,
    eng: 'food',
    article: 'das',
    noun: 'Essen',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 147,
    eng: 'horse',
    article: 'das',
    noun: 'Pferd',
    plural: 'die Pferde',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 148,
    eng: 'field',
    article: 'das',
    noun: 'Feld',
    plural: 'die Felder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 149,
    eng: 'war',
    article: 'der',
    noun: 'Krieg',
    plural: 'die Kriege',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 150,
    eng: 'afternoon',
    article: 'der',
    noun: 'Nachmittag',
    plural: 'die Nachmittage',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 151,
    eng: 'sir',
    article: 'der',
    noun: 'Herr',
    plural: 'die Herren',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      {
        de: 'SATZ2',
        en: 'SENTENCE2',
        case: '',
      },
    ],
    completed: false,
  },
  {
    id: 152,
    eng: 'space',
    article: 'der',
    noun: 'Raum',
    plural: 'die Räume',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: '' },
      { de: 'SATZ2', en: 'SENTENCE2', case: '' },
    ],
    completed: false,
  },
  {
    id: 153,
    eng: 'evening',
    article: 'der',
    noun: 'Abend',
    plural: 'die Abende',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 154,
    eng: 'letter',
    article: 'der',
    noun: 'Brief',
    plural: 'die Briefe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 155,
    eng: 'bar',
    article: 'die',
    noun: 'Bar',
    plural: 'die Bars',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 156,
    eng: 'dream',
    article: 'der',
    noun: 'Traum',
    plural: 'die Träume',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 157,
    eng: 'apartment',
    article: 'die',
    noun: 'Wohnung',
    plural: 'die Wohnungen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 158,
    eng: 'chest',
    article: 'die',
    noun: 'Brust',
    plural: 'die Brüste',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 159,
    eng: 'game',
    article: 'das',
    noun: 'Spiel',
    plural: 'die Spiele',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 160,
    eng: 'summer',
    article: 'der',
    noun: 'Sommer',
    plural: 'die Sommer',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 161,
    eng: 'matter',
    article: 'die',
    noun: 'Angelegenheit',
    plural: 'die Angelegenheiten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 162,
    eng: 'silence',
    article: 'die',
    noun: 'Stille',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 163,
    eng: 'top',
    article: 'die',
    noun: 'Spitze',
    plural: 'die Spitzen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 164,
    eng: 'rock',
    article: 'der',
    noun: 'Felsen',
    plural: 'die Felsen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 165,
    eng: 'power',
    article: 'die',
    noun: 'Macht',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 166,
    eng: 'clothes',
    article: 'die',
    noun: 'Kleidung',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 167,
    eng: 'sign',
    article: 'das',
    noun: 'Schild',
    plural: 'die Schilder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 168,
    eng: 'attention',
    article: 'die',
    noun: 'Aufmerksamkeit',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 169,
    eng: 'music',
    article: 'die',
    noun: 'Musik',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 170,
    eng: 'state',
    article: 'der',
    noun: 'Zustand',
    plural: 'die Zustände',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 171,
    eng: 'pocket',
    article: 'die',
    noun: 'Tasche',
    plural: 'die Taschen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 172,
    eng: 'dinner',
    article: 'das',
    noun: 'Abendessen',
    plural: 'die Abendessen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 173,
    eng: 'hall',
    article: 'der',
    noun: 'Saal',
    plural: 'die Säle',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 174,
    eng: 'pain',
    article: 'der',
    noun: 'Schmerz',
    plural: 'die Schmerzen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 175,
    eng: 'age',
    article: 'das',
    noun: 'Alter',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 176,
    eng: 'river',
    article: 'der',
    noun: 'Fluss',
    plural: 'die Flüsse',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 177,
    eng: 'chance',
    article: 'die',
    noun: 'Chance',
    plural: 'die Chancen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 178,
    eng: 'nose',
    article: 'die',
    noun: 'Nase',
    plural: 'die Nasen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 179,
    eng: 'shadow',
    article: 'der',
    noun: 'Schatten',
    plural: 'die Schatten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 180,
    eng: 'police',
    article: 'die',
    noun: 'Polizei',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 181,
    eng: 'memory',
    article: 'die',
    noun: 'Erinnerung',
    plural: 'die Erinnerungen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 182,
    eng: 'color',
    article: 'die',
    noun: 'Farbe',
    plural: 'die Farben',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 183,
    eng: 'knee',
    article: 'das',
    noun: 'Knie',
    plural: 'die Knie',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 184,
    eng: 'wood',
    article: 'das',
    noun: 'Holz',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 185,
    eng: 'shirt',
    article: 'das',
    noun: 'Hemd',
    plural: 'die Hemden',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 186,
    eng: 'party',
    article: 'die',
    noun: 'Party',
    plural: 'die Partys',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 187,
    eng: 'country',
    article: 'das',
    noun: 'Land',
    plural: 'die Länder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 188,
    eng: 'truck',
    article: 'der',
    noun: 'Lastwagen',
    plural: 'die Lastwagen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 189,
    eng: 'tooth',
    article: 'der',
    noun: 'Zahn',
    plural: 'die Zähne',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 190,
    eng: 'bill',
    article: 'die',
    noun: 'Rechnung',
    plural: 'die Rechnungen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 191,
    eng: 'scene',
    article: 'die',
    noun: 'Szene',
    plural: 'die Szenen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 192,
    eng: 'land',
    article: 'das',
    noun: 'Land',
    plural: 'die Länder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 193,
    eng: 'star',
    article: 'der',
    noun: 'Stern',
    plural: 'die Sterne',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 194,
    eng: 'bird',
    article: 'der',
    noun: 'Vogel',
    plural: 'die Vögel',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 195,
    eng: 'bedroom',
    article: 'das',
    noun: 'Schlafzimmer',
    plural: 'die Schlafzimmer',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 196,
    eng: 'uncle',
    article: 'der',
    noun: 'Onkel',
    plural: 'die Onkel',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 197,
    eng: 'sort',
    article: 'die',
    noun: 'Art',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 198,
    eng: 'group',
    article: 'die',
    noun: 'Gruppe',
    plural: 'die Gruppen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 199,
    eng: 'truth',
    article: 'die',
    noun: 'Wahrheit',
    plural: 'die Wahrheiten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 200,
    eng: 'trouble',
    article: 'die',
    noun: 'Schwierigkeit',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 201,
    eng: 'crowd',
    article: 'die',
    noun: 'Menschenmenge',
    plural: 'die Menschenmengen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 202,
    eng: 'station',
    article: 'der',
    noun: 'Bahnhof',
    plural: 'die Bahnhöfe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 203,
    eng: 'tear',
    article: 'die',
    noun: 'Träne',
    plural: 'die Tränen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 204,
    eng: 'class',
    article: 'die',
    noun: 'Klasse',
    plural: 'die Klassen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 205,
    eng: 'sea',
    article: 'das',
    noun: 'Meer',
    plural: 'die Meere',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 206,
    eng: 'animal',
    article: 'das',
    noun: 'Tier',
    plural: 'die Tiere',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 207,
    eng: 'center',
    article: 'das',
    noun: 'Zentrum',
    plural: 'die Zentren',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 208,
    eng: 'feeling',
    article: 'das',
    noun: 'Gefühl',
    plural: 'die Gefühle',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 209,
    eng: 'store',
    article: 'das',
    noun: 'Geschäft',
    plural: 'die Geschäfte',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 210,
    eng: 'mountain',
    article: 'der',
    noun: 'Berg',
    plural: 'die Berge',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 211,
    eng: 'news',
    article: 'die',
    noun: 'Nachrichten',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 212,
    eng: 'shoe',
    article: 'der',
    noun: 'Schuh',
    plural: 'die Schuhe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 213,
    eng: 'cat',
    article: 'die',
    noun: 'Katze',
    plural: 'die Katzen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 214,
    eng: 'screen',
    article: 'der',
    noun: 'Bildschirm',
    plural: 'die Bildschirme',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 215,
    eng: 'bottle',
    article: 'die',
    noun: 'Flasche',
    plural: 'die Flaschen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 216,
    eng: 'call',
    article: 'der',
    noun: 'Anruf',
    plural: 'die Anrufe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 217,
    eng: 'living',
    article: 'das',
    noun: 'Wohnzimmer',
    plural: 'die Wohnzimmer',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 218,
    eng: 'cheek',
    article: 'die',
    noun: 'Wange',
    plural: 'die Wangen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 219,
    eng: 'student',
    article: 'der',
    noun: 'Student',
    plural: 'die Studenten',
    weakMasculine: true,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 220,
    eng: 'ball',
    article: 'der',
    noun: 'Ball',
    plural: 'die Bälle',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 221,
    eng: 'sight',
    article: 'der',
    noun: 'Anblick',
    plural: 'die Anblicke',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 222,
    eng: 'hill',
    article: 'der',
    noun: 'Hügel',
    plural: 'die Hügel',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 223,
    eng: 'company',
    article: 'das',
    noun: 'Unternehmen',
    plural: 'die Unternehmen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 224,
    eng: 'church',
    article: 'die',
    noun: 'Kirche',
    plural: 'die Kirchen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 225,
    eng: 'rain',
    article: 'der',
    noun: 'Regen',
    plural: 'die Regen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 226,
    eng: 'suit',
    article: 'der',
    noun: 'Anzug',
    plural: 'die Anzüge',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 227,
    eng: 'one',
    article: 'die',
    noun: 'Eins',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 228,
    eng: 'direction',
    article: 'die',
    noun: 'Richtung',
    plural: 'die Richtungen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 229,
    eng: 'will',
    article: 'der',
    noun: 'Wille',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 230,
    eng: 'throat',
    article: 'der',
    noun: 'Hals',
    plural: 'die Hälse',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 231,
    eng: 'middle',
    article: 'die',
    noun: 'Mitte',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 232,
    eng: 'answer',
    article: 'die',
    noun: 'Antwort',
    plural: 'die Antworten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 233,
    eng: 'stuff',
    article: 'das',
    noun: 'Zeug',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 234,
    eng: 'hospital',
    article: 'das',
    noun: 'Krankenhaus',
    plural: 'die Krankenhäuser',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 235,
    eng: 'camera',
    article: 'die',
    noun: 'Kamera',
    plural: 'die Kameras',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 236,
    eng: 'dress',
    article: 'das',
    noun: 'Kleid',
    plural: 'die Kleider',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 237,
    eng: 'card',
    article: 'die',
    noun: 'Karte',
    plural: 'die Karten',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 238,
    eng: 'yard',
    article: 'der',
    noun: 'Hof',
    plural: 'die Höfe',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 239,
    eng: 'dark',
    article: 'die',
    noun: 'Dunkelheit',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 240,
    eng: 'shit',
    article: 'die',
    noun: 'Scheiße',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 241,
    eng: 'image',
    article: 'das',
    noun: 'Bild',
    plural: 'die Bilder',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 242,
    eng: 'machine',
    article: 'die',
    noun: 'Maschine',
    plural: 'die Maschinen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 243,
    eng: 'distance',
    article: 'die',
    noun: 'Entfernung',
    plural: 'die Entfernungen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 244,
    eng: 'area',
    article: 'das',
    noun: 'Gebiet',
    plural: 'die Gebiete',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 245,
    eng: 'narrator',
    article: 'der',
    noun: 'Erzähler',
    plural: 'die Erzähler',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 246,
    eng: 'ice',
    article: 'das',
    noun: 'Eis',
    plural: 'die Eis',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 247,
    eng: 'snow',
    article: 'der',
    noun: 'Schnee',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 248,
    eng: 'note',
    article: 'die',
    noun: 'Notiz',
    plural: 'die Notizen',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 249,
    eng: 'mirror',
    article: 'der',
    noun: 'Spiegel',
    plural: 'die Spiegel',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 250,
    eng: 'king',
    article: 'der',
    noun: 'König',
    plural: 'die Könige',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 251,
    eng: 'fear',
    article: 'die',
    noun: 'Angst',
    plural: 'REPLACE',
    weakMasculine: false,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  },
  {
    id: 252,
    eng: 'officer',
    article: 'der',
    noun: 'Beamte',
    plural: 'die Beamten',
    weakMasculine: true,
    notes: {},
    sentences: [
      { de: 'SATZ1', en: 'SENTENCE1', case: 'nom' },
      { de: 'SATZ2', en: 'SENTENCE2', case: 'acc' }
    ],
    completed: false
  }





];
