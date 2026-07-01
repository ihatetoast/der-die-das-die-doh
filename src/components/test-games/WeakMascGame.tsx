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

const TIME_TO_GUESS = 3000;
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
  console.log("words in weak masc game", words);

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
    if (cardsToTest.length === 0) {
      setTestState("over");
    }
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
    if (cardsToTest.length === 0) {
      // test is completed
      setTestState("over");
    }
  };
  return (
    <>
      <h2>Spot the weakling!</h2>
      {testState === "waiting" && (
        <div>
          <p>
            You'll be given a noun. Is it a "weak" masculine noun (aka
            N-declension)? Click "ja", "nein", or "not masc", but don't be
            wishy-washy namby-pamby, Bambi. You have only {TIME_TO_GUESS / 1000}{" "}
            seconds.
          </p>
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
              <div className={classes.gameArticle}>
                <button
                  onClick={() => handleUserAnswerSelect("yes")}
                  data-state={userChoice === "yes" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  Ja!
                </button>{" "}
                <button
                  onClick={() => handleUserAnswerSelect("no")}
                  data-state={userChoice === "no" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  Nein!
                </button>{" "}
                <button
                  onClick={() => handleUserAnswerSelect("not-masc")}
                  data-state={
                    userChoice === "not-masc" ? answerState : undefined
                  }
                  disabled={answerState !== "waiting"}
                >
                  Not masculine
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
