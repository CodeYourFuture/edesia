import React, { Component } from "react";
import { getDeliveryById } from "../../helpers/api";
import { Link } from "react-router-dom";
import PickupButton from "../../components/PickupButton/PickupButton";
import "./DeliveryDetails.css";
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
    return (
      <div className="details">
        {this.state.notFound ? (
          <div>
            <h4> {this.state.message}</h4>
            <p>
              <Link to="/">Go back</Link>
            </p>
          </div>
        ) : (
          <div>
            <h4> Delivery Details</h4>
            <ul>
              <li>
                Delivery Id <strong>{deliveryInfo.delivery_id}</strong>
              </li>
              <li>
                Delivery address <strong>{deliveryInfo.address}</strong>
              </li>
              <li>
                Delivery deadline <strong> {deliveryInfo.deadline}</strong>
              </li>
            </ul>
            {token ? (
              <PickupButton deliveryId={deliveryInfo.delivery_id} />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
export default DeliveryDetails;
