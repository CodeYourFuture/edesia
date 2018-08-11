import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Deliveries from "../Deliveries/Deliveries";
import DriversRegistration from "../Drivers/Register";
import Notifications from "../Notifications/Notifications";

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
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/deliveries" component={Deliveries} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/drivers-register" component={DriversRegistration} />
        </div>
      </Router>
    );
  }
}

export default App;
