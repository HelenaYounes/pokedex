import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './components/home/home.component';
import PokemonDetail from './components/pokemon/pokemon.component';

import './App.css';



function App() {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredList, setFilteredList] = useState(pokemonsList);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  // let {id} = useParams();

  useEffect(() => {
    fetchPokemons();
 },[]);

  useEffect(() => {
    const newList = pokemonsList.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredList(newList);
  },[pokemonsList, searchField]);

  const onNewSearch = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  }

  const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const json = await res.json();
    const pokemons = json.results;
    setPokemonsList(pokemons);
  }

  return (

    <Routes>
      <Route path='/' element= {<Home className='pokemons' pokemons={filteredList} onChangeHandler={onNewSearch} />} />
      <Route path='/pokemon/:id' element={<PokemonDetail />} />
    </Routes>

  );
}

export default App;
