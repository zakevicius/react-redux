import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID f4a362935a740985b8d11002641604ebd1f4a71f917a6f064dbcb6b3104cefab'
    }
});