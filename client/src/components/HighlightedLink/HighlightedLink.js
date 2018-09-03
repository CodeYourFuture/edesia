import React, { Component } from "react";
import PropTypes from "prop-types";
import "./custom.css";

class HighlightedLink extends Component {
  goToDriverRegistration = () => {
    window.location.assign("/register");
  };
  render() {
    return (
      <div className="customLink">
        <a onClick={this.goToDriverRegistration}> {this.props.text}</a>
      </div>
    );
  }
}
export default HighlightedLink;
HighlightedLink.PropTypes = {
  text: PropTypes.string
};
