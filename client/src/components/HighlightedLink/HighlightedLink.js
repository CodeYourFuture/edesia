import React from "react";
import PropTypes from "prop-types";
import "./HighlightedLink.css";

const HighlightedLink = props => {
  return (
    <div className="custom-link">
      <button className="btn btn-primary" onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default HighlightedLink;
HighlightedLink.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
