import { useOnline } from "./hooks/OnlineHook";

export default function Menu() {
  const isOnline = useOnline();
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <h1 className="text-6xl text-white font-serif font-bold">
        {isOnline ? "Online" : "Offline"}
      </h1>
    </div>
  )
}