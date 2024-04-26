import { useState } from "react";
import Video from "./video";

const Videos = ({
  seriesData,
  selectedVideo,
  setSelectedVideo,
  videoReset,
  setVideoReset,
  setDebugError
}) => {
  const videoMap = seriesData.videos.map((video, i) => {
    return (
      <div key={i}>
        <Video
          video={video}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
          videoReset={videoReset}
          setVideoReset={setVideoReset}
          setDebugError={setDebugError}
        />
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
