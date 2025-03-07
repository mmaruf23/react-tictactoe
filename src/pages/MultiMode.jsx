/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Tile from "../components/Tile";
import { useOnline } from "../hooks/useOnline";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import { useNavigate } from "react-router";

export default function MultiMode() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const user = localStorage.getItem("user") || "Guest";
  const isOnline = useOnline();
  const navigate = useNavigate();

  const handleClick = (i) => {
    console.log(i);
  };
  
  useEffect(() => {
    alert("MultiMode is still development")  
    navigate({
      pathname: "/"
    });
    
  }, []);
  

  return (
    <div className="h-screen w-screen bg-black text-white flex justify-center">
      <div className="w-[425px]">
        <Navbar />
        <div className="text-white text-center text-xl font-serif mt-20 mb-10">Multi Mode</div>
        <Board squares={squares} handleClick={handleClick} />
      </div>
    </div>
  );
}
 
