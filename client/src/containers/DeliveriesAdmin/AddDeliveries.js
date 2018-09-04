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
        <div className="content">
          <div>
            <h3>Schedule a Delivery</h3>
          </div>

          <form class="add-deliveries-form">
            <div>
              <label for="title">Date</label>
              <input type="date" placeholder="Date" required />
            </div>
            <div>
              <label for="Title" class="sr-only">
                Title
              </label>
              <input type="text" placeholder="Title" required />
            </div>
            <div>
              <button class="btn btn-lg btn-warning btn-block" type="submit">
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
