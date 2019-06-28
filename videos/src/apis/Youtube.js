import axios from 'axios';

const KEY = 'AIzaSyCbyeLxWNo0CM8cLGmudNHcNxE_ROrb56E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});