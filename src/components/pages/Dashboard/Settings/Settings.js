import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import TopNav from "../../TopNav/TopNav";
import {Link} from 'react-router-dom'
import "./Settings.css";
function Settings() {
  return (
    <div className="container">
      <div>
        <Sidebar />
        <div>
          <TopNav />
        </div>
      </div>
      <div className="DateSettings">
        <Link to ="/DateSettings">Date and Currency Settings</Link>
        <Link to ="/InvoiceSettings">Invoice Settings</Link>
        <Link to ="/QuotationSettings">Quotation Settings</Link>
        <Link to ="/SalesTaxSettings">SalesTax Settings</Link>
      </div>
    </div>
  );
}

export default Settings;
