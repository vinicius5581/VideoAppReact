import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video;

    console.log(video);

    const vidImgURL = video.snippet.thumbnails.default.url,
    	  vidTitleTXT = video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
    		<div className="video-list medium">
    			<div className="media-left">
    				<img className="media-object" src={vidImgURL} />
    			</div>
    			<div className="media-body">
    				<div className="media-heading">{vidTitleTXT}</div>
    			</div>
    		</div>
    	</li>
    );
};

export default VideoListItem;
