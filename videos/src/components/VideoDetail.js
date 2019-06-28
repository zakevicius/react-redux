import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div className="ui loading">Loading</div>
    }
    return (
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
};

export default VideoDetail;