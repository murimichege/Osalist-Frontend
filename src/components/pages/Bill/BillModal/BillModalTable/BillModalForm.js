import React, { useState } from "react";
import "./styles.css";
import Select from 'react-select'

function BillModalForm({rowsData, handleChange, addTableRows}) {
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    
           rowsData.map((data, index)=>{
          const {item, ExpenseCategory, Description, Quantity, Amount,Actions}= data;
          return(
              <tr key={index}>
              <td>  <Select options={options}   className="form-control" />
 </td>
              <td><Select options={options}  className="form-control" className="form-control"/> </td>
              <td><input type="text" value={Description}  onChange={(evnt)=>(handleChange(index, evnt))} name="Description" className="form-control"/> </td>
              <td><input type="text" value={Quantity}  onChange={(evnt)=>(handleChange(index, evnt))} name="Quantity" className="form-control" /> </td>
              <td><input type="text" value={Amount}  onChange={(evnt)=>(handleChange(index, evnt))} name="Amount" className="form-control" /> </td>
              <td><input type="text" value={Actions}  onChange={(evnt)=>(handleChange(index, evnt))} name="Actions" className="form-control"/> </td>



          </tr>
          )
      })
    
 
  )
  
}
export default BillModalForm;
