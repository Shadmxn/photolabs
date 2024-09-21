import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favoritePhotos, toggleFavorite, onPhotoClick, onTopicClick }) => {
  const isFavPhotoExist = favoritePhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={isFavPhotoExist} onTopicClick={onTopicClick} />
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
