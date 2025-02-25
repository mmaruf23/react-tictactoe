import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../hooks/useUser";

export default function User() {
  const localUser = useUser();
  const inputRef = useRef();
  const [user, setUser] = useState(localUser);
  const navigate = useNavigate();

  function handleClick() {
    if (!inputRef.current.value) return;
    setUser(inputRef.current.value);
    localStorage.setItem("user", inputRef.current.value)
    navigate({
      pathname: "/"
    })
  }

  return (
    <div className="h-screen w-screen bg-black text-white flex justify-center items-center">
      <div className="text-center font-serif font-bold">
        <h1>Hai , {user}</h1>
        <p>Silahkan masukan username</p>
        <input ref={inputRef} className="text-black p-2 rounded font-mono mt-5" type="text" maxLength={10} placeholder="username" />
        <button onClick={handleClick} className="bg-red-500 p-2 ml-4 rounded">SUBMIT</button>
      </div>
    </div>
  );
};
