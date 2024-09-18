import React from 'react';
import TopNavigationBar from './components/TopNavigationBar'; // Import TopNavigationBar
import PhotoList from './components/PhotoList'; // Import PhotoList
import './App.scss';

const App = () => (
  <div className="App">
    <TopNavigationBar /> {/* Add TopNavigationBar */}
    <PhotoList />
  </div>
);

export default App;
