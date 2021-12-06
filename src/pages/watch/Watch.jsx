// Core
import { useLocation, useNavigate } from "react-router-dom";
// UI
import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
// Custom
import "./Watch.scss";

const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const navigate = useNavigate();
  return (
    <div className="watch">
      <div className="back" onClick={() => navigate(-1)}>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        src={movie.video}
        className="video"
        autoPlay
        fullScreen="true"
        progress="true"
        controls
      ></video>
    </div>
  );
};

export default Watch;
