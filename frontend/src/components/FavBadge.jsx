import React from 'react';
import FavIcon from './FavIcon'; 
import '../styles/FavBadge.scss'; 

// FavBadge component displays a favorite badge based on the existence of favorite photos
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'> {/* Main container for the favorite badge */}
      <FavIcon displayAlert={isFavPhotoExist} /> {/* Render the FavIcon and pass the prop to control its display */}
    </div>
  ); 
};

export default FavBadge; // Exporting the FavBadge component for use in other parts of the application
