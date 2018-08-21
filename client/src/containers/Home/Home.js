import React, { Component } from "react";
import { getUsers } from "../../helpers/api";

class Home extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    getUsers().then(data => {
      this.setState({
        users: data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Edesia</h1>
        </header>
        <div className="App-intro">
          {this.state.users.map(user => (
            <p>{user.name} </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
