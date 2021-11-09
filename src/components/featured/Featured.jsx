import "./Featured.scss";
import Axios from "utils/axios";

import { getRandomInt } from "utils/random";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
const bg = getRandomInt(1, 9);

const Featured = ({ type }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const { data } = await Axios.get("/movies/random", {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODViZmQ5Njg3NTA3OWUxYTg4YjBiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM4NDMzOSwiZXhwIjoxNjM2NDcwNzM5fQ.6F0gB20gFQkHou9d97MjhwkDtn6LSQ5C3ztQPijbxSo",
          },
        });
        const desc = data.desc.slice(0, 150);

        setContent({ ...data, desc });
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, []);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
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
