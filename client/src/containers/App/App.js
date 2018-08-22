import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Deliveries from "../Deliveries/Deliveries";
import UpdateProfile from "../Drivers/UpdateProfile";
import Notifications from "../Notifications/Notifications";
import Stores_contacts from "../Stores_contacts/Stores_contacts";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/deliveries"> Deliveries </Link>
            </li>
            <li>
              <Link to="/drivers-register"> Drivers Registration </Link>
            </li>
            <li>
              <Link to="/notifications"> Notifications </Link>
            </li>
            <li>
              <Link to="/stores_contacts"> Stores Contacts </Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/deliveries" component={Deliveries} />
          <Route path="/drivers-register" component={UpdateProfile} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/stores_contacts" component={Stores_contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
