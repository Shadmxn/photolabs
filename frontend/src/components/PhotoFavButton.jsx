import React, { useState } from 'react';
import FavIcon from './FavIcon';  // Import FavIcon
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  // State to track whether the photo is favorited
  const [isFavorited, setIsFavorited] = useState(false);

  // Function to toggle the favorite state
  const toggleFavorite = () => {
    setIsFavorited(prev => !prev);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      {/* Pass the isFavorited state as 'selected' to FavIcon */}
      <FavIcon selected={isFavorited} displayAlert={false} />
    </div>
  );
}

export default PhotoFavButton;
