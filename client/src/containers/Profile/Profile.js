import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="App">Profile page ....</div>;
        <ul>
          <li>
            <Link to="/profile/updateProfile">
              Edit Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
