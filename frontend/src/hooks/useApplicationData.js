import { useState } from 'react';
import photos from '../mocks/photos'; // Ensure correct path
import topics from '../mocks/topics'; // Ensure correct path

const useApplicationData = () => {
  const [state, setState] = useState({
    favoritePhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
    photos,  // Load from mocks
    topics,  // Load from mocks
  });

  const toggleFavorite = (photoId) => {
    setState((prev) => ({
      ...prev,
      favoritePhotos: prev.favoritePhotos.includes(photoId)
        ? prev.favoritePhotos.filter(id => id !== photoId)
        : [...prev.favoritePhotos, photoId],
    }));
  };

  const openModal = (photo) => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: photo,
      isModalOpen: true,
    }));
  };

  const closeModal = () => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: null,
      isModalOpen: false,
    }));
  };

  return {
    state,
    toggleFavorite,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
