import ModeButton from "./ModeButton.tsx";

import classes from "./GameOver.module.css";

import { ModeProp } from "../../types.ts";
type Props = {
  title: string;
  onSetMode: (value: ModeProp) => void;
};

const GameOver = ({ title, onSetMode }: Props) => {
  return (
    <div className={classes.gameOverContainer}>
      <h2>{title} test over! What's next?</h2>
      <ModeButton onClick={onSetMode} mode="home">
        Oof. That cooked me; I'm done. Take me home.
      </ModeButton>
      <ModeButton onClick={onSetMode} mode="test">
        Huzzah! Test me on more words
      </ModeButton>
      <ModeButton onClick={onSetMode} mode="practice">
        I'd like to practice more words
      </ModeButton>
    </div>
  );
};

export default GameOver;
