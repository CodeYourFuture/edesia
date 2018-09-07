import React from "react";
import "./deliveryCard.css";
import { Link } from "react-router-dom";

const deliveryCard = props => (
  <div className="delivery-card col-sm-12 col-md-3 ">
    <h3>
      <Link to="/deliveries/:delivery_id">{props.storeName}</Link>
    </h3>
  </div>
);

export default deliveryCard;
