import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src="videos/01.mp4"
        className="video"
        fullWidth="true"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
};

export default Watch;
