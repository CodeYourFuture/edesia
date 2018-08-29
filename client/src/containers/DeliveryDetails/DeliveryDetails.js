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
    try {
      console.log(delivery_id);
      getDeliveryById(delivery_id).then(data => {
        console.log(data);
        this.setState({
          delivery: data.data
        });
      });
    } catch (err) {
      this.setState({
        message: "No matching delivery was found in our system"
      });
    }
  }
  render() {
    return (
      <div>
        <h4> Delivery Details</h4>
        <p>
          Delivery Id <strong>{this.state.delivery.delivery_id}</strong>
        </p>
        <p>
          Delivery address <strong>{this.state.delivery.address}</strong>
        </p>
        <p>
          Delivery deadline <strong> {this.state.delivery.deadline}</strong>
        </p>
      </div>
    );
  }
}

export default DeliveryDetails;
