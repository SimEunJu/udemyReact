import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <ul className="col-md-4 list-group">
      {videos.map(video => <VideoListItem
        {video}
        key={video.etag}
        onVideoSelect={onVideoSelect}/>
      )}
    </ul>
  );
}

export default VideoList;
