import React, { useContext } from "react";
import { PasswordContext } from "../App";

function NumberAllowed() {
  const { number, setNumberAllowed } = useContext(PasswordContext);
  return (
    <>
      <input
        type="checkbox"
        defaultChecked={number}
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        name=""
        id=""
      />
      <label htmlFor="number">Numbers</label>
    </>
  );
}

export default NumberAllowed;
