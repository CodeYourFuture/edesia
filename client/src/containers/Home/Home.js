import React, { Component, Fragment } from "react";
import { getDeliveries } from "../../helpers/api";
import DeliveryCard from "../../components/DeliveryCard/deliveryCard";
import Truck from "../../components/Truck/Truck";
import DeliveryMap from "../DeliveryMap/DeliveryMap";
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = { deliveriesList: null };
  }
  componentDidMount() {
    getDeliveries().then(data =>
      this.setState({
        deliveriesList: data.data
      })
    );
  }

  render() {
    const { deliveriesList } = this.state;
    return (
      <div className="App">
        <p className="App-intro" />
        <Truck info-number="number" />
        <br />
        <div className="App">
          <h3> Current available deliveries</h3>
          <div className="container">
            <div className="row delivery-row">
              {deliveriesList &&
                deliveriesList.map(delivery => {
                  return (
                    <Fragment>
                      <DeliveryCard
                        storeName={delivery.store_name}
                        deliveryId={delivery.delivery_id}
                        address={delivery.address}
                      />
                    </Fragment>
                  );
                })}
            </div>
          </div>
          <br />
          <div>
            <DeliveryMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
