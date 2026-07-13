import { useState, useEffect } from "react";

import {
  WeakMascAnswer,
  VocabEntry,
  AnswerState,
  GameState,
  GameProps,
} from "../../types";

import classes from "./WeakMascGame.module.css";
import Timer from "../Timer";
import GameOver from "./GameOver.tsx";

const TIME_TO_GUESS = 5000;
const TIME_TO_NEXT_QUESTION = 2000;

const WeakMascGame = ({
  words,
  handleSetMode,
  onSessionComplete,
}: GameProps) => {
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [answerState, setAnswerState] = useState<AnswerState>("waiting");
  const [testState, setTestState] = useState<GameState>("waiting");
  const [userChoice, setUserChoice] = useState<WeakMascAnswer | "">("");

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  useEffect(() => {
    if (testState === "over") {
      onSessionComplete();
    }
  }, [testState, onSessionComplete]);

  useEffect(() => {
    if (cardsToTest.length === 0 && testState === "active") {
      setTestState("over");
    }
  }, [cardsToTest, testState, onSessionComplete]);

  const handleSkipped = () => {
    setAnswerState("skipped");
    setCardsToTest((prev) => [...prev.slice(1), prev[0]]);

    // delay for user to see it was skipped
    setTimeout(() => {
      setAnswerState("waiting");
    }, 500);
  };

  const handleUserAnswerSelect = (answer: WeakMascAnswer) => {
    setUserChoice(answer);
    let isCorrect;
    if (cardsToTest[0].article === "der") {
      isCorrect = answer === "yes" && cardsToTest[0].weakMasculine;
    } else {
      isCorrect = answer === "not-masc";
    }

    setAnswerState(isCorrect ? "correct" : "incorrect");
    setTimeout(() => {
      if (isCorrect) {
        setCardsToTest((prev) => prev.slice(1));
      } else {
        setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
      }
      setAnswerState("waiting");
    }, TIME_TO_NEXT_QUESTION);
  };
  return (
    <>
      <h2>Spot the weakling!</h2>
      {testState === "waiting" && (
        <div>
          <p>
            You'll be given a noun. Is it a "weak" ("schwach)") masculine noun
            (aka N-declension)? Click "Schwach", "Normal", or "Nicht mask." if
            it's feminine or neutral. Don't be wishy-washy namby-pamby, Bambi.
            You have only {TIME_TO_GUESS / 1000} seconds.
          </p>
          <p>
            Jung → Schwach (zB Ich sehe den Jung
            <span className={classes.highlight}>en</span>.)
          </p>
          <p>Hund → Normal (zB Ich sehe den Hund.)</p>
          <p>Buch → Nicht mask. (zB Ich lese das Buch.)</p>
          <p>Natur → Nicht mask. (zB Ich liebe die Natur.)</p>
          <p>When you're ready, click "Go!".</p>
          <button
            className={classes.startBtn}
            onClick={() => setTestState("active")}
          >
            Go!
          </button>
        </div>
      )}
      {testState === "over" && (
        <GameOver title="Be strong with weak nouns" onSetMode={handleSetMode} />
      )}
      {testState === "active" && (
        <>
          <Timer
            key={cardsToTest[0]?.id || null}
            duration={TIME_TO_GUESS}
            answerState={answerState}
            onTimesUp={handleSkipped}
          />
          <section className={classes.weakMascGame}>
            <div className={classes.gameCard}>
              <div className={classes.gameWord}>
                <h3>{cardsToTest[0]?.noun} </h3>
              </div>
              <div className={classes.gameWeakMasc}>
                <button
                  onClick={() => handleUserAnswerSelect("yes")}
                  data-state={userChoice === "yes" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  Schwach
                </button>
                <button
                  onClick={() => handleUserAnswerSelect("no")}
                  data-state={userChoice === "no" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  Normal
                </button>
                <button
                  onClick={() => handleUserAnswerSelect("not-masc")}
                  data-state={
                    userChoice === "not-masc" ? answerState : undefined
                  }
                  disabled={answerState !== "waiting"}
                >
                  Nicht mask.
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default WeakMascGame;
