import { useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import Card from '../card/card.component';
import { CButton } from '@coreui/react'


const Pokemon = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const url =  `https://pokeapi.co/api/v2/pokemon/${id}`;
  const img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
  const [pokemon, setPokemon] = useState({
    name:'',
    sprites: {}
  });

  let imageSrcIndex = 0;

    useEffect(()=>{
      fetchPokemon();
    },[]);

  const fetchPokemon = async () => {
    const res = await fetch(url);
    const json = await res.json();
    setPokemon(json);

    const imageKeys = Object.keys(json.sprites).slice(0,-2)
    const imageUrls = imageKeys
      .map( key => json.sprites[key])
      .filter( value => !!value);
  };

  const imageKeys = pokemon.sprites
    ? Object.keys(pokemon.sprites).slice(0,-2)
    : [];

  const imageUrls = imageKeys
    .map( key => pokemon.sprites[key])
    .filter( value => !!value);

  const changeImageOnClick = (delta) => {
    imageSrcIndex += delta;
      if (imageSrcIndex === -1){
        imageSrcIndex = imageUrls.length -1;
      } else if (imageSrcIndex === imageUrls.length){
        imageSrcIndex = 0;
      }
      console.log(imageUrls)
    document.getElementById('pokemonImage').src= imageUrls[imageSrcIndex];
  };

  return (
    <Card key={id} title={pokemon.name} img={img} id={id}>
      <CButton onClick={() => {changeImageOnClick(-1)}} color="dark" variant="outline">Previous</CButton>
      <CButton onClick={() => {changeImageOnClick(+1)} }color="dark" variant="outline">Next</CButton>
      <CButton onClick={() => navigate(-1)}>Previous page</CButton>
    </Card>
  );
}

export default Pokemon;
