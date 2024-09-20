import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photoData} // Updated to use photoData
        topics={state.topicData} // Updated to use topicData
        favoritePhotos={state.favoritePhotos} 
        toggleFavorite={updateToFavPhotoIds} 
        onPhotoClick={onPhotoSelect} 
      />

      {state.isModalOpen && (
        <PhotoDetailsModal 
          photo={state.selectedPhoto}  
          similarPhotos={state.selectedPhoto?.similarPhotos || []} 
          closeModal={onClosePhotoDetailsModal}  
          favoritePhotos={state.favoritePhotos} 
          toggleFavorite={updateToFavPhotoIds} 
        />
      )}
    </div>
  );
};

export default App;
