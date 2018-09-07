import React from "react";
import PropTypes from "prop-types";
import "./InfoBubble.css";

const InfoBubble = props => {
  return (
    <div className=" info-bubble row">
      <div className="info col-sm-12 col-md-3">
        <h3>
          {props.number} {props.text}
        </h3>
      </div>
      <div className="info col-sm-12 col-md-3">
        <h3>40 successful deliveries</h3>
      </div>
      <div className="info col-sm-12 col-md-3">
        <h3>10 Missed deliveries</h3>
      </div>
    </div>
  );
};
export default InfoBubble;
InfoBubble.PropTypes = {
  number: PropTypes.number,
  text: PropTypes.string
};
