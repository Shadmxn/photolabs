import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar'; // Import TopNavigationBar
import PhotoList from '../components/PhotoList'; // Import PhotoList
import '../styles/HomeRoute.scss'; // Import HomeRoute styles

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar /> {/* Add TopNavigationBar */}
      <PhotoList /> {/* Add PhotoList */}
    </div>
  );
};

export default HomeRoute;
