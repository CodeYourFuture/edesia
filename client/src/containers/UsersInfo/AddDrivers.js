import React, { Component } from "react";
import { addDrivers } from "../../helpers/api";

class addNewDrivers extends Component {
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
    const { name, email, city, postcode } = this.state;

    addDrivers(name, email, city, postcode).then(result => {
      this.props.history.push("/admin/drivers");
    });
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <div>
            <h3>Add Drivers</h3>
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
              <label for="postcode">Postcode</label>
              <input
                type="text"
                placeholder="Postcode"
                name="postcode"
                onChange={this.onchange}
                required
              />
            </div>
            <div className="form-group">
              <div>
                <label>
                  role:
                  <select
                    name="role"
                    type="dropdown"
                    onChange={this.onchange}
                    required
                  >
                    <option value="None">None</option>
                    <option value="Available">Driver</option>

                    <option value="Pending">Admin</option>
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

export default addNewDrivers;
