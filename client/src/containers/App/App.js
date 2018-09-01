import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Deliveries from "../Deliveries/Deliveries";
import UpdateProfile from "../Profile/UpdateProfile";
import Profile from "../Profile/Profile";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import axios from "axios";
import Dashboard from "../../components/Dashboard/Dashboard";
import DeliveriesAdmin from "../DeliveriesAdmin/DeliveriesAdmin";

class App extends Component {
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
  render() {
    const token = localStorage.getItem("jwtToken");
    return (
      <Router>
        <div className="app">
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
          <hr />
          <Route exact path="/" component={Home} />

          <Route exact path="/deliveries" component={Deliveries} />
          <Route path="/deliveries/:deliveryId" component={DeliveryDetails} />
          <Route path="/drivers" component={UpdateProfile} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/admin/deliveries" component={DeliveriesAdmin} />
          <Route path="/admin/drivers" component={UpdateProfile} />

          {token ? <Route path="/profile" component={Profile} /> : null}
          <Route path="/profile/updateProfile" component={UpdateProfile} />
        </div>
      </Router>
    );
  }
}
export default App;
