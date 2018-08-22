import React, { Component } from "react";
import axios from "axios";
import "../Login/Login.css";

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

    axios
      .post("http://localhost:4000/api/users", {
        email,
        password,
        name,
        city,
        postcode
      })
      .then(result => {
        this.props.history.push("/login");
      });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div class="container">
        <form class="form-signin">
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputEmail" class="sr-only">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            placeholder="name"
            name="name"
            onChange={this.onChange}
            required
          />
          <label for="inputEmail" class="sr-only">
            City
          </label>
          <input
            type="city"
            class="form-control"
            placeholder="city"
            name="city"
            onChange={this.onChange}
            required
          />
          <label for="inputEmail" class="sr-only">
            Postcode
          </label>
          <input
            type="postcode"
            class="form-control"
            placeholder="postcode"
            name="postcode"
            onChange={this.onChange}
            required
          />
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Email address"
            name="email"
            onChange={this.onChange}
            required
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
            onChange={this.onChange}
            required
          />
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={this.onSubmit}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
