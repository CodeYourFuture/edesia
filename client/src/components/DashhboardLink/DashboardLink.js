import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drivers from "../../containers/Drivers/Drivers";
import Deliveries from "../../containers/Deliveries/Deliveries";

class DashboardList extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <ul>
            <li>
              <Link to="/drivers"> Drivers </Link>
            </li>

            <li>
              <Link to="/deliveries"> Deliveries </Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/drivers" component={Drivers} />
          <Route path="/deliveries" component={Deliveries} />
        </div>
      </Router>
    );
  }
}
export default DashboardList;
