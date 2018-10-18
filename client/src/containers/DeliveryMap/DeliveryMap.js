import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { getDeliveriesAdmin } from "../../helpers/api";
import "./DeliveryMap.css";

const DeliveryLocation = ({ text }) => (
  <div className="location-text">{text}</div>
);

class DeliveryMap extends Component {
  constructor() {
    super();
    this.state = { deliveriesList: [] };
  }
  static defaultProps = {
    center: {
      lat: 55.8505,
      lng: -4.28775
    },
    zoom: 8
  };
  componentDidMount() {
    getDeliveriesAdmin().then(data =>
      this.setState({
        deliveriesList: data.data
      })
    );
    console.log(this.state.deliveriesList);
  }

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
          {this.state.deliveriesList.map(delivery => {
            <DeliveryLocation
              lat={55.8505}
              lng={-4.28775}
              text={delivery.store_name}
            />;
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default DeliveryMap;
