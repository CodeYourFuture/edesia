import React from "react";
import PropTypes from "prop-types";
import "./HighlightedLink.css";
import { Link } from "react-router-dom";

const HighlightedLink = props => {
  return (
    <div className="custom-link">
      <Link to={props.path}>{props.text}</Link>
    </div>
  );
};

export default HighlightedLink;
HighlightedLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
