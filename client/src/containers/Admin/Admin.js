import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Admin Dashboard</h2>
        <div className="row">
          <div className="col-lg-12">
            <Link to="/admin/deliveries">
              <button className="btn btn-primary">
                <i className="fa fa-plus fa-fw" />
                Deliveries
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Link to="/admin/drivers">
              <button className="btn btn-primary">
                <i className="fa fa-plus fa-fw" /> Drivers
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
