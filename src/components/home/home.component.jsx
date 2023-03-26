
import SearchBox from '../search-box/search-box.component';
import CardList from '../card-list/card-list.component';

const Home = ({ pokemons,onChangeHandler }) => {
  return (
    <div className="App">
      <h1 className='app-title'> Pokedex </h1>
      <SearchBox
        className='search-box'
        placeholder='search pokemons'
        onChangeHandler={onChangeHandler}
      />
      <CardList list={pokemons}/>
    </div>
  );
}

export default Home;
