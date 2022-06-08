import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import AddItem from "./AddItem";
import  Table from './Table'
function FormDataTable() {
 
  
 
  const [tableData, setTableData] = useState([])
console.log(tableData)
 

 
const handleSubmit= (evnt,item, amount, rate, quantity, description) =>{
    evnt.preventDefault();
    // const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
    // if(checkEmptyInput)
    // {
    //  const newData = (data)=>([...data, formInputData])
    //  setTableData(newData);
    //  const emptyInput= {item:'', amount:'', rate:'', quantity: '',description:''}
    //  setformInputData(emptyInput)
    // }
    const formInputData = {
      item, 
      amount, 
      rate, 
      quantity, 
      description
    }
    
    setTableData(formInputData)
}  


  return (
    <React.Fragment>
    <div className="container">
    <div className="row">
        <AddItem  handleSubmit={handleSubmit}/>
        <NewInvoice tableData={tableData}/>
        
    </div>
   </div>
    </React.Fragment>
  );
}

export default FormDataTable;
