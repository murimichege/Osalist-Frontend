import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import '../Dashboard/New.css'
import NewBillTable from './NewBillTable'
import { BsPlus } from "react-icons/bs";
import NewBillModal from './NewBillModal'
import { Button } from "@mui/material";

function Bill() {
  const [openModal, setOpenModal]= useState(false)
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
            <h1>Bill</h1>
            <div className="new-item-links" style={{ marginLeft: "35px" }}>
              <Button  onClick={() => setOpenModal(true)}>
                {" "}
                <BsPlus />
                New Bill
                </Button>
                {openModal && <NewBillModal
                setOpenModal={setOpenModal}
                
                  />}
                
            </div>
            <div>
            <NewBillTable/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Bill
