import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Deliveries from "../Deliveries/Deliveries";
<<<<<<< HEAD
import DriversRegistration from "../Drivers/Register";
import Notifications from "../Notifications/Notifications";
import Stores_contacts from "../Stores_contacts/Stores_contacts";
=======
import UpdateProfile from "../Drivers/UpdateProfile";
>>>>>>> upstream/master

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
<<<<<<< HEAD
          <Route path="/notifications" component={Notifications} />
          <Route path="/drivers-register" component={DriversRegistration} />
          <Route path="/stores_contacts" component={Stores_contacts} />
=======
          <Route path="/drivers-register" component={UpdateProfile} />
>>>>>>> upstream/master
        </div>
      </Router>
    );
  }
}

export default App;
