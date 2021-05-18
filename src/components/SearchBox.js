import { useState } from 'react';

const SearchBox = ({ handleCLick }) => {
  const [search, setSearch] = useState('');
  return <>
    <input value={search} onChange={(e) => setSearch(e.target.value)} ></input>
    <button onClick={() => handleCLick(search)} > Search Ubication</button>
  </>
}
export default SearchBox;