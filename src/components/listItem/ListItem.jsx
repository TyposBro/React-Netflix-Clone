import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { getRandomInt } from "utils/random";
import "./ListItem.scss";

const ListItem = ({ img }) => {
  return (
    <div className="listItem">
      <img src={`images/background/${img}.jpg`} alt="" />

      <div className="info">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
