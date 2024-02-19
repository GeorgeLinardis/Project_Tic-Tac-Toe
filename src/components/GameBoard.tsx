import { BoardType } from '../types';

type GameBoardType = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: BoardType
};

export default function GameBoard({
  onSelectSquare,
  board,
}: GameBoardType): React.JSX.Element {
  return (
    <ol className="game-board">
      {board.map((row, rowIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={colIndex}>
                <button
                  type="button"
                  disabled={!!playerSymbol}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
