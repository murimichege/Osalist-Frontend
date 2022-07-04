import React,{useState} from "react";
import BillModalTable from "./BillModalTable/BillModalTable";
import Bill from '../Bill'
import { Button } from "@mui/material";

import { BsPlus } from "react-icons/bs";

function NewBillModal({ setOpenModal, addRows }) {
const [tableRows, setTableRows] = useState([])
const [rowsData, setRowsData] = useState([]);
const [showCurrentModal, setshowCurrentModal] = useState(true)


const initialData= {
  vendor: "",
  BillNo:"",
  BillDate:"",
  Currency:""
}
const handleChange = (index, evnt) => {
  const { name, value } = evnt.target;
  const rowsInput = [...rowsData];
  rowsInput[index][name] = value;
  setRowsData(initialData);
}
const AddRows = () => {
  setTableRows([...tableRows, initialData])
}

  return (
    <React.Fragment>

      {
        showCurrentModal ? (
          <div className="modalBackground">
          <div className="modalContainer" style={{width:"1050px"}}>
            <div className="modal-title">
              <h1 style={{ color: "black" }}>Add a bill</h1>
            </div>
            <div className="modal-form-container">
              <div className="modal-container-left">
                <form className="register-form">
                  <div className="new-bill-container">
                    <label for="From">Select Vendor</label>
                    <input
                      className="register-input"
                      id="From"
                      onChange={handleChange}
                      style={{ width: "180px" }}
                    />
                    <label for="To">#Bill</label>
    
                    <input
                      className="register-input"
                      id="To"
                      onChange={handleChange}
    
                      placeholder="0000"
                      style={{ width: "230px" }}
                    />
                    <label for="date">Bill Date</label>
                    <input
                      className="register-input"
                      id="data"
                      onChange={handleChange}
                      type="text"
                      placeholder="DD/MM/YYYY"
                      style={{ width: "230px" }}
                    />
                  </div>
                  <div className="new-bill-container2">
                    <label for="currency">Currency</label>
    
                    <input
                      className="register-input"
                      id="currency"
                      type="text"
                      onChange={handleChange}
                      placeholder="Kshs"
                    />
                  </div>
                </form>
              </div>
              <div className="">
                <BillModalTable />
              </div>
    
              <div className="modal-buttons" style={{ float: "right" }}>
                <button onClick={() => setOpenModal(false)}>cancel</button>
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
        )
        :(
          <Bill />

        )
       
      }

      
      </React.Fragment>
    
  );
}

export default NewBillModal;
