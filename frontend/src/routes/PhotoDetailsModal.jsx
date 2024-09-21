import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, closeModal, favoritePhotos, toggleFavorite }) => {
  if (!photo) return null;

  const isFavorite = favoritePhotos.includes(photo.id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__image-container">
        <img src={photo.imageSource} alt="Large version" className="photo-details-modal__image" />
        <PhotoFavButton 
          isFavorite={isFavorite} 
          toggleFavorite={() => toggleFavorite(photo.id)} 
        />
      </div>

      <p>{photo.location.city}, {photo.location.country}</p>
      <p>Uploaded by: {photo.username}</p>

      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <PhotoList 
          photos={Array.isArray(photo.similar_photos) ? photo.similar_photos : []} 
          toggleFavorite={toggleFavorite} // Pass toggleFavorite
          favoritePhotos={favoritePhotos} // Pass favoritePhotos
          onPhotoClick={closeModal} // Handle click for enlarging photo
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
