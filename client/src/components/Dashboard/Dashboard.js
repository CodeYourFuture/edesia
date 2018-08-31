import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardLink from "./DashboardLink";
import "./Dashboard.css";
const Dashboard = props => {
  return (
    <div>
      <h1>Edesia Admin</h1>
      <div className="dashboard-buttons">
        <DashboardLink text="Deliveries" link="/admin/deliveries" />
        <DashboardLink text="Drivers" link="/admin/drivers" />
      </div>
    </div>
  );
};

export default Dashboard;
