import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-container">
      <video
        src={src}
        width="1100"
        muted
        loop
        autoPlay
        className="video-player"
      />
    </div>
  );
};

export default VideoPlayer;
