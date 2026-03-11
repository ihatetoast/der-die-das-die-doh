import { useState, useEffect } from 'react';
import classes from './Timer.module.css';
type TimerProps = {
  duration: number;
  answerState: string;
  onTimesUp: () => void;
};

const Timer = ({ duration, answerState, onTimesUp }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  console.log(duration, answerState);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimesUp();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onTimesUp]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1000);
    }, 1000);
    // strict mode will make this run twice, clean up existing so we have only one at a time
    return () => {
      clearInterval(interval);
    };
  }, []);

  const questionEvaluated = answerState === 'correct' || answerState === 'incorrect';

  const secondsAsc = [...Array(duration / 1000)].map((_, idx) => (
    <span
      key={idx}
      data-second={idx + 1}
      className={idx + 1 === timeRemaining / 1000 ? `${classes.bigger} ` : undefined}
    >
      {idx + 1}
    </span>
  ));
  const secondsDesc = [...secondsAsc].reverse();
  return (
    <div className={!questionEvaluated ? undefined : classes.hidden}>
      <p>You have {duration / 1000} seconds to choose the correct article.</p>
      <p className={classes.timerDigits}>{secondsDesc}</p>
    </div>
  );
};

export default Timer;
