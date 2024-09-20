import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';  
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const { state, toggleFavorite } = useApplicationData();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

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
        photos={state.photoData} 
        topics={state.topicData} 
        favoritePhotos={state.favoritePhotos} 
        toggleFavorite={toggleFavorite} 
        onPhotoClick={openModal} 
      />

      {isModalOpen && (
        <PhotoDetailsModal 
          photo={selectedPhoto}  
          similarPhotos={selectedPhoto?.similarPhotos || []} 
          closeModal={closeModal}  
          favoritePhotos={state.favoritePhotos} 
          toggleFavorite={toggleFavorite} 
        />
      )}
    </div>
  );
};

export default App;