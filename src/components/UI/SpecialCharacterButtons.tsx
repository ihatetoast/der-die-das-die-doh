import classes from "./SpecialCharacterButtons.module.css";
import { SpecialCharacter } from "../../types";
import { useEffect } from "react";

/**
 * use this by inputs (under) where the user could type a german noun or plural
 * miniEngToGer, GerFull, Plural.
 * do later when we handle styling.
 * const inputRef = useRef<HTMLInputElement>(null);
 * <input ref={inputRef} type="text" />
 * <UmlautHelper inputRef={inputRef} />
 */

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
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  const insertChar = (char: string) => {
    if (!inputRef.current) return;

    const { selectionStart, selectionEnd, value } = inputRef.current;
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
    <div className={classes.umlautHelper}>
      {SPECIAL_CHARACTERS.map((char) => (
        <button
          key={char.code}
          onClick={() => insertChar(char.char)}
          className={classes.umlautBtn}
        >
          {char.char}
          <span className={classes.code}>({char.code})</span>
        </button>
      ))}
    </div>
  );
};

export default SpecialCharacterButtons;
