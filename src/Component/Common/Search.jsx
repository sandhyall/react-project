import React, { useState } from 'react';

const Search = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleChange = (e) => {
    setSearchItem(e.target.value);
     

  };

    const handleSearch = (e) => {
    e.preventDefault();

    if (!searchItem.trim()) return; 

    console.log('Searching for:', searchItem);

    setSearchItem(''); 
  };

 

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchItem}
          onChange={handleChange}
          className="bg-gray-400 px-7 py-2 rounded-lg w-full placeholder:text-gray-700"
        />
      </form>
    </div>
  );
};

export default Search;
