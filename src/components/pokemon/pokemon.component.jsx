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
