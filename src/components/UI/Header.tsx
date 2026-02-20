import { ModeProp } from '../../types.ts';

import classes from './Header.module.css';

import ModeButton from './ModeButton.tsx';

type Props = {
  onSetMode: (value: ModeProp) => void;
  showButtons: boolean;
};

const Header = ({ onSetMode, showButtons }: Props) => {
  return (
    <header className={classes.header}>
      <h1>Der Die Das Die ... D'oh!</h1>
      {!showButtons && <ModeButton onClick={onSetMode} mode='home' />}
      <div className={classes.buttonContainer}>
        {showButtons && (
          <>
            <p>
              Practice or test yourself on the gender and plural of various
              German nouns.
            </p>
            <div>
              <ModeButton onClick={onSetMode} mode='practice' />
              <ModeButton onClick={onSetMode} mode='test' />
            </div>
    
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
