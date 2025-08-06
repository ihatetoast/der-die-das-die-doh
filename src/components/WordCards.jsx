export default function WordCards({ title, loadingText, words }) {

  // stack of cards to flip sections:
  // needs paper pencil word before too much of a commitment. measure cut and all that.

// too many ideas of how to self-test the skills: german, gender, plural, examples
// play about to 
  return (
    <section>
      <h2>{title}</h2>
      {words.length === 0 && <p>{loadingText}</p>}
      {words.length > 0 && (
        <ul>
          {words.map((word) => (
            <li key={word.id}>
              <p>just seeing if the word data comes up:</p>
<p>show first: {word.english}</p>
<p>hide at first but be next to show: {word.german}</p>

<p>eventually deal with these:</p>
<p>handle showing after german word is shown: 
  <span> {word.gender === 'm' && 'der'}</span>
  <span> {word.gender === 'f' && 'die'}</span>
  <span> {word.gender === 'n' && 'das'}</span> {word.german}
  </p>
<p>handle showing after german word is shown: die {word.plural}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
