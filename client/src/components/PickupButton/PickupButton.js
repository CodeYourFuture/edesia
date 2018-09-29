import React, { Component } from "react";
import HighlightedLink from "../HighlightedLink/HighlightedLink";
import { pickupDelivery } from "../../helpers/api";

class PickupButton extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  onClick = () => {
    const { deliveryId } = this.props;
    pickupDelivery(deliveryId).then(response => {
      if (response.status === 200) {
        this.setState({
          message: `Thank you! Delivery ${deliveryId} at Store Lidl will be waiting for you to bring to our Food Bank`
        });
      } else if (response.status === 401) {
        this.setState({
          message:
            "Sorry, we could not perform this operation. Please try again and if the problem persists then please contact us"
        });
      } else if (response.status < 600 && this.state.status >= 500) {
        this.setState({
          message: "An error has occurred. We are working hard on fixing it"
        });
      }
    });
  };
  render() {
    return (
      <div>
        <HighlightedLink text="I can Pickup 👍🏾" onClick={this.onClick} />
        <br />
        <br />
        {this.state.message !== "" && (
          <div class="alert alert-info" role="alert">
            {this.state.message}
          </div>
        )}
      </div>
    );
  }
}
export default PickupButton;
