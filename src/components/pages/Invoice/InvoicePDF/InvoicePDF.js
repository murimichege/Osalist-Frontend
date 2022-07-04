import React from 'react'
import fake_logo  from '../../../../icons/fake_logo.png'
import FormDataTable from '../AddItem/FormDataTable';
import Pdf from "react-to-pdf";

function InvoicePDF({name, vat, subtotal, discount, children}) {
    const ref = React.createRef();

  return (
    <div className="New-item" >
    
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
          {children}
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
           
            <p>{vat}</p>
          </div>

          <div className="new-item-links" style={{ marginLeft: "105px" }}>
            
            <p>{discount}</p>
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
    <Pdf targetRef={ref}  filename="post.pdf" style={{width: 600, height: 500, background: 'blue'}}>
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
      <div  ref={ref}/>
  </div>
  )
}

export default InvoicePDF
