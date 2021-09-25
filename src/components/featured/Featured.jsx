import "./Featured.scss";

import { getRandomInt } from "utils/random";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
const bg = getRandomInt(1, 9);

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
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
      <div className="info">
        <img src={`/images/background/${bg + 1}.jpg`} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut
          qui quasi saepe magni? Suscipit nostrum, vero ut asperiores fugit
          dolorem blanditiis veniam tempore modi possimus sapiente soluta
          cupiditate ea.
        </span>
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
    </div>
  );
};

export default Featured;
