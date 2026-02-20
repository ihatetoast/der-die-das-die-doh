import classes from './PracticeBoard.module.css';

import LearningCube from './LearningCube.tsx';

type Props = {};

const PracticeBoard = () => {
  // buttons here will determine deck size and the cards.
  // idea is to pass the number back to app where the number is given to a fn
  // that then gets that number from the wordlist and that deck gets saved in the app but also 
  // passed to the practice. It is saved in the app because the user might want to practice that deck 
  // (or another random, but it has to be remembered)

  const cardsToReview: string[] = [];
  return (
    <div className={classes.practiceBoard}>
      <section>
        <p>
          Instructions of some kind. Something like pick the size of your
          practice deck. At the end of the deck, you can go through all the
          cards again, review ones you want to review again, or test yourself on
          your deck.
        </p>
        <p>Choose your deck size:</p>
        <div className={classes.btnContainer}>
          <button onClick={() =>console.log("deck size is 5")}>5</button>
          <button onClick={() =>console.log("deck size is 10")}>10</button>
          <button onClick={() =>console.log("deck size is 20")}>20</button>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default PracticeBoard;
