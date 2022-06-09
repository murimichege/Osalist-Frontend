import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import "./styles.css";
function AddItem(props) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const clearState = () => {
    setItem("");
    setAmount("");
    setRate("");
    setQuantity("");
    setDescription("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formInputData = {
      item,
      amount,
      rate,
      quantity,
      description,
    };
    props.func(formInputData);
    clearState();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>New Item</h1>
        </div>

        <div className="modal-form-container">
          <form className="register-form">
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
              onChange={(e) => setAmount(e.target.value)}
            />

            <input
              className="register-input"
              placeholder="Rate"
              name="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <input
              className="register-input"
              name="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <input
              className="register-input"
              style={{ width: "600px", height: "80px" }}
              type="text"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="modal-buttons" style={{ justifyContent: "center" }}>
              <button onClick={handleSubmit}>Save</button>
            </div>
          </form>
          <button onClick={() => props.setitemOpen(false)}>cancel</button>

        </div>
      </div>
    </div>
  );
}
export default AddItem;
