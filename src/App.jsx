/* eslint-disable react/prop-types */
// import me from "./assets/me.png";

import { useState } from "react";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <Board />
    </div>
  );
}


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const values = squares.slice();
    values[i] = xIsNext ? "x" : "o";
    setSquares(values);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  return (
    <div>
      <div className="text-white text-4xl font-serif mb-10">{status}</div>
      <div className="border border-red-600 rounded-3xl h-96 w-96 text-white text-7xl uppercase font-bold grid grid-cols-3 grid-rows-3 overflow-hidden">
        <Tile value={squares[0]} onTileClick={() => handleClick(0)} />
        <Tile value={squares[1]} onTileClick={() => handleClick(1)} tileClass="border-x" />
        <Tile value={squares[2]} onTileClick={() => handleClick(2)} />
        <Tile value={squares[3]} onTileClick={() => handleClick(3)} tileClass="border-y" />
        <Tile value={squares[4]} onTileClick={() => handleClick(4)} tileClass="border" />
        <Tile value={squares[5]} onTileClick={() => handleClick(5)} tileClass="border-y" />
        <Tile value={squares[6]} onTileClick={() => handleClick(6)} />
        <Tile value={squares[7]} onTileClick={() => handleClick(7)} tileClass="border-x" />
        <Tile value={squares[8]} onTileClick={() => handleClick(8)} />
      </div>
      {winner && (
        <div className="flex justify-center mt-10">
          <button onClick={() => setSquares(Array(9).fill(null))} className="text-white bg-red-600 py-1 px-5 rounded-lg">rematch!</button>
        </div>
      )}
    </div>
  );
}

function Tile({ value, tileClass = "", onTileClick }) {

  return (
    <div onClick={onTileClick} className={`flex justify-center items-center ${tileClass}`}>{value}</div>
  );
};

