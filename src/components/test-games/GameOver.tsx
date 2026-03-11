import ModeButton from '../UI/ModeButton.tsx';

import classes from './GameOver.module.css';

import { ModeProp } from '../../types.ts';
type Props = {
  title: string;
  onSetMode: (value: ModeProp) => void;
};

const GameOver = ({ title, onSetMode }: Props) => {
  return (
    <div className={classes.gameOverContainer}>
      <h2>{title} test over! What's next?</h2>
      <p>Oof. That cooked me; I'm done. Take me home.</p>
      <ModeButton onClick={onSetMode} mode='home' />
      <p>Huzzah! Test me some more.</p>
      <ModeButton onClick={onSetMode} mode='test' />
      <p>I'd like to practice some more.</p>
      <ModeButton onClick={onSetMode} mode='practice' />
    </div>
  );
};

export default GameOver;
