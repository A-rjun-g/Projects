import React from "react";
import { useContext, useRef } from "react";
import { PasswordContext } from "../App";

function InputBox() {
  const { password } = useContext(PasswordContext);
  const passwordRef = useRef(null);
  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        ref={passwordRef}
        readOnly
      ></input>
      <button
        onClick={copyToClipBoard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
      >
        COPY
      </button>
    </div>
  );
}
export default InputBox;
