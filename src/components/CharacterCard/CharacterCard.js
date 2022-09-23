import './CharacterCard.css';

export default function CharacterCard({ name, image }) {
  return (
    <div className='characters'>
      <span>{name}</span>
      <img src={image}/>
    </div>
  );
}