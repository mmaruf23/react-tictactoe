/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";


export default function SingleMode() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [movements, setMovements] = useState(Array(6).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (i) => {
    if ((squares[i] != null)) return;
    const move = movements.slice(1);
    move.push(i);
    
    
    const newSquare = squares.slice();
    if(movements[0] != null) {
      newSquare[movements[0]] = null;
    }
    newSquare[i] = isXTurn ? "x" : "o";
    
    setMovements(move);
    setSquares(newSquare)
    setIsXTurn(!isXTurn);
  };
  
  useEffect(() => {
    // console.log(squares);
    console.log(movements);


    
  }, [squares,movements])


  return (
    <div className="min-h-[100svh] w-screen bg-black text-white flex justify-center">
      <div className="w-[425px]">
        <Navbar />
        <div className="text-white text-center text-xl font-serif mt-20 mb-10">SingleDevice Mode</div>
        <div className="px-10">
          <p className="uppercase">Next move : {isXTurn ? "x" : "o"}</p>
        </div>
        <Board squares={squares} handleClick={handleClick} />
      </div>
    </div>
  );
}

