import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import fake_logo from "../../../icons/fake_logo.png";
import AddClientModal from "./Client_Modal/Add_Client_Modal";
import ItemModal from "./SendInvoice/ItemModal";
import FormDataTable from "./AddItem/FormDataTable";
import DiscountModal  from "./DiscountModal/DiscountModal";
import VATModal from "./VATModal/VatModal";
import InvoicePDF from './InvoicePDF/InvoicePDF'
//import { InvoiceItemProvider } from "./AddItem/InvoiceItemContext";
import Pdf from "react-to-pdf";

function NewInvoice(props) {
  const [subtotal, setSubtotal] = useState("0000000");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemModalOpen, setItemModelOpen] = useState(false);
  const [itemOpen, setitemOpen] = useState(false);
  const [discountModalOpen, setdiscountModalOpen] = useState(false);
  const [VATModalOpen, setVATModalOpen] = useState(false);
  const [address, setaddress] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [discount, setDiscount] = useState();
  const [Vat, setVat] = useState()
  const [isInvoicevisible,setisInvoicevisible ] = useState(true)
  const ref = React.createRef();

 

  const handleFormData = (data) => {
    setName(data.name);
    setaddress(data.address);
    setEmail(data.email);
    setPhone(data.phone);
    setIsOpen(!setIsOpen);
  };

  const handleDiscount = (data) => {
setDiscount(data.discount)

  }

  const handleVAT = (data) => {
setVat(Vat)
  }
  return (
    
    <>
    {
      isInvoicevisible ? (

    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div className="New-item">
        <div className="New-item-headers" style={{ marginTop: "15px" }}>
          <h1>Invoice</h1>
        </div>
        <div className="New-Invoice-container" ref={ref}>
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
            <div></div>
            <div className="new-item-links" style={{ marginLeft: "35px" }}>
              {name} <br/>
              <Button onClick={() => setIsOpen(true)}>
                <BsPlus />
                Add a Client
              </Button>

              {modalIsOpen && (
                <AddClientModal
                  setIsOpen={setIsOpen}
                  formdata={handleFormData}
                />
              )}
            </div>
            <form className="new-invoice-form">
              <label for="address">Invoice #</label>

              <input
                className="fiscal-input"
                id="key"
                //value={}
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
              <FormDataTable itemOpen={itemOpen} setitemOpen={setitemOpen} />
            </div>
            <div
              className="new-item-links"
              style={{ marginLeft: "35px", marginTop: "35px" }}
            >
              <Button onClick={() => setitemOpen(true)}>Add an Item</Button>
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
                <Button
                  onClick={() => {
                    setVATModalOpen(true)
                  }}
                >
                  <BsPlus />
                  Add VAT
                </Button>
                <p>{Vat}</p>
                {VATModalOpen && <VATModal formdata={handleVAT} show={setVATModalOpen}/>}
              </div>

              <div className="new-item-links" style={{ marginLeft: "105px" }}>
                <Button
                  onClick={() => {
                    setdiscountModalOpen (true);
                  }}
                >
                  <BsPlus />
                  Add discount
                </Button>
                <p>{discount}</p>
                {discountModalOpen && <DiscountModal formdata={handleDiscount} show={setdiscountModalOpen}/>}
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
        </div>
        <div className="invoice-footer-buttons">
          <button onClick={() => setisInvoicevisible(false)}>Save</button>
          <button onClick={() => setItemModelOpen(true)}>
            Send
            {itemModalOpen && <ItemModal setItemModelOpen={setItemModelOpen} />}
          </button>
          <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
        </div>
      </div>
    </div>
      ): (

        <InvoicePDF name={name} vat={Vat} subtotal={subtotal} discount={discount} />
      )
}
    </>
  );
}

export default NewInvoice;
