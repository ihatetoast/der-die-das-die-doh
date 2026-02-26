import { ModeProp } from '../../types.ts';

import classes from './Header.module.css';

import ModeButton from './ModeButton.tsx';

type HeaderProps = {
  onSetMode: (value: ModeProp) => void;
  showBoardButtons: boolean;
  deckTooSmall: boolean;
  testComplete: boolean; // remove after test board is done
};

const Header = ({
  onSetMode,
  showBoardButtons,
  deckTooSmall,
  testComplete,
}: HeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>Der Die Das Die ... D'oh!</h1>
      {deckTooSmall && (
        <p>
          D'oh! Deck is too small to practice or test. Come back later when the
          vocabulary elves have entered more words.
        </p>
      )}
      {!deckTooSmall && !showBoardButtons && (
        <>
          <p>Go home to completely refresh to start over or switch modes.</p>
          <ModeButton onClick={onSetMode} mode='home' />
        </>
      )}
      {!deckTooSmall && showBoardButtons && (
        <div className={classes.buttonContainer}>
          <>
            <p>
              Learn and study {testComplete ? `or test yourself on` : ''} German nouns.
            </p>
            <div>
              <ModeButton onClick={onSetMode} mode='practice' />
              {testComplete && <ModeButton onClick={onSetMode} mode='test' />}
            </div>
          </>
        </div>
      )}
    </header>
  );
};

export default Header;
