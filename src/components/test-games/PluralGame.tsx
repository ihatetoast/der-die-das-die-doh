import { useState } from 'react';
import {
  VocabEntry,
  MiniGameProps,
  GameState,
  AnswerState,
} from '../../types.ts';
import { useFlashcardLogic } from '../../hooks/useFlashcardLogic.ts';
import classes from './PluralGame.module.css';

import GameOver from './GameOver.tsx';

const PluralGame = ({ words, handleSetMode }: MiniGameProps) => {
  console.log('words in plural game', words);
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [message, setMessage] = useState<string>('');
  const [userInputPlural, setUserInputPlural] = useState<string>('');
  const [testState, setTestState] = useState<GameState>('waiting');
  const [answerState, setAnswerState] = useState<AnswerState>('waiting');
  const targetPlural = cardsToTest[0]?.plural;
  const handleSubmit = () => {
    if (userInputPlural.trim() === '') {
      setAnswerState('skipped');
      return;
    }
  };

  const evalPlural = (userInputPlural: string, targetPlural: string) => {};
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
            <h3>English: the {cardsToTest[0].eng}</h3>
            <span>
              German: {cardsToTest[0].article} {cardsToTest[0].noun}, die{' '}
            </span>
            <input
              type='text'
              id='plural'
              value={userInputPlural}
              placeholder='plural form'
              onChange={(e) => setUserInputPlural(e.target.value)}
            />
            <button onClick={handleSubmit}>Check</button>
          </div>
          <div className={classes.message}></div>
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
