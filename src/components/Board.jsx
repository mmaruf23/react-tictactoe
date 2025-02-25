import Tile from "./Tile";
import PropTypes from "prop-types";

export default function Board({ squares, handleClick }) {
  return (
    <div className="flex justify-center">
      <div className="h-96 w-96 p-4 text-white text-7xl uppercase font-bold grid grid-cols-3 grid-rows-3 overflow-hidden gap-2">
        {squares.map((value, index) => (
          <Tile key={index} value={value} onTileClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
// anjai malas pake propTypes