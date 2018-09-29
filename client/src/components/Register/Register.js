import React, { Component } from "react";
import "../Login/Login.css";
import { postUser } from "../../helpers/api";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      city: "",
      postcode: ""
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password, name, city, postcode } = this.state;
    postUser(email, password, name, city, postcode).then(result => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div class="container">
        <form class="form-signin">
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail">Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="John"
            name="name"
            onChange={this.onChange}
            required
          />
          <label for="inputCity">City</label>
          <input
            type="city"
            class="form-control"
            placeholder="Glasgow"
            name="city"
            onChange={this.onChange}
            required
          />
          <label for="inputPostcode">Postcode</label>
          <input
            type="postcode"
            class="form-control"
            placeholder="G20 4EF"
            name="postcode"
            onChange={this.onChange}
            required
          />
          <label for="inputEmail"> Email </label>
          <input
            type="email"
            class="form-control"
            placeholder="John@email.com"
            name="email"
            onChange={this.onChange}
            required
          />
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="***********"
            name="password"
            onChange={this.onChange}
            required
          />
          <button
            class="btn btn-lg btn-success btn-block"
            type="submit"
            onClick={this.onSubmit}
          >
            Continue
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
