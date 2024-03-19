import "./App.css";
import Board from "./Components/Board";
import GameOver from "./Components/GameOver";
import Keyboard from "./Components/KeyBoard";
import { createContext, useState } from "react";
import { boardDefault } from "./Components/Words";

/*Inorder to use the Board state every where we have used Appcontext Everything inside the Appcontext provider have the access to the states that is been passed*/
export const AppContext = createContext({});

export default function App() {
  /*Storing the Dfault value to the Board Variable */
  const [board, setBoard] = useState(boardDefault);
  /*helps to  know which letter is Going to be entered next */
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });

  const lengthOfSingleWord = 5;
  const [gameOvered, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  /*Feature not completed yet */
  //const [wordSet, setWordSet] = useState(new Set());
  //const [disabledLetter, setDisabledLetter] = useState([]);

  // useEffect(() => {
  //   generateWordSet().then((words) => {
  //     setWordSet(words.wordCollection);
  //     setCorrectWord(words.todaysWord);
  //   });
  // }, []);

  const correctWord = "RIGHT";

  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return;
    let currentWord = "";

    for (
      let incrementCounter = 0;
      incrementCounter < lengthOfSingleWord;
      incrementCounter++
    ) {
      currentWord += board[currentAttempt.attempt][incrementCounter];
    }

    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 });
    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
    }
    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    });
  };

  const onSelect = (keyVal) => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    });
    setBoard(newBoard);
  };

  return (
    <>
      <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            currentAttempt,
            setCurrentAttempt,
            onSelect,
            onEnter,
            onDelete,
            correctWord,
            setGameOver,
            gameOvered,
          }}
        >
          <div className="game">
            <Board />
            {gameOvered.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}
