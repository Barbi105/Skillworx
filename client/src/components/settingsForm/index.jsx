import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from '../grid/grid';
import API from "../../utils/API";
import "./settingsForm.css";

export class SettingsForm extends Component {
  state = {
    email: "",
    image: "",
    skills: [],
    bio: ""
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

      const { email, image, skills, bio } = this.state;
      const userObj = { email, image, skills, bio };

      API.updateUser(userObj).then(res => {
        console.log(res.data);
        this.props.history.push("/profile")
      });
    
  }

  render() {
    return (
      <div id="postForm-jumbotron" className="jumbotron">
        <Row>
          <Col size="col-md-2" />
          <Col size="col-md-8">
            <div className="mt-5 text-center">
              <h2>Edit Profile</h2>
              <form>
                <div className="form-group">
                  <input type="text"
                    className="form-control"
                    id="image-input"
                    name="image"
                    placeholder="Profile Image URL"
                    value={this.state.image}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="bio"
                    id="bio-input"
                    rows="5"
                    placeholder="Bio"
                    value={this.state.bio}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group" >
                  <input
                    className="form-control"
                    name="skills"
                    id="skills-input"
                    placeholder="Add skills"
                    value={this.state.skills}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="email-input"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <Link
                  to="/profile"
                  className="btn btn-primary-outline signup-submit-barb"
                  id="cancel-submit">
                  Cancel
                </Link>
                <button
                  onClick={this.handleFormSubmit}
                  type="submit"
                  className="btn btn-primary "
                  id="signup-submit">
                  Submit
                </button>
                
                

              </form>
            </div>
          </Col>
          <Col size="col-md-2" />
        </Row>
      </div>
    )
  }
}
export default withRouter(SettingsForm);