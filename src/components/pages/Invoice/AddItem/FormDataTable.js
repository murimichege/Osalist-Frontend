import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import AddItem from "./AddItemForm";
import Table from "./Table";

function FormDataTable() {
  const [tableData, setTableData] = useState([]);
  // console.log(tableData)

  const tableRows = tableData.map((value, index) => {
    return (
      <tr key={index}>
        <td>{value.item}</td>
        <td>{value.amount}</td>
        <td>{value.rate}</td>
        <td>{value.quantity}</td>
        <td>{value.description}</td>
      </tr>
    );
  });
  const addRows = (data) => {
    const totalData = tableData.length;
    data.id = totalData + 1;
    const updatedtableData = [...tableData];
    updatedtableData.push(data);
    setTableData(updatedtableData);
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <AddItem func={addRows} />
    </React.Fragment>
  );
}

export default FormDataTable;
