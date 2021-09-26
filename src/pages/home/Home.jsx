import List from "components/list/List";
import Featured from "components/featured/Featured";
import Navbar from "components/navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="series" />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
