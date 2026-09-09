import classes from "./SpecialCharacterButtons.module.css";
import { SpecialCharacter } from "../../types";
import { useEffect } from "react";

const SPECIAL_CHARACTERS: SpecialCharacter[] = [
  { char: "Ä", code: "1" },
  { char: "ä", code: "2" },
  { char: "Ö", code: "3" },
  { char: "ö", code: "4" },
  { char: "Ü", code: "5" },
  { char: "ü", code: "6" },
  { char: "ß", code: "7" },
];
const SpecialCharacterButtons = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const insertChar = (char: string) => {
    if (!inputRef.current) return;

    const selectionStart = inputRef.current.selectionStart ?? 0;
    const selectionEnd = inputRef.current.selectionEnd ?? 0;
    const value = inputRef.current.value;
    // leave red squiggles until this ia actually used. fix then.
    const newValue =
      value.slice(0, selectionStart) + char + value.slice(selectionEnd);

    inputRef.current.value = newValue;
    inputRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1);
    inputRef.current.focus();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const umlaut = SPECIAL_CHARACTERS.find((char) => char.code === e.key);
      if (umlaut) {
        e.preventDefault();
        insertChar(umlaut.char);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={classes.germanKeysCont}>
      {SPECIAL_CHARACTERS.map((char) => (
        <button
          key={char.code}
          onClick={() => insertChar(char.char)}
          className={classes.umlautBtn}
        >
          {char.char}
        </button>
      ))}
    </div>
  );
};

export default SpecialCharacterButtons;
// <span className={classes.code}>({char.code})</span>
