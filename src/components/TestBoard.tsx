import { DeckSize, TestType, ModeProp } from "../types.ts";

import classes from "./TestBoard.module.css";

import { VocabEntry } from "../types.ts";

import ArticleGame from "./test-games/ArticleGame.tsx";
import PluralGame from "./test-games/PluralGame.tsx";
import GermanFullGame from "./test-games/GermanFullGame.tsx";
import WeakMascGame from "./test-games/WeakMascGame.tsx";
import MiniGameGerToEng from "./test-games/MiniGameGerToEng.tsx";
import MiniGameEngToGer from "./test-games/MiniGameEngToGer.tsx";

import TestCard from "./UI/TestCard.tsx";

type Props = {
  words: VocabEntry[];
  testType: TestType | null;
  handleGetInitialActiveDeck: (size: DeckSize, test: TestType) => void;
  handleGetTestType: (test: TestType) => void;
  handleSetMode: (value: ModeProp) => void;
  onSessionComplete: () => void;
};

// to-do:ask the user if they want to test on current active deck or all x reviewed
const TestBoard = ({
  words,
  testType,
  handleGetInitialActiveDeck,
  handleGetTestType,
  handleSetMode,
  onSessionComplete,
}: Props) => {
  console.log("TestBoard received testType:", testType);

  const handleTestButtonClick = (size: DeckSize, test: TestType) => {
    handleGetInitialActiveDeck(size, test);
    handleGetTestType(test);
  };

  return (
    <div className={classes.testBoard}>
      {!testType && (
        <>
          <h2>Test yourself</h2>
          <p>Challenge yourself by taking one of the tests below.</p>
        </>
      )}
      {testType === "article" && (
        <ArticleGame
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {testType === "plural" && (
        <PluralGame
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {testType === "ger-eng-mini" && (
        <MiniGameGerToEng
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {testType === "eng-ger-mini" && (
        <>
          {console.log("MiniGameEngToGer receiving words:", words.length)}

          <MiniGameEngToGer
            words={words}
            handleSetMode={handleSetMode}
            onSessionComplete={onSessionComplete}
          />
        </>
      )}
      {testType === "german-full" && (
        <GermanFullGame
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {testType === "weak-masc" && (
        <WeakMascGame
          words={words}
          handleSetMode={handleSetMode}
          onSessionComplete={onSessionComplete}
        />
      )}
      {!testType && (
        <section className={classes.testGrid}>
          <TestCard
            title="Article Speed Round"
            desc="Pick the correct article (substantive) before the time is up."
            deckSizeOptions={[5, 10, 20]}
            testType="article"
            handleTestStart={handleTestButtonClick}
          />

          <TestCard
            title="German-to-English Mini"
            desc="Given the German word, write the English translation"
            deckSizeOptions={[5, 15, 25]}
            testType="ger-eng-mini"
            handleTestStart={handleTestButtonClick}
          />

          <TestCard
            title="English-to-German Mini"
            desc="Given the English word, write the German translation"
            deckSizeOptions={[5, 15, 25]}
            testType="eng-ger-mini"
            handleTestStart={handleTestButtonClick}
          />

          <TestCard
            title="Plural Mini"
            desc="Given the German word, write its plural"
            deckSizeOptions={[5, 10, 20]}
            testType="plural"
            handleTestStart={handleTestButtonClick}
          />

          <TestCard
            title="English to German Full"
            desc="Given the German word, write its plural"
            deckSizeOptions={[5, 15, 25]}
            testType="german-full"
            handleTestStart={handleTestButtonClick}
          />

          <TestCard
            title="Spot the Weakling: Speed Round"
            desc="Decide quickly if it's a weak masculine (n-declension) noun"
            deckSizeOptions={[5, 10]}
            testType="weak-masc"
            handleTestStart={handleTestButtonClick}
          />
        </section>
      )}
    </div>
  );
};

export default TestBoard;
