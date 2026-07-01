import { useState, useEffect } from "react";
import { useFlashcardLogic } from "../../hooks/useFlashcardLogic.ts";
import { ArticleType } from "../../types.ts";

import GameOver from "./GameOver.tsx";

// import classes from './GermanFullGame.module.css';
import classes from "./Game.module.css";

import { GameProps } from "../../types.ts";

const GermanFullGame = ({
  words,
  handleSetMode,
  onSessionComplete,
}: GameProps) => {
  console.log("words in german full game", words);

  const {
    cardsToTest,
    setCardsToTest,
    userInputNoun,
    setUserInputNoun,
    testState,
    setTestState,
    message,
    setMessage,
    answerState,
    setAnswerState,
  } = useFlashcardLogic(words, "german-full");

  const [userInputArticle, setUserInputArticle] = useState<string>("");
  const [userInputPlural, setUserInputPlural] = useState<string>("");

  const targetWord = cardsToTest[0]?.noun;
  const targetArticle = cardsToTest[0]?.article;
  const targetPlural = cardsToTest[0]?.plural;

  useEffect(() => {
    if (testState === "over") {
      onSessionComplete();
    }
  }, [testState, onSessionComplete]);

  const evalAnswerArticle = (
    userInputArticle: string,
    targetArticle: ArticleType,
  ): boolean => {
    setMessage(""); //
    const userAnswer = userInputArticle.trim().toLowerCase();
    if (userAnswer === targetArticle) return true;
    return false;
  };

  const evalAnswerGerNoun = (
    userInputNoun: string,
    targetWord: string,
    otherDefs?: string,
  ): boolean => {
    setMessage(""); // to clear any message re hand v Hand
    const userAnswer = userInputNoun.trim().toLowerCase();

    const initial = userInputNoun.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      // note: this message only seen if everything but the uppercase is correct.
      // if the user gives der buch... the message will be the correct form and not
      // the spelling/capitalization note
      setMessage("Remember: German nouns begin with an uppercase letter.");
    }
    // to lower case for both to account for sloppy NOuns or crazy sHift keys
    if (userAnswer === targetWord.toLowerCase()) return true;
    if (otherDefs) {
      const otherGerDefs = otherDefs
        .split(", ")
        .map((def) => def.replace(/^(der|die|das)\s+/i, "").toLowerCase());
      if (otherGerDefs.includes(userAnswer)) {
        setMessage(
          `"${userAnswer}" is also valid, but we were looking for "${targetWord}" this time.`,
        );
        // allow. remove from deck, don't worry about plural
        return true;
      }
    }
    return false;
  };

  const evalAnswerPlural = (
    userInputPlural: string,
    targetPlural: string,
  ): boolean => {
    setMessage("");
    const correctAnswer = targetPlural.toLowerCase().split(" ").slice(1).join();
    const userAnswer = userInputPlural.trim().toLowerCase();
    const initial = userInputPlural.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      setMessage("Remember: German nouns begin with an uppercase letter.");
    }
    if (userAnswer === correctAnswer) return true;
    return false;
  };

  useEffect(() => {
    if (answerState === "incorrect" || answerState === "correct") {
      const nounPlural = targetPlural.split(" ").slice(1).join();
      const feedbackMsg = `${targetArticle} ${targetWord}, die ${nounPlural}`;
      setMessage(feedbackMsg);
      setTimeout(() => {
        if (answerState === "correct") {
          setCardsToTest((prev) => prev.slice(1));
        } else {
          setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        }
        setMessage("");
        setUserInputArticle("");
        setUserInputNoun("");
        setUserInputPlural("");
        setAnswerState("waiting");
      }, 3000);
    } else if (answerState === "skipped") {
      setMessage("");
    }
  }, [
    answerState,
    setAnswerState,
    setCardsToTest,
    setMessage,
    setUserInputNoun,
    setUserInputArticle,
    setUserInputPlural,
    targetPlural,
    targetArticle,
    targetWord,
  ]);

  const allEmpty =
    userInputNoun.trim() === "" &&
    userInputArticle === "" &&
    userInputPlural.trim() === "";

  const handleArticleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setUserInputArticle(value);

    if (["der", "die", "das"].includes(value)) {
      // Auto-focus noun field
      document.getElementById("word")?.focus();
    }
  };
  const handleSubmit = () => {
    if (allEmpty) {
      setAnswerState("skipped");
      return;
    }

    const otherGerDefs = cardsToTest[0].notes.otherGerDefinitions;

    const nounRight = evalAnswerGerNoun(
      userInputNoun,
      targetWord,
      otherGerDefs,
    );
    const articleRight = evalAnswerArticle(userInputArticle, targetArticle);
    const pluralRight = evalAnswerPlural(userInputPlural, targetPlural);

    const isCorrect = articleRight && nounRight && pluralRight;
    setAnswerState(isCorrect ? "correct" : "incorrect");
  };

  return (
    <>
      <h2>English to German Test</h2>
      {testState === "waiting" && (
        <div>
          <p>
            Given a noun in English, please supply the correct German article,
            translation, and its plural form.
          </p>
          <p>
            Test is over when all nouns were answered with the correct article,
            translation, and plural. Correct answers remove the card (noun) from
            the deck; incorrect and skipped answers are returned.
          </p>
          <p>
            Note: for this app, please use the correct umlaut vowel and not the
            non-umlaut equivalent (i.e. Use ü or ä and not ue or ae).
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
        <GameOver title="English to German Test" onSetMode={handleSetMode} />
      )}
      {testState === "active" && cardsToTest.length > 0 && (
        <section className={classes.gameContainer}>
          <div className={classes.englishWord}>
            <h3>English: the {cardsToTest[0].eng}</h3>
          </div>
          <div className={classes.wordsContainer}>
            <div className={classes.germanAnswers}>
              <p
                className={`
                  ${classes.message} 
                  ${answerState === "correct" ? classes.correctGer : ""}
                  ${answerState === "incorrect" ? classes.incorrectGer : ""}`.trim()}
              >
                {message}
              </p>

              <input
                type="text"
                autoFocus={testState === "active"}
                id="article"
                list="articles"
                value={userInputArticle}
                placeholder="ex: das"
                onChange={handleArticleChange}
                className={classes.articleAnswer}
              />
              <datalist id="articles">
                <option>der</option>
                <option>die</option>
                <option>das</option>
              </datalist>
              <input
                type="text"
                id="word"
                value={userInputNoun}
                placeholder="ex: Buch"
                onChange={(e) => setUserInputNoun(e.target.value)}
                className={classes.nounAnswer}
              />
              <div className={classes.germanPlural}>
                <span className={classes.pluralArticle}>die</span>
                <input
                  type="text"
                  id="plural"
                  value={
                    cardsToTest[0]?.hasNoPlural ? "no plural" : userInputPlural
                  }
                  placeholder="ex: Bücher"
                  disabled={cardsToTest[0]?.hasNoPlural}
                  onChange={(e) => setUserInputPlural(e.target.value)}
                  className={classes.pluralAnswer}
                />
              </div>

              <div className={classes.btnContainer}>
                <button
                  onClick={handleSubmit}
                  disabled={answerState !== "waiting"}
                  className={classes.submitBtn}
                >
                  {allEmpty ? "Skip" : "Check"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GermanFullGame;
