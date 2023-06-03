import React, { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';
import { useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  const { images, handleSearch } = useContext(GalleryContext);
 const navigate =useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchTerm.value;
    handleSearch(searchTerm);
    navigate('/search')
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <Gallery images={images} />
    </div>
  );
};

export default SearchPage;
