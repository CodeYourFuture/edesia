import React, { Component } from "react";
import { Link } from "react-router-dom";

const DashboardLink = () => {
  return (
    <div>
      <h2>{props.dashboardHead}</h2>
      <div className="row">
        <div className="col-lg-12">
          <Link to={props.deliveriesLink}>
            <button className="btn btn-primary">
              <i className="fa fa-plus fa-fw" />
              {props.deliveries}
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Link to="/admin/drivers">
            <button className="btn btn-primary">
              <i className="fa fa-plus fa-fw" /> {props.drivers}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLink;
