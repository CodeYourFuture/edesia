import React from "react";
import DashboardLink from "./DashboardLink";
import "./Dashboard.css";

const Dashboard = props => {
  return (
    <div className="dashboard-title">
      <h1>Edesia Admin</h1>

      <div className="dashboard-buttons">
        <DashboardLink
          text="Deliveries"
          link="/admin/deliveries"
          className="button-admin"
        />
        <DashboardLink
          text="Drivers"
          link="/admin/drivers"
          className="button-admin"
        />
      </div>
    </div>
  );
};

export default Dashboard;
