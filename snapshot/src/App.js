import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryContextProvider from './context/GalleryContext';
// import Navbar from './components/Navbar';
// import CategoryPage from './pages/CategoryPage';
// import SearchPage from './pages/SearchPage';
// import Gallery from './components/Gallery';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <GalleryContextProvider>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route  path="/" component={Gallery} />
          <Route path="/search" component={SearchPage} />
          <Route path="/:category" component={CategoryPage} /> */}
          <Route path='/' Component={MainPage}/>
        </Routes>
      </GalleryContextProvider>
    </Router>
  );
}

export default App;
