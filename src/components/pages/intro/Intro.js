import React from "react";
import { useNavigate } from "react-router-dom";

import GettingStarted from '../../../icons/GettingStarted.png'
import "./Intro.css";
function Intro() {
  const navigate = useNavigate()
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
        <button onClick={() => navigate("/ProductKey")}>Get Started</button>
      </div>
    </div>
  );
}

export default Intro;
