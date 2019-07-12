import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (res) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${res}`);
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return resources;
};

export default useResources;