import React, { Component } from "react";
import { Link } from "react-router-dom";

const DashboardLink = props => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Link to={props.link}>
            <button className="btn btn-primary">
              <i className="fa fa-plus fa-fw" />
              {props.text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLink;
