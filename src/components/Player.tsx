import { useState } from 'react';
import PropTypes from 'prop-types';

type PlayerProps = {
  name: string;
  symbol: string;
};

const Player = ({ name, symbol }: PlayerProps): React.JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleEditClick(): void {
    setIsEditing(wasEditing => !wasEditing);
  }

  return (
    <li>
      <span className="player">
        {isEditing && (<input type="text" value={name} required />)}
        {!isEditing && (
          <span className="player-name">{name}</span>
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
  name: PropTypes.string,
  symbol: PropTypes.string,
};

Player.defaultProps = {
  name: '',
  symbol: '',
};

export default Player;
