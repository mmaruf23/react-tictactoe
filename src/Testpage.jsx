
// const socket = new WebSocket("ws://localhost:8080/game");
// if (socket.onopen) {
//   console.log("ws terhubung!");

import useOnline from "./hooks/useOnline";

// }
export default function Testpage() {
  
  const isOnline = useOnline();

  return (
    <div>
      <h1 className="text-white text-5xl">{isOnline ? "Online" : "Offline"}</h1>
      {/* <h1 className="text-white text-5xl">{isOnline  ? "Online" : "Offline"}</h1> */}
    </div>

  );
};
