import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./DeliveryMap.css";

const DeliveryLocation = ({ text }) => (
  <div className="location-text">{text}</div>
);

class DeliveryMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.8505,
      lng: -4.28775
    },
    zoom: 8
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={
            this.props.center // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          }
          defaultZoom={this.props.zoom}
        >
          <DeliveryLocation lat={55.8505} lng={-4.28775} text={"Tesco"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default DeliveryMap;
