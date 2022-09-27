import { useEffect, useState } from 'react';

function Typer({
  sentences,
  className = '',
  letterWait = 80,
  sentenceWait = 2000,
}) {
  const [text, setText] = useState('');
  const [sentence, setSentence] = useState(-1);
  const [letter, setLetter] = useState(-1);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    if (sentence === sentences.length) return setSentence(0);

    let timer;

    if (letter === -1) {
      timer = setTimeout(() => {
        setSentence(s => s + 1);
        setLetter(0);
        setErasing(false);
      }, letterWait);
    } else if (letter === sentences[sentence].length) {
      timer = setTimeout(() => {
        setLetter(l => l - 1);
        setErasing(true);
      }, sentenceWait);
    } else if (erasing) {
      setText(t => t.slice(0, letter));

      timer = setTimeout(() => {
        setLetter(l => l - 1);
      }, letterWait);
    } else {
      setText(t => t + sentences[sentence][letter]);

      timer = setTimeout(() => {
        setLetter(l => l + 1);
        setErasing(false);
      }, letterWait);
    }

    return () => clearTimeout(timer);
  }, [sentence, letter, erasing]);

  return (
    <span className={className}>
      {text} <span className='typer__cursor'>|</span>
    </span>
  );
}

export default Typer;
