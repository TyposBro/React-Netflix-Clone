// Core
import { useEffect, useState } from "react";
import axios from "utils/axios";
import { Link } from "react-router-dom";
// UI
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
// Custom
import "./ListItem.scss";

const ListItem = ({ id, i }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getItem = async () => {
      try {
        const { data } = await axios.get(`/movies/find/${id}`, {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODViZmQ5Njg3NTA3OWUxYTg4YjBiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjM4NDMzOSwiZXhwIjoxNjM2NDcwNzM5fQ.6F0gB20gFQkHou9d97MjhwkDtn6LSQ5C3ztQPijbxSo",
          },
        });
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [id]);
  return (
    <Link
      to={{ pathname: `/watch` }}
      state={{ movie }}
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && i * 231 - 50 }}
    >
      {movie && <img src={`${movie.imgSmall}`} alt="" />}
      {isHovered && movie && (
        <>
          <video
            className="video"
            src={`${movie.video}`}
            autoPlay={true}
            loop={true}
          ></video>
          <div className="info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>

            <div className="moreInfo">
              <span>1hour 35min</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </Link>
  );
};

export default ListItem;
