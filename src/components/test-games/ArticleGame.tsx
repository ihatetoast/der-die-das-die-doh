import { useState, useEffect } from "react";

import { VocabEntry, AnswerState, GameState, GameProps } from "../../types";

import classes from "./ArticleGame.module.css";
import Timer from "../Timer";
import GameOver from "../UI/GameOver.tsx";

const TIME_TO_GUESS = 5000;

const TIME_TO_NEXT_QUESTION = 2000;

const ArticleGame = ({ words, onSessionComplete }: GameProps) => {
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [answerState, setAnswerState] = useState<AnswerState>("waiting");
  const [testState, setTestState] = useState<GameState>("waiting");
  const [userChoice, setUserChoice] = useState<"der" | "die" | "das" | null>(
    null,
  );

  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  useEffect(() => {
    if (cardsToTest.length === 0 && testState === "active") {
      setTestState("over");
    }
  }, [cardsToTest, testState]);

  useEffect(() => {
    if (testState === "over") {
      onSessionComplete();
    }
  }, [testState, onSessionComplete]);

  const handleSkipped = () => {
    setAnswerState("skipped");
    setCardsToTest((prev) => [...prev.slice(1), prev[0]]);

    // delay for user to see it was skipped
    setTimeout(() => {
      setAnswerState("waiting");
    }, 500);
  };

  const handleUserAnswerSelect = (article: VocabEntry["article"]) => {
    setUserChoice(article);
    const isCorrect = article === cardsToTest[0].article;
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
      <h2>Article Speed Round</h2>
      {testState === "waiting" && (
        <div className={classes.instructions}>
          <h3>Given a German noun, pick the correct article. </h3>
          <p>If you guess incorrectly, the card is returned to the deck. </p>
          <p>Test is complete when all articles have been picked correctly.</p>
          <p>When you're ready, click "Go!".</p>
          <button
            className={classes.startBtn}
            onClick={() => setTestState("active")}
          >
            Go!
          </button>
        </div>
      )}

      {testState === "over" && <GameOver />}
      {testState === "active" && (
        <>
          <Timer
            key={cardsToTest[0]?.id || null}
            duration={TIME_TO_GUESS}
            answerState={answerState}
            onTimesUp={handleSkipped}
          />
          <section className={classes.articleGame}>
            <div className={classes.gameCard}>
              <div className={classes.gameWord}>
                <h3>{cardsToTest[0]?.noun} </h3>
              </div>
              <div className={classes.gameArticle}>
                <button
                  onClick={() => handleUserAnswerSelect("der")}
                  data-state={userChoice === "der" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  der
                </button>
                <button
                  onClick={() => handleUserAnswerSelect("die")}
                  data-state={userChoice === "die" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  die
                </button>
                <button
                  onClick={() => handleUserAnswerSelect("das")}
                  data-state={userChoice === "das" ? answerState : undefined}
                  disabled={answerState !== "waiting"}
                >
                  das
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ArticleGame;
