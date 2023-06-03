import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GalleryContext } from '../context/GalleryContext';
import Gallery from '../components/Gallery';


const CategoryPage = () => {
  const { category } = useParams();
  const { images } = useContext(GalleryContext);

  return (
    <div>
      <h1>{category}</h1>
      <Gallery images={images} />
     
    </div>
  );
};

export default CategoryPage;
