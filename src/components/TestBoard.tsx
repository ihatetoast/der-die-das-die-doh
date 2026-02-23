
import classes from './TestBoard.module.css';

import {VocabEntry} from '../types.ts'

type Props = {
  words: VocabEntry[];
};

const TestBoard = ({words}:Props) => {
console.log(words);
  return (
    <div className={classes.testBoard}>
      <section>
        <p>Intro or instructions</p>
      </section>
      <section>I will be a testing section</section>
    </div>
  );
};

export default TestBoard;
