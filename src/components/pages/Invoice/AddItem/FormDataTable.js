import React, { useState } from "react";
import NewInvoice from "../NewInvoice";
import AddItem from "./AddItem";
import  Table from './Table'
function FormDataTable() {
 
  
 
  const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
      item: '',
      amount: '',
      rate: '',
      quantity: '',
      description: '',
    }
 );
 

  const handleChange=(evnt)=>{  
    const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
   setformInputData(newInput)
}
 
const handleSubmit= (evnt) =>{
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
    if(checkEmptyInput)
    {
     const newData = (data)=>([...data, formInputData])
     setTableData(newData);
     const emptyInput= {item:'', amount:'', rate:'', quantity: '',description:''}
     setformInputData(emptyInput)
    }
}  


  return (
    <React.Fragment>
    <div className="container">
    <div className="row">
        <AddItem handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
        <Table tableData={tableData}/>
        
    </div>
   </div>
    </React.Fragment>
  );
}

export default FormDataTable;
