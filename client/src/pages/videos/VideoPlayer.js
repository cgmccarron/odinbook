import React from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoPlayer.css";

const VideoPlayer = ({ url }) => {
  return (
    <div className="video__player">
      <ReactPlayer
        width="177"
        height="100"
        url={url}
        className="video__object"
      />
    </div>
  );
};

export default VideoPlayer;
