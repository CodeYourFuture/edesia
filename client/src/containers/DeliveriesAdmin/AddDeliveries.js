import React, { Component } from "react";

class AddDeliveries extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      Title: ""
    };
  }

  render() {
    return (
      <div className="container">
        <form class="add-deliveries-form">
          <label for="title">Date</label>
          <input type="date" placeholder="Date" required />
          <label for="" class="sr-only">
            Title
          </label>
          <input type="text" placeholder="Title" required />
          <button class="btn btn-lg btn-warning btn-block" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddDeliveries;
