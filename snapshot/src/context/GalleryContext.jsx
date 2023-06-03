import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GalleryContext = createContext();

const GalleryContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8368f852752148b5f058e12c92d022dd&format=json&nojsoncallback=1&tags=${searchTerm}`
        );
        setImages(response.data.photos.photo);
        console.log(response.data.photos.photo)
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
 

  return (
    <GalleryContext.Provider value={{ images, handleSearch }}>
      {children}
    </GalleryContext.Provider>
   
  );
};

export default GalleryContextProvider;
