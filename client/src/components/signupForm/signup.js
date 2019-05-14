import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../grid/grid";
import "./signup.css";

export class SignupForm extends Component {
  state = {
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
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.password
    ) {
      alert("Please fill out all fields");
    } else if (this.state.password.length < 6) {
      alert(`Choose a longer password`);
    } else {
      API.signup(this.state).then(res => {
        console.log(res.data);
      });
    }
  };
  render() {
    return (
      <div className="jumbotron">
        <Container fluid>
          <div className="row">
            <div className="col-md-6" id="leftMessage">
              <h2 className="ml-4" id="topMessage">Tidy Space.</h2>
              <h2 className="ml-4" id="bottomMessage">Happy Mind.</h2>
              <p className="catchyPhrase ml-4">
                The ways clearing your space can improve your life.
              </p>
              <p className="catchyPhrase ml-4">
                The ways clearing your space can improve your life.
              </p>
              <p className="catchyPhrase ml-4" id="lastPhrase">
                The ways clearing your space can improve your life.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <h3>Join the Community</h3>
              <form className="ml-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        id="nameSignup"
                        name="firstName"
                        placeholder="   First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-plaintext"
                        name="lastName"
                        id="lastNameSignup"
                        placeholder="   Last Name"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-plaintext"
                    id="usernameSignup"
                    name="email"
                    placeholder="   Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control-plaintext"
                    id="userPasswordSignup"
                    name="password"
                    placeholder="   Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn-lg"
                  id="signup-submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      // <div className="d-flex">
      //   <div className="jumbotron mr-3 leftLanding">
      //     <h2>Tidy Space.</h2>
      //     <h2>Happy Mind.</h2>
      //     <p>The ways clearing your space can improve your life.</p>
      //   </div>
      //   <div className="jumbotron w-100">
      //     <form>
      //       <div className="form-group">
      //         <input type="text" className="form-control-plaintext" id="nameSignup" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleInputChange} required />
      //       </div>
      //       <div className="form-group">
      //         <input type="text" className="form-control-plaintext" name="lastName" id="lastNameSignup" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} required />
      //       </div>
      //       <div className="form-group">
      //         <input type="email" className="form-control-plaintext" id="usernameSignup" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} required />
      //       </div>
      //       <div className="form-group">
      //         <input type="password" className="form-control-plaintext" id="userPasswordSignup" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} required />
      //       </div>
      //       <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary" id="signup-submit">Sign up</button>
      //     </form>
      //   </div>
      // </div>
    );
  }
}
export default SignupForm;
