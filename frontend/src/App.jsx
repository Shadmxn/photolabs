import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'; // Import the custom hook
import './App.scss';

const App = () => {
  const {
    state,
    toggleFavorite,
    openModal,
    closeModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos} 
        topics={state.topics} 
        favoritePhotos={state.favoritePhotos} 
        toggleFavorite={toggleFavorite} 
        onPhotoClick={openModal} 
      />

      {state.isModalOpen && (
        <PhotoDetailsModal 
          photo={state.selectedPhoto}  
          similarPhotos={state.selectedPhoto?.similarPhotos || []} // Safeguard
          closeModal={closeModal}  
          favoritePhotos={state.favoritePhotos} // Pass favoritePhotos
          toggleFavorite={toggleFavorite} // Pass toggleFavorite
        />
      )}
    </div>
  );
};

export default App;
