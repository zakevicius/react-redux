import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'My first song', duration: '4:08' },
        { title: 'My second song', duration: '3:47' },
        { title: 'My third song', duration: '2:14' },
        { title: 'Fourth song', duration: '3:17' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } else {
        return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});