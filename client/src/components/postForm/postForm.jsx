import React, { Component } from 'react'
import API from "../../utils/API"
import { Container, Row } from '../grid/grid';
import "./postForm.css"

export class PostForm extends Component {
  state = {
    title: "",
    description: "",
    zipcode: "",
    date: "",
    payRate: "",
    type: "Select Type"
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
    if (!this.state.title || !this.state.description || !this.state.zipcode || !this.state.date || !this.state.payRate || !this.state.type) {
      alert("Please fill out all fields");
    } else {
      API.saveJob(this.state).then((res) => {
        console.log(res.data);
      })
    }
  }
  render() {
    return (
      <div id="postForm-jumbotron" className="jumbotron">
        <h2 id="postTitle">Post a Job</h2>
        <Container>
          <Row>
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <form id="postForm">
                <div className="form-group">
                  <input type="text" className="form-control" id="titleJob" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} required />
                </div>
                <div className="form-group" >
                  <select className="form-control" name="type" onChange={this.handleInputChange}>
                    <option value="" disabled selected>Select your option</option>
                    <option value="Housework">Housework</option>
                    <option value="Yardwork">Yardwork</option>
                    <option value="Furniture Assembly">Furniture Assembly</option>
                    <option value="Tutoring">Tutoring</option>
                    <option value="Pet Care">Pet Care</option>
                    <option value="IT">IT</option>
                    <option value="Misc">Misc</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="description" id="descriptionJob" rows="5" placeholder="Describe the task at hand" value={this.state.description} onChange={this.handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="zipcodeJob" name="zipcode" placeholder="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="payRateJob" name="payRate" placeholder="$ /hr" value={this.state.payRate} onChange={this.handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="date" className="form-control" id="dateJob" name="date" placeholder="date for task" value={this.state.date} onChange={this.handleInputChange} required />
                </div>
                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary signup-submit-barb" id="signup-submit">Post job</button>
              </form>
            </div>
            <div className="col-lg-2"></div>
          </Row>
        </Container>
      </div>
    )
  }
}
export default PostForm;