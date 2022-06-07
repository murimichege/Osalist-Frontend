import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import '../Dashboard/New.css'
import NewQuotationTable from './NewQuotationTable'
import { BsPlus } from "react-icons/bs";
function Quotations() {
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
            <h1>Quotations</h1>
            <div className="new-item-links">
            <div className="new-item-links">
            <Link to ="/NewQuotation"> <BsPlus/>New Quotation</Link>
            </div>
            </div>
            <div>
            <NewQuotationTable/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Quotations
