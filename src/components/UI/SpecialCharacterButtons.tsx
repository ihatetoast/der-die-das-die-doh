import classes from './SpecialCharacterButtons.module.css';

const SpecialCharacterButtons = () => {
  const insertChar =(char: string) => {
    console.log("user pressed ", char);
  }
  return (
    <div className={classes.germanKeysCont}>
      <button onClick={() => insertChar('ä')}>ä</button>
      <button onClick={() => insertChar('ö')}>ö</button>
      <button onClick={() => insertChar('ü')}>ü</button>
      <button onClick={() => insertChar('ß')}>ß</button>
      {/* Capital versions if needed */}
    </div>
  );
};

export default SpecialCharacterButtons;
// todo: this at the end. 
// put somewhere at the start or maybe a floating btn to reference. 
// macOS: Option+u, then vowel (ü, ö, ä) | Option+s (ß)
// Windows: Alt codes
// long-press on mobile