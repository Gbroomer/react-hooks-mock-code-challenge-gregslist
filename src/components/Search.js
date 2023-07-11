import React, {useState} from "react";

function Search({search}) {

  const [searchedValue, setSearchedValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    search(searchedValue)
  }
  const handleInputValue = (e) => {
    setSearchedValue(e)
    console.log(searchedValue)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedValue}
        onChange={(e) => handleInputValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
