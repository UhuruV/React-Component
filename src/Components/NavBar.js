import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import "../App.css"

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
