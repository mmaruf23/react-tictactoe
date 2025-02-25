import { Link } from "react-router";
import { useOnline } from "../hooks/useOnline";
import useUser from "../hooks/useUser";

export default function Navbar() {
  const isOnline = useOnline();
  const user = useUser();
  return (
    <div className="flex justify-between px-4">
      {isOnline ?
        <Link className="mt-4 text-green-600">Online</Link> :
        <Link onClick={() => { alert("Saat offline hanya bisa mode single device!"); }} className="mt-4 text-red-600">Offline</Link>}
      <Link to={"/user"} className="mt-4 underline text-white font-serif" >{user}</Link>
    </div>
  )
};
