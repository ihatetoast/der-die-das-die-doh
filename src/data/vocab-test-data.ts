import type { VocabEntry } from '../types';

export const TEST_VOCAB: VocabEntry[] = [
  {
    id: 1000001,
    eng: 'time',
    article: 'die',
    noun: 'Zeit',
    plural: 'die Zeiten',
    weakMasculine: false,
    notes: {
      otherEngDefinitions: 'term, period',
      miscNote:
        'Other words: Jahreszeit (season), Mahlzeit (meal time), Freizeit (free time), Arbeitszeit (working hours), Schlafenszeit (bedtime)',
    },
    sentences: [
      {
        de: 'Andere Zeiten, andere Sitten.',
        en: 'Other times, other manners. / Times change, and customs change with them.',
        case: 'nom',
      },
      {
        de: 'Es ist nur eine Frage der Zeit.',
        en: 'It is merely a matter of time.',
        case: 'gen',
      },
    ],
    completed: true,
  },
  {
    id: 1000002,
    eng: 'hand',
    article: 'die',
    noun: 'Hand',
    plural: 'die Hände',
    weakMasculine: false,
    notes: {},
    sentences: [
      {
        de: 'Mir sind die Hände in Unschuld.',
        en: 'I wash my hands of it',
        case: 'nom',
      },
      {
        de: 'Sie leben von der Hand in den Mund.',
        en: 'They live from hand to mouth.',
        case: 'dat',
      },
    ],
    completed: true,
  },
  {
    id: 1000004,
    eng: 'day',
    article: 'der',
    noun: 'Tag',
    plural: 'die Tage',
    weakMasculine: false,
    notes: {},
    sentences: [
      {
        de: 'Der Tag fängt gerade erst an, und ich bin schon erschöpt.',
        en: "The day just started, but I'm already exhausted.",
        case: 'nom',
      },
      {
        de: 'In den nächsten Tagen habe ich viel zu tun.',
        en: 'In the next days, I (will) have a lot to do.',
        case: 'dat',
      },
    ],
    completed: true,
  },
  {
    id: 10000024,
    eng: 'boy',
    article: 'der',
    noun: 'Junge',
    plural: 'die Jungen',
    weakMasculine: true,
    notes: {
      miscNote:
        "Other words: Bäckerjunge (baker's boy ~ apprentice), Gassenjungen (raggamuffin), Strichjunge (hustler, male sex worker).",
    },
    sentences: [
      {
        de: 'Der Junge trinkt Mineralwasser.',
        en: 'The boy drinks mineral water.',
        case: 'nom',
      },
      {
        de: 'Ich sehen den Jungen.',
        en: 'I see the boy.',
        case: 'acc',
      },
    ],
    completed: true,
  },
    {
    id: 10000030,
    eng: 'moment',
    article: 'der',
    noun: 'Moment',
    plural: 'die Momente',
    weakMasculine: false,
    notes: { genderNote: 'Words ending in -ent are often masculine.' },
    sentences: [
      {
        de: 'Hast du einen Moment Zeit?',
        en: 'Do you have a minute (moment)?',
        case: 'acc',
      },
      {
        de: 'Das Telefon funktioniert im Moment nicht.',
        en: 'The telephone is out of order at the moment.',
        case: 'dat',
      },
    ],
    completed: true,
  },

  {
    id: 10000033,
    eng: 'water',
    article: 'das',
    noun: 'Wasser',
    plural: 'die Wasser',
    weakMasculine: false,
    notes: {
      miscNote:
        'Other words: Abwasser (effluent), Badewasser (bathw water), Mineralwasser (mineral water).',
      pluralNote:
        'usually uncountable, but when referring to different water types, the plural is used.',
    },
    sentences: [
      { de: 'Das Wasser kocht.', en: "The water's boiling.", case: 'nom' },
      {
        de: 'Ich trinke nur warmes Wasser.',
        en: 'I only drink warm water.',
        case: 'acc',
      },
    ],
    completed: true,
  },
  {
    id: 10000034,
    eng: 'light',
    article: 'das',
    noun: 'Licht',
    plural: 'die Lichter',
    weakMasculine: false,
    notes: {
      miscNote:
        'Other words: Flutlicht (flood light), Bremslicht (stop light, brake light).',
    },
    sentences: [
      {
        de: 'Ich mache das Licht aus.',
        en: 'I turn off the light',
        case: 'acc',
      },
      {
        de: 'Alle Lichter sind ausgegangen.',
        en: 'All the lights went out.',
        case: 'nom',
      },
    ],
    completed: true,
  },  {
    id: 10000069,
    eng: 'dock',
    article: 'der',
    noun: 'Hafen',
    plural: 'die Häfen',
    weakMasculine: false,
    notes: {
      otherEngDefinitions: 'harbor, port',
      miscNote:
        'Other words: Flughafen (airport), Freihafen (free port), Ölhafen (oil port), Fährhafen (ferry harbor), and Handelshafen (commercial harbor).',
    },
    sentences: [
      {
        de: 'Das Feuerwerk war wie jedes Jahr am Hafen.',
        en: 'The fireworks were like every year at the harbor.',
        case: 'dat',
      },
      {
        de: 'Wann wird die Blockade des Hafens aufgehoben?',
        en: 'When will the blockade at the dock be lifted?',
        case: 'gen',
      },
    ],
    completed: true,
  },
];
