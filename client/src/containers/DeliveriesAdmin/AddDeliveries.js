import React, { Component } from "react";
import { addDeliveries } from "../../helpers/api";

class AddDeliveries extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      deadline: "",
      status: ""
    };
  }

  onchange = input => {
    const state = this.state;
    state[input.target.name] = input.target.value;
    this.setState(state);
  };

  onSubmit = input => {
    input.preventDefault();
    const { address, deadline, status } = this.state;

    addDeliveries(address, deadline, status).then(result => {
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
                type="date"
                placeholder="Deadline"
                name="deadline"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <div>
                <label>
                  Status:
                  <select
                    name="status"
                    type="dropdown"
                    onChange={this.onChange}
                    required
                  >
                    <option value="Available">Available</option>

                    <option value="Pending">Pending</option>

                    <option value="Delivered">Delivered</option>

                    <option value="Cancelled">Cancelled</option>
                  </select>
                </label>
              </div>
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
