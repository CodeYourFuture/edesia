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
import Logo from "../../components/Logo";
// import UpdateDelivery from "../DeliveriesAdmin/UpdateDelivery";
import DeleteDelivery from "../DeliveriesAdmin/DeleteDelivery";
import AddDeliveries from "../DeliveriesAdmin/AddDeliveries";
import Menu from "../Menu/Menu";
import MyDeliveries from "../MyDeliveries/MyDeliveries";
import UsersDetail from "../UsersInfo/UsersDetail";
import EditUser from "../../components/EditUser/EditUser";
import addDrivers from "../UsersInfo/AddDrivers";

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
          <Route exact path="/mydeliveries" component={MyDeliveries} />
          <Route path="/deliveries/:deliveryId" component={DeliveryDetails} />
          <Route exact path="/admin/drivers/add" component={addDrivers} />
          <Route exact path="/admin/drivers" component={UsersDetail} />

          <Route path="/admin/users/edit/:userId" component={EditUser} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/deliveries/add" component={AddDeliveries} />
          <Route exact path="/admin/deliveries" component={DeliveriesAdmin} />
          {/* <Route
            exact
            path="/admin/deliveries/:deliveryId(\d+)"
            component={UpdateDelivery}
          /> */}
          <Route
            exact
            path="/admin/deliveries/:deliveryId(\d+)"
            component={DeleteDelivery}
          />

          {token ? <Route path="/profile" component={Profile} /> : null}
          {/* <Route path="/profile/updateProfile" component={UpdateProfile} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
