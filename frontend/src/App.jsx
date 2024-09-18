import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList'; // Import TopicList
import './App.scss';

const App = () => (
  <div className="App">
    <TopicList />  {/* Add TopicList */}
    <PhotoList />
  </div>
);

export default App;
