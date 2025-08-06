export default function WordList({ title, loadingText, words, onSelectWord }) {
  console.log(words);
  return (
    <section>
      <h2>{title}</h2>
      {words.length === 0 && <p>{loadingText}</p>}
      {words.length > 0 && (
        <ul>
          {words.map((word) => (
            <li key={word.id}>
              <button onClick={() => onSelectWord(word.id)}>
                {word.english}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

// decide. will Stack be just the stack of cards or will it include title and optional instructions.
// only one stack would have that. work with this. play. It's your practice app, toots. You do you.
