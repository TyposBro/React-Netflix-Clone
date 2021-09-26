import "./Login.scss";

const Login = () => {
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
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <strong>Sign up now.</strong>
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
