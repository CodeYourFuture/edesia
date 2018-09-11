import React, { Component } from "react";
import { addDeliveries } from "../../helpers/api";

class AddDeliveries extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      deadline: "",
      status: "",
      store_name: ""
    };
  }

  onchange = input => {
    const state = this.state;
    state[input.target.name] = input.target.value;
    this.setState(state);
  };

  onSubmit = input => {
    input.preventDefault();
    const { address, deadline, status, store_name } = this.state;

    addDeliveries(address, deadline, status, store_name).then(result => {
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

          <form className="add-deliveries-form col-sm-2">
            <div className="form-group">
              <label for="store_name">Store name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Store name"
                name="store_name"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <label for="address">Address</label>
              <input
                className="form-control"
                type="address"
                placeholder="Address"
                name="address"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <label for="deadline">Deadline</label>
              <input
                className="form-control"
                type="date"
                placeholder="Deadline"
                name="deadline"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <label for="status">Status</label>
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
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
