/**
 * now:
 * id
 * theme
 * noun in german
 * noun in english
 * gender
 * clue or hint if that helps?
 * en if that kind of masc noun (note this in the example sentences)
 * plural
 * example sentences as nom, acc, dat, gen and each with sing and plural
 * like 'the apple is delicious. the apples are delicious. i eat the apple. i eat the apples. ...'
 * list items
 *
 * nice to have
 * query by english to get german? add to the list?
 * find an api that isn't dead or requires backflips. phkrs.
 */


// note to me: build this when you want busy work. this is slowing you down, so ... no TV, young lady, without adding to this
// en.langenscheidt dot com/german-english/ and your own Duden. 
// Only choose words you either mess up on gender or plural. Don't worry about the general public. This is your app, boo.
export const VOCABULARY = [
  {
    id: '10001',
    theme: ['animals','nature'],
    german: 'Hund',
    english: 'dog',
    gender: 'm',
    clue: '',
    plural: 'Hunde',
    examples: {
      nom: 'Der Hund ist süß. Meine Hunde sind groß.',
      acc: 'Ich sehe einen Hund. Ich habe drei Hunde.',
      dat: 'Er gab dem Hund ein Leckerli. Markus folgt den Hunden.',
      gen: 'Sie kann den Besitzer des Hundes nicht finden. Ich kenne den Tierarzt der Hunde.',
    },
  },
  {
    id: '10002',
    theme: ['animals','nature'],
    german: 'Katze',
    english: 'cat',
    gender: 'f',
    clue: '',
    plural: 'Katzen',
    examples: {
      nom: 'Die Katze ist klein. Seine Katzen sind süß.',
      acc: 'Ich habe meine Katze gefüttert. Mein Sohn will drei Katzen haben.',
      dat: 'Ich gehorche meiner Katze. Er vertraut seinen Katzen nicht.',
      gen: 'Sie mögen das Miauen der Katze. Die Pfoten der Katzen haben rosa Bohnen',
    },
  },
    {
    id: '10003',
    theme: 'human body',
    german: 'Kopf',
    english: 'head',
    gender: 'm',
    clue: '',
    plural: 'Köpfe',
    examples: {
      nom: 'Der Kopf hat drei Flöhe. Diese Köpfe gehören zu diesen Körpern.',
      acc: 'Ich sah seinen Kopf aus dem Fenster. Das Kalb hat zwei Köpfe.',
      dat: 'Der Zombie bowlt mit dem Kopf. Was hat der Zombie mit den Köpfen gemacht?',
      gen: 'Das ist das Problem des Kopfes. Das sind die Augäpfel der Köpfe.',
    },
  },
  {
    id: '10004',
    theme: ['food', 'profession'],
    german: 'Gericht',
    english: 'dish (meal). Also court',
    gender: 'n',
    clue: '',
    plural: 'Gerichte',
    examples: {
      nom: 'Mein Gericht ist zu kalt. Diese Gerichte Diese Gerichte sind typisch für die indische Küche.',
      acc: 'Welches Gericht wirst du bestellen? Sie haben viele Gerichte zur Auswahl.',
      dat: 'Diese Kirsche gehört zu diesem Gericht. Jetzt hat er vom Gericht eine Lektion erteilt bekommen (court). ',
      gen: 'Er wartet auf den Tag des Jüngsten Gerichts (court / judgment day). Seine Aufgaben unterscheiden sich von denen der Gerichte (courts).',
    },
  },
];
