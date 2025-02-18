/* eslint-disable no-unused-vars */
import { useState } from "react";
import Tile from "./Tile";
import { useOnline } from "../hooks/useOnline";
import { Link } from "react-router";


export default function MultiMode() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const user = localStorage.getItem("user") || "Guest";
  const isOnline = useOnline();

  const handleClick = (i) => {
    console.log(i);
  };


  return (
    <div className="h-screen w-screen bg-black text-white flex justify-center">
      <div className="w-[425px]">
        <div className="flex justify-between">
          {isOnline ?
            <Link className="mt-4 text-green-600">Online</Link> :
            <Link onClick={() => { alert("Saat offline hanya bisa mode single device!"); }} className="mt-4 text-red-600">Offline</Link>}
          <Link to={"/user"} className="mt-4 underline" >{user}</Link>
        </div>
        <div className="text-white text-center text-xl font-serif mt-20 mb-10">Multi Mode</div>
        <div className="flex justify-center">
          <div className="h-96 w-96 text-white text-7xl uppercase font-bold grid grid-cols-3 grid-rows-3 overflow-hidden gap-2">
            {squares.map((value, index) => (
              <Tile key={index} value={value} onTileClick={() => handleClick(index)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

