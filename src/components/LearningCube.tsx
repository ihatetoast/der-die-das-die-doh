import { VocabEntry } from '../types';

import classes from './LearningCube.module.css';
import { getNotesContent } from '../helpers.tsx';

// Cube Faces:

// front/english (default view) - English: "book" / eng
// german - German: "Buch" / noun
// article - Article: "das" (or "No singular form") / article
// plural - Plural: "die Bücher" (or "No plural form") / plural
//  sentence- Sentences (both with case labels) / 4 lines 2x eng and ger. fill out later
// notes - Notes OR default summary / default is the book: das Buch, die Bücher (pl). fill out later.

// special situation where notes are on other faces: if no plural (like blood) or if no singular (like Leute and Medien)
// deal with later.
//notes: { pluralNotes: ['Exists only in plural form.'] },
//plural: 'no plural',

type LearningCubeProps = {
  word: VocabEntry;
};
const LearningCube = ({ word }: LearningCubeProps) => {
  console.log('word in cube ', word);

  return (
    <div className={classes.cubeContainer}>
      <div className={classes.cube}>
        <div
          data-face='english-side'
          className={`${classes.face} ${classes.english}`}
        >
          {word.eng}
        </div>
        <div
          data-face='german-side'
          className={`${classes.face} ${classes.german}`}
        >
          {word.noun}
        </div>
        <div
          data-face='article-side'
          className={`${classes.face} ${classes.article}`}
        >
          {word.article}
        </div>
        <div
          data-face='plural-side'
          className={`${classes.face} ${classes.plural}`}
        >
          {word.plural === 'no plural'
            ? `Note: ${word.noun} has no plural`
            : word.plural}
        </div>
        <div
          data-face='sentence-side'
          className={`${classes.face} ${classes.sentence}`}
        >
          {word.sentences.map((sent, idx) => {
            return (
              <dl key={idx}>
                <dt>
                  {sent.de} <span className={classes.case}>({sent.case})</span>
                </dt>
                <dd>{sent.en}</dd>
              </dl>
            );
          })}
        </div>
        <div
          data-face='notes-side'
          className={`${classes.face} ${classes.notes}`}
        >
          {getNotesContent(word)}
        </div>
      </div>
    </div>
  );
};

export default LearningCube;
