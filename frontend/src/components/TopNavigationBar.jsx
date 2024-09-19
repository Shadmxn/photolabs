import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favoriteCount }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
        <TopicList topics={topics} />
      </div>
      <FavBadge isFavPhotoExist={favoriteCount > 0} />
    </div>
  );
};

export default TopNavigationBar;
