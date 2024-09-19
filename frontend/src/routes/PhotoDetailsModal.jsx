import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';  // Import PhotoList

const PhotoDetailsModal = ({ photo, closeModal, similarPhotos }) => {
  if (!photo) return null; // Return nothing if no photo is passed

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img src={photo.imageSource} alt="Large version" className="photo-details-modal__image" />
      <h2 className="photo-details-modal__header">Similar Photos</h2>
      
      {/* Render similar photos */}
      <PhotoList photos={similarPhotos} />
    </div>
  );
};

export default PhotoDetailsModal;
