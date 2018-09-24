import React, { Component } from "react";
import { getUsersAdmin } from "../../helpers/api";
import { Link, withRouter } from "react-router-dom";

class UsersAdmin extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount = async () => {
    const data = await getUsersAdmin();
    console.log(data);
    this.setState({
      users: data.data
    });
  };

  onClick = user_id => {
    this.props.history.push(`/admin/users/edit/${user_id}`);
    console.log(user_id);
  };

  render() {
    const sortedUsers = this.state.users.sort(
      (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0)
    );

    return (
      <div className="App">
        <h2> Users Info </h2>
        <Link to="/admin/drivers/add"> Add Drivers </Link>
        <div className="user-info">
          <div className="table-responsive">
            <table className="table table-bordered ">
              <thead>
                <tr className="table table-warning">
                  <th scope="col">User Id </th>
                  <th scope="col">Name </th>
                  <th scope="col"> Email </th>
                  <th scope="col"> City </th>
                  <th scope="col">Postcode </th>
                  <th scope="col"> Role </th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {sortedUsers.map(user => (
                  <tr
                    id={user.user_id}
                    onClick={() => this.onClick(user.user_id)}
                  >
                    <th scope="row">{user.user_id} </th>
                    <td>{user.name} </td>
                    <td>{user.email} </td>
                    <td>{user.city} </td>
                    <td>{user.postcode} </td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UsersAdmin);
