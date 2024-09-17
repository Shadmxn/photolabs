import React from 'react';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list__item" key={id}>
      <img src={profile} alt={`${username}'s profile`} />
      <h3>{username}</h3>
      <img src={imageSource} alt={`From ${location.city}, ${location.country}`} />
      <p>{location.city}, {location.country}</p>
    </div>
  );
};

export default PhotoListItem;