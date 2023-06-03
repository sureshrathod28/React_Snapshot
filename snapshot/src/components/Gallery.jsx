import React from 'react';

const Gallery = ({ images }) => {
  
  return (
    <div className="gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          alt={image.title}
          className="gallery-item"
        />
      ))}
      
    </div>
  );
};

export default Gallery;
