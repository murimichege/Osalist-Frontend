import React, { useState } from "react";
import BillModalForm from "./BillModalForm";
import NewBillModal from "../NewBillModal";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";

function BillModalTable(props) {
  const [tableData, setTableData] = useState([]);

  const [rowsData, setRowsData] = useState([]);

  const addTableRows = () => {
    const rowsInput = {
      item: "",
      ExpenseCategory: "",
      Description: "",
      Quantity :"",
      Amount: "",
      Actions:""
    };
    setRowsData([...rowsData, rowsInput]);
  };

  
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <React.Fragment>
      <table className="table" style={{width: "1050px"}}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Expense Category</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <BillModalForm
            rowsData={rowsData}
            addTableRows={addTableRows}
            deleteTableRows={deleteTableRows}
            handleChange={handleChange}
          />
        </tbody>
      </table>
      <div>
        <Button onClick={addTableRows}>
        <BsPlus />
                Add another
        </Button>
      </div>
    </React.Fragment>
  );
}

export default BillModalTable;
