// PhotoListItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

// PhotoListItem component displays individual photo details, including user info and favorite button
const PhotoListItem = ({ photo, toggleFavorite, onPhotoClick }) => {
  const { id, location, imageSource, username, profile, isFavorite } = photo;

  return (
    <div className="photo-list__item">
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <h3 className="photo-list__user-info">{username}</h3>
      </div>

      <img 
        src={imageSource} 
        alt={`From ${location.city}, ${location.country}`} 
        className="photo-list__image" 
        onClick={() => onPhotoClick(photo)} // Click handler to show enlarged photo
      />

      <p className="photo-list__user-location">{location.city}, {location.country}</p>

      <div className="photo-list__fav-container">
        <PhotoFavButton 
          isFavorite={isFavorite} // Check if the photo is marked as favorite
          toggleFavorite={() => {
            toggleFavorite(id); // Function to toggle favorite state
            console.log(`Favorite state changed for photo ID: ${id}`); // Log for testing
          }} 
        />
      </div>
    </div>
  );
};

// Prop type validation for the PhotoListItem component
PhotoListItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    imageSource: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
};

export default PhotoListItem; // Exporting the PhotoListItem component for use in other parts of the application
