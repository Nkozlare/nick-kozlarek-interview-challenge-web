import Video from "./video";

const Videos = ({
  seriesData,
  selectedVideo,
  setSelectedVideo,
  videoReset,
  setVideoReset,
  setDebugError,
}: any) => {
  const videoMap = seriesData.videos.map((video: any, i: number) => {
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
