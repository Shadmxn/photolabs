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

  // Define similar photos (for example, you can just take the first 3 photos)
  const similarPhotos = photos.filter((p) => p.id !== selectedPhoto?.id).slice(0, 3);

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
          closeModal={closeModal}  
          similarPhotos={similarPhotos}  // Pass similar photos
        />
      )}
    </div>
  );
};

export default App;
