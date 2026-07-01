import classes from "../TestBoard.module.css";
import { DeckSize, TestType } from "../../types";
type TestCardProps = {
  title: string;
  desc: string;
  testType: TestType;
  deckSizeOptions: DeckSize[];
  handleTestStart: (size: DeckSize, test: TestType) => void;
};

const TextCard = ({
  title,
  desc,
  testType,
  deckSizeOptions,
  handleTestStart,
}: TestCardProps) => {
  return (
    <article className={classes.testCard}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className={classes.gameCardBtnContainer}>
        {deckSizeOptions.map((size) => (
          <button
            key={size}
            className={classes.testBtn}
            onClick={() => handleTestStart(size, testType)}
          >
            {size}
          </button>
        ))}
      </div>
    </article>
  );
};

export default TextCard;
