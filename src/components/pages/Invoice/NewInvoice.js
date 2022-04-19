import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import {Link} from 'react-router-dom'
import InvoiceTable from './InvoiceTable'
function NewInvoice() {
    return (
        <div className="container">
        <div>
          <Sidebar />
          <div>
            <TopNav />
          </div>
        </div>
        <div className="New-item">
          <div className="New-item-headers">
            <h1>Invoice</h1>
            <div className="new-item-links">
            </div>
            <div>
            <InvoiceTable/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default NewInvoice
