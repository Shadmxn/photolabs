import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavorite, toggleFavorite }) {
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <FavIcon selected={isFavorite} displayAlert={isFavorite} /> {/* Pass isFavorite to displayAlert */}
    </div>
  );
}

export default PhotoFavButton;
