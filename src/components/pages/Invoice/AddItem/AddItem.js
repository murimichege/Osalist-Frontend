import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import "./styles.css";
function AddItem({ setitemOpen,handleChange, formInputData, handleSubmit }) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>New Item</h1>
        </div>

        <div className="modal-form-container">
          <div className="modal-container-left">
            <form className="register-form" onSubmit={handleSubmit}>
              <input
                className="register-input"
                name="item"
                onChange={handleChange}
                value={formInputData.item}
                placeholder="Item"
               
              />

              <input
                className="register-input"
                name="amount"
                value={formInputData.amount}
                placeholder="Amount"
                onChange={handleChange}
              />
            </form>
          </div>

          <div className="profile-container-right">
            <form className="register-form" onSubmit={handleSubmit}>
              <input
                className="register-input"
                placeholder="Rate"
                name="rate"
                value={formInputData.rate}
                onChange={handleChange}
              />
              <input
                className="register-input"
                name="quantity"
                placeholder="Quantity"

                value={formInputData.quantity}
                onChange={handleChange}
              />

              <input
                className="register-input"
                style={{ width: "600px", height: "80px" }}
                type="text"
                
                value={formInputData.description}
                placeholder="Description"
                onChange={handleChange}
              />
            </form>
          </div>

          <div className="modal-buttons" style={{ justifyContent: "center" }}>
            <button onClick={() => setitemOpen(false)}>cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default AddItem;
