import React, { Component } from "react";
import { updateDeliveryDetail, getDeliveryById } from "../../helpers/api";

class UpdateDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery_id: null,
      address: "",
      store_name: "",
      deadline: "",
      status: ""
    };
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

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

  handleSave = event => {
    event.preventDefault();
    let content = {
      address: this.state.address,
      store_name: this.state.store_name,
      deadline: this.state.deadline,
      status: this.state.status
    };

    const updateConfirmed = window.confirm;
    if (updateConfirmed) {
      updateDeliveryDetail(this.state.delivery_id, content).then(response =>
        this.setState({
          address: response.address,
          store_name: response.store_name,
          deadline: response.deadline,
          status: response.status
        })
      );
    }
    this.props.history.push("/admin/deliveries");
  };

  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-2">
          <h2>Edit Delivery</h2>
          <form name="delivery-form" onSubmit={this.handleSave}>
            <div className="form-group">
              <label>
                {" "}
                Store Name:
                <input
                  className="form-control"
                  type="text"
                  name="store_name"
                  value={this.state.store_name}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Address:
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Deadline:
                <input
                  className="form-control"
                  type="datetime"
                  name="deadline"
                  value={this.state.deadline}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                {" "}
                Status:
                <select
                  name="status"
                  type="text"
                  value={this.state.status}
                  onChange={this.handleChange}
                >
                  <option value="All">All</option>
                  <option value="Available">Available</option>

                  <option value="Pending">Pending</option>

                  <option value="Delivered">Delivered</option>

                  <option value="Cancelled">Cancelled</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateDelivery;
