import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoForm from "./VideoForm";

import "./VideoFeed.css";
const VideoFeed = () => {
  return (
    <div className="video__page">
      <VideoForm />
      <div className="video__feed">
        <VideoPlayer url="https://www.youtube.com/watch?v=Zgsp5UTrevM" />
        <VideoPlayer url="https://www.youtube.com/watch?v=90ueuLHyEAE" />
        <VideoPlayer url="https://www.youtube.com/watch?v=3NVePU6muII" />
      </div>
    </div>
  );
};

export default VideoFeed;
