import "./Featured.scss";
import Axios from "utils/axios";

import { getRandomInt } from "utils/random";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "context/auth/AuthContext";
const bg = getRandomInt(1, 9);

const Featured = ({ type, setGenre }) => {
  const { user } = useContext(AuthContext);
  console.log("featured:", user);
  const [content, setContent] = useState(null);

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
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            onChange={({ target }) => {
              setGenre(target.value);
            }}
            name="genre"
            id="genre"
          >
            <option> Genre </option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={`/images/background/${bg}.jpg`} alt="" />
      {content && (
        <div className="info">
          <img src={content.img} alt="" />
          <span className="desc">{content.desc}...</span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
