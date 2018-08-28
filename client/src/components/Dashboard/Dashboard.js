import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardLink from "./DashboardLink";

const Dashboard = props => {
  return (
    <div>
      <h1>Edesia Admin</h1>
      <span>
        <DashboardLink text="Deliveries" link="/admin/deliveries" />
      </span>
      <span>
        <DashboardLink text="Drivers" link="/admin/drivers" />
      </span>
    </div>
  );
};

export default Dashboard;
