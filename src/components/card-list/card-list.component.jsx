import Card from '../card/card.component';
import { Link } from 'react-router-dom'
import './card-list.css';

const CardList= ({list}) => (
  <div className='card-list'>
    {
      list.map((pokemon) => {
        const id = pokemon.url.split('/').slice(-2,-1)[0];
        return (
          <Link to={'/pokemon/'+id} >
              <Card key={id} pokemon={pokemon} id={id}/>
          </Link>
        )


      })}

  </div>
);

export default CardList;
