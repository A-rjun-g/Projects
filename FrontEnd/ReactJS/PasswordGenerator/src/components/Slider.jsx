import React, { useContext } from "react";
import { PasswordContext } from "../App";

function Slider() {
  const { passwordLength, setpasswordLength } = useContext(PasswordContext);
  return (
    <div className="flex items-center gap-x-1">
      <input
        type="range"
        min={6}
        max={100}
        value={passwordLength}
        className="cursor-pointer"
        onChange={(e) => {
          setpasswordLength(parseInt(e.target.value));
        }}
      ></input>
      <label htmlFor="length">Length:{passwordLength}</label>
    </div>
  );
}

export default Slider;
