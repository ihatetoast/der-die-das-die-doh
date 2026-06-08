import { useState, useEffect } from 'react';
import { useFlashcardLogic } from '../../hooks/useFlashcardLogic.ts';
import {  ArticleType } from '../../types.ts';

import GameOver from './GameOver.tsx';

// import classes from './GermanFullGame.module.css';
import classes from './Game.module.css';

import { GameProps } from '../../types.ts';

const GermanFullGame = ({ words, handleSetMode }: GameProps) => {
  console.log('words in german full game', words);

  const {
    cardsToTest,
    setCardsToTest,
    userInputNoun,
    setUserInputNoun,
    testState,
    setTestState,
    message,
    setMessage,
    answerState,
    setAnswerState,
  } = useFlashcardLogic(words, 'german-full');

  const [userInputArticle, setUserInputArticle] = useState<string>('');
  const [userInputPlural, setUserInputPlural] = useState<string>('');
  const [articleIsCorrect, setArticleIsCorrect] = useState<boolean | null>(
    null,
  );
  const [gerNounIsCorrect, setGerNounIsCorrect] = useState<boolean | null>(
    null,
  );
  const [gerPluralIsCorrect, setGerPluralIsCorrect] = useState<boolean | null>(
    null,
  );

  const targetWord = cardsToTest[0]?.noun;
  const targetArticle = cardsToTest[0]?.article;
  const targetPlural = cardsToTest[0]?.plural;

  const evalAnswerArticle = (
    userInputArticle: string,
    targetArticle: ArticleType,
  ): boolean => {
    setMessage(''); //
    const userAnswer = userInputArticle.trim().toLowerCase();
    if (userAnswer === targetArticle) return true;
    return false;
  };

  const evalAnswerGerNoun = (
    userInputNoun: string,
    targetWord: string,
    otherDefs?: string,
  ): boolean => {
    setMessage(''); // to clear any message re hand v Hand
    const userAnswer = userInputNoun.trim().toLowerCase();

    const initial = userInputNoun.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      setMessage('Remember: German nouns begin with an uppercase letter.');
    }
    // to lower case for both to account for sloppy NOuns or crazy sHift keys
    if (userAnswer === targetWord.toLowerCase()) return true;
    if (otherDefs) {
      const otherGerDefs = otherDefs
        .split(', ')
        .map((def) => def.replace(/^(der|die|das)\s+/i, '').toLowerCase());
      if (otherGerDefs.includes(userAnswer)) {
        setMessage(
          `"${userAnswer}" is also valid, but we were looking for "${targetWord}" this time.`,
        );
        // allow. remove from deck
        return true;
      }
    }
    return false;
  };

  const evalAnswerPlural = (
    userInputPlural: string,
    targetPlural: string,
    otherDefs?: string,
  ): boolean => {
    setMessage('');
    const correctAnswer = targetPlural.toLowerCase().split(' ').slice(1).join();
    const userAnswer = userInputPlural.trim().toLowerCase();
    const initial = userInputPlural.trim().charAt(0);
    if (initial !== initial.toUpperCase()) {
      setMessage('Remember: German nouns begin with an uppercase letter.');
    }
    if (userAnswer === correctAnswer) return true;
    if (otherDefs) {
      // check if the user's noun matched one of these. We don't have a plural set up for that
      // just a message "We were looking for 'thisWord', but 'thatWord' is also a valid answer"
      // and count as correct, ignore the plural and move on?
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (answerState === 'incorrect' || answerState === 'correct') {
      setTimeout(() => {
        if (answerState === 'correct') {
          setCardsToTest((prev) => prev.slice(1));
        } else {
          setCardsToTest((prev) => [...prev.slice(1), prev[0]]);
        }
        setMessage('');
        setUserInputArticle('');
        setUserInputNoun('');
        setUserInputPlural('');
        setAnswerState('waiting');
        setArticleIsCorrect(null);
        setGerNounIsCorrect(null);
        setGerPluralIsCorrect(null);
      }, 3000);
    }
  }, [
    answerState,
    setAnswerState,
    setCardsToTest,
    setMessage,
    setUserInputNoun,
    setUserInputArticle,
    setUserInputPlural,
  ]);

  const handleSubmit = () => {
    // all empty
    if (
      userInputNoun.trim() === '' &&
      userInputArticle === null &&
      userInputPlural.trim() === ''
    ) {
      setAnswerState('skipped');
      return;
    }

    // if not all empty but just one is done, count as incorrect.
    // for noun and plural, give the correct ans in message before moving on
    // not for article. they have 1/3 chance to get that, but noun can go on forever.

    // todo: work on how to best handle this.

    const otherGerDefs = cardsToTest[0].notes.otherGerDefinitions;

    const nounRight = evalAnswerGerNoun(
      userInputNoun,
      targetWord,
      otherGerDefs,
    );
    const articleRight = evalAnswerArticle(userInputArticle, targetArticle);
    const pluralRight = evalAnswerPlural(
      userInputPlural,
      targetPlural,
      otherGerDefs,
    );

    const isCorrect = articleRight && nounRight && pluralRight;
    setArticleIsCorrect(articleRight);
    setGerNounIsCorrect(nounRight);
    setGerPluralIsCorrect(pluralRight);

    setAnswerState(isCorrect ? 'correct' : 'incorrect');
  };

  // structure:
  // English: the Book
  // German: [ das ] [ Buch ], die [ Bücher ]
  // all input fields. message for buch v Buch / bücher v Bücher
  // no hints. this is the test, while the others are quizzes.

  const allEmpty =
    userInputNoun.trim() === '' &&
    userInputArticle === '' &&
    userInputPlural.trim() === '';
  return (
    <>
      <h2>English to German Test</h2>
      {testState === 'waiting' && (
        <div>
          <p>
            Given a noun in English, please supply the correct German article,
            translation, and its plural form.
          </p>
          <p>
            Test is over when all nouns were answered with the correct article,
            translation, and plural. There are no hints in this test.
          </p>
          <p>
            Note: for this app, please use the correct umlaut vowel and not the
            non-umlaut equivalent (i.e. Use ü or ä and not ue or ae).
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
        <GameOver title='English to German Test' onSetMode={handleSetMode} />
      )}
      {testState === 'active' && cardsToTest.length > 0 && (
        <section className={classes.gameContainer}>
          <div className={classes.englishWord}>
            <h3>English: the {cardsToTest[0].eng}</h3>
          </div>
          <div className={classes.wordsContainer}>
            <div className={classes.germanAnswers}>
              <p className={classes.hint}>{message}</p>

              <input
                type='text'
                autoFocus={testState === 'active'}
                id='article'
                value={userInputArticle}
                placeholder='ex: das'
                onChange={(e) => setUserInputArticle(e.target.value)}
                className={`
                  ${classes.articleAnswer} 
                    ${articleIsCorrect ? classes.correctGer : ''}
                    ${articleIsCorrect === false ? classes.incorrectGer : ''}
                  `.trim()}
              />
              <input
                type='text'
                id='word'
                value={userInputNoun}
                placeholder='ex: Buch'
                onChange={(e) => setUserInputNoun(e.target.value)}
                className={`
                  ${classes.nounAnswer} 
                    ${gerNounIsCorrect ? classes.correctGer : ''}
                    ${gerNounIsCorrect === false ? classes.incorrectGer : ''}
                  `.trim()}
              />
              <div className={classes.germanPlural}>
                <span className={classes.pluralArticle}>die</span>
                <input
                  type='text'
                  id='plural'
                  value={userInputPlural}
                  placeholder='ex: Bücher'
                  onChange={(e) => setUserInputPlural(e.target.value)}
                  className={`
                  ${classes.pluralAnswer} 
                    ${gerPluralIsCorrect ? classes.correctGer : ''}
                    ${gerPluralIsCorrect === false ? classes.incorrectGer : ''}
                  `.trim()}
                />
              </div>

              <div className={classes.btnContainer}>
                <button
                  onClick={handleSubmit}
                  disabled={answerState !== 'waiting'}
                  className={classes.submitBtn}
                >
                  {allEmpty ? 'Skip' : 'Check'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default GermanFullGame;
