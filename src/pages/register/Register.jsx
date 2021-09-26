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
          <button className="loginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input">
          <input type="email" placeholder="email adress" />
          <button className="registerButton">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
