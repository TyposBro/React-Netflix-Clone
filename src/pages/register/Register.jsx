import { register } from "context/auth/AuthAPI";
import AuthContext from "context/auth/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="images/netflix_logo_2015.png"
            alt="Netflix Logo"
            className="logo"
          />

          <button className="loginButton">
            <Link to="/login">Sign In </Link>
          </button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {Form()}
      </div>
    </div>
  );
};

export default Register;

const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [step, setStep] = useState(0);
  const { dispatch } = useContext(AuthContext);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(user, dispatch);

    if (res) {
      navigate("/", { replace: true });
    } else {
      navigate("/register", { replace: true });
    }
  };

  if (step === 0) {
    return (
      <div className="input">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
          placeholder="email adress"
        />
        <button className="registerButton" onClick={() => setStep(step + 1)}>
          Get started
        </button>
      </div>
    );
  } else if (step === 1) {
    return (
      <div className="input">
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="choose a username"
        />
        <button className="registerButton" onClick={() => setStep(step + 1)}>
          Next
        </button>
      </div>
    );
  } else {
    return (
      <form className="input">
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="password"
        />
        <button className="registerButton" onClick={handleSubmit}>
          Start
        </button>
      </form>
    );
  }
};
