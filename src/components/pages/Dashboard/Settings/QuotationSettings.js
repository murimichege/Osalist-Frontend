import React from 'react'
import TopNav from '../../TopNav/TopNav'
import Sidebar from '../../sidebar/Sidebar'
function QuotationSettings() {
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
          <h2>Quotation Settings</h2>
        </div>
        <div className="fiscal-year">
          <p>Default Email for sending quotations</p>
          <form className="fiscal-year-form">
            <input
              className="fiscal-input"
              id="key"
              label="Product Key"
              placeholder="Email Address"
            />
            <p>Default title</p>

            <input className="fiscal-input-3" id="key" placeholder="e.g Financial proposal" />

            <p>Default Sub heading</p>

            <input className="fiscal-input-3" id="key" placeholder="Quotation" />
            <p>Default memo for new quotations</p>

            <input className="fiscal-input-3" id="key" placeholder="e.g Valid for 45 days" />
            
            

            <button>Save</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default QuotationSettings
