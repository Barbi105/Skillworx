import React from 'react'

function UserSettings() {
  return (
    <div id="postForm-jumbotron" className="jumbotron"  >
          <h2>Post a job:</h2>
            <form>
                  <div className="form-group">
                    <input type="text" className="form-control" id="titleJob" name="title" placeholder="Title" value={this.state.title} onChange={this.handleInputChange} required/>
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
                    <textarea className="form-control" name="description" id="descriptionJob" rows="5" placeholder="Decribe the task at hand" value={this.state.description} onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="zipcodeJob" name="zipcode" placeholder="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="payRateJob" name="payRate" placeholder="$ /hr" value={this.state.payRate}onChange={this.handleInputChange} required/>
                  </div>
                  <div className="form-group">
                    <input type="date" className="form-control" id="dateJob" name="date" placeholder="date for task" value={this.state.date}onChange={this.handleInputChange} required/>
                  </div>
                  <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary signup-submit-barb" id="signup-submit">Post job</button>
                </form>
        </div>
  )
}

export default UserSettings
