/* eslint-disable react/prop-types */
import './Character.css'

function Character(props) {
  const { character } = props;
  return (
    <div key={character.id} className="characterCard">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;
