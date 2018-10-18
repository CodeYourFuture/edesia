import React, { Component } from "react";
import axios from "axios";
import HighlightedLink from "../../components/HighlightedLink/HighlightedLink";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./Menu.css";

class Menu extends Component {
  state = {
    loggedIn: false,
    role: ""
  };
  componentDidMount = () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const role = JSON.parse(user).role;
        this.setState({
          role: role
        });
      } catch (e) {
        this.setState({ role: "" });
      }
    } else {
      this.setState({ role: "" });
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
    const { role: userRole } = this.state;
    return (
      <div>
        {!token ? (
          <HighlightedLink
            text="Register as driver"
            onClick={this.goToDriverRegistration}
          />
        ) : null}
        <Logo />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-brand active">
                <Link to="/" className="nav-link">
                  home
                </Link>
              </li>

              {token && userRole === "admin" ? (
                <li className="navbar-brand">
                  <Link to="/admin" className="nav-link ">
                    edesia admin
                  </Link>
                </li>
              ) : null}

              <li className="navbar-brand">
                <Link to="/deliveries" className="nav-link">
                  deliveries
                </Link>
              </li>
              {token && userRole === "driver" ? (
                <li className="navbar-brand">
                  <Link to="/mydeliveries" className="nav-link">
                    my deliveries
                  </Link>
                </li>
              ) : null}
              {!token ? (
                <li className="navbar-brand">
                  <Link to="/login" className="nav-link">
                    login
                  </Link>
                </li>
              ) : null}
              {!token ? (
                <li className="navbar-brand">
                  <Link to="/register" className="nav-link">
                    register
                  </Link>
                </li>
              ) : null}
              {token && userRole === "driver" ? (
                <li className="navbar-brand">
                  <Link to="/profile" className="nav-link">
                    profile
                  </Link>
                </li>
              ) : null}
              {token ? (
                <li className="navbar-brand">
                  <button
                    className=" nav-link btn btn-outline-primary"
                    onClick={this.logout}
                  >
                    logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Menu);
