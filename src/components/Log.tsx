import { TurnsType, TurnType } from '../types';

type LogType = {
  turns: TurnsType
};

export default function Log({ turns }: LogType): React.JSX.Element {
  return (
    <ol id="log">
      {turns.map((turn: TurnType) => (
        <li
          key={`${turn.square.row}-${turn.square.col}`}
        >
          {`Player ${turn.player} selected row:${turn.square.row} | col:${turn.square.col}`}
        </li>
      ))}
    </ol>
  );
}
