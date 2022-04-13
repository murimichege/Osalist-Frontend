import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import TopNav from "../../TopNav/TopNav";
import './Settings.css'
function SalesTax() {

   
  return (
    <div className="container">
      <div>
        <Sidebar />
        <div>
          <TopNav />
        </div>
      </div>
      <div className="Settings">
        <div className="Settings-headers">
          <h1>Settings</h1>
          <h2>Sales Tax</h2>
        </div>
        <div className="fiscal-year">
          <p>Tax name</p>
          <form className="fiscal-year-form">
            <input
              className="fiscal-input"
              id="key"
              label="Product Key"
              placeholder="Value Added Tax"
            />
            <p>Abbreviation</p>

            <input className="fiscal-input-3" id="key" placeholder="VAT" />

            <p>Tax Percentage(%)</p>

            <input className="fiscal-input-3" id="key" placeholder="16" />
            <p>Your Tax Pin</p>

            <input className="fiscal-input-3" id="key" placeholder="VAT" />
            
            <input  type="checkbox" />
            <p className="checkbox" >Tax is recoverable</p>

            <button>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalesTax;
