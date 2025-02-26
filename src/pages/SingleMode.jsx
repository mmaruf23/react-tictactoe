/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";


export default function SingleMode() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [movements, setMovements] = useState(Array(6).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState(null)

  const handleClick = (i) => {
    if ((squares[i] != null) || (status != null)) return;
    const move = movements.slice(1);
    move.push(i);
    
    
    const newSquare = squares.slice();
    if(movements[0] != null) {
      newSquare[movements[0]] = null;
    }
    newSquare[i] = isXTurn ? "x" : "o";
    
    setMovements(move);
    setSquares(newSquare);
    setIsXTurn(!isXTurn);
  };
  
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) setStatus(winner);
  },[squares]);
  
  
  function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
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
    <div className="min-h-[100svh] w-screen bg-black text-white flex justify-center">
      <div className="w-[425px]">
        <Navbar />
        <div className="text-white text-center text-xl font-serif mt-20 mb-10">SingleDevice Mode</div>
        <div className="px-10">
          {status ? (
            <p className="uppercase">Winner : {status}</p>
          ):(
            <p className="uppercase">Next move : {isXTurn ? "x" : "o"}</p>
          )}
        </div>
        <Board squares={squares} handleClick={handleClick} />
      </div>
    </div>
  );
}

