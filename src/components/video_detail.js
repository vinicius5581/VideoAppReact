import React from 'react';

const VideoDetail = ({ video }) => {
    // Add a Check to wait for the API callback to return
    if (!video) {
        return <div>Loading Deh Vidz [evil laugh]...</div>;
    }

    // ES6 String Interpolation :)
    const videoID = video.id.videoId,
    	  videoURL = `https://youtube.com/embed/${videoID}`;

    return (
        <div className="video-detail col-md-8">
            <h5>Your Selected Video</h5>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoURL} ></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
    );
};

export default VideoDetail;
