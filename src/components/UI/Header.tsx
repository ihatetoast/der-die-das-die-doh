import { ModeProp } from "../../types.ts";

import classes from "./Header.module.css";

import ModeButton from "./ModeButton.tsx";

type HeaderProps = {
  mode: ModeProp;
  onSetMode: (value: ModeProp) => void;
  sessionComplete: boolean;
  deckTooSmall: boolean;
};
const Header = ({
  mode,
  onSetMode,
  sessionComplete,
  deckTooSmall,
}: HeaderProps) => {
  if (deckTooSmall) return <p>D'oh! Deck is too small...</p>;
  if (mode === "home") {
    return (
      <header className={classes.header}>
        <h1>Der Die Das Die ... D'oh!</h1>
      </header>
    );
  }
  // practice sesh or test is done ...
  if (sessionComplete) {
    return (
      <header>
        <h1>Der Die Das Die ... D'oh!</h1>
        <div className={classes.buttonContainer}>
          <ModeButton onClick={onSetMode} mode="home" />
          <ModeButton onClick={onSetMode} mode="practice" />
          <ModeButton onClick={onSetMode} mode="test" />
        </div>
      </header>
    );
  }
  // ... ; otherwise, just give them an option to go home any time and that is a total reset.
  return (
    <header className={classes.header}>
      <h1>Der Die Das Die ... D'oh!</h1>
      <ModeButton onClick={onSetMode} mode="home" />
    </header>
  );
};

export default Header;
