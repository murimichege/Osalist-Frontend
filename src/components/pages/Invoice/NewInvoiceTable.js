import React from "react";
import "./NewInvoiceTable.css";
function NewInvoiceTable() {
  const data = [
    
    {
      InvoiceNo: "Anom",
      status: "overdue",
      client: "eddie",
      due: "14 days",
      Paid: "150,000",
      Balance: "30,000",
      Actions: "",
    },
    {
      InvoiceNo: "Anom",
      status: "overdue",
      client: "eddie",
      due: "14 days",
      Paid: "150,000",
      Balance: "30,000",
      Actions: "",
    },
    {
      InvoiceNo: "Anom",
      status: "overdue",
      client: "eddie",
      due: "14 days",
      Paid: "150,000",
      Balance: "30,000",
      Actions: "",
    },
    
    
  ];

  return (
    <div className="container">
      <table>
        <tr>
          <th>Invoice#</th>
          <th>Status</th>
          <th>Client</th>
          <th>Due</th>
          <th>Amount</th>
          <th>Paid</th>
          <th>Balance</th>
          <th>Actions</th>
        </tr>
        {data.map((key, item) => {
          return (
            <tr key={key} value={item}>
              <td>{item.InvoiceNo}</td>
              <td>{item.status}</td>
              <td>{item.client}</td>
              <td>{item.due}</td>
              <td>{item.Amount}</td>
              <td>{item.Paid}</td>
              <td>{item.Balance}</td>
              <td>{item.Actions}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default NewInvoiceTable;
