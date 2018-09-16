import React, { Component } from "react";
import { getDeliveriesAdmin } from "../../helpers/api";
import { Link, withRouter } from "react-router-dom";

import "./Table.css";
class DeliveriesAdmin extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: [],
      status: "All",
      filteredDeliveries: []
    };
  }
  componentDidMount = async () => {
    const data = await getDeliveriesAdmin();
    console.log(data);
    this.setState({
      deliveries: data.data,
      filteredDeliveries: data.data
    });
  };
  onClick = () => {
    console.log("onClick working");
  };
  handleChange = e => {
    const val = e.target.value;
    this.setState({ status: val });
    if (val === "All") {
      this.setState({
        filteredDeliveries: this.state.deliveries
      });
    } else {
      this.setState({
        filteredDeliveries: this.state.deliveries.filter(function(delivery) {
          return delivery.status === val;
        })
      });
    }
  };
  onChange = e => {
    const searchValue = e.target.value;
    this.setState({
      filteredDeliveries: this.state.deliveries.filter(delivery => {
        return delivery.address
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      })
    });
  };
  render() {
    const sortedDeliveries = this.state.filteredDeliveries.sort((a, b) => {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    });
    return (
      <div className="App">
        <h2> All Deliveries</h2>
        <h3>
          <Link to="/admin/deliveries/add"> Add Delivery </Link>
        </h3>
        <br />
        <div>
          <label>
            Status:
            <select name="status" type="status" onChange={this.handleChange}>
              <option value="All">All</option>
              <option value="Available">Available</option>

              <option value="Pending">Pending</option>

              <option value="Delivered">Delivered</option>

              <option value="Cancelled">Cancelled</option>
            </select>
          </label>
        </div>
        <br />
        <label>Search: </label>
        <input onChange={this.onChange} placeholder="search by area" />
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
                <td>
                  <Link to={`/admin/deliveries/${delivery.delivery_id}`}>
                    {" "}
                    Edit{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(DeliveriesAdmin);
