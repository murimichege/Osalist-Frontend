import React from 'react'

function BillModalTable() {
    const data = [
    
        {
          Item: "Anom",
          Category: "overdue",
          Description: "14 days",
          QTY: "150,000",
          Rate: "30,000",
          Amount: "",
        }         
          
        ];

    return (
        <div className="container">
        <table>
          <tr>
            <th>Item</th>
            <th>Expense Category</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
          {data.map((key, item) => {
            return (
              <tr key={key} value={item}>
                <td>{item.Item}</td>
                <td>{item.Category}</td>
                <td>{item.Description}</td>
                <td>{item.QTY}</td>
                <td>{item.Rate}</td>
                <td>{item.Amount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    )
}

export default BillModalTable
