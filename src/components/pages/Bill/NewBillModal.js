import React from "react";
import BillModalTable from "./BillModalTable";

function NewBillModal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modal-title">
          <h1 style={{ color: "black" }}>Add a bill</h1>
        </div>
        <div className="modal-form-container">
          <div className="modal-container-left">
            <form className="register-form">
              <div className="new-bill-container" style={{ display: "flex" }}>
                <label for="From" style={{ color: "black" }}>
                  Select Vendor
                </label>
                <input
                  className="register-input"
                  id="From"
                  placeholder="Name of the business or person  "
                  style={{ width: "230px" }}
                />
                <label for="address" style={{ color: "black" }}>
                  #Bill
                </label>

                <input
                  className="register-input"
                  id="To"
                  placeholder="Email"
                  style={{ width: "230px" }}
                />
                <label for="subject" style={{ color: "black" }}>
                  Bill Date
                </label>
                <input
                  className="register-input"
                  id="subject"
                  type="password"
                  placeholder="Email"
                  style={{ width: "230px" }}
                />
              </div>
              <div className="new-bill-container2">
                <label for="message" style={{ color: "black" }}>
                  Bill Date
                </label>

                <input
                  className="register-input"
                  id="message"
                  type="password"
                  placeholder="Kshs"
                />
              </div>
            </form>
          </div>
          <div className="">
            <BillModalTable />
          </div>
          <div className="modal-buttons" style={{float:"right"}}>
            <button onClick={() => setOpenModal(false)}>cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBillModal;
