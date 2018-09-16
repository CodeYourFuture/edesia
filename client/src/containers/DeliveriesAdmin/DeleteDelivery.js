import React, { Component } from "react";
import { deleteDelivery, getDeliveryById } from "../../helpers/api";

class DeleteDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: null,
      address: "",
      store_name: "",
      deadline: "",
      status: ""
    };
  }

  componentDidMount() {
    const deliveryId = this.props.match.params.deliveryId;
    getDeliveryById(deliveryId).then(response => {
      this.setState({
        delivery_id: response.data.delivery_id,
        address: response.data.address,
        store_name: response.data.store_name,
        deadline: response.data.deadline,
        status: response.data.status
      });
    });
  }

  onDelete = event => {
    event.preventDefault();

    const deleteConfirmed = window.confirm(
      "Are you sure you want to delete this delivery?"
    );

    if (deleteConfirmed) {
      deleteDelivery(this.state.delivery_id).then(response => {
        this.props.history.push("/admin/deliveries");
      });
    }
  };

  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-2">
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteDelivery;
