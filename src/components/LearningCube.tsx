import { useEffect, useRef } from 'react';
import { VocabEntry } from '../types';

import classes from './LearningCube.module.css';
import { getNotesContent } from '../helpers.tsx';

import CubeButton from './UI/CubeButton.tsx';

type LearningCubeProps = {
  word: VocabEntry;
};

const LearningCube = ({ word }: LearningCubeProps) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const handleRotate = (faceClass: string) => {
    cubeRef.current?.classList.remove(
      classes.showEnglish,
      classes.showGerman,
      classes.showArticle,
      classes.showPlural,
      classes.showSentence,
      classes.showNotes,
    );
    cubeRef.current?.classList.add(faceClass);
  };

  useEffect(() => {
    handleRotate(classes.showEnglish);
  }, [word]);

  return (
    <div className={classes.learningCube}>
      <div className={classes.cubeContainer}>
        <div className={classes.cube} ref={cubeRef}>
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
            {word.weakMasculine && (
              <p className={classes.weakMascPara}>
                <span className={classes.weakMascEmoji}>📣</span>
                {`${word.noun} is considered a "weak masculine" and adds an "-n" in all cases except nominative, eg "dem Jungen." or "den Studenten".`}
              </p>
            )}
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
            className={`${classes.face} ${classes.sentences}`}
          >
            <h3>Examples in a sentence:</h3>
            {word.sentences.map((sent, idx) => {
              return (
                <dl key={idx} className={classes.sentence}>
                  <dt>
                    <span className={classes.emoji}>🇩🇪</span>
                    {sent.de}{' '}
                    <span className={classes.case}>({sent.case})</span>
                  </dt>
                  <dd>
                    <span className={classes.emoji}>🇬🇧</span>
                    {sent.en}
                  </dd>
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
      <div className={classes.cubeControls}>
        <h2>Flip to:</h2>
        <div className={`${classes.btnContainer} ${classes.cubeBtns}`}>
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
    </div>
  );
};

export default LearningCube;
