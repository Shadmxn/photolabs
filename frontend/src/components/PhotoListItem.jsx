import React from 'react';
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';  // Import PhotoFavButton

const PhotoListItem = ({ photo }) => {
  const { location, imageSource, username, profile } = photo;

  return (
    <div className="photo-list__item">
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <h3 className="photo-list__user-info">{username}</h3>
      </div>

      <img src={imageSource} alt={`From ${location.city}, ${location.country}`} className="photo-list__image" />

      <p className="photo-list__user-location">{location.city}, {location.country}</p>

      {/* Add the PhotoFavButton to the right side */}
      <div className="photo-list__fav-container">
        <PhotoFavButton />
      </div>
    </div>
  );
};

PhotoListItem.propTypes = {
  photo: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    imageSource: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }).isRequired,
};

export default PhotoListItem;
