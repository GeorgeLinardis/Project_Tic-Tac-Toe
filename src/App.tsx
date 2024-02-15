import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="Ο" />
          <Player name="Player 2" symbol="Χ" />
        </ol>
      </div>
    </main>
  );
}

export default App;
