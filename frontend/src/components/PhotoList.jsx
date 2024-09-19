import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleFavorite, favoritePhotos }) => (
  <ul className="photo-list">
    {photos.map(photo => (
      <li key={photo.id}>
        <PhotoListItem 
          photo={{
            location: photo.location,
            imageSource: photo.urls.regular,
            username: photo.user.username,
            profile: photo.user.profile,
            isFavorite: favoritePhotos.includes(photo.id), // Check if this photo is a favorite
          }} 
          toggleFavorite={toggleFavorite} // Pass toggle function to PhotoListItem
        />
      </li>
    ))}
  </ul>
);

export default PhotoList;
