import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Edesia</h1>
        </header>
<<<<<<< HEAD
        <div className="App-intro">
          {this.state.users.map((user, value) => (
            <p key={value}>{user.name} </p>
          ))}
        </div>
=======
        <p className="App-intro" />
        <h2>Food pickups and missed pickups </h2>
>>>>>>> b398b81542e9991f394150b2ca178b1a3e7d34eb
      </div>
    );
  }
}

export default Home;
