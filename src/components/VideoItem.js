import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick= {() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt='building' src={video.snippet.thumbnails.medium.url} />
            <div className="content">
            <div className="header">{video.snippet.title}</div>
            {/* <div className="description">{video.snippet.description}</div> */}
            </div>
            
        </div>
    );

}

export default VideoItem;



