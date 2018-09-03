import React from "react";
import PropTypes from "prop-types";
import "./custom.css";

const HighlightedLink = props => {
  return (
    <div className="customLink">
      <a onClick={props.onClick}> {props.text}</a>
    </div>
  );
};

export default HighlightedLink;
HighlightedLink.PropTypes = {
  text: PropTypes.string
};
