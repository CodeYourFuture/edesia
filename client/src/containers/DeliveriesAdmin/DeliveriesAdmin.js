import React, { Component } from "react";
import { getDeliveriesAdmin } from "../../helpers/api";
import { Link } from "react-router-dom";
import "./Table.css";
class DeliveriesAdmin extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: []
    };
  }
  componentDidMount = async () => {
    const data = await getDeliveriesAdmin();
    console.log(data);
    this.setState({
      deliveries: data.data
    });
  };
  onClick = () => {
    console.log("onClick working");
  };
  render() {
    const sortedDeliveries = this.state.deliveries.sort((a, b) => {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    });
    return (
      <div className="App">
        <h2> All Deliveries</h2>
        <h3>
          <Link to="/admin/deliveries/add"> Add Delivery </Link>
        </h3>

        <table className="results">
          <thead>
            <tr>
              <th>Delivery Id </th>
              <th>address </th>
              <th> Deadline </th>
              <th> Status</th>
              <th>driver_id </th>
            </tr>
          </thead>
          <tbody>
            {sortedDeliveries.map(delivery => (
              <tr className="delivery-row" onClick={this.onClick}>
                <td>{delivery.delivery_id} </td>
                <td>{delivery.address} </td>
                <td>{delivery.deadline} </td>
                <td>{delivery.status} </td>
                <td>{delivery.driver_id} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeliveriesAdmin;
