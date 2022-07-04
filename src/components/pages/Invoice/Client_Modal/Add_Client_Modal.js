import React from "react";

function AddClientModal(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    props.formdata({ address, name, email, phone });
    event.target.reset();
    //event.target.reset();

    // console.log(businessName)
  };

  if (!props.setIsOpen) {
    return null;
  } else {
    return (
      <div className="modalBackground">
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
            <form onSubmit={handleSubmit}>
              <div className="modal-container-left">
                <label for="address">Client</label>
                <input
                  className="register-input"
                  name="address"
                  placeholder="Name of the business or person"
                />
                <label for="address">Primary Contact</label>
                <input
                  className="register-input"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="register-input"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="register-input"
                  id="key"
                  name="phone"
                  type="number"
                  placeholder="Phone"
                />
                
              </div>
              <div className="modal-container-right">
              <label style={{
                marginLeft:"70px"



              }}>Physical Address</label>
                <input
                  className="register-input"
                  name="name"
                  placeholder="Name"
                />
                <div style={{
                  marginTop:"32px"
                }}>
                <input
                  className="register-input"
                  name="email"
                  type="password"
                  placeholder="Email"
                />
                <input
                  className="register-input"
                  id="key"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                />
                </div>
                
                
</div>
<div className="modal-buttons">
                  <button onClick={() => props.setIsOpen(false)}>cancel</button>
                  <button onClick={() => handleSubmit()}>Save</button>
                </div>{" "}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClientModal;
