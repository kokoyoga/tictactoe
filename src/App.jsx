import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  function handleClick(i) {
    if (square[i] || chooseWinner()) return;
    const nextSquare = square.slice();
    nextSquare[i] = xIsNext ? "X" : "O";
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  function chooseWinner() {
    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  const boxes = square.map((value, index) => (
    <Box key={index} value={value} onSquareClick={() => handleClick(index)} />
  ));

  const winner = chooseWinner();
  let status = "";
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  function restartGame() {
    setSquare(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col h-screen w-screen place-items-center justify-center">
      <div className="p-5">{status}</div>
      <div className="flex flex-col flex-wrap w-69 h-69 gap-4">{boxes}</div>
      <button
        onClick={restartGame}
        className="mt-4 p-2 text-black border-2 rounded-2xl"
      >
        Restart Game
      </button>
    </div>
  );
}

export default App;
