import React, { Component } from "react";
import * as api from "../../helpers/api";

export default class Stores_contacts extends Component {
  state = {
    storesContacts: []
  };
  componentDidMount() {
    api.getStoresContacts().then(data => {
      this.setState({
        storesContacts: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1> Stores_contacts </h1>
        <div>
          {this.state.storesContacts.map(storeContact => {
            return (
              <div>
                <p> {storeContact.contactId} </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
