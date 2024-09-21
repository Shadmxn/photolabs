import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

// TopNavigationBar component represents the navigation bar at the top of the application
const TopNavigationBar = ({ topics, isFavPhotoExist, onTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span> {/* Logo for the navigation bar */}
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <TopicList topics={topics} onTopicClick={onTopicClick} /> {/* Pass onTopicClick to handle topic selection */}
      </div>
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> {/* Display the favorite badge based on photo existence */}
    </div>
  );
};

export default TopNavigationBar; // Exporting the TopNavigationBar component for use in the main application
