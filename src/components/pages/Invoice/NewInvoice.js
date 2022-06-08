import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import fake_logo from "../../../icons/fake_logo.png";
import AddClientModal from "./Client_Modal/Add_Client_Modal";
import ItemModal from "./SendInvoice/ItemModal";
import AddItem from "./AddItem/AddItem";

function NewInvoice({  tableData}) {
  const [subtotal, setSubtotal] = useState("0000000");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemModalOpen, setItemModelOpen] = useState(false);

  const [itemOpen, setitemOpen] = useState(false);

  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div className="New-item">
        <div className="New-item-headers" style={{ marginTop: "15px" }}>
          <h1>Invoice</h1>
        </div>
        <div className="New-Invoice-container">
          <div className="New-Invoice-header">
            <div className="Fake-logo">
              <img src={fake_logo} alt="logo" />
            </div>
            <div className="New-Invoice-address">
              <h2>Invoice</h2>
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
              <Button onClick={() => setIsOpen(true)}>
                <BsPlus />
                Add a Client
              </Button>
              {modalIsOpen && <AddClientModal setIsOpen={setIsOpen} />}
            </div>
            <form className="new-invoice-form">
              <label for="address">Invoice #</label>

              <input
                className="fiscal-input"
                id="key"
                label="Product Key"
                placeholder="1"
              />
              <label for="address">Invoice Date</label>
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
                <tbody>
                {
               tableData && tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.item}</td>
                            <td>{data.amount}</td>
                            <td>{data.rate}</td>
                            <td>{data.quantity}</td>
                            <td>{data.description}</td>
                        </tr>
                    )
                })
            }
                </tbody>
              </table>
            </div>
            <div
              className="new-item-links"
              style={{ marginLeft: "35px", marginTop: "35px" }}
            >
              <Button onClick={() => setitemOpen(true)}>
                <BsPlus />
                Add an Item
                {itemOpen && <AddItem setitemOpen={setitemOpen} />}
              </Button>
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
                <Button onClick={() => setIsOpen(true)}>
                  <BsPlus />
                  Add VAT
                </Button>
              </div>

              <div className="new-item-links" style={{ marginLeft: "105px" }}>
                <Button onClick={() => setIsOpen(true)}>
                  <BsPlus />
                  Add discount
                </Button>
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
          <Button>Save</Button>
          <Button onClick={() => setItemModelOpen(true)}>
            Send
            {itemModalOpen && <ItemModal setItemModelOpen={setItemModelOpen} />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewInvoice;
