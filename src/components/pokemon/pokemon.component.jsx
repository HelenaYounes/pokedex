import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Pokemon = () => {
  const {id} = useParams();
  const url =  `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, setPokemon] = useState({
    name:'',
    sprites: {}
  });


  useEffect(()=>{
    fetchPokemon();
  },[]);

  const fetchPokemon = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setPokemon(json);
  }

  return (
    <img src={pokemon.sprites.front_default}/>);
}

export default Pokemon;
