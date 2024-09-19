import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';  // Import the modal
import photos from './mocks/photos';
import topics from './mocks/topics';
import './App.scss';

const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);  // Track the selected photo
  const [isModalOpen, setIsModalOpen] = useState(false);     // Track if the modal is open

  // Function to toggle favorite status
  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) => 
      prevFavorites.includes(photoId) 
        ? prevFavorites.filter(id => id !== photoId) 
        : [...prevFavorites, photoId]
    );
  };

  // Function to open the modal with the selected photo
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  // Function to close the modal
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
        onPhotoClick={openModal}  // Pass openModal function to HomeRoute
      />

      {/* Render the modal */}
      {isModalOpen && (
        <PhotoDetailsModal 
          photo={selectedPhoto}  // Pass the selected photo to the modal
          closeModal={closeModal}  // Pass the function to close the modal
        />
      )}
    </div>
  );
};

export default App;
