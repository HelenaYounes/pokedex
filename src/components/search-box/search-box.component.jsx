import './search-box.css';

const SearchBox = ({onChangeHandler}) => (
  <input
  className='search-box'
  type='search'
  placeholder='search pokemon'
  onChange={onChangeHandler}
  />
)

export default SearchBox;
