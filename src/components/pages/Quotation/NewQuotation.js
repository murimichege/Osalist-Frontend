import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import { Link } from "react-router-dom";
//import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import fake_logo from "../../../icons/fake_logo.png";
import AddClientModal from "./NewQuotationItem/NewClient";

function NewQuotation() {
  const [subtotal, setSubtotal] = useState("0000000");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemModalOpen, setItemModelOpen] = useState(false);

  return (
    <div className="container">
      <div>
        <Sidebar />
        <div>
          <TopNav />
        </div>
      </div>

      <div className="New-item">
        <div className="New-item-headers" style={{ marginTop: "15px" }}>
          <h1>Quotation</h1>
        </div>
        <div className="New-Invoice-container">
          <div className="New-Invoice-header">
            <div className="Fake-logo">
              <img src={fake_logo} alt="logo" />
            </div>
            <div className="New-Invoice-address">
              <h2>Quotation</h2>
              <div className="address">
                <p>
                  Keystone Park, 3rd floor, Block A,
                  <br />
                  Riverside Drive, Nairobi,
                  <br />
                  Kenya
                </p>
              </div>
            </div>
          </div>
          <hr style={{ align: "left" }} />
          <div className="main-container">
            <h4>Bill to</h4>
            <div className="new-item-links" style={{ marginLeft: "35px" }}>
              <button onClick={() => setIsOpen(true)}>
                {" "}
                <BsPlus />
                Add a Client
              </button>
              {modalIsOpen && <AddClientModal setIsOpen={setIsOpen} />}
            </div>
            <form className="new-invoice-form">
              <label for="address">Quotation #</label>

              <input
                className="fiscal-input"
                id="key"
                label="Product Key"
                placeholder="1"
              />
              <label for="address">Quotation Date</label>
              <input
                className="fiscal-input"
                id="key"
                label="Product Key"
                placeholder="1"
              />
            </form>

            <div className="new-invoice-client">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div
              className="new-item-links"
              style={{ marginLeft: "35px", marginTop: "35px" }}
            >
              <button onClick={() => setIsOpen(true)}>
                {" "}
                <BsPlus />
                Add an Item
              </button>
            </div>
            <hr style={{ align: "left", marginTop: "70px", width: "35% " }} />

            <div className="new-invoice-subtotal">
              <div className="new-invoice-header">
                <p>Subtotal</p>
                <p>{subtotal}</p>
              </div>

              <div
                className="new-item-links"
                style={{ marginLeft: "105px", marginTop: "35px" }}
              >
                <button onClick={() => setIsOpen(true)}>
                  {" "}
                  <BsPlus />
                  Add VAT
                </button>
              </div>

              <div className="new-item-links" style={{ marginLeft: "105px" }}>
                <button onClick={() => setIsOpen(true)}>
                  {" "}
                  <BsPlus />
                  Add discount
                </button>
              </div>

              <div className="new-invoice-total">
                <h2>Total</h2>
                <p>
                  Kshs <span>000000</span>
                </p>
              </div>
              <hr style={{ align: "left", marginTop: "70px", width: "35% " }} />
            </div>
          </div>
          <div className="new-invoice-footer">
            <p style={{ fontWeight: "50px" }}>
              Thank you for patnering with us!
            </p>
          </div>
          <div></div>
        </div>
        <div className="invoice-footer-buttons">
          <button>Save</button>
          <button onClick={() => setItemModelOpen(true)}>
            {""}
            Send
            {itemModalOpen && (
              <AddClientModal setItemModelOpen={setItemModelOpen} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewQuotation;
