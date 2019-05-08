import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import API from "../../utils/API"

export class LoginForm extends Component {
  state={
    email: "",
    password: "",
    redirectTo: null
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
    if (!this.state.email || !this.state.password) {
      alert("Enter email and password!!!");
    }  else {
      const { email, password } = this.state;

      API.login({ email, password }).then((res)=>{
        this.setState({ redirectTo: res.data });
      }).catch(err => {
        console.log(err);
      })
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }

    return (
        <div className="jumbotron">
                <form className="login">
                  <div class="form-group">
                    <input type="text" class="form-control" id="usernameLogin" placeholder="username" name="email" value={this.state.email} onChange={this.handleInputChange} />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="userPasswordLogin" placeholder="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                  </div>
                  <button onClick={this.handleFormSubmit} type="submit" class="btn btn-primary" id="login-submit">login</button>
                </form>
        </div>
        ) 
      }
    }
   
    export default LoginForm;