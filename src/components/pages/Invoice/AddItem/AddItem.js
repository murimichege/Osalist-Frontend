import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import "./styles.css";
function AddItem({ setitemOpen,handleChange, formInputData, handleSubmit }) {

  const [item, setItem] = useState()
  const [amount, setAmount] = useState()
  const [rate, setRate] = useState()
  const [quantity, setQuantity] = useState()
  const [description, setDescription] = useState()
  
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
                onChange={(e) => setItem(e.target.value)}
                value={item}
                placeholder="Item"
               
              />

              <input
                className="register-input"
                name="amount"
                value={amount}
                placeholder="Amount"
                onChange={(e) => setItem(e.target.value)}
              />
            </form>
          </div>

          <div className="profile-container-right">
            <form className="register-form" onSubmit={()=> handleSubmit(
              item, amount,  rate, quantity, description
            )}>
              <input
                className="register-input"
                placeholder="Rate"
                name="rate"
                value={rate}
                onChange={(e) => setItem(e.target.value)}
              />
              <input
                className="register-input"
                name="quantity"
                placeholder="Quantity"

                value={quantity}
                onChange={(e) => setItem(e.target.value)}
              />

              <input
                className="register-input"
                style={{ width: "600px", height: "80px" }}
                type="text"
                
                value={description}
                placeholder="Description"
                onChange={(e) => setItem(e.target.value)}
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
