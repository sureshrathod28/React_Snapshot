import React, { useState } from 'react'
import { useContext } from 'react'
import { GalleryContext } from '../context/GalleryContext'
import { FaSearch } from 'react-icons/fa';
import "../App.css"
const MainPage=()=>{
    const {images,handleSearch}=useContext(GalleryContext)
    const [tag,setTag]=useState('')
    const handleChange=(event)=>{
          setTag(event.target.value)
    }
    const handleButton=(event)=>{
        var value= event.target.textContent
        handleSearch(value)
    }
   
    const handleSubmit=()=>{
        
        handleSearch(tag)
    }
   
    return(
        <>
        <div className='container'>
            <div>
                <h1>SnapShot</h1>
            </div>
          
          <div>
          <input type="text" className="search-input" placeholder="Search..." onChange={handleChange}/>
           <button className="search-button" onClick={handleSubmit}>
              <FaSearch />
          </button>
          </div>
          <div className='buttons'>
            <button onClick={handleButton}>Mountain</button>
            <button onClick={handleButton}>Beaches</button>
            <button onClick={handleButton}>Birds</button>
            <button onClick={handleButton}>Food</button>
          </div>
          <div>
          {tag ? (
            <h1>{tag} images</h1>
            ) : (
             <p></p>
              )}
          </div>
          <div className="gallery">
      {images.map((image) => (
        <div  key={image.id} className="image-container">
        <img
          key={image.id}
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          alt={image.title}
          className="gallery-item"
        />
        </div>
      ))}
      
    </div>
        </div>
        

        </>
    )
}
export default MainPage