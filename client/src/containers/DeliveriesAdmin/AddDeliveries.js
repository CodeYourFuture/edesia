import React, { Component } from "react";
import { addDeliveries } from "../../helpers/api";

class AddDeliveries extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      deadline: "",
      status: "",
      driver_id: ""
    };
  }

  onchange = input => {
    const state = this.state;
    state[input.target.name] = input.target.value;
    this.setState(state);
  };

  onSubmit = input => {
    input.preventDefault();
    const { address, deadline, status, driver_id } = this.state;
    addDeliveries(address, deadline, status, driver_id).then(result => {
      this.props.history.push("/admin/Deliveries");
    });
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <div>
            <h3>Schedule a Delivery</h3>
          </div>

          <form class="add-deliveries-form">
            <div>
              <label for="address">Address</label>
              <input
                type="address"
                placeholder="Address"
                name="address"
                onChange={this.onchange}
                required
              />
            </div>
            <div>
              <label for="deadline">Deadline</label>
              <input
                type="date"
                placeholder="Deadline"
                name="deadline"
                onChange={this.onchange}
                required
              />
            </div>
            <div>
              <label for="status">Status</label>
              <input
                type="text"
                placeholder="Status"
                name="status"
                onChange={this.onchange}
                required
              />
            </div>
            <div>
              <label for="driver_id">Driver Id</label>
              <input
                type="id"
                placeholder="Driver Id"
                name="driver_Id"
                onChange={this.onchange}
                required
              />
            </div>
            <div>
              <button
                class="btn btn-lg btn-warning btn-block"
                type="submit"
                onClick={this.onSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddDeliveries;
