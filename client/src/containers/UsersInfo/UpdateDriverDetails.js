import React, { Component } from "react";
import { updateDriverDetail, getDriverById } from "../../helpers/api";

class UpdateDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      name: "",
      email: "",
      city: "",
      postcode: "",
      role: ""
    };
  }

  handleChange = e => {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    getDriverById(userId).then(response => {
      this.setState({
        user_id: response.data.user_id,
        name: response.data.name,
        email: response.data.email,
        city: response.data.city,
        postcode: response.data.postcode,
        role: response.data.role
      });
    });
  }

  handleSave = event => {
    event.preventDefault();
    let content = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      postcode: this.state.postcode,
      role: this.state.role
    };

    const updateConfirmed = window.confirm;
    if (updateConfirmed) {
      updateDriverDetail(this.state.user_id, content).then(response =>
        this.setState({
          name: response.name,
          email: response.email,
          city: response.city,
          postcode: response.postcode,
          role: response.role
        })
      );
    }
    this.props.history.push("/admin/drivers");
  };

  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-2">
          <h2>Edit Driver</h2>
          <form name="delivery-form" onSubmit={this.handleSave}>
            <div className="form-group">
              <label>
                Name:
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                E-mail:
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                City:
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Postcode:
                <input
                  className="form-control"
                  type="text"
                  name="postcode"
                  value={this.state.postcode}
                  onChange={this.handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>
                Role:
                <select
                  name="role"
                  type="text"
                  value={this.state.role}
                  onChange={this.handleChange}
                >
                  <option value="none">None</option>
                  <option value="driver">Driver</option>

                  <option value="admin">Admin</option>
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

export default UpdateDriver;
