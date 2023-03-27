import { useSearchParams } from "react-router-dom";
import SearchBox from '../search-box/search-box.component';
import CardList from '../card-list/card-list.component';
import { useState, useEffect } from 'react';


let searchTimeout

const Home = ({ pokemons }) => {

   const [searchParams, setSearchParams] = useSearchParams();
  const [searchField, setSearchField] = useState(searchParams.get('name') || '');
  const [filteredList, setFilteredList] = useState(pokemons);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  debugger;



  useEffect(() => {
    const newList = pokemons.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredList(newList.slice(0,10));
  },[pokemons, searchField]);

  const onNewSearch = (e) => {

    const searchString = e.target.value.toLocaleLowerCase();

    // if there was a timeout in process, cancel it
    clearTimeout(searchTimeout)

    const callback = () =>{
      setSearchField(searchString);
      setSearchParams({name: searchString})
    }

    // start timeout process
    searchTimeout = setTimeout(callback, 500)

  }

  return (
    <div className="App">
      <h1 className='app-title'> Pokedex </h1>
      <SearchBox
        className='search-box'
        placeholder='search pokemons'
        onChangeHandler={onNewSearch}
      />
      <CardList list={filteredList}/>
    </div>
  );
}

export default Home;
