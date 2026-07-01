import { useState, useEffect } from "react";
import { useFlashcardLogic } from "../../hooks/useFlashcardLogic.ts";
import { ArticleType } from "../../types.ts";

import GameOver from "./GameOver.tsx";

import classes from "./Game.module.css";
import { GameProps } from "../../types.ts";

const MiniGameEngToGer = ({
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
  } = useFlashcardLogic(words, "eng-ger-mini");

  // todo: address if a user can submit (article and noun given) then add to input.
  // onKeyDown={(e) => {
  //   if (e.key === 'Enter' && canSubmit) {
  //     handleSubmit();
  //   }
  // }}

  const [userInputArticle, setUserInputArticle] = useState<ArticleType | null>(
    null,
  );
  const [articleIsCorrect, setArticleIsCorrect] = useState<boolean | null>(
    null,
  );
  const [gerNounIsCorrect, setGerNounIsCorrect] = useState<boolean | null>(
    null,
  );

  const targetWord = cardsToTest[0]?.noun;
  useEffect(() => {
    if (testState === "over") {
      onSessionComplete();
    }
  }, [testState, onSessionComplete]);
  const evalAnswerGerNoun = (
    userInputNoun: string,
    targetWord: string,
    otherDefs?: string,
  ): boolean => {
    setMessage(""); // to clear any message re hand v Hand
    const userAnswer = userInputNoun.trim().toLowerCase();

    // don't count as wrong, but if user doesn't cap first letter, put a note in hint box reminding them.
    const initial = userInputNoun.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      setMessage("Remember: German nouns begin with an uppercase letter.");
    }
    // to lower case for both to account for sloppy NOuns or crazy sHift keys
    if (userAnswer === targetWord.toLowerCase()) return true;
    if (otherDefs) {
      const otherGerDefs = otherDefs
        .split(", ")
        .map((def) => def.replace(/^(der|die|das)\s+/i, "").toLowerCase());
      if (otherGerDefs.includes(userAnswer)) return true;
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
        setUserInputArticle(null);
        setMessage("");
        setAnswerState("waiting");
        setArticleIsCorrect(null);
        setGerNounIsCorrect(null);
      }, 3000);
    }
  }, [
    answerState,
    hintState,
    setAnswerState,
    setCardsToTest,
    setHintState,
    setMessage,
    setUserInputNoun,
  ]);

  const handleSubmit = () => {
    // both empty
    if (userInputNoun.trim() === "" && userInputArticle === null) {
      setAnswerState("skipped");
      return;
    }
    // input in but article not selected
    if (userInputArticle === null && userInputNoun.trim() !== "") {
      setMessage("Please select an article (der/die/das)");
      return;
    }

    const otherGerDefs = cardsToTest[0].notes.otherGerDefinitions;

    const nounRight = evalAnswerGerNoun(
      userInputNoun,
      targetWord,
      otherGerDefs,
    );
    const articleRight = cardsToTest[0].article === userInputArticle;

    const isCorrect = articleRight && nounRight;
    setArticleIsCorrect(articleRight);
    setGerNounIsCorrect(nounRight);
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
      <h2>English-to-German Mini Test</h2>
      {testState === "waiting" && (
        <div>
          <p>
            You're given a noun in English, and you need choose the correct
            article by clicking the appropriate button and entering the
            translation in the input field.
          </p>

          <p>TO DO: KEYBOARD HINTS AND/OR BUTTONS FOR ä Ä ö Ö ü Ü and ß</p>

          <p>
            If you need help, click "Hint" to get a scrambled version of the
            German noun. Still stuck? Click "Reveal?" to get the answer.
          </p>
          <p>
            Incorrect words or words that were skipped or required a hint are
            returned to the deck to review. When the deck is emptied, the test
            is over.
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
        <GameOver
          title="English-to-German Flashcards Mini"
          onSetMode={handleSetMode}
        />
      )}
      {testState === "active" && cardsToTest.length > 0 && (
        <section className={classes.gameContainer}>
          <div className={classes.wordsContainer}>
            <div className={classes.originWord}>
              <h3> the {cardsToTest[0].eng}</h3>
            </div>

            <div className={classes.targetWord}>
              <p className={classes.hint}>
                {hintState === "scrambled"
                  ? hint
                  : hintState === "revealed"
                    ? `${cardsToTest[0].article} ${targetWord}`
                    : message}
              </p>

              <div className={classes.articleButtonContainer}>
                <button
                  autoFocus={testState === "active"}
                  className={`
                      ${userInputArticle === "der" ? `${classes.selected}` : ""}
                      ${userInputArticle === "der" && articleIsCorrect ? `${classes.correct}` : ""}
                      ${userInputArticle === "der" && articleIsCorrect === false ? `${classes.incorrect}` : ""}
                    `.trim()}
                  onClick={() => setUserInputArticle("der")}
                >
                  der
                </button>
                <button
                  className={`
                      ${userInputArticle === "die" ? `${classes.selected}` : ""}
                      ${userInputArticle === "die" && articleIsCorrect ? `${classes.correct}` : ""}
                      ${userInputArticle === "die" && articleIsCorrect === false ? `${classes.incorrect}` : ""}
                    `.trim()}
                  onClick={() => setUserInputArticle("die")}
                >
                  die
                </button>
                <button
                  className={`
                      ${userInputArticle === "das" ? `${classes.selected}` : ""}
                      ${userInputArticle === "das" && articleIsCorrect ? `${classes.correct}` : ""}
                      ${userInputArticle === "das" && articleIsCorrect === false ? `${classes.incorrect}` : ""}
                    `.trim()}
                  onClick={() => setUserInputArticle("das")}
                >
                  das
                </button>
              </div>

              <input
                type="text"
                id="word"
                value={userInputNoun}
                placeholder="German noun"
                onChange={(e) => setUserInputNoun(e.target.value)}
                className={`
                  ${classes.nounAnswer} 
                    ${gerNounIsCorrect ? classes.correctGer : ""}
                    ${gerNounIsCorrect === false ? classes.incorrectGer : ""}
                  `.trim()}
              />

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

export default MiniGameEngToGer;
