import React from "react"
import NavBar from "./NavBar"
import "./Registration.css"

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email:"",
      password: "",
    };
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword=this.handlePassword.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target
    this.setState( (prevState) => ({ ...prevState, [name]:e.target.value }) )
  }
  handleFirstName(e) {
    this.setState(
      {
        firstname:e.target.value
      }
    )
  }
  handleLastName(e) {
    this.setState(
      {
        lastname:e.target.value
      }
    )
  }
  handleEmail(e) {
    this.setState(
      {
        email:e.target.value
      }
    )
  }
  handlePassword(e) {
    this.setState(
      {
        password:e.target.value
      }
    )
  }
  
  render() {
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.email);
    console.log(this.state.password);
const data =  this.state.firstname
    return (
      <div>
        <NavBar />
        <div className="register">
          <form>
          <input
              type="text"
              name='firstname'
            placeholder="First Name"
            onChange={this.handleFirstName}
        />
        <input
              type="text"
              name="last name"
              placeholder="Last Name"
              onChange={this.handleLastName}
              required
          />
          <input
              type="email"
              name="email"
              placeholder="yourname@gmail.com"
              onChange={this.handleEmail}
              required
        />
        <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handlePassword}
              required
        />
          <button
            className="button"
            onClick={ () => alert(this.state.firstname + ' ' +  this.state.lastname + ' ' +  this.state.email + ' ' + this.state.password)}>
            Register
        </button>
        </form>
        </div>
        </div>
    );
  }
}

export default Registration;
