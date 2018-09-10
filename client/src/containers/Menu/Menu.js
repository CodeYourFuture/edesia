import React, { Component } from "react";
import axios from "axios";
import HighlightedLink from "../../components/HighlightedLink/HighlightedLink";
import { withRouter, Link } from "react-router-dom";

class Menu extends Component {
  state = {
    loggedIn: false
  };
  componentDidMount = async () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };
  logout = () => {
    localStorage.removeItem("jwtToken");
    window.location = "/";
  };
  goToDriverRegistration = () => {
    this.props.history.push("/register");
  };
  render() {
    const token = localStorage.getItem("jwtToken");
    return (
      <div>
        <HighlightedLink
          text="Register as driver"
          onClick={this.goToDriverRegistration}
        />

        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/admin"> Edesia admin </Link>
          </li>

          <li>
            <Link to="/deliveries"> Deliveries </Link>
          </li>
          {!token ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : null}
          {!token ? (
            <li>
              <Link to="/register">Register</Link>
            </li>
          ) : null}
          {token ? (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ) : null}
          {token ? (
            <li>
              <button className="btn btn-primary" onClick={this.logout}>
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}
export default withRouter(Menu);
