import Card from '../card/card.component';
import { Link } from 'react-router-dom'
import './card-list.css';

const CardList= ({list}) => (
  <div className='card-list'>
    {
<<<<<<< HEAD
      list.map((pokemon) => {
        const id = pokemon.url.split('/').slice(-2,-1)[0];
        return (
          <Link to={'/pokemon/'+id} >
              <Card key={id} pokemon={pokemon} id={id}/>
          </Link>
        )

=======
      list.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} id={index +1}/>
>>>>>>> 51d197908ca9ea4b8703325c4d153b976b48f852
      })}

  </div>
);

export default CardList;
