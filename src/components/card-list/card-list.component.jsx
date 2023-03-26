import Card from '../card/card.component';
import './card-list.css';

const CardList= ({list}) => (
  <div className='card-list'>
    {
      list.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} id={index +1}/>
      })}

  </div>
);

export default CardList;
