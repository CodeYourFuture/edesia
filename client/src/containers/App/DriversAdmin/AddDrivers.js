import React, { Component } from "react";
import { saveUser } from "../../helpers/api";

class saveUser extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      city: "",
      postcode: "",
      role: ""
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
            <h3>Add/Edit drivers</h3>
          </div>

          <form className="add-drivers-form col-sm-2">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Driver name"
                name="name"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <label for="email">E-mail</label>
              <input
                className="form-control"
                type="E-mail"
                placeholder="E-mail"
                name="email"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <label for="city">City</label>
              <input
                type="text"
                placeholder="City"
                name="City"
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
                    onChange={this.onchange}
                    required
                  >
                    <option value="None">None</option>
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

export default saveUser;
