import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import '../Dashboard/New.css'
import InvoiceTable from './InvoiceTable'
import NewInvoiceTable from './NewInvoiceTable'
import { BsPlus } from "react-icons/bs";
function Invoice() {
  
    return (
        <div className="container">
        <div>
          <Sidebar/>
         
        </div>
        <div className="New-item">
          <div className="New-item-headers">
            <h1>Invoice</h1>
            <div className="new-item-links">
            <div className="new-item-links">
            <Link to ="/NewInvoice"> <BsPlus/>New Invoice</Link>
            </div>
            </div>
            <div>
            <NewInvoiceTable/>
            
            </div>
          </div>
        </div>
      </div>
    )
}

export default Invoice
