import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Deliveries from "../Deliveries/Deliveries";
<<<<<<< HEAD
import UpdateProfile from "../Drivers/UpdateProfile";
import Notifications from "../Notifications/Notifications";
import Stores_contacts from "../Stores_contacts/Stores_contacts";
=======
import Profile from "../Profile/Profile";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import axios from "axios";
>>>>>>> b398b81542e9991f394150b2ca178b1a3e7d34eb

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
    window.location.reload();
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
              <Link to="/deliveries"> Deliveries </Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/drivers-register"> Drivers Registration </Link>
            </li>
            <li>
              <Link to="/notifications"> Notifications </Link>
            </li>
            <li>
              <Link to="/stores_contacts"> Stores Contacts </Link>
=======
              <Link to="/register">Register</Link>
>>>>>>> b398b81542e9991f394150b2ca178b1a3e7d34eb
            </li>
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
          <Route path="/deliveries" component={Deliveries} />
<<<<<<< HEAD
          <Route path="/drivers-register" component={UpdateProfile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/stores_contacts" component={Stores_contacts} />
=======
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {token ? <Route path="/profile" component={Profile} /> : null}
>>>>>>> b398b81542e9991f394150b2ca178b1a3e7d34eb
        </div>
      </Router>
    );
  }
}
export default App;
