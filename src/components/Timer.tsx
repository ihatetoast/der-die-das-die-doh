

type TimerProps = {
  duration: number;
  answerState: string;
}

const Timer = ({duration, answerState}: TimerProps) => {
  console.log(duration, answerState);

  // You have {TIME_TO_GUESS / 1000} seconds to choose the correct article.
  return (
    <div>Timer</div>
  )
}

export default Timer