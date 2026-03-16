import { useState, useEffect } from 'react';
import { VocabEntry } from '../../types';

import classes from './MiniGame.module.css';
import { MiniTestType } from '../../types';
type MiniGameProps = {
  words: VocabEntry[];
  testType: MiniTestType;
};

const MiniGame = ({ words, testType }: MiniGameProps) => {
  console.log('words in eng to ger man mini game', words);
  const [cardsToTest, setCardsToTest] = useState<VocabEntry[]>([]);
  const [userAnswerNoun, setUserAnswerNoun] = useState<string>('');
  const [userAnswerArticle, setUserAnswerArticle] = useState<VocabEntry['article'] | null>(null);
  useEffect(() => {
    if (words.length > 0) setCardsToTest([...words]);
  }, [words]);

  let originLanguage = 'German';
  let targetLanguage = 'English';
  if (testType === 'eng-ger-mini') {
    originLanguage = 'English';
    targetLanguage = 'German;';
  }
const evalAnswer = (userAnswerNoun: string) => {
  console.log(userAnswerNoun);
}
  return (
    <>
      <h2>
        {originLanguage} to {targetLanguage} Mini Test
      </h2>
      <p>
        You're given a noun in {originLanguage}. Please supply the{' '}
        {targetLanguage} noun (in singular).
      </p>
      <p>If you need help, click "Hint" to get the letters needed.</p>
      <section className={classes.MiniGame}>
        <div>
          <h3>
            {originLanguage}:{' '}
            {originLanguage === 'German' ? `${words[0].article}` : 'the'}{' '}
            {words[0].noun}
          </h3>
          <p>Answer: {targetLanguage === 'English' ? "the" : userAnswerArticle} {userAnswerNoun}</p>
          <label htmlFor='word'>
            {targetLanguage}:{' '}
            <input
              type='text'
              id='word'
              placeholder={`${targetLanguage} noun`}
              onChange={(e) => setUserAnswerNoun(e.target.value)}
            />
          </label>

          <button onClick={()=>evalAnswer(userAnswerNoun)}>check</button>
        </div>
      </section>
    </>
  );
};

export default MiniGame;
