import React from "react";
import GettingStarted from '../../../icons/GettingStarted.png'
import "./Intro.css";
function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-logo">
        <img src={GettingStarted} alt="" className="intro-logo-image" />
      </div>
      <div className="intro-caption">
        <h1>Osalist</h1>
        <p>An intergrated software for managing small businesses</p>

      </div>
      <div className="intro-button">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Intro;
