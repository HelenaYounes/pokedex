import Home from './components/home/home.component';
import Pokemon from './components/pokemon/pokemon.component';
import { Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    fetchPokemons();
 },[]);

  const fetchPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1300');
    const json = await res.json();
    const pokemons = json.results;
    setPokemonsList(pokemons);
  };

  return (
    <div>
      <Routes>
        <Route path='/'
          element={<Navigate to='/pokemons'/>}
        />
        <Route
          path='/pokemons'
          element={<Home className='pokemons' pokemons={pokemonsList} />}
        />
        <Route
          path='/pokemon/:id'
          element={<Pokemon />}
        />
      </Routes>
    </div>
  );
}

export default App;
