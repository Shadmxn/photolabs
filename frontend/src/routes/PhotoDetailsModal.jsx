import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, closeModal }) => {
  if (!photo) return null; // Return nothing if no photo is passed

  // Log the photo details
  console.log(photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Display the photo information */}
      <img src={photo.imageSource} alt="Large version" className="photo-details-modal__image" />
      <p>{photo.location.city}, {photo.location.country}</p>
      <p>Uploaded by: {photo.username}</p>
    </div>
  );
};

export default PhotoDetailsModal;
