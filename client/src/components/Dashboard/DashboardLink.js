import React, { Component } from "react";
import { Link } from "react-router-dom";

const DashboardLink = props => {
  return (
    <div>
      <h2>{props.dashboardHead}</h2>
      <div className="row">
        <div className="col-lg-12">
          <Link to={props.text}>
            <button className="btn btn-primary">
              <i className="fa fa-plus fa-fw" />
              {props.link}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLink;
