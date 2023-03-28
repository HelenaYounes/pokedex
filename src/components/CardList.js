import Card from './Card';
import { Link } from 'react-router-dom';

const CardList= ({list}) => (
  <div className='card-list'>
    {list.map((pokemon) => {
      const id = pokemon.url.split('/').slice(-2,-1)[0];
      const img = [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`];
      return (
        <Card className="card-container" key={id} title={pokemon.name} img={img} id={id}>
          <Link to={'/pokemon/'+id}>Details</Link>
        </Card>
      );
    })}
  </div>
);

export default CardList;
