import React, { Component } from "react";
import axios from "axios";
import HighlightedLink from "../../components/HighlightedLink/HighlightedLink";
import { withRouter, Link } from "react-router-dom";

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

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li className="navbar-brand active">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              {token && userRole === "admin" ? (
                <li className="navbar-brand">
                  <Link to="/admin" class="nav-link ">
                    Edesia admin
                  </Link>
                </li>
              ) : null}

              <li className="navbar-brand">
                <Link to="/deliveries" class="nav-link">
                  Deliveries
                </Link>
              </li>
              {!token ? (
                <li className="navbar-brand">
                  <Link to="/login" class="nav-link">
                    Login
                  </Link>
                </li>
              ) : null}
              {!token ? (
                <li className="navbar-brand">
                  <Link to="/register" class="nav-link">
                    Register
                  </Link>
                </li>
              ) : null}
              {token && userRole === "user" ? (
                <li className="navbar-brand">
                  <Link to="/profile" class="nav-link">
                    Profile
                  </Link>
                </li>
              ) : null}
              {token ? (
                <li className="navbar-brand">
                  <button
                    className=" nav-link btn btn-outline-primary"
                    onClick={this.logout}
                  >
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Menu);
