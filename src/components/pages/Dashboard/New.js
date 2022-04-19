import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import './New.css'
import { BsPlus } from "react-icons/bs";
function New() {
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
            <h1>Dashboard</h1>
            <div className="new-item-links">
           <Link to ="/Invoice"> <BsPlus/>New Invoice</Link>
            <Link to ="" ><BsPlus/> New Quotation</Link>
             <Link to ="" >  <BsPlus/>Add a Bill</Link>
             <Link to =""> <BsPlus/> Add Transaction</Link>

            </div>
          </div>
        </div>
      </div>
    )
}

export default New
