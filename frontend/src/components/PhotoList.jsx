
import React from 'react';
import PhotoListItem from './PhotoListItem'; 
import '../styles/PhotoList.scss'; 

// PhotoList component displays a list of photos and their details
const PhotoList = ({ photos, toggleFavorite, favoritePhotos, onPhotoClick }) => {
  // If no photos are provided, display a message
  if (!photos || photos.length === 0) return <p>No similar photos available.</p>;

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}> {/* Unique key for each photo list item */}
          <PhotoListItem 
            photo={{
              id: photo.id,
              location: photo.location,
              imageSource: photo.urls.regular, 
              username: photo.user.username,
              profile: photo.user.profile,
              isFavorite: favoritePhotos.includes(photo.id),
              similar_photos: photo.similar_photos
            }} 
            toggleFavorite={toggleFavorite}
            onPhotoClick={onPhotoClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList; // Exporting the PhotoList component for use in other parts of the application
