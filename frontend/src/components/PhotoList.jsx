import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos }) => (
  <ul className="photo-list">
    {photos.map(photo => (
      <li key={photo.id}>
        <PhotoListItem 
          photo={{
            location: photo.location,
            imageSource: photo.urls.regular,
            username: photo.user.username,
            profile: photo.user.profile,
          }} 
        />
      </li>
    ))}
  </ul>
);

export default PhotoList;
