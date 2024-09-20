// src/components/PhotoList.jsx
import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleFavorite, favoritePhotos, onPhotoClick }) => {
  if (!photos || photos.length === 0) return <p>No similar photos available.</p>;

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem 
            photo={{
              id: photo.id,
              location: photo.location,
              imageSource: photo.urls.regular, // Adjusted to use the correct image source
              username: photo.user.username,
              profile: photo.user.profile,
              isFavorite: favoritePhotos.includes(photo.id),
            }} 
            toggleFavorite={toggleFavorite}
            onPhotoClick={onPhotoClick} // Pass onPhotoClick for modal functionality
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
