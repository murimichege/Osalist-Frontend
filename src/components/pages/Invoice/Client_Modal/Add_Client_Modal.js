import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function AddClientModal({ setIsOpen }) {
  const [businessName, setBusinessName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>New Client</h1>
        </div>
        <div className="title">
          <h2>Basic Information</h2>
          <hr
            style={{
              align: "left",
              marginTop: "10px",
              width: "35% ",
              marginRight: "0",
            }}
          />
        </div>

        <div className="title-right">
          <h1>Billing address</h1>
        </div>
        <hr
          style={{
            align: "right",
            marginTop: "10px",
            width: "35% ",
            marginRight: "0",
          }}
        />

        <div className="modal-form-container">
          <div className="modal-container-left">
            <form className="register-form" onSubmit={handleSubmit}>
              <label for="address">Client</label>
              <input
                className="register-input"
                id="address"
                placeholder="Name of the business or person  "
                value={businessName}
                onChange={(e) => e.target.value}
              />
              <label for="address">Primary Contact</label>

              <input className="register-input" id="key" placeholder="Name" />
              <input
                className="register-input"
                id="key"
                type="password"
                placeholder="Email"
              />
              <input
                className="register-input"
                id="key"
                type="password"
                placeholder="Phone"
              />
            </form>
          </div>

          <div className="profile-container-right">
            <form className="register-form">
              <label for="address" style={{ marginLeft: "170px" }}>
                Physical Address
              </label>

              <input
                className="register-input"
                id="address"
                placeholder="Keystone Park,  Riverside Drive "
              />
              <input
                className="register-input"
                id="key"
                type="password"
                placeholder="City"
              />

              <input
                className="register-input"
                id="key"
                type="password"
                placeholder="Country"
              />
            </form>
          </div>

          <div className="modal-buttons">
        <button onClick={() => setIsOpen(false)}>cancel</button>
        <button type="submit">Save</button>
      </div>
    

        </div>
      </div>
    </div>
  );
}

export default AddClientModal;
