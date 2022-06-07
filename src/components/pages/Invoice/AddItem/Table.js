import React,{useState} from 'react'

function Table({tableData}) {
   // const [items, setItems] = useState(tableData)

  return (
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
            <tbody>
            {
               tableData && tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.item}</td>
                            <td>{data.amount}</td>
                            <td>{data.rate}</td>
                            <td>{data.quantity}</td>
                            <td>{data.description}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    
  )
}

export default Table