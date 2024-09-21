import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss'; 

// PhotoFavButton component handles the favorite functionality for a photo
function PhotoFavButton({ isFavorite, toggleFavorite }) {
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}> {/* Trigger toggleFavorite on click */}
      {/* Render the FavIcon with selected state and alert based on isFavorite */}
      <FavIcon selected={isFavorite} displayAlert={isFavorite} /> 
    </div>
  );
}

export default PhotoFavButton; // Exporting the PhotoFavButton component for use in other parts of the application
