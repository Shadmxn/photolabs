// PhotoDetailsModal.jsx
import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ photo, similarPhotos, closeModal, favoritePhotos, toggleFavorite }) => {
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img src={photo.imageSource} alt="Large version" className="photo-details-modal__image" />
      <p>{photo.location.city}, {photo.location.country}</p>
      <p>Uploaded by: {photo.username}</p>

      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList 
          photos={Array.isArray(similarPhotos) ? similarPhotos : []} 
          favoritePhotos={favoritePhotos} // Pass favoritePhotos
          toggleFavorite={toggleFavorite}   // Pass toggleFavorite
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;