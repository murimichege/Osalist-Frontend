import React from 'react'
import "./Settings.css";
import Sidebar from '../../sidebar/Sidebar';
import TopNav from '../../TopNav/TopNav';
function DateSettings() {
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
        <h2>Dates and Currency</h2>
      </div>
      <div className="fiscal-year">
        <p>Fiscal year end</p>
        <form className="fiscal-year-form">
          <input
            className="fiscal-input"
            id="key"
            label="Product Key"
            placeholder="December"
          />
          <input className="fiscal-input" id="key" placeholder="31" />
          <p>Business Currency</p>

          <input className="fiscal-input-3" id="key" placeholder="Kshs" />
          <button>Save</button>
        </form>
      </div>
      
      </div>
    </div>
       
    )
}

export default DateSettings
