import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar'; // Import TopNavigationBar
import PhotoList from '../components/PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss'; // Import HomeRoute styles

const HomeRoute = ({ photos, topics, favoritePhotos, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} /> {/* Pass topics to TopNavigationBar */}
      <PhotoList 
        photos={photos} 
        favoritePhotos={favoritePhotos} 
        toggleFavorite={toggleFavorite} 
      /> {/* Pass photos, favoritePhotos, and toggleFavorite to PhotoList */}
    </div>
  );
};

export default HomeRoute;
