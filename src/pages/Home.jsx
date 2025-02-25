import { Link } from "react-router";
import { useOnline } from "../hooks/useOnline";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Joystick } from "lucide-react";

export default function Home() {
  const [socket, setSocket] = useState(null);
  const isOnline = useOnline();

  useEffect(() => {
    if (!isOnline) {
      if (socket) {
        socket.close();
        setSocket(null);
      }
      return;
    }
  }, [isOnline, socket]);

  return (
    <div className="h-screen w-screen bg-black flex justify-center">
      <div className="w-[425px] flex flex-col">
        <Navbar />
        <div className="min-h-[500px] flex justify-center pt-5 flex-1 mt-20">
          <div className="flex flex-col items-center gap-3">
            <Link to={"/single"}>
              <div className="bg-white hover:bg-gray-300 rounded-lg w-64 h-10 flex justify-center items-center">
                <span className="text-xl font-mono">Play single</span>
              </div>
            </Link>
            <Link to={"/multi"}>
              <div className={`rounded-lg w-64 h-10 flex justify-center items-center ${isOnline ? "bg-white hover:bg-gray-300" : "bg-gray-500"}`}>
                <span className="text-xl font-mono">Create room</span>
              </div>
            </Link>
            <div className="flex-1 mt-10 flex flex-col gap-2">
              <h3 className={`${isOnline ? "text-green-500" : "text-red-500"} font-serif mb-2`}>Availabel room :</h3>
              <Link to={"/"}>
                <div className="border border-blue-500 rounded-lg w-64 h-10 flex justify-between px-4 items-center">
                  <span className="text-blue-500 font-mono text-xl">OtherUser&apos;s room</span>
                  <span className="text-blue-500">
                    {<Joystick />}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
