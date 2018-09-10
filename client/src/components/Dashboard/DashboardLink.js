import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const DashboardLink = props => {
  return (
    <div className="dashboard-link">
      <Link to={props.link}>
        <button className=" ">{props.text}</button>
      </Link>
    </div>
  );
};

export default DashboardLink;
