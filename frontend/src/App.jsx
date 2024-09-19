import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  // Function to toggle favorite status
  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => 
      prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId)  // Remove from favorites
        : [...prevFavorites, photoId]  // Add to favorites
    );
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite} 
      />
    </div>
  );
};

export default App;
