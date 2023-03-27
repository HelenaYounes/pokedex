import './search-box.css';

const SearchBox = ({onChangeHandler, defaultValue}) => (
  <input
    defaultValue={defaultValue}
    className='search-box'
    type='search'
    placeholder='search pokemon'
    onChange={onChangeHandler}
  />
)

export default SearchBox;
