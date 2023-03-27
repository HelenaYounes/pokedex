import { useParams} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import Card from '../card/card.component';
import { CCardImage, CCarousel, CCarouselItem } from '@coreui/react';

const Pokemon = () => {
  const navigate = useNavigate();
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

    const imageKeys = Object.keys(json.sprites).slice(0,-2)
    const imageUrls = imageKeys
      .map( key => json.sprites[key])
      .filter( value => !!value)
  };

  const imageKeys = pokemon.sprites
    ? Object.keys(pokemon.sprites).slice(0,-2)
    : [];

  const imageUrls = imageKeys
    .map( key => pokemon.sprites[key])
    .filter( value => !!value);

  return (
    <Card title={pokemon.name} img={img} id={id}>
      <CCarousel controls dark>
        {imageUrls.map((url)=>{
          return(
            <CCarouselItem>
              <CCardImage className="d-block w-100" src={url} alt="slide 1" />
            </CCarouselItem>
          )})
        }
      </CCarousel>
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </Card>
  );
}

export default Pokemon;
