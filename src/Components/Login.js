import React from "react";
import { Component } from "react";
import NavBar from "./NavBar";
import './Login.css'
import Homepage from './HomePage';
import { Redirect, Route } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      
    };
  }
  

  handleInput = (e) => {
    this.setState({
      username:e.target.value
    }) 
  }

  handlePassword = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  handleSubmit = () => {
    return <Redirect to={<Homepage/>} />
  }

  render() {
    return (
      <div >
        <NavBar />
        <div className="login">
        <form>
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
            placeholder="Enter Password"
            onChange={this.handleInput}
        />
          <button
            className="button"
            onClick={this.handleSubmit}>
          Login
        </button>
            <a> Forgot Password? </a>
            </form>
          </div>

      </div>
    );
  }
}

export default Login;
