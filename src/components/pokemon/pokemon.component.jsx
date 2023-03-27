<<<<<<< HEAD
import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {CCard, CCardImage, CCardBody, CCardText, CCardTitle, CButton} from '@coreui/react';


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
    <div className='card-container'>
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={pokemon.sprites.front_default} />
        <CCardBody>
          <CCardTitle>{pokemon.name}</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </div>
  )

}

export default Pokemon;
=======
import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import {CCard, CCardImage, CCardBody, CCardText, CCardTitle, CButton} from '@coreui/react';
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
           : <CCard style={{ width: '18rem' }}>
              <CCardImage orientation="top" src={details.sprites.front_default} />
              <CCardBody>
                <CCardTitle>{details.name}</CCardTitle>
                <CCardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CCardText>
                <CButton href="#">Go somewhere</CButton>
              </CCardBody>
            </CCard>
        }

    </div>
  );
}

export default PokemonDetail;

{/* <header>
  <h2>{details.name}</h2>
  {console.log(details)}
  <img src={details.sprites.front_default} />
</header> */}
>>>>>>> 51d197908ca9ea4b8703325c4d153b976b48f852
