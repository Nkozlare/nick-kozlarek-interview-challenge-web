import { useState } from "react";

const Border = ({ seriesData, selectedVideo, setSelectedVideo }) => {
  return (
    <div
      className="border"
      style={{ backgroundImage: `url(${seriesData.images.large})` }}
    >
      <div className="left-column">
        <h1 className="main-title fade-in-heading">BibleProject</h1>
        <div className="series-meta fade-in-slide-down-paragraph">
          <h2>{seriesData.title}</h2>
          <span className="line"></span>
          <p>{seriesData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Border;
