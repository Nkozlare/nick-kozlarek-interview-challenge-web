import { useEffect, useState } from "react";
import Border from "./border";
import Videos from "./videos";
import AppNotification from "./appNotification";

export const App = () => {
  // Set up some stateful variables that will be used globally
  // This is all of the data we have in the api
  const [seriesData, setSeriesData] = useState(null);
  // This object will contain all of the video information
  const [selectedVideo, setSelectedVideo] = useState(null);
  // When clicking on a new video, this will reset the ui for the video section
  const [videoReset, setVideoReset] = useState(0);
  // for when the debug param is in the url.
  const [debugError, setDebugError] = useState(false);
  // Fetch request to get all of the information from the the data.json file
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../public/api/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setSeriesData(jsonData.data.videoCategory);
    };

    fetchData();
  }, []);

  return seriesData ? (
    <div className="page">
      <Border
        seriesData={seriesData}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        videoReset={videoReset}
      />
      <Videos
        seriesData={seriesData}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        videoReset={videoReset}
        setVideoReset={setVideoReset}
        setDebugError={setDebugError}
      />
      <AppNotification debugError={debugError} setDebugError={setDebugError} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};
