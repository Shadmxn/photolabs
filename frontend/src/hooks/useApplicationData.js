import { useReducer, useEffect } from 'react';

// initial state
const initialState = {
    photoData: [],
    topicData: [],
    favoritePhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
};

// action types
const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
    SELECT_PHOTO: 'SELECT_PHOTO',
    CLOSE_MODAL: 'CLOSE_MODAL',
};

// reducer function
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_PHOTO_DATA:
            return { ...state, photoData: action.payload };
        case ACTIONS.SET_TOPIC_DATA:
            return { ...state, topicData: action.payload };
        case ACTIONS.TOGGLE_FAVORITE:
            return {
                ...state,
                favoritePhotos: state.favoritePhotos.includes(action.payload)
                    ? state.favoritePhotos.filter(id => id !== action.payload)
                    : [...state.favoritePhotos, action.payload],
            };
        case ACTIONS.SELECT_PHOTO:
            return { ...state, selectedPhoto: action.payload, isModalOpen: true };
        case ACTIONS.CLOSE_MODAL:
            return { ...state, isModalOpen: false, selectedPhoto: null };
        default:
            return state;
    }
}

// Custom hook
export default function useApplicationData() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch("/api/photos")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
            });

        fetch("/api/topics")
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
            });
    }, []);

    const updateToFavPhotoIds = (photoId) => {
        dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
    };

    const onPhotoSelect = (photo) => {
        dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    };

    const onClosePhotoDetailsModal = () => {
        dispatch({ type: ACTIONS.CLOSE_MODAL });
    };

    // Function to handle topic selection
    const onTopicClick = (topicId) => {
        fetch(`/api/topics/photos/${topicId}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
            });
    };

    return { 
        state, 
        updateToFavPhotoIds, 
        onPhotoSelect, 
        onClosePhotoDetailsModal, 
        onTopicClick // Return the onTopicClick function
    };
}
