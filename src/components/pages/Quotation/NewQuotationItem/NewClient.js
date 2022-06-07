import React from "react";
//import { Fragment } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./styles.css";
import NewQuotationTable from '../NewQuotationTable'

function AddClientModal({ setIsOpen }) {
  const [items ,setItems] = React.useState()
  const[addFormData, setAddFormData] = React.useState({
    businessName : "",
    fullName :"",
    email: "",
    phoneNumber:"",
    address:"",
    City:"",
    Country:""
  })

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: Math.floor(1000 + Math.random() * 9000),
      businessName: addFormData.businessName,
      fullName: addFormData.fullName,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
      address: addFormData.address,
      City: addFormData.City,
      Country: addFormData.Country,
    };

    const newItems = [...newItem];
    console.log(newItems)
    setItems(newItems);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  
  return (

   
    <div className="modalBackground">
       {

          <>
            <NewQuotationTable
            items={items}
            />
          </>
}
      <div className="modalContainer">
        <div className="title">
          <h1>New Client</h1>
        </div>
        <div className="title">
          <h2>Basic Information</h2>
          <hr
            style={{
              align: "left",
              marginTop: "10px",
              width: "35% ",
              marginRight: "0",
            }}
          />
        </div>

        <div className="title-right">
          <h1>Billing address</h1>
        </div>
        <hr
          style={{
            align: "right",
            marginTop: "10px",
            width: "35% ",
            marginRight: "0",
          }}
        />

        <div className="modal-form-container">
          <div className="modal-container-left">
            <form className="register-form" onSubmit={handleAddFormSubmit}>
              <label for="address">Client</label>
              <input
                className="register-input"
                name="businessName"
                placeholder="Name of the business or person "
                onChange={handleAddFormChange}
              />
              <label for="address">Primary Contact</label>

              <input className="register-input" name="fullName" placeholder="Name" />
              <input
                className="register-input"
                name="email"
                type="text"
                placeholder="Email"
                onChange={handleAddFormChange}

              />
              <input
                className="register-input"
                name="phoneNumber"
                type="number"
                placeholder="Phone"
                onChange={handleAddFormChange}

              />
            </form>
          </div>

          <div className="profile-container-right">
            <form className="register-form">
              <label for="address" style={{ marginLeft: "170px" }}>
                Physical Address
              </label>

              <input
                className="register-input"
                name="address"
                type="text"
                onChange={handleAddFormChange}
                placeholder="Keystone Park,  Riverside Drive "
              />
              <input
                className="register-input"
                name="City"
                type="text"
                placeholder="City"
                onChange={handleAddFormChange}

              />

              <input
                className="register-input"
                type="text"
                name="Country"
                placeholder="Country"
                onChange={handleAddFormChange}

              />
            </form>
          </div>

          <div className="modal-buttons">
        <button onClick={() => setIsOpen(false)}>cancel</button>
        <button>Save</button>
      </div>
    

        </div>
      </div>
     
    </div>
  );
}

export default AddClientModal;

