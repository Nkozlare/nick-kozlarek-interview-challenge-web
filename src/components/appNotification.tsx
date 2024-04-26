import alertImage from "../../public/icons/alert.svg";
import xImage from "../../public/icons/x.svg";
const AppNotification = ({ debugError, setDebugError }: any) => {
  return (
    debugError && (
      <div className="debug-notification fade-in-message">
        <img
          src={xImage}
          className="debug-close"
          alt="circle with an x in it to indicate closing the error popup"
          onClick={() => setDebugError(false)}
        />
        <img src={alertImage} alt="image that alerts a user of an error" />
        <p>There was an error loading the video:</p>
        <a href="/" className="c-button c-button--gooey">
          reload?
          <div className="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </a>
      </div>
    )
  );
};

export default AppNotification;
