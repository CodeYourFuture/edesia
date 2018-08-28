import React, { Component } from "react";
import InfoBubble from "../../components/InfoBubble/InfoBubble";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Edesia</h1>
        </header>
        <p className="App-intro" />
        <h2>Food pickups report </h2>
        <InfoBubble number="50" text="Deliveries this week" />
      </div>
    );
  }
}

export default Home;
