

import { VocabEntry } from '../../types';

import classes from './WeakMascGame.module.css';

type WeakMascGameProps = {
  words: VocabEntry[];
};

const WeakMascGame = ({ words }: WeakMascGameProps) => {
  console.log('words in weak masc game', words);
  return (
    <>
      <h2>Whom are you calling weak?</h2>
      <p>You'll be given a masculine noun. Click "Weak" if it is a weak masculine noun or "Macho" if it is not.
      </p>
      <section className={classes.weakMascGame}>game here</section>
    </>
  );
};

export default WeakMascGame;
