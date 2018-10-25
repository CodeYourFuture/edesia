import React, { Component } from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./Menu.css";
import RightNavBar from "../Menu/RightNavBar/RightNavBar";

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
      <header className="navbar-header">
        <div className="navbar navbar-default">
          <div className="navbar-left">
            <div className="navbar-logo ">
              <Logo />
            </div>
            <nav className="navbar-nav navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="collapsibleContent">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-brand active ">
                    <Link to="/" className="nav-link ">
                      <i className="fas fa-home " /> home
                    </Link>
                  </li>

                  {token && userRole === "admin" ? (
                    <li className="navbar-brand">
                      <Link to="/admin" className="nav-link ">
                        <i class="fas fa-user-cog" /> admin
                      </Link>
                    </li>
                  ) : null}

                  <li className="navbar-brand">
                    <Link to="/deliveries" className="nav-link">
                      <i className="fas fa-truck" /> deliveries
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
                        <i className="fas fa-key" /> login
                      </Link>
                    </li>
                  ) : null}
                  {token ? (
                    <li className="navbar-brand">
                      <a className="nav-link" onClick={this.logout}>
                        <i className="fas fa-lock" /> logout
                      </a>
                    </li>
                  ) : null}
                  {!token ? (
                    <li className="navbar-brand">
                      <Link to="/register" className="nav-link">
                        <i className="fas fa-user-plus" /> register
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>

              <RightNavBar />
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default withRouter(Menu);
