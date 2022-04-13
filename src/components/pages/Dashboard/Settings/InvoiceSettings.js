import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import TopNav from '../../TopNav/TopNav'
function InvoiceSettings() {
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
            <h2>Invoice Settings</h2>
          </div>
          <div className="fiscal-year">
            <p>Default Email address for sending invoices</p>
            <form className="fiscal-year-form">
              <input
                className="fiscal-input"
                id="key"
                label="Product Key"
                placeholder="Email Address"
              />
              <p>Default payment terms</p>
  
              <input className="fiscal-input-3" id="key" placeholder="e.g Due in 15 days" />
  
              <p>Default title for all invoices</p>
  
              <input className="fiscal-input-3" id="key" placeholder="Invoices" />
              <p>Default sub heading</p>
  
              <input className="fiscal-input-3" id="key" placeholder="e.g KRA PIN" />
              
              <p>Default notes/terms</p>
  
              <input className="fiscal-input-3" id="key" placeholder="e.g Thank you for patnering with us" />
              
              <input  type="checkbox" />
              <p className="checkbox" >Show on tax number on invoices</p>
  
              <button>Save</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default InvoiceSettings
