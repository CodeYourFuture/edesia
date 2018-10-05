import React from "react";
import "./style.css";
import PropTypes from "prop-types";

const Track = ({ number }) => (
  <div class="track-container">
    <div class="track-content">
      <div class="front">
        <div class="light" />
        <div class="first-front-wheel">
          <div class="center-of-wheel" />
          <div class="tooth" />
          <div class="tooth" />
          <div class="tooth" />
          <div class="tooth" />
        </div>
      </div>
      <div class="back">
        <div class="content">
          <div class="item-one">
            <strong class="number">{10}</strong>
            <div class="text">
              <p>Deliveries</p>
              <p class="missed">missed</p>
              <p>this week</p>
            </div>
          </div>
          <div class="item-two">
            <strong class="number">{30}</strong>
            <div class="text">
              <p>Deliveries</p>
              <p class="available">available</p>
              <p>this week</p>
            </div>
          </div>
        </div>
        <div class="first-back-wheel">
          {" "}
          <div class="center-of-wheel" />
          <div class="tooth" />
          <div class="tooth" />
          <div class="tooth" />
          <div class="tooth" />
        </div>
        <div class="second-back-wheel">
          <div class="center-of-wheel" />
          <div class="tooth" />
          <div class="tooth" />
          <div class="tooth" />
          <div class="tooth" />
        </div>
      </div>
    </div>
  </div>
);

export default Track;
Track.PropTypes = {
  number: PropTypes.number
};
