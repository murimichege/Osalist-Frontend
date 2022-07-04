import React from "react";
import { Box, Button, FormControl, TextField } from "@mui/material";

function ItemModal({ setItemModelOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-title" >
          <h1 style={{color:"black"}}>Send this Invoice</h1>
        </div>
        <div className="modal-form-container">
          <div className="modal-container-left">
            <form className="register-form">
              <label for="From" style={{ color: "black" }}>
                From
              </label>
              <input
                className="register-input"
                id="From"
                placeholder="Name of the business or person  "
              />
              <label for="address" style={{ color: "black" }}>
                To
              </label>

              <input className="register-input" id="To" placeholder="Email" />
              <label for="subject" style={{ color: "black" }}>
                Subject
              </label>
              <input
                className="register-input"
                id="subject"
                type="password"
                placeholder="Email"
              />
              <label for="message" style={{ color: "black" }}>
                Message/Notes
              </label>

              <input
                className="register-input"
                id="message"
                type="password"
                placeholder="Phone"
              />
              <div className="item-modal-buttons">
        <button onClick={() => setItemModelOpen(false)}>Cancel</button>
        <button>Send as PDF</button>
      </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ItemModal;
