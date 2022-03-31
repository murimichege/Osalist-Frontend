import { auto } from "async";
import React from "react";
import createprofile from "../../icons/createprofile.png";
import './Auth.css'
function CreateProfile() {
  return (
    <div className="login-container">
      <div className="register-logo">
        <img
          src={createprofile}
          alt=""
          className="register-logo-image"
          width="250px"
          height="180px"
        />
      </div>
      <div className="register-caption">
        <h1>Let's get to know you!</h1>
      </div>
      <form className="register-form">
        <input
          className="register-input"
          id="key"
          label="Product Key"
          placeholder="First Name"
        />
        <input className="register-input" id="key" placeholder="Middle Name" />
        <input
          className="register-input"
          id="key"
          type="password"
          placeholder="Last Name"
        />
        <input
          className="register-input"
          id="key"
          type="password"
          placeholder="Phone"
        />
        <input
          className="register-input"
          id="key"
          type="password"
          placeholder="Email"
        />

        <input type="file" id="file" accept="image/*" />
        <label for="file"
         style={{backgroundColor: "white", color: '#023d51', height: '50px',width: "40px",margin: auto, border: '#023d51' }}>
            Profile Pic
        </label>

      </form>

      <div className="activate-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default CreateProfile;
