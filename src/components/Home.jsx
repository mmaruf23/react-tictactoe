import { Link } from "react-router";
import { useOnline } from "../hooks/useOnline";
import Enter from "./EnterIcon";
import useUser from "../hooks/useUser";

export default function Home() {

  const isOnline = useOnline();
  const user = useUser();


  return (
    <div className="h-screen w-screen bg-black flex justify-center">
      <div className="w-[425px]">
        <div className="flex justify-between">
          {isOnline ?
            <Link className="mt-4 text-green-600">Online</Link> :
            <Link onClick={() => { alert("Saat offline hanya bisa mode single device!"); }} className="mt-4 text-red-600">Offline</Link>}
          <Link to={"/user"} className="mt-4 underline text-white font-serif" >{user}</Link>
        </div>
        <div className="min-h-[500px] flex justify-center pt-5">
          <div className="flex flex-col items-center gap-3">
            <Link to={"/single"}>
              <div className="bg-white rounded-lg w-64 h-10 flex justify-center items-center">
                <span className="text-xl font-mono">Play single</span>
              </div>
            </Link>
            <Link to={"/multi"}>
              <div className={`rounded-lg w-64 h-10 flex justify-center items-center ${isOnline ? "bg-white" : "bg-gray-500"}`}>
                <span className="text-xl font-mono">Create room</span>
              </div>
            </Link>
            <div className="flex-1 mt-10 flex flex-col gap-2">
              <h3 className={`${isOnline ? "text-green-500" : "text-red-500"} font-serif mb-2`}>Availabel room :</h3>
              <Link to={"/"}>
                <div className="border border-blue-500 rounded-lg w-64 h-10 flex justify-between px-4 items-center">
                  <span className="text-blue-500 font-mono text-xl">OtherUser&apos;s room</span>
                  <span className="text-blue-500">
                    {<Enter />}
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
