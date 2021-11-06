import { useState, useEffect } from "react";
import Axios from "axios";
import List from "components/list/List";
import Featured from "components/featured/Featured";
import Navbar from "components/navbar/Navbar";
import "./Home.scss";

const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
    </div>
  );
};

export default Home;
