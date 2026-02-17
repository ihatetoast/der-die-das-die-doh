import { VocabEntry } from '../types';

import classes from './LearningCube.module.css';
import { getNotesContent } from '../helpers.tsx';

import CubeButton from './UI/CubeButton.tsx';
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

  const handleRotate = (faceClass: string) => {
    console.log(faceClass);
    const cube = document.querySelector(`.${classes.cube}`);
    cube?.classList.remove(
      classes.showEnglish,
      classes.showGerman,
      classes.showArticle,
      classes.showPlural,
      classes.showSentence,
      classes.showNotes,
    );
//class="_cube_1dehd_5 .undefined
    cube?.classList.add(faceClass);
  };

  return (
    <div className={classes.learningCube}>
      <div className={classes.cubeContainer}>
        <div className={classes.cube}>
          <div
            data-face='english-side'
            className={`${classes.face} ${classes.english}`}
          >
            <h3>English:</h3>
            <p>{word.eng}</p>
          </div>
          <div
            data-face='german-side'
            className={`${classes.face} ${classes.german}`}
          >
            <h3>German:</h3>
            <p>{word.noun}</p>
          </div>
          <div
            data-face='article-side'
            className={`${classes.face} ${classes.article}`}
          >
            <h3>Article:</h3>
            <p>{word.article}</p>
          </div>
          <div
            data-face='plural-side'
            className={`${classes.face} ${classes.plural}`}
          >
            <h3>Plural:</h3>
            <p>
              {word.plural === 'no plural'
                ? `Note: ${word.noun} has no plural`
                : word.plural}
            </p>
          </div>
          <div
            data-face='sentence-side'
            className={`${classes.face} ${classes.sentence}`}
          >
            <h3>Examples in a sentence:</h3>
            {word.sentences.map((sent, idx) => {
              return (
                <dl key={idx}>
                  <dt>
                    {sent.de}{' '}
                    <span className={classes.case}>({sent.case})</span>
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
            <h3>Notes:</h3>
            {getNotesContent(word)}
          </div>
        </div>
      </div>
      <h2>Show:</h2>
      <div className={classes.btnContainer}>
        <CubeButton
          label='english'
          onClick={() => handleRotate(classes.showEnglish)}
        />
        <CubeButton
          label='german'
          onClick={() => handleRotate(classes.showGerman)}
        />
        <CubeButton
          label='article'
          onClick={() => handleRotate(classes.showArticle)}
        />
        <CubeButton
          label='plural'
          onClick={() => handleRotate(classes.showPlural)}
        />
        <CubeButton
          label='sentence'
          onClick={() => handleRotate(classes.showSentence)}
        />
        <CubeButton
          label='notes'
          onClick={() => handleRotate(classes.showNotes)}
        />
      </div>
    </div>
  );
};

export default LearningCube;
