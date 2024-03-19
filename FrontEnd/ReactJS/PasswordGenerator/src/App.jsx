import "./App.css";
import React, { useCallback, useState, createContext, useEffect } from "react";
import InputBox from "./components/InputBox";
import Slider from "./components/Slider";
import NumberAllowed from "./components/NumberAllowed";
import CharacterAllowed from "./components/CharacterAllowed";

export const PasswordContext = createContext();

function App() {
  const [password, setpassword] = useState("");
  const [passwordLength, setpasswordLength] = useState(8);
  const [number, setNumberAllowed] = useState(false);
  const [char, setcharAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }
    console.log(pass);
    setpassword(pass); // Update password state with the generated password
  }, [number, char, passwordLength]);

  useEffect(() => {
    generatePassword();
  }, [number, char, passwordLength]);
  return (
    <PasswordContext.Provider
      value={{
        password,
        setpassword,
        passwordLength,
        setpasswordLength,
        number,
        setNumberAllowed,
        char,
        setcharAllowed,
        generatePassword,
      }}
    >
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <InputBox />
        <div className="flex items-center gap-x-1">
          <Slider />
          <NumberAllowed />
          <CharacterAllowed />
        </div>
      </div>
    </PasswordContext.Provider>
  );
}

export default App;
