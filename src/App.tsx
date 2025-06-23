import { useState } from "react";
import { Board } from "./Box";

const App = () => {
  const [values, setValues] = useState(Array(9).fill(undefined));
  const [nextMoveX, setNextMoveX] = useState(true);
  const [winner, setWinner] = useState("");

  const winningCombinaion = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index: number) => {
    if (values[index] !== undefined || winner) {
      return;
    }

    const updatedValues = [...values];
    updatedValues[index] = nextMoveX ? "X" : "O";

    setValues(updatedValues);
    setNextMoveX(!nextMoveX);
    checkWinner(updatedValues);
  };

  const checkWinner = (board: any[]) => {
    for (let i = 0; i < winningCombinaion.length; i++) {
      const [a, b, c] = winningCombinaion[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  return (
    <Board value={values} handleClick={handleClick} winner={winner} />
  );
};

export default App;
