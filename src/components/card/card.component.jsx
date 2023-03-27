import './card.css';

const Card = ({pokemon, id}) => (
  <div className='card-container'>
    <h2>{pokemon.name}</h2>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`} />
    </div>
)

export default Card;
