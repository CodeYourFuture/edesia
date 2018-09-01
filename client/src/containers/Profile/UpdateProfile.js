import React, { Component } from "react";
import "./UpdateProfile.css";
import { updateUserProfile } from "../../helpers/api";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
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

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const user_id = user.user_id;
    this.setState({ user_id: user_id });
  }

  handleSave = event => {
    event.preventDefault();
    let content = {
      name: this.state.name,
      city: this.state.city,
      postcode: this.state.postcode
    };
    updateUserProfile(this.state.user_id, content).then(response =>
      this.setState({ status: response.status })
    );
        event.target.value = "";
  };

  render() {
    return (
      <div>
        <div className="col">
          <h2>Edit Profile</h2>
          <form className="form" name="form" onSubmit={this.handleSave}>
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
              <button className="btn submit">Update Profile </button>
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

export default UpdateProfile;
