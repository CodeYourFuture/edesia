import React, { Component, Fragment } from "react";
import InfoBubble from "../../components/InfoBubble/InfoBubble";
import { getDeliveries } from "../../helpers/api";
import DeliveryCard from "../../components/DeliveryCard/deliveryCard";
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
        <header className="App-header">
          <h1 className="App-title">Welcome to Edesia</h1>
        </header>
        <p className="App-intro" />
        <h2>Food pickups report </h2>
        <InfoBubble number="50" text="Deliveries this week" />

        <div className="App">
          <h2> Current Available Deliveries </h2>
          <div className="container">
            <div className="row delivery-row">
              {deliveriesList &&
                deliveriesList.map(delivery => {
                  console.log(delivery);
                  return (
                    <Fragment>
                      <DeliveryCard
                        storeName={delivery.store_name}
                        id={delivery.delivery_id}
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
