/* eslint-disable react/prop-types */
export default function Tile({ value, onTileClick }) {

  return (
    <div onClick={onTileClick} className={`flex justify-center items-center border-2 rounded-2xl`}>{value}</div>
  );
};