import React, { Component, Fragment } from "react";
import { getDeliveries } from "../../helpers/api";
import DeliveryCard from "../../components/DeliveryCard/deliveryCard";
import "./home.css";
import Track from "../../components/Track";

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
        <h1 className="App-title">Welcome to Edesia</h1>
        <p className="App-intro" />
        <h2>Food pickups report </h2>
        <Track info-number="number" />
        <div className="App">
          <h2> Current Available Deliveries </h2>
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
        </div>
      </div>
    );
  }
}

export default Home;
