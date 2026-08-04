import { useEffect, useRef, useState } from "react";
import { VocabEntry } from "../types";

import classes from "./LearningCube.module.css";
import { getNotesContent } from "../helpers.tsx";

import CubeButton from "./UI/CubeButton.tsx";

type LearningCubeProps = {
  word: VocabEntry;
};

const LearningCube = ({ word }: LearningCubeProps) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [showGenderPair, setShowGenderPair] = useState(false);
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
    setShowGenderPair(false);
  };

  useEffect(() => {
    handleRotate(classes.showEnglish);
  }, [word]);

  return (
    <div className={classes.learningCube}>
      <div className={classes.cubeContainer}>
        <div className={classes.cube} ref={cubeRef}>
          <div
            data-face="english-side"
            className={`${classes.face} ${classes.english}`}
          >
            {word.genderPair && (
              <span
                className={`${classes.badge} ${word.article === "die" ? classes.female : classes.male}`}
              >
                {word.article === "die" ? (
                  <i className="fa-solid fa-venus"></i>
                ) : (
                  <i className="fa-solid fa-mars"></i>
                )}
              </span>
            )}
            <h3>English: {word.eng}</h3>
            {word.notes.otherEngDefinitions && (
              <p>
                <span className="bold">Also:</span>{" "}
                {word.notes.otherEngDefinitions}
              </p>
            )}
          </div>
          <div
            data-face="german-side"
            className={`${classes.face} ${classes.german}`}
          >
            <h3>German: {word.noun}</h3>
            {word.genderPair && (
              <button
                className={classes.genderBtn}
                onClick={() => setShowGenderPair(!showGenderPair)}
              >
                {showGenderPair ? "− Hide" : "+ Show"}{" "}
                {word.article === "die" ? "masculine" : "feminine"} form
              </button>
            )}
            {word.genderPair && (
              <div className={showGenderPair ? "visible" : "hidden"}>
                <h3>{word.genderPair.singular}</h3>
              </div>
            )}

            {word.weakMasculine && (
              <p className={classes.weakMascPara}>
                <span className={classes.weakMascEmoji}>📣</span>
                {`${word.noun} is a "weak" masculine (N-declension) noun. It adds an "-n" in all cases except nominative, eg "dem Jungen." or "den Studenten". There are some exceptions. See "Notes" for exceptions or hints.`}
              </p>
            )}
            {word.notes.otherGerDefinitions && (
              <p>
                <span className="bold">Also:</span>{" "}
                {word.notes.otherGerDefinitions}
              </p>
            )}
            {word.notes.compoundWords && (
              <p>
                <span className="bold">
                  Compound words ending in -{word.noun.toLowerCase()}:
                </span>{" "}
                {word.notes.compoundWords}
              </p>
            )}
          </div>
          <div
            data-face="article-side"
            className={`${classes.face} ${classes.article}`}
          >
            <h3>Article: </h3>
            <h3>
              <span className={`${classes.bold} ${classes.ital}`}>
                {word.article}
              </span>
              {"   "}
              {word.noun}
            </h3>
          </div>
          <div
            data-face="plural-side"
            className={`${classes.face} ${classes.plural}`}
          >
            <h3>
              Plural:{" "}
              {word.plural === "no plural"
                ? `Note: ${word.noun} has no plural. Some nouns may add "-sorten" (sorts or types) to indicate a more than one type of something.`
                : `die ${word.plural}`}
            </h3>
            {word.genderPair && (
              <button
                className={classes.genderBtn}
                onClick={() => setShowGenderPair(!showGenderPair)}
              >
                {showGenderPair ? "− Hide" : "+ Show"}{" "}
                {word.article === "die" ? "masculine" : "feminine"} plural form
              </button>
            )}
            {word.genderPair && (
              <div className={showGenderPair ? "visible" : "hidden"}>
                <h3>die {word.genderPair.plural}</h3>
              </div>
            )}
          </div>
          <div
            data-face="sentence-side"
            className={`${classes.face} ${classes.sentences}`}
          >
            <h3>Sentences:</h3>
            {word.sentences
              .filter((sent) => sent.de && sent.en)
              .map((sent, idx) => (
                <dl key={idx} className={classes.sentence}>
                  <dt>
                    <span className={classes.emoji}>🇩🇪</span>
                    {sent.de}{" "}
                  </dt>
                  <dd>
                    <span className={classes.emoji}>🇬🇧</span>
                    {sent.en}
                  </dd>
                </dl>
              ))}
          </div>
          <div
            data-face="notes-side"
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
            label="english"
            onClick={() => handleRotate(classes.showEnglish)}
          />
          <CubeButton
            label="german"
            onClick={() => handleRotate(classes.showGerman)}
          />
          <CubeButton
            label="article"
            onClick={() => handleRotate(classes.showArticle)}
          />
          <CubeButton
            label="plural"
            onClick={() => handleRotate(classes.showPlural)}
          />
          <CubeButton
            label="sentence"
            onClick={() => handleRotate(classes.showSentence)}
          />
          <CubeButton
            label="notes"
            onClick={() => handleRotate(classes.showNotes)}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningCube;
