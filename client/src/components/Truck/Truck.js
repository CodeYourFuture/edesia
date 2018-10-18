import React from "react";
import "./Truck.css";
import propTypes from "prop-types";

const Truck = ({ number }) => (
  <div className="truck-container">
    <div className="truck-content">
      <div className="front">
        <div className="light" />
        <div className="first-front-wheel">
          <div className="center-of-wheel" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
        </div>
      </div>
      <div className="back">
        <div className="content">
          <div className="item-one">
            <strong className="number">{10}</strong>
            <div className="text">
              <p>Deliveries</p>
              <p className="missed">missed</p>
              <p>this week</p>
            </div>
          </div>
          <div className="item-two">
            <strong className="number">{30}</strong>
            <div className="text">
              <p>Deliveries</p>
              <p className="available">available</p>
              <p>this week</p>
            </div>
          </div>
        </div>
        <div className="first-back-wheel">
          {" "}
          <div className="center-of-wheel" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
        </div>
        <div className="second-back-wheel">
          <div className="center-of-wheel" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
        </div>
      </div>
    </div>
  </div>
);

export default Truck;
Truck.propTypes = {
  number: propTypes.number
};
