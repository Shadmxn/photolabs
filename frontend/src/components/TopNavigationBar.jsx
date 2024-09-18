import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics }) => {
  const isFavPhotoExist = false;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}> {/* Inline styles for centering */}
        <TopicList topics={topics} /> {/* Pass topics to TopicList */}
      </div>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigationBar;
