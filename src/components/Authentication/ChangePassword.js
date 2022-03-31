import React from 'react'
import Security from '../../icons/Security.png'
import {Link } from 'react-router-dom'

function ChangePassword() {
    return (
        <div className="login-container">
        <div className="login-logo">
          <img src={Security} alt="" className="login-logo-image" />
        </div>
        <div className="welcome-caption">
          <h1>Security Update</h1>
        </div>
        <form className="change-pass-form">
          <input
            className="key-input"
            id="key"
            type="password"
            label="Product Key"
            placeholder="Current Password"
          />
          <input
            className="key-input"
            id="key"
            label="Product Key"
            placeholder="New Password"
          />
           <input
            className="key-input"
            id="key"
            label="Product Key"
            placeholder="Confirm New Password"
          />
        </form>
  
        <div className="activate-button">
          <button>Update</button>
        </div>
      </div>
    )
}

export default ChangePassword
