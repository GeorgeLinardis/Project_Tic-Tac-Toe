import { useState, useCallback } from 'react';

import { WINNING_COMBINATIONS, INITIAL_BOARD, PLAYER_SYMBOL } from './constants';
import { TurnsType } from './types';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';

function getDerivedActivePlayer(turns: TurnsType): string {
  let activePlayer = PLAYER_SYMBOL.X;
  if (Array.isArray(turns) && turns.length > 0 && turns[0].player === PLAYER_SYMBOL.X) {
    activePlayer = PLAYER_SYMBOL.O;
  }

  return activePlayer;
}

function App() {
  const [turns, setTurns] = useState<TurnsType>([]);

  const currentPlayer = getDerivedActivePlayer(turns);
  const board = [...INITIAL_BOARD.map(arr => [...arr])];
  let winner;

  turns.forEach(({ square: { row, col }, player }): void => {
    board[row][col] = player;
  });

  WINNING_COMBINATIONS.forEach((comb) => {
    const firstSquareSymbol = board[comb[0].row][comb[0].column];
    const secondSquareSymbol = board[comb[1].row][comb[1].column];
    const thirdSquareSymbol = board[comb[2].row][comb[2].column];

    if (
      firstSquareSymbol
      && firstSquareSymbol === secondSquareSymbol
      && firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  });

  const hasDraw = turns.length === 9 && !winner;

  const handleSelectSquare = useCallback((rowIndex: number, colIndex: number) => {
    setTurns((prevTurns) => {
      const currentPlayerForTurn = getDerivedActivePlayer(prevTurns);

      return [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayerForTurn,
        },
        ...prevTurns,
      ];
    });
  }, [setTurns, getDerivedActivePlayer]);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol={PLAYER_SYMBOL.X} isActive={currentPlayer === PLAYER_SYMBOL.X} />
          <Player initialName="Player 2" symbol={PLAYER_SYMBOL.O} isActive={currentPlayer === PLAYER_SYMBOL.O} />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            onReset={() => setTurns([])}
          />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={board}
        />
      </div>
      <Log
        turns={turns}
      />
    </main>
  );
}

export default App;
