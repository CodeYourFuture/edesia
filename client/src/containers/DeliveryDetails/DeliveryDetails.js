import React, { Component } from "react";
import { getDeliveryById } from "../../helpers/api";

class DeliveryDetails extends Component {
  constructor() {
    super();
    this.state = {
      delivery: {},
      message: ""
    };
  }
  componentDidMount() {
    console.log(this.props);
    const delivery_id = this.props.match.params.deliveryId;
    console.log(delivery_id);
    getDeliveryById(delivery_id).then(data => {
      console.log(data);
      this.setState({
        delivery: data.data
      });
      console.log(this.state.delivery);
    });
  }
  render() {
    const deliveryInfo = this.state.delivery;
    const message = "No matching delivery was found in our system";
    if (deliveryInfo === {}) {
      return (
        <div>
          <h4> Delivery Details</h4>
          <p>
            Delivery Id <strong>{deliveryInfo.delivery_id}</strong>
          </p>
          <p>
            Delivery address <strong>{deliveryInfo.address}</strong>
          </p>
          <p>
            Delivery deadline <strong> {deliveryInfo.deadline}</strong>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h4> {message} </h4>
        </div>
      );
    }
  }
}

export default DeliveryDetails;
