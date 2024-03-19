import { useContext, useCallback, useEffect } from "react";
import { AppContext } from "../App"; // Adjust the import path as needed
import Keys from "./Keys";

export default function KeyBoard() {
  const { onSelect, onEnter, onDelete, disabledLetters } =
    useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
      }
    },
    [onSelect, onEnter, onDelete, keys1, keys2, keys3]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((keyValue) => (
          <Keys
            key={keyValue}
            keyVal={keyValue}
          />
        ))}
      </div>
      <div className="line2">
        {keys2.map((keyValue) => (
          <Keys
            key={keyValue}
            keyVal={keyValue}
          />
        ))}
      </div>
      <div className="line3">
        <Keys keyVal={"ENTER"} bigKey={true} />
        {keys3.map((keyValue) => (
          <Keys
            key={keyValue}
            keyVal={keyValue}
          />
        ))}
        <Keys keyVal={"DELETE"} bigKey={true} />
      </div>
    </div>
  );
}
