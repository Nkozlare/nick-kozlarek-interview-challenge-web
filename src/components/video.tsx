import arrowRight from "../../public/icons/chevron-right-circle-svgrepo-com.svg";
const Video = ({ video }) => {
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

  return (
    <div className="video-card">
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
