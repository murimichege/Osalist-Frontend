import React from "react";
import { Link } from "react-router-dom";
import Welcome from "../../icons/Welcome.png";
import "./Auth.css";
function Login() {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={Welcome} alt="" className="login-logo-image" />
      </div>
      <div className="welcome-caption">
        <h1>Welcome!</h1>
      </div>
      <form className="login-form">
        <input
          className="key-input"
          id="key"
          label="Product Key"
          placeholder="Username"
        />
        <input
          className="key-input"
          id="key"
          type="password"
          label="Product Key"
          placeholder="Password"
        />
      </form>
      <Link to="/ChangeCredentials"> Forgot Username/Password</Link>

      <div className="activate-button">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
