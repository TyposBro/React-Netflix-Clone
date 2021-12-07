import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Notifications from "@mui/icons-material/Notifications";
import Search from "@mui/icons-material/Search";
import { logout } from "context/auth/AuthAPI";
import AuthContext from "context/auth/AuthContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logout(dispatch);
    navigate("/", { replace: true });
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="/images/netflix_logo_2015.png" alt="Netflix Logo" />

          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>

          <Link to="/series" className="link">
            <span className="main">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="main">Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon search" />
          <span className="username">{user.info.username}</span>
          <Notifications className="icon notification" />
          <img src={user.info.avatar} alt="avatar" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
