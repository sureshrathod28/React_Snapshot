import React from 'react';

const SearchBar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchTerm" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
