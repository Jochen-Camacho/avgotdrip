import React from "react";
import video from "../../assests/videos/vid.mp4";
import "./VideoPlayer.css";

export const VideoPlayer = () => {
  return (
    <div className="video-background">
      <video playsInline autoPlay muted loop id="bgVideo">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
