import { useEffect } from "react";
import { useFlashcardLogic } from "../../hooks/useFlashcardLogic.ts";
import GameOver from "../UI/GameOver.tsx";

import classes from "./Game.module.css";
import { GameProps } from "../../types.ts";

const MiniGameGerToEng = ({
  words,
  handleSetMode,
  onSessionComplete,
}: GameProps) => {
  const {
    cardsToTest,
    setCardsToTest,
    userInputNoun,
    setUserInputNoun,
    testState,
    setTestState,
    hint,
    hintState,
    setHintState,
    message,
    setMessage,
    answerState,
    setAnswerState,
  } = useFlashcardLogic(words, "ger-eng-mini");

  if (testState === "over") {
    onSessionComplete();
  }
  const evalAnswerEngNoun = (
    userInputNoun: string,
    targetWord: string,
    otherDefs?: string,
  ): boolean => {
    const userAnswer = userInputNoun.trim().toLowerCase();

    // Check for male female etc. in case they don't read directions.
    const genderModifiers = ["male", "female", "woman", "man", "girl", "boy"];
    if (genderModifiers.some((mod) => userAnswer.includes(mod))) {
      setMessage("Did you add 'male' or 'female'? Just the noun!");
      return false;
    }

    if (userAnswer === targetWord) {
      return true;
    }
    if (otherDefs) {
      const altDefs = otherDefs.split(", ").map((def) => def.toLowerCase());
      if (altDefs.includes(userAnswer)) return true;
    }
    return false;
  };

  // pause for style change. only let user know correct or incorrect, not answer
  useEffect(() => {
    if (answerState === "incorrect" || answerState === "correct") {
      setTimeout(() => {
        if (answerState === "correct" && hintState === null) {
          setCardsToTest((prev) => prev.slice(1));
        } else {
          setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        }
        setHintState(null); // Reset for next word
        setUserInputNoun("");
        setMessage("");
        setAnswerState("waiting");
      }, 3000);
    }
  }, [
    answerState,
    setAnswerState,
    hintState,
    setHintState,
    setUserInputNoun,
    setMessage,
    setCardsToTest,
  ]);

  const handleSubmit = () => {
    if (userInputNoun.trim() === "") {
      setAnswerState("skipped");
      return;
    }
    const otherEngDefs = cardsToTest[0].notes.otherEngDefinitions;
    const isCorrect = evalAnswerEngNoun(
      userInputNoun,
      cardsToTest[0].eng,
      otherEngDefs,
    );
    setAnswerState(isCorrect ? "correct" : "incorrect");
  };

  const handleHint = () => {
    setHintState((prev) => {
      if (prev === null) return "scrambled";
      if (prev === "scrambled") return "revealed";
      return prev;
    });
  };
  return (
    <>
      <h2>German-to-English Mini Test</h2>
      {testState === "waiting" && (
        <div className={classes.instructions}>
          <h3>
            You're given a noun in German. Write the English definition (in
            singular).
          </h3>
          <p>
            <span className={classes.highlight}>Note:</span> Do not add
            modifiers such as "male" or "female" to answers, i.e. write
            "student", not "female student".
          </p>
          <p className={classes.hints}>
            Need help? <span className={classes.emoji}>➡</span> "Hint".{" "}
          </p>
          <p className={classes.hints}>
            Still stuck?<span className={classes.emoji}>➡</span>
            "Reveal?"
          </p>
          <p>
            Words that were incorrect or required a hint will be returned to the
            deck to review. When the deck is emptied (i.e., you got all correct
            without hints), the test is over and you can return to home.
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
      {testState === "over" && <GameOver />}
      {testState === "active" && cardsToTest.length > 0 && (
        <section className={classes.gameContainer}>
          <div className={classes.wordsContainer}>
            <div className={classes.originWord}>
              <h3>
                {cardsToTest[0].article} {cardsToTest[0].noun}
              </h3>
            </div>

            <div className={classes.targetWord}>
              <p className={classes.hint}>
                {hintState === "scrambled"
                  ? hint
                  : hintState === "revealed"
                    ? cardsToTest[0].eng
                    : message}
              </p>
              <div>
                <span>the </span>
                <input
                  autoFocus={testState === "active"}
                  type="text"
                  id="word"
                  value={userInputNoun}
                  className={`
                  ${classes.nounAnswer} 
                    ${classes[answerState]}
                  `.trim()}
                  placeholder="English word"
                  onChange={(e) => setUserInputNoun(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </div>

              <div className={classes.btnContainer}>
                <button
                  onClick={handleSubmit}
                  disabled={
                    answerState !== "waiting" || hintState === "revealed"
                  }
                  className={classes.submitBtn}
                >
                  {userInputNoun.trim() === "" ? "Skip" : "Check"}
                </button>
                <button
                  onClick={handleHint}
                  className={`${classes.hintBtn} ${hintState === null ? undefined : classes[hintState]}`}
                  disabled={
                    hintState === "revealed" || answerState !== "waiting"
                  }
                >
                  {hintState === null
                    ? "Hint?"
                    : hintState === "scrambled"
                      ? "Reveal?"
                      : "Reveal"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MiniGameGerToEng;
