import React from "react";
import businessprofile from '../../../../icons/businessprofile.png'
import "./Profile.css";

function CreateBusinessProfile() {
  return (
    <div className="login-container">
      <div className="register-logo">
        <img
          src={businessprofile}
          alt=""
          className="register-logo-image"
          width="250px"
          height="180px"
        />
      </div>
      <div className="register-caption">
        <h1>Business Profile</h1>
        <p> Please tell us about you and your company</p>
      </div>
      
      <div className="profile-form-container">
        <div className="profile-container-left">
          <form className="register-form">
            <input
              className="register-input"
              id="key"
              label="Product Key"
              placeholder="Name of the company"
            />
            <input
              className="register-input"
              id="key"
              placeholder="Company Phone"
            />
            <input
              className="register-input"
              id="key"
              type="password"
              placeholder="Postal Address"
            />
            <input
              className="register-input"
              id="key"
              type="password"
              placeholder="City"
            />
          </form>
        </div>

        <div className="profile-container-right">
          <form className="register-form">
            <input
              className="register-input"
              id="key"
              placeholder="Type of business"
            />
            <input
              className="register-input"
              id="key"
              type="password"
              placeholder="Company email"
            />

            <input
              className="register-input"
              id="key"
              type="password"
              placeholder="Office Location"
            />
            <input
              className="register-input"
              id="key"
              label="Product Key"
              placeholder="Country"
            />
          </form>
        </div>
        
      </div>

     

      <div className="activate-button">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default CreateBusinessProfile;
