// useApplicationData.js
import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL',
};

const initialState = {
  photos: [],
  topics: [],
  favoritePhotos: [],
  selectedPhoto: null,
  isModalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload.photos };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload.topics };
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.payload.photoId],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(id => id !== action.payload.photoId),
      };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo, isModalOpen: true };
    case ACTIONS.CLOSE_PHOTO_MODAL:
      return { ...state, selectedPhoto: null, isModalOpen: false };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Load the photos and topics data (from the mocks in this case)
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos } });
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics } });
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    const isFavorite = state.favoritePhotos.includes(photoId);
    if (isFavorite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  };
}
