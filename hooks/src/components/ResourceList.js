import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
    return (
        <ul>{useResources(resource).map(record => <li key={record.id}>{record.title}</li>)}</ul>
    );
}

export default ResourceList;