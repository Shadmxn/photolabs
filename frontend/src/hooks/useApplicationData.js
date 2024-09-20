import { useReducer, useEffect } from 'react';

// Define your initial state
const initialState = {
    photoData: [],
    topicData: [],
    favoritePhotos: [],
    selectedPhoto: null,
    isModalOpen: false,
    // ... other state variables as needed
};

// Define your action types
const ACTIONS = {
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
    SELECT_PHOTO: 'SELECT_PHOTO',
    CLOSE_MODAL: 'CLOSE_MODAL',
    // ... other actions as needed
};

// Your reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'SET_PHOTO_DATA':
            return { ...state, photoData: action.payload };
        case 'SET_TOPIC_DATA':
            return { ...state, topicData: action.payload };
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                favoritePhotos: state.favoritePhotos.includes(action.payload)
                    ? state.favoritePhotos.filter(id => id !== action.payload)
                    : [...state.favoritePhotos, action.payload],
            };
        case 'SELECT_PHOTO':
            return { ...state, selectedPhoto: action.payload, isModalOpen: true };
        case 'CLOSE_MODAL':
            return { ...state, isModalOpen: false, selectedPhoto: null };
        // ... other cases as needed
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

        fetch("/api/topics") // Fetch topic data similarly
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

    return { state, updateToFavPhotoIds, onPhotoSelect, onClosePhotoDetailsModal };
}
