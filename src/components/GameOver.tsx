type GameOverType = {
  winner: string | undefined;
  onReset: () => void;
};

const GameOver = ({
  winner,
  onReset,
}: GameOverType): React.JSX.Element => (
  <div className="game-over">
    <h2>Game Over!</h2>
    {winner && <p>{`${winner} won!`}</p>}
    {!winner && <p>{'It\'s a draw'}</p>}
    <div>
      <button type="button" onClick={onReset}>Rematch?</button>
    </div>
  </div>
);

export default GameOver;
