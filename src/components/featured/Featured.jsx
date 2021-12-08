import "./Featured.scss";
import Axios from "utils/axios";

import { getRandomInt } from "utils/random";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
const bg = getRandomInt(0, 6);

const Featured = ({ type, setGenre }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/watch", { state: { movie: content } });
    // console.log(content);
  };

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const { data } = await Axios.get("/movies/random", {
          headers: {
            token: user.token || null,
          },
        });
        const desc = data.desc.slice(0, 150);

        setContent({ ...data, desc });
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [user.token]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "Movies" ? "Movies" : "Series"}</span>
          <select
            onChange={({ target }) => {
              setGenre(target.value);
            }}
            name="genre"
            id="genre"
          >
            <option> Genre </option>
            <option value="Adventure">Adventure</option>
            <option value="Anime">Anime</option>

            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Kdrama">K-Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={`/images/background/${bg}.jpg`} alt="" />
      {content && (
        <div className="info">
          <img src={content.img} alt="" />
          <span className="desc">{content.desc}...</span>
          <div className="buttons">
            <button onClick={handlePlay} className="play">
              <PlayArrowIcon />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlinedIcon />
              <span>Info</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
