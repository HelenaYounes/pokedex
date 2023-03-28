import { useSearchParams } from "react-router-dom";
import SearchBox from './SearchBox';
import CardList from './CardList';
import { useState, useEffect } from 'react';

let searchTimeout;

const Home = ({ pokemons }) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchField, setSearchField] = useState(searchParams.get('name') || '');
  const [filteredList, setFilteredList] = useState(pokemons);

  useEffect(() => {
    const newList = pokemons.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredList(newList.slice(0,10));
  },[pokemons, searchField]);

  const onNewSearch = (e) => {

    const searchString = e.target.value.toLocaleLowerCase();

    // if there was a timeout in process, cancel it
    clearTimeout(searchTimeout);

    const callback = () =>{
      setSearchField(searchString);
      setSearchParams({name: searchString});
    };

    // start timeout process
    searchTimeout = setTimeout(callback, 500);
  }

  return (
    <div className="App">
      <h1 className='app-title'> Pokedex </h1>
      <SearchBox
        className='search-box'
        placeholder='search pokemons'
        onChangeHandler={onNewSearch}
        defaultValue={searchParams.get('name')}
      />
      <CardList list={filteredList}/>
    </div>
  );
}

export default Home;
