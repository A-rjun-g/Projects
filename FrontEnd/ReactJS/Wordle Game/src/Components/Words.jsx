import wordBank from "../WordBank.txt";

/*The content of the Board during the starting of the game */

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordCollection;
  let keyWord;
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      keyWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordCollection = new Set(wordArr);
    });
  return { wordCollection, keyWord };
};
