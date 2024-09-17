import React from 'react';
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  
  return (
    <div className="photo-list__item">
      <img src={profile} alt={`${username}'s profile`} />
      <h3>{username}</h3>
      <img src={imageSource} alt={`From ${location.city}, ${location.country}`} />
      <p>{location.city}, {location.country}</p>
    </div>
  );
};

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
  }).isRequired,
};

export default PhotoListItem;
