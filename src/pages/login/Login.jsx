import { useContext, useState } from "react";
import AuthContext from "context/auth/AuthContext";
import { login } from "context/auth/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [user, setUser] = useState({});
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.hasOwnProperty("username") && user.hasOwnProperty("password")) {
      const res = await login(user, dispatch);
      if (res) {
        navigate("/", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    } else {
      window.alert("Please fill in all of the fields");
    }
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="images/netflix_logo_2015.png"
            alt="Netflix Logo"
            className="logo"
          />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            name="username"
            onChange={handleChange}
            placeholder="username or email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            autoComplete="current-password"
          />
          <button
            disabled={isFetching}
            onClick={handleSubmit}
            className="loginButton"
          >
            Sign In
          </button>
          <span>
            New to Netflix?{" "}
            <Link to="/register">
              <strong>Sign up now.</strong>
            </Link>
          </span>

          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <strong>Learn more</strong>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
