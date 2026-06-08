import { useState, useEffect } from 'react';
import { GameProps } from '../../types.ts';
import { useFlashcardLogic } from '../../hooks/useFlashcardLogic.ts';
import classes from './PluralGame.module.css';

import GameOver from './GameOver.tsx';

const PluralGame = ({ words, handleSetMode }: GameProps) => {
  const {
    cardsToTest,
    setCardsToTest,
    testState,
    setTestState,
    answerState,
    setAnswerState,
    message,
    setMessage,
  } = useFlashcardLogic(words, 'plural');

  // const [message, setMessage] = useState<string>('');
  const [userInputPlural, setUserInputPlural] = useState<string>('');

  // pause for style change.
  useEffect(() => {
    if (answerState === 'incorrect' || answerState === 'correct') {
      setTimeout(() => {
        if (answerState === 'correct') {
          setCardsToTest((prev) => prev.slice(1));
        } else {
          setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        }
        setMessage('');
        setUserInputPlural('');
        setAnswerState('waiting');
      }, 3000);
    }
  }, [
    answerState,
    setCardsToTest,
    setMessage,
    setUserInputPlural,
    setAnswerState,
  ]);

  const handleSubmit = () => {
    if (userInputPlural.trim() === '') {
      setAnswerState('skipped');
      return;
    }
    const isCorrect = evalPlural(userInputPlural, cardsToTest[0].plural);
    setAnswerState(isCorrect ? 'correct' : 'incorrect');
  };

  const evalPlural = (
    userInputPlural: string,
    targetPlural: string,
  ): boolean => {
    setMessage('');
    const correctAnswer = targetPlural.toLowerCase().split(' ').slice(1).join();

    const userAnswer = userInputPlural.trim().toLowerCase();

    // don't count as wrong, but if user doesn't cap first letter, put a note in hint box reminding them.
    const initial = userInputPlural.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      setMessage('Remember: German nouns begin with an uppercase letter.');
    }
    if (userAnswer === correctAnswer) return true;
    return false;
  };

  return (
    <>
      <h2>German Plural Mini Test</h2>
      {testState === 'waiting' && (
        <div>
          <p>
            You'll get an English word with the German translation in singular.
            You need to provide the correct plural.
          </p>
          <p>
            Note: for this app, please use the correct umlaut vowel and not the
            non-umlaut equivalent (i.e. Use ü or ä and not ue or ae).
          </p>
          <div>
            <h3>Quick refresher</h3>
            <div className={classes.pluralGrid}>
              <div className={classes.pluralSignal}>-</div>
              <div>das Fenster</div>
              <div>die Fenster</div>
              <div className={classes.pluralSignal}>¨-</div>
              <div>der Bruder</div>
              <div>
                die Br<span className={classes.highlight}>ü</span>der
              </div>
              <div className={classes.pluralSignal}>-e</div>
              <div>der Tisch</div>
              <div>
                die Tisch<span className={classes.highlight}>e</span>
              </div>
              <div className={classes.pluralSignal}>¨-e</div>
              <div>der Stuhl</div>
              <div>
                die St<span className={classes.highlight}>ü</span>hl
                <span className={classes.highlight}>e</span>
              </div>
              <div className={classes.pluralSignal}>-er</div>
              <div>das Kind</div>
              <div>
                die Kind<span className={classes.highlight}>er</span>
              </div>
              <div className={classes.pluralSignal}>¨-er</div>
              <div>das Buch</div>
              <div>
                die B<span className={classes.highlight}>ü</span>ch
                <span className={classes.highlight}>er</span>
              </div>

              <div className={classes.pluralSignal}>-en</div>
              <div>die Frau</div>
              <div>
                die Frau<span className={classes.highlight}>en</span>
              </div>
              <div className={classes.pluralSignal}>-n</div>
              <div>die Lampe</div>
              <div>
                die Lampe<span className={classes.highlight}>n</span>
              </div>
              <div className={classes.pluralSignal}>-nen</div>
              <div>die Studentin</div>
              <div>
                die Studentin<span className={classes.highlight}>nen</span>
              </div>
              <div className={classes.pluralSignal}>-s</div>
              <div>das Handy</div>
              <div>
                die Handy<span className={classes.highlight}>s</span>
              </div>
            </div>
          </div>
          <p>
            Look out for Greek or Latin exceptions like das Vis
            <span className={classes.highlight}>a</span> / die Vis
            <span className={classes.highlight}>um</span>.
          </p>
          <p>When you're ready, click "Go!".</p>
          <button
            className={classes.startBtn}
            onClick={() => setTestState('active')}
          >
            Go!
          </button>
        </div>
      )}
      {testState === 'over' && (
        <GameOver title='German Plural Mini' onSetMode={handleSetMode} />
      )}
      {testState === 'active' && cardsToTest.length > 0 && (
        <section className={classes.pluralGame}>
          <div className={classes.wordsContainer}>
            <div className={classes.originWord}>
              <h3>English: the {cardsToTest[0].eng}</h3>
            </div>
            <div className={classes.targetWord}>
              <p className={classes.message}>{message}</p>
              <span>
                German: {cardsToTest[0].article} {cardsToTest[0].noun}, die{' '}
              </span>
              <input
                type='text'
                id='plural'
                value={userInputPlural}
                placeholder='plural form'
                onChange={(e) => setUserInputPlural(e.target.value)}
                className={`
                  ${classes.pluralAnswer} 
                    ${classes[answerState]}
                  `.trim()}
              />
              <button
                disabled={answerState !== 'waiting'}
                onClick={handleSubmit}
              >
                {userInputPlural.trim() === '' ? 'Skip' : 'Check'}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PluralGame;
// todo: address if a user can submit (article and noun given) then add to input.
// onKeyDown={(e) => {
//   if (e.key === 'Enter' && canSubmit) {
//     handleSubmit();
//   }
// }}
