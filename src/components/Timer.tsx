import { useState, useEffect } from 'react';
import classes from './Timer.module.css';
type TimerProps = {
  duration: number;
  answerState: string;
};

const Timer = ({ duration, answerState }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  console.log(duration, answerState);

  useEffect(() => {
    const countdownInterval = setInterval(() => {}, 1000);
  });

  const secondsAsc = [...Array(duration / 1000)].map((_, idx) => (
    <span
      key={idx}
      data-second={idx + 1}
      className={idx + 1 === duration / 1000 ? `${classes.bigger} ` : undefined}
    >
      {idx + 1}
    </span>
  ));
  const secondsDesc = [...secondsAsc].reverse();
  return (
    <div>
      <p>You have {duration / 1000} seconds to choose the correct article.</p>
      <p className={classes.timerDigits}>{secondsDesc}</p>
    </div>
  );
};

export default Timer;
