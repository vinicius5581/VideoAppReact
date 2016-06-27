import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    ///////////////////////////////////////////////////////
    // Try to avoid 'for' loops as much as possible when //
    // building with ReactJS. Try to use built in        //
    // iterators instead. Like 'Map'                     //
    ///////////////////////////////////////////////////////
    const videoItems = props.videos.map((video) => {
        return (
        	<VideoListItem 
        		onVideoSelect={props.onVideoSelect}
        		key={video.etag}
        		video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
        	{videoItems}
		</ul>
    );
}

export default VideoList;
