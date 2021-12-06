import { useState, useEffect } from "react";
import Axios from "utils/axios";
import List from "components/list/List";
import Featured from "../../components/featured/Featured";
import Navbar from "components/navbar/Navbar";
import "./Home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getLists = async () => {
      try {
        const { data } = await Axios.get("/lists", {
          params: {
            type,
            genre,
          },
        });
        setLists(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.length > 0 &&
        lists.map((list) => <List key={list._id} list={list} />)}
    </div>
  );
};

export default Home;
