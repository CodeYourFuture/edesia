import React, { Component } from "react";
import { updateUserProfile, getUserProfile } from "../../helpers/api";

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      name: "",
      city: "Glasgow",
      postcode: "",
      password: "",
      successUpdate: null,
      confirmPassword: ""
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

    getUserProfile().then(response => {
      this.setState({
        user_id: response.data.user_id,
        name: response.data.name,
        city: response.data.city,
        postcode: response.data.postcode,
        password: response.data.password
      });
    });
  }

  handleSave = event => {
    event.preventDefault();
    let content = {
      name: this.state.name,
      city: this.state.city,
      postcode: this.state.postcode,
      password: this.state.password
    };

    if (
      this.state.password &&
      this.state.password === this.state.confirmPassword
    ) {
      updateUserProfile(this.state.user_id, content)
        .then(response => this.setState({ successUpdate: true }))
        .catch(err => {
          this.setState({ successUpdate: false });
        });
    } else {
      this.setState({ successUpdate: false });
      // setTimeout(() => this.setState({ successUpdate: null }), 2000);
    }
    setTimeout(() => this.setState({ successUpdate: null }), 2000);
  };

  renderResult = () => {
    if (this.state.successUpdate === null) return null;

    if (this.state.successUpdate) {
      return (
        <div class="alert alert-success" role="alert">
          Your information has been updated successfully
        </div>
      );
    } else {
      return (
        <div class="alert alert-primary" role="alert">
          An error occurred while updating your profile. Please try again
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-2">
          <h2>Edit Profile</h2>
          <form name="form" onSubmit={this.handleSave}>
            <div className="form-group">
              <label> Name:</label>
              <input
                className="form-control"
                type="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                City:
                <select
                  className="form-control"
                  name="city"
                  type="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                >
                  <option value="Glasgow">Glasgow</option>
                  <option value="Edinburgh">Edinburgh</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <label>Postcode:</label>
              <input
                type="postcode"
                name="postcode"
                className="form-control"
                value={this.state.postcode}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label> Password:</label>
              <input
                required
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label> confirmPassword:</label>
              <input
                required
                className="form-control"
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary">Update Profile </button>
            </div>
          </form>
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

export default UpdateProfile;
