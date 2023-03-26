import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import './pokemon.css';

const PokemonDetail = () => {

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=> {
    fetchPokemon()
  },[]);

// useLayoutEffect(() => {
//   fetchPokemon();
// }, []);

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await res.json();
    setDetails(json);
    setIsLoading(false);
  }
  return (
    <div className='card-container'>
      {isLoading
           ? <p>Loading</p>
           : <header>
             <h2>{details.name}</h2>
             {console.log(details)}
             <img src={details.sprites.front_default} />
           </header>
         }

    </div>
  );
}

export default PokemonDetail;
