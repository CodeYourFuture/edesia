import React, { Component } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";

class Deliveries extends Component {
  render() {
    return (
      <div className="App">
        <h2>Deliveries </h2>
        <DeliveryDetails />
      </div>
    );
  }
}

export default Deliveries;
