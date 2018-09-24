import React, { Component } from "react";
import { getMyDeliveries } from "../../helpers/api";
import "../DeliveriesAdmin/Table.css";
class MyDeliveries extends Component {
  state = {
    deliveries: []
  };
  componentDidMount = async () => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const driver_id = JSON.parse(user).user_id;
        const { data } = await getMyDeliveries(driver_id);
        this.setState({
          deliveries: data
        });
      } catch (e) {
        this.setState({
          deliveries: []
        });
        console.error(e);
      }
    }
  };
  render() {
    const { deliveries } = this.state;
    return (
      <div className="app">
        <h2> My Deliveries</h2>
        <div className="table-responsive">
          <table className="table table-bordered ">
            <thead>
              <tr className="table table-success">
                <th scope="col">Delivery Id </th>
                <th scope="col">Address </th>
                <th scope="col"> Deadline </th>
                <th scope="col"> status </th>
                <th scope="col">driver Id </th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {deliveries.map(delivery => (
                <tr className="delivery-row">
                  <th scope="row">{delivery.delivery_id} </th>
                  <td>{delivery.address} </td>
                  <td>{delivery.deadline} </td>
                  <td>{delivery.status} </td>
                  <td>{delivery.driver_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default MyDeliveries;
