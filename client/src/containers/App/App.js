import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Deliveries from "../Deliveries/Deliveries";
import UpdateProfile from "../Profile/UpdateProfile";
import Profile from "../Profile/Profile";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import Dashboard from "../../components/Dashboard/Dashboard";
import DeliveriesAdmin from "../DeliveriesAdmin/DeliveriesAdmin";
import AddDeliveries from "../DeliveriesAdmin/AddDeliveries";
import Menu from "../Menu/Menu";

class App extends Component {
  render() {
    const token = localStorage.getItem("jwtToken");
    return (
      <Router>
        <div className="app">
          <Menu />
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/deliveries" component={Deliveries} />
          <Route path="/deliveries/:deliveryId" component={DeliveryDetails} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/deliveries/add" component={AddDeliveries} />
          <Route exact path="/admin/deliveries" component={DeliveriesAdmin} />
          <Route path="/admin/drivers" component={UpdateProfile} />

          {token ? <Route path="/profile" component={Profile} /> : null}
          <Route path="/profile/updateProfile" component={UpdateProfile} />
        </div>
      </Router>
    );
  }
}
export default App;
