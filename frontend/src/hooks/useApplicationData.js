import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritePhotos: [...state.favoritePhotos, action.photoId]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritePhotos: state.favoritePhotos.filter(id => id !== action.photoId)
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: action.isModalOpen
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Custom Hook
function useApplicationData() {
  const initialState = {
    photos: [],
    topics: [],
    favoritePhotos: [],
    selectedPhoto: null,
    isModalOpen: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritePhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, isModalOpen: true });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, isModalOpen: false });
  };

  const onLoadTopic = (photos, topics) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    onLoadTopic
  };
}

export default useApplicationData;
