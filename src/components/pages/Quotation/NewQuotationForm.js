import React,{useState, useEffect} from 'react'
import NewQuotationTable from './NewQuotationTable';
function NewQuotationForm() {
    const [items, setItems] = useState([]);
    const [addFormData, setAddFormData] = useState({
      item: "",
      Description: "",
      Quantity: "",
      Rate: "",
      Amount:""
    });
    const [addClient, setAddClient] = useState({client: ""})
  
    const [editFormData, setEditFormData] = useState({
      item: "",
      Description: "",
      Quantity: "",
      Rate: "",
      Amount:""
    });
      
    const [editItemId, setEditItemId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newItem = {
        id: Math.floor(1000 + Math.random() * 9000),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };
  
      const newItems = [...items, newItem];
      console.log(newItems)
      setItems(newItems);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedItem = {
        id: editItemId,
        item: editFormData.item,
        Description: editFormData.Description,
        Quantity: editFormData.Quantity,
        Rate: editFormData.rate,
        Amount: editFormData.amount

      };
  
      const newItems = [...items];
  
      const index = items.findIndex((item) => item.id === editItemId);
  
      newItems[index] = editedItem;
  
      setItems(newItems);
      setEditItemId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditItemId(items.id);
  
      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditItemId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...items];
  
      const index = items.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setItems(newContacts);
    };
    return (

      <div className="add-form">
        <fragment>
        {
             items.map((items) => {
                return (
                  <NewQuotationTable
                    items={items}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )
              })
            }


        </fragment>
       
            
        
         <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="InvoiceNo"
          required="required"
          placeholder="InvoiceNo"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="status"
          required="required"
          placeholder="status"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="client"
          required="required"
          placeholder="client"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="due"
          required="required"
          placeholder="due"
          onChange={handleAddFormChange}
        />
          <input
          type="text"
          name="Paid"
          required="required"
          placeholder="Paid"
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="Balance"
          required="required"
          placeholder="Balance"
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="Actions"
          required="required"
          placeholder="Actions"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      </div>
       
    )
}

export default NewQuotationForm
