import { useRef, useState } from "react";
import ArrowBackIosOutlined from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardOutlined";
import ListItem from "components/listItem/ListItem";
import "./List.scss";

const List = ({ list }) => {
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
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={slideNumber === 0 ? { visibility: "hidden" } : {}}
        />
        <div className="container" ref={listRef}>
          {list &&
            list.content.map((movieId, i) => {
              return <ListItem key={movieId} i={i} id={movieId} />;
            })}
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
