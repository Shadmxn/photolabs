import React from 'react';
import HomeRoute from './routes/HomeRoute'; // Ensure correct path
import photos from './mocks/photos'; // Import the mock photos
import topics from './mocks/topics'; // Import the mock topics
import './App.scss'; // Import App styles

const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics} /> {/* Pass the mock data as props */}
  </div>
);

export default App;
