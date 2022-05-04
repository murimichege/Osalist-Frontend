import React from 'react'
import './styles.css'
function NewBillTable() {
    const data = [
    
      {
        Bill: "Anom",
        status: "overdue",
        date: "14 days",
        Vendor: "150,000",
        Amount: "30,000",
        Actions: "",
      },
        {
          Bill: "Anom",
          status: "overdue",
          date: "14 days",
          Vendor: "150,000",
          Amount: "30,000",
          Actions: "",
        },
        {
          Bill: "Anom",
          status: "overdue",
          date: "14 days",
          Vendor: "150,000",
          Amount: "30,000",
          Actions: "",
        }
        
        
      ];
    return (
        <div className="container">
        <table>
          <tr>
            <th>Bill #</th>
            <th>Status</th>
            <th>Date</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
          {data.map((key, item) => {
            return (
              <tr key={key} value={item}>
                <td>{item.Bill}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
                <td>{item.due}</td>
                <td>{item.Amount}</td>
                <td>{item.Actions}</td>
              </tr>
            );
          })}
        </table>
      </div>
    )
}

export default NewBillTable
