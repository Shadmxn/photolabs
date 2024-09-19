import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute'; // Ensure correct path
import photos from './mocks/photos'; // Import the mock photos
import topics from './mocks/topics'; // Import the mock topics
import './App.scss'; // Import App styles

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
