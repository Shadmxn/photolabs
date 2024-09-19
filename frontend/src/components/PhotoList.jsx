import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleFavorite, favoritePhotos, onPhotoClick }) => (
  <ul className="photo-list">
    {photos.map(photo => (
      <li key={photo.id}>
        <PhotoListItem 
          photo={{
            id: photo.id,
            location: photo.location,
            imageSource: photo.urls.regular,
            username: photo.user.username,
            profile: photo.user.profile,
            isFavorite: favoritePhotos.includes(photo.id),
          }} 
          toggleFavorite={toggleFavorite}
          onPhotoClick={onPhotoClick}  // Pass this prop
        />
      </li>
    ))}
  </ul>
);

export default PhotoList;
