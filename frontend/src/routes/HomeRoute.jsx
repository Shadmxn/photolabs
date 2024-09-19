import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, favoritePhotos, toggleFavorite }) => {
  return (
    <div className="home-route">
      <PhotoList 
        photos={photos} 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite} 
      />
    </div>
  );
};

export default HomeRoute;
