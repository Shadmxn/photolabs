import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Create an array of sample data for photos
const photoDataArray = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "New York",
      country: "USA",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Jane Doe",
    profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Paris",
      country: "France",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "Alice Smith",
    profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  }
];

const App = () => (
  <div className="App">
    {photoDataArray.map(photo => (
      <PhotoListItem 
        key={photo.id} 
        id={photo.id} 
        location={photo.location} 
        imageSource={photo.imageSource} 
        username={photo.username} 
        profile={photo.profile}
      />
    ))}
  </div>
);

export default App;
