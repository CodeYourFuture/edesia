import React from "react";
import PropTypes from "prop-types";
import "./Info.css";

const InfoBubble = props => {
  return (
    <div className="container">
      <div className="info">
        <h2>{props.number}</h2>
        <h3>{props.text}</h3>
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
};
export default InfoBubble;
InfoBubble.PropTypes = {
  number: PropTypes.number,
  text: PropTypes.string
};
