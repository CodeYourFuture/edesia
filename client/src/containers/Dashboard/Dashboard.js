import React, { Component } from "react";
import DashboardLink from "../../components/Dashboard/DashboardLink";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardLink dashboardHead="Edesia Admin" />
        <DashboardLink
          deliveries="Deliveries"
          deliveriesLink="../Deliveries/Deliveries"
        />
        <DashboardLink drivers="Drivers" driversLink="../Drivers/Drivers" />
      </div>
    );
  }
}
export default Dashboard;
