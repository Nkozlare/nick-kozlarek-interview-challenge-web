import { useState } from "react";
import Video from "./video";

const Videos = ({ seriesData, selectedVideo, setSelectedVideo }) => {
  const videoMap = seriesData.videos.map((video, i) => {
    return (
      <div key={i}>
        <Video video={video} />
      </div>
    );
  });
  return (
    <div className="video-section">
      <div className="video-map">{videoMap}</div>;
    </div>
  );
};

export default Videos;
