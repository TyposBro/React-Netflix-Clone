import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "components/listItem/ListItem";
import { useRef, useState } from "react";

import "./List.scss";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (dir) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (dir === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 230}px)`;
      return;
    }
    if (dir === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 230}px)`;
      return;
    } else {
      setSlideNumber(0);
      listRef.current.style.transform = `translateX(0)`;
      return;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={slideNumber === 0 ? { visibility: "hidden" } : {}}
        />
        <div className="container" ref={listRef}>
          {renderListItem()}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;

const renderListItem = () => {
  const LI = [];
  for (let i = 0; i < 9; i++) {
    LI.push(<ListItem img={i} index={i} />);
  }

  return LI;
};
