import React from 'react';
import { FaSearch } from 'react-icons/fa';
import "../App.css"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
