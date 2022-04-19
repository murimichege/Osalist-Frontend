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
      <div className="dashboard-cards">
        <div className="dashboard-card-image">
          <img
            src={businessprofile}
            alt=""
            className="dashboard-logo-image"
            width="150px"
            height="120px"
          />
          <Link to="/" >
            Customize Invoices
          </Link>
        </div>
        <div className="dashboard-card-image">
          <img
            src={businessprofile}
            alt=""
            className="dashboard-logo-image"
            width="150px"
            height="120px"
          />

          <Link to="/" >
            Add Users
          </Link>
        </div>
        <div className="dashboard-card-image">
          <img
            src={businessprofile}
            alt=""
            className="dashboard-logo-image"
            width="150px"
            height="120px"
          />
          <Link to="/" >
            Customize Invoices
          </Link>
        </div>
      </div>
      <button>Not Now</button>
    </div>
  );
}

export default Dashboard;
