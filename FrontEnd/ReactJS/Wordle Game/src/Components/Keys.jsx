import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Keys({ keyVal, bigKey, disabled }) {
  const { onSelect, onEnter, onDelete } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelect(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disable"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}
