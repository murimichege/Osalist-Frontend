import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Security from "../../icons/Security.png";

function ChangePassword() {
  const notify = () => 
  toast.success('Updating Password', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    draggable: true,
    progress: undefined,
    });
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={Security} alt="" className="login-logo-image" />
      </div>
      <div className="welcome-caption">
        <h1>Security Update</h1>
      </div>
      <form className="change-pass-form">
        <input
          className="key-input"
          id="key"
          type="password"
          label="Product Key"
          placeholder="Current Password"
        />
        <input
          className="key-input"
          id="key"
          label="Product Key"
          placeholder="New Password"
        />
        <input
          className="key-input"
          id="key"
          label="Product Key"
          placeholder="Confirm New Password"
        />
      </form>

      <div className="activate-button">
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
                <button onClick={notify, ()=> navigate("/")}>Update</button>

      </div>
    </div>
  );
}

export default ChangePassword;
