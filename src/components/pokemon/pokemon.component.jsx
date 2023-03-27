import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import Card from '../card/card.component';

const Pokemon = () => {
  const {id} = useParams();
  const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;
  const img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
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
    <Card title={pokemon.name} img={img} id={id}>
      <Link to="/">Go back</Link>
    </Card>
  );
}

export default Pokemon;
