import { DeckSize, TestType, ModeProp } from '../types.ts';

import classes from './TestBoard.module.css';

import { VocabEntry } from '../types.ts';

import ArticleGame from './test-games/ArticleGame.tsx';
import PluralGame from './test-games/PluralGame.tsx';
import GerEngMiniGame from './test-games/GerEngMiniGame.tsx';
import EngGerMiniGame from './test-games/EngGerMiniGame.tsx';
import GermanFullGame from './test-games/GermanFullGame.tsx';
import WeakMascGame from './test-games/WeakMascGame.tsx'

type Props = {
  words: VocabEntry[];
  testType: TestType | null;
  handleGetInitialActiveDeck: (size: DeckSize) => void;
  handleGetTestType: (test: TestType) => void;
  handleSetMode:  (value: ModeProp) => void;
};

// ask the user if they want to test on current active deck or all x reviewed
// replace the picsum images with screenshots of the test. hide the image on mob but show at 700ish
const TestBoard = ({
  words,
  testType,
  handleGetInitialActiveDeck,
  handleGetTestType,
  handleSetMode
}: Props) => {
  const handleTestButtonClick = (size: DeckSize, test: TestType) => {
    handleGetInitialActiveDeck(size);
    handleGetTestType(test);
  };


  return (
    <div className={classes.testBoard}>
      {!testType && (
        <>
          <h2>Test yourself</h2>
          <p>Challenge yourself by taking one of the tests below.</p>
        </>
      )}
      {testType === 'article' && <ArticleGame words={words} handleSetMode={handleSetMode}/>}
      {testType === 'plural' && <PluralGame words={words} />}
      {testType === 'eng-ger-mini' && <EngGerMiniGame words={words} />}
      {testType === 'ger-eng-mini' && <GerEngMiniGame words={words} />}
      {testType === 'german-full' && <GermanFullGame words={words} />}
      {testType === 'weak-masc' && <WeakMascGame words={words} />}
      {!testType && (
        <section>
          <article className={classes.testCard}>
            <div>
              <img
                src='https://picsum.photos/seed/picsum/200'
                alt='replace with screenshot'
              />
            </div>
            <h3>Article Speed Round</h3>
            <p>Pick the correct article (nom) before the time is up.</p>
            <div className={classes.gameCardBtnContainer}>
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(5, 'article')}
              >
                5
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(10, 'article')}
              >
                10
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(20, 'article')}
              >
                20
              </button>
            </div>
          </article>
          <article className={classes.testCard}>
            <div>
              <img
                src='https://picsum.photos/seed/picsum/200'
                alt='replace with screenshot'
              />
            </div>
            <h3>English-to-German Mini</h3>
            <p>Given an English word, write the German translation.</p>
            <div className={classes.gameCardBtnContainer}>
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(5, 'eng-ger-mini')}
              >
                5
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(10, 'eng-ger-mini')}
              >
                10
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(20, 'eng-ger-mini')}
              >
                20
              </button>
            </div>
          </article>
          <article className={classes.testCard}>
            <div>
              <img
                src='https://picsum.photos/seed/picsum/200'
                alt='replace with screenshot'
              />
            </div>
            <h3>German-to-English Mini</h3>
            <p>Given a German word, write the English translation.</p>
            <div className={classes.gameCardBtnContainer}>
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(5, 'ger-eng-mini')}
              >
                5
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(10, 'ger-eng-mini')}
              >
                10
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(20, 'ger-eng-mini')}
              >
                20
              </button>
            </div>
          </article>
          <article className={classes.testCard}>
            <div>
              <img
                src='https://picsum.photos/seed/picsum/200'
                alt='replace with screenshot'
              />
            </div>
            <h3>Plural</h3>
            <p>Given the German word, write its plural</p>
            <div className={classes.gameCardBtnContainer}>
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(5, 'plural')}
              >
                5
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(10, 'plural')}
              >
                10
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(20, 'plural')}
              >
                20
              </button>
            </div>
          </article>
          <article className={classes.testCard}>
            <div>
              <img
                src='https://picsum.photos/seed/picsum/200'
                alt='replace with screenshot'
              />
            </div>
            <h3>English to German Full</h3>
            <p>Given the German word, write its plural</p>
            <div className={classes.gameCardBtnContainer}>
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(5, 'german-full')}
              >
                5
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(10, 'german-full')}
              >
                10
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(20, 'german-full')}
              >
                20
              </button>
            </div>
          </article>
          <article className={classes.testCard}>
            <div>
              <img
                src='https://picsum.photos/seed/picsum/200'
                alt='replace with screenshot'
              />
            </div>
            <h3>Be Strong with Weak Masculine Words</h3>
            <p>Decide if the masculine noun is weak or not.</p>
            <div className={classes.gameCardBtnContainer}>
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(5, 'weak-masc')}
              >
                5
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(10, 'weak-masc')}
              >
                10
              </button>{' '}
              <button
                className={classes.testBtn}
                onClick={() => handleTestButtonClick(20, 'weak-masc')}
              >
                20
              </button>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default TestBoard;
