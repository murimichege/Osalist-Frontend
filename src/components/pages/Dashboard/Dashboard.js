import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import businessprofile from "../../../icons/businessprofile.png";
import TopNav from "../TopNav/TopNav";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="container">
      <div>
        <Sidebar />
      </div>
      <div>
        <TopNav />
      </div>
      <div className="New-item-headers">
        <h1>Welcome to your accounting</h1>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card-image">
          <div className="image-container">
          <img src={businessprofile} alt="" width="150px" height="120px" />

          </div>
          <div className="image-caption">
            <Link to="/">Customize Invoices</Link>
          </div>
        </div>
        <div className="dashboard-card-image">
        <div className="image-container">

          <img src={businessprofile} alt="" width="150px" height="120px" />
          </div>
          <div className="image-caption">
            <Link to="/">Add Users</Link>
          </div>
        </div>
        <div className="dashboard-card-image">
        <div className="image-container">

          <img src={businessprofile} alt="" width="150px" height="120px" />
          </div>
          <div className="image-caption">
            <Link to="/">Set up charts for accounts</Link>
          </div>
        </div>
      </div>
      <div className="dashboard-button">
        <button>Not now</button>
      </div>
    </div>
  );
}

export default Dashboard;
