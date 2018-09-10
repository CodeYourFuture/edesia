import React, { Component } from "react";
import { getDeliveryById } from "../../helpers/api";
import { Link } from "react-router-dom";
import PickupButton from "../../components/PickupButton/PickupButton";
class DeliveryDetails extends Component {
  constructor() {
    super();
    this.state = {
      delivery: {},
      notFound: false,
      message: ""
    };
  }
  componentDidMount = async () => {
    const delivery_id = this.props.match.params.deliveryId;
    try {
      const data = await getDeliveryById(delivery_id);
      this.setState({
        delivery: data.data
      });
    } catch (error) {
      this.setState({
        notFound: true,
        message: "No matching delivery was found in our system"
      });
    }
  };

  render() {
    const token = localStorage.getItem("jwtToken");
    const deliveryInfo = this.state.delivery;
    if (this.state.notFound) {
      return (
        <div>
          <h4> {this.state.message}</h4>
          <p>
            <Link to="/">Go back</Link>
          </p>
        </div>
      );
    } else {
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
          {token ? (
            <PickupButton deliveryId={deliveryInfo.delivery_id} />
          ) : null}
        </div>
      );
    }
  }
}

export default DeliveryDetails;
