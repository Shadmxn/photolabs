import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favoritePhotos, toggleFavorite, onPhotoClick }) => {
  const isFavPhotoExist = favoritePhotos.length > 0; // Check if there are favorited photos

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList 
        photos={photos} 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite} 
        onPhotoClick={onPhotoClick}  
      />
    </div>
  );
};

export default HomeRoute;
