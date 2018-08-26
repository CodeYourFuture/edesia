import React, { Component } from "react";
import { getDeliveryById } from "../../helpers/api";
class DeliveryDetails extends Component {
  constructor() {
    super();
    this.state = {
      delivery: null,
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
          delivery: data
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
        <p>{this.delivery.id} </p>
        <p>{this.delivery.address} </p>
        <p>{this.delivery.deadline} </p>
      </div>
    );
  }
}

export default DeliveryDetails;
