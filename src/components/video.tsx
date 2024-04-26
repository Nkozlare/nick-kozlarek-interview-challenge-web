import arrowRight from "../../public/icons/chevron-right-circle-svgrepo-com.svg";
import { useState } from "react";
const Video = ({
  video,
  selectedVideo,
  setSelectedVideo,
  videoReset,
  setVideoReset,
  setDebugError,
}: any) => {
  const [queryParams] = useState(new URLSearchParams(window.location.search));
  const isDebugMode = queryParams.has("debug");
  // this takes in an amount of seconds and sends out a string that will either be minutes, or hours and minutes depending on how many seconds
  function formatDuration(seconds: number) {
    if (seconds === 0) return "0 minutes";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""}` : "";
    const minutesString =
      minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : "";

    return hoursString.length > 0 && minutesString.length > 0
      ? `${hoursString}, ${minutesString}`
      : hoursString || minutesString;
  }

  const select = () => {
    if (selectedVideo?.youtubeId === video.youtubeId) {
      return;
    }
    // for the debug mode, randomly 50% chance that it will not load
    if (isDebugMode && Math.random() < 0.5) {
      setDebugError(true);
      return;
    }
    setSelectedVideo(video);
    setVideoReset(videoReset + 1);
  };

  return (
    <div className="video-card up" onClick={select}>
      {selectedVideo?.youtubeId === video.youtubeId && (
        <span className="selected">SELECTED</span>
      )}
      <img src={video.images.medium} alt={`image of ${video.title}`} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <div className="duration">
        <p>{formatDuration(video.durationSeconds)}</p>
        <img
          src={arrowRight}
          alt="black circle with a chevron pointing right"
        />
      </div>
    </div>
  );
};

export default Video;
