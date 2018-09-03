import React from "react";
import PropTypes from "prop-types";
import "./HighlightedLink.css";

const HighlightedLink = props => {
  return (
    <div className="custom-link">
      <a onClick={props.onClick}> {props.text}</a>
    </div>
  );
};

export default HighlightedLink;
HighlightedLink.PropTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
