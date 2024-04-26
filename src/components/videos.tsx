import { useState } from "react";
import Video from "./video";

const Videos = ({
  seriesData,
  selectedVideo,
  setSelectedVideo,
  videoReset,
  setVideoReset,
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
