import ModeButton from "./ModeButton.tsx";

import classes from "./GameOver.module.css";

import { ModeProp } from "../../types.ts";

const GameOver = () => {
  return (
    <div className={classes.gameOverContainer}>
      <div>
        <span
          aria-label="exploding head"
          role="img"
          className={classes.emojiBrain}
        >
          🤯
        </span>
      </div>
      <h2>Test over! What's next?</h2>
      <ul>
        <li>
          Start over? <span className={classes.emojiArrow}>➡</span> HOME
        </li>
        <li>
          Practice some more? Start over?{" "}
          <span className={classes.emojiArrow}>➡</span> PRACTICE
        </li>
        <li>
          Do another test? <span className={classes.emojiArrow}>➡</span> TESTS
        </li>
      </ul>
    </div>
  );
};

export default GameOver;
