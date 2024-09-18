import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar'; // Import TopNavigationBar
import PhotoList from '../components/PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss'; // Import HomeRoute styles

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} /> {/* Pass topics to TopNavigationBar */}
      <PhotoList photos={photos} /> {/* Pass photos to PhotoList */}
    </div>
  );
};

export default HomeRoute;
