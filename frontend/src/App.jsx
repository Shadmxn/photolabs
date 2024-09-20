// App.jsx
import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';  
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => 
      prevFavorites.includes(photoId) 
        ? prevFavorites.filter(id => id !== photoId) 
        : [...prevFavorites, photoId]
    );
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite} 
        onPhotoClick={openModal} 
      />

      {isModalOpen && (
        <PhotoDetailsModal 
          photo={selectedPhoto}  
          similarPhotos={selectedPhoto?.similarPhotos || []}  // Safeguard
          closeModal={closeModal}  
          favoritePhotos={favoritePhotos} // Pass favoritePhotos
          toggleFavorite={toggleFavorite} // Pass toggleFavorite
        />
      )}
    </div>
  );
};

export default App;
