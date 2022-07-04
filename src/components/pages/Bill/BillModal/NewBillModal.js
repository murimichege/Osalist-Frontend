import React from "react";
import BillModalTable from "./BillModalTable/BillModalTable";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";

function NewBillModal({ setOpenModal, addRows }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{width:"1050px"}}>
        <div className="modal-title">
          <h1 style={{ color: "black" }}>Add a bill</h1>
        </div>
        <div className="modal-form-container">
          <div className="modal-container-left">
            <form className="register-form">
              <div className="new-bill-container">
                <label for="From">Select Vendor</label>
                <input
                  className="register-input"
                  id="From"
                  style={{ width: "180px" }}
                />
                <label for="To">#Bill</label>

                <input
                  className="register-input"
                  id="To"
                  placeholder="0000"
                  style={{ width: "230px" }}
                />
                <label for="date">Bill Date</label>
                <input
                  className="register-input"
                  id="data"
                  type="text"
                  placeholder="DD/MM/YYYY"
                  style={{ width: "230px" }}
                />
              </div>
              <div className="new-bill-container2">
                <label for="currency">Currency</label>

                <input
                  className="register-input"
                  id="currency"
                  type="text"
                  placeholder="Kshs"
                />
              </div>
            </form>
          </div>
          <div className="">
            <BillModalTable />
          </div>

          <div className="modal-buttons" style={{ float: "right" }}>
            <button onClick={() => setOpenModal(false)}>cancel</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBillModal;
