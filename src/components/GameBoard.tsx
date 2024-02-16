import { useState } from 'react';

const initialGameBoard: (null | string)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard(): React.JSX.Element {
  const [gameBoard, setGameBoard] = useState<(null | string)[][]>(initialGameBoard);

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
  ): void {
    setGameBoard((prevGameBoard) => {
      const updatedBoard: (string | null)[][] = [
        ...prevGameBoard.map(innerArr => [...innerArr]),
      ];
      updatedBoard[rowIndex][colIndex] = 'X';

      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={colIndex}>
                <button
                  type="button"
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
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
