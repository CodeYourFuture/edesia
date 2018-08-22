import React, { Component } from "react";
import "./UpdateProfile.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      name: "",
      city: "Glasgow",
      postcode: "",
      status: null
    };
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = event => {
    let content = {
      user_id: this.state.user_id,
      name: this.state.name,
      city: this.state.city,
      postcode: this.state.postcode
    };
    axios.put("/api/users/user_id", content).then(response =>
      this.setState({
        status: response.status
      })
    );
  };

  render() {
    return (
      <div>
        <div className="col">
          <h2>Update Profile</h2>
          <form className="form" name="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label> User ID:</label>
              <input
                type="user_id"
                name="user_id"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label> Name:</label>
              <input type="name" name="name" onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label>
                City:
                <select
                  name="city"
                  type="city"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option className="form-option" value="Glasgow">
                    Glasgow
                  </option>
                  <option className="form-option" value="Edinburgh">
                    Edinburgh
                  </option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label>Postcode:</label>
              <input
                type="postcode"
                name="postcode"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <button className="btn submit">submit </button>
            </div>
          </form>
          {this.state.status === 200
            ? "Your information has been updated successfully"
            : null}
          {this.state.status === 502
            ? "An error occurred while updating your profile. Please try again"
            : null}
        </div>
      </div>
    );
  }
}

export default Register;
