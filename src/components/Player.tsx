import { useState } from 'react';
import PropTypes from 'prop-types';

type PlayerProps = {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onPlayerNameChange: (symbol: string, playerName: string) => void;
};

const Player = ({
  initialName, symbol, isActive, onPlayerNameChange,
} : PlayerProps): React.JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string>(initialName);

  function handleEditClick(): void {
    setIsEditing(wasEditing => !wasEditing);
    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing && (
          <input
            type="text"
            onChange={handleChange}
            value={playerName}
            required
          />
        )}
        {!isEditing && (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        type="button"
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

Player.propTypes = {
  initialName: PropTypes.string,
  symbol: PropTypes.string,
};

Player.defaultProps = {
  initialName: '',
  symbol: '',
};

export default Player;
