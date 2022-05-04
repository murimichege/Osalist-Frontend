import React,{useState} from 'react'


function NewItemForm() {
    const [items, setItems] = useState();
    const [addFormData, setAddFormData] = useState({
      item: "",
      Description: "",
      Quantity: "",
      Rate: "",
      Amount:""
    });
  
    const [editFormData, setEditFormData] = useState({
      item: "",
      Description: "",
      Quantity: "",
      Rate: "",
      Amount:""
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
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
  
      const newContact = {
        id: Math.floor(1000 + Math.random() * 9000),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      };
  
      const newContacts = [...items, newContact];
      setItems(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        item: editFormData.item,
        Description: editFormData.Description,
        Quantity: editFormData.Quantity,
        Rate: editFormData.rate,
        Amount: editFormData.amount

      };
  
      const newContacts = [...items];
  
      const index = items.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setItems(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...items];
  
      const index = items.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setItems(newContacts);
    };
    return (
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
    )
}

export default NewItemForm
