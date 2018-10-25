import React, { Component } from "react";
import { Link } from "react-router-dom";
import Initial from "../Initial";
import "./RightNavBar.css";

class RightNavBar extends Component {
  render() {
    const token = localStorage.getItem("jwtToken");
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a
              className={`dropdown-toggle ${!token ? "logged-in" : ""}`}
              data-toggle="dropdown"
              href=""
            >
              {token ? (
                <div className="navbar-relative-top">
                  <Initial />
                </div>
              ) : (
                <i className="fas fa-user" />
              )}
            </a>
            <ul className="dropdown-menu dropdown-menu-right">
              {!token ? (
                <li className="navbar-fas">
                  <Link to="/login">
                    <i className="fas fa-key" /> login
                  </Link>
                </li>
              ) : null}
              {token ? (
                <li className="navbar-fas">
                  <Link to="/profile">
                    <i className="fas fa-user-circle" /> my Profile
                  </Link>
                </li>
              ) : null}
              <li className="navbar-fas">
                <a href="">
                  <i className="fas fa-cog" /> settings
                </a>
              </li>

              <li role="separator" className="divider" />
              <li className="navbar-fas">
                {localStorage.getItem("jwtToken") && (
                  <a href="" onClick={this.logout}>
                    <i className="fas fa-lock" /> logout
                  </a>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default RightNavBar;
