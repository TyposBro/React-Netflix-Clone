import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./ListItem.scss";

const ListItem = ({ img, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://movietrailers.apple.com/movies/pixar/turning-red/turning-red-trailer-1_i320.m4v";
  return (
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 231 - 50 }}
    >
      <img src={`images/background/${img}.jpg`} alt="" />
      {isHovered && (
        <>
          <video
            className="video"
            src="videos/01.mp4"
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
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              nemo minus libero cum eos numquam.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
