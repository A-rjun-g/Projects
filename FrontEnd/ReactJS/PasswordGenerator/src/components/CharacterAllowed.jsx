import React, { useContext } from "react";
import { PasswordContext } from "../App";

function CharacterAllowed() {
  const { char, setcharAllowed } = useContext(PasswordContext);
  return (
    <>
      <input
        type="checkbox"
        defaultChecked={char}
        onChange={() => {
          setcharAllowed((char) => !char);
        }}
        name=""
        id=""
      />
      <label htmlFor="character">Characters</label>
    </>
  );
}
export default CharacterAllowed;
