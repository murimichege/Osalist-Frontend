import React from "react";
import { useNavigate } from "react-router-dom";

import Activate from '../../../icons/Activate.png'
import "./Productkey.css";
function ProductKey() {
  const navigate = useNavigate()
  return (
    <div className="key-container">
      <div className="key_logo">
        <img src={Activate} alt="" className="activate-logo-image" />
      </div>
      <div className="intro-caption">
        <h1>Let's get you started!</h1>
      </div>
      <form>
      <input className="key-input" id='key'label="Product Key" placeholder="Product Key"/>

      </form>
      
      <div className='activate-button'>
            <button  onClick={() => navigate("/login")}>Activate</button>  
            </div>
    </div>
  );
}

export default ProductKey;
