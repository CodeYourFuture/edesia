import React, { Component } from "react";
import "./Info.css";
class InfoBubble extends Component {
  render() {
    return (
      <div className="container">
        <div className="info">
          <h2>{this.props.number}</h2>
          <h3>{this.props.text}</h3>
        </div>
        <div className="info">
          <h2>40</h2>
          <h3>Succesfull deliveries</h3>
        </div>
        <div className="info">
          <h2>10</h2>
          <h3>Missed deliveries</h3>
        </div>
      </div>
    );
  }
}

export default InfoBubble;
