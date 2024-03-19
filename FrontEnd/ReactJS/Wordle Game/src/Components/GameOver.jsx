import React, { useContext } from "react";
import { AppContext } from "../App";

export default function GameOver() {
  const { currentAttempt, gameOvered, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOvered.guessedWord
          ? "You Correctly Guessed the Word 😁"
          : "You Failed to Guess the Word 😢"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOvered.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}
