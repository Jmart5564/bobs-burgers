import './Main.css';
import useCharacters from '../../hooks/useCharacters';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function Main() {
  const [characters] = useCharacters();

  return <div>
    {characters.map(character => <CharacterCard key={character.id} {...character}/>)}
  </div>;
}