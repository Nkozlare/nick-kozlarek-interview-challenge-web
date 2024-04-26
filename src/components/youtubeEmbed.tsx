import { useState, useEffect, useRef } from "react";
function YoutubeEmbed({ youtubeId, videoReset, selectedVideo }) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    setPlaying(false);
  }, [videoReset]);
  const play = () => {
    setPlaying(true);
  };
  return (
    <div className="youtube-embed">
      {!playing && (
        <div
          className="overlay"
          style={{ backgroundImage: `url(${selectedVideo.images.large})` }}
        >
          <div className="overlay-heading">
            <h2>{selectedVideo.title}</h2>
            <div className="row middle-on-small center-on-small" onClick={play}>
              <div className="column small-12 medium-6 large-4">
                <a href="#!" className="c-button c-button--gooey">
                  play
                  <div className="c-button__blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p>{selectedVideo.description}</p>
        </div>
      )}
      <iframe
        ref={videoRef}
        width="853"
        height="480"
        src={embedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default YoutubeEmbed;
