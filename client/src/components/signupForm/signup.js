import React, { Component } from 'react'
import API from "../../utils/API"
import "./signup.css"

export class SignupForm extends Component {
    state={
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      };
handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.name ||!this.state.lastName ||!this.state.email || !this.state.password) {
      // alert("Please fill out all fields");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a longer password`
      );
    } else {
      API.signup(this.state).then((res)=>{
        console.log(res.data);
      })
    }
  }
  render() {
    return (
        <div className="jumbotron">
            <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="nameSignup" name="firstName" placeholder="First Name" value={this.state.name} onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="lastName" id="lastNameSignup" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="usernameSignup" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="userPasswordSignup" name="password" placeholder="password" value={this.state.password}onChange={this.handleInputChange} required/>
                  </div>
                  <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary" id="signup-submit">Sign up</button>
                </form>
        </div>
        ) 
      }
    }
    export default SignupForm;