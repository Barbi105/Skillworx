import React from 'react'
import ApplyButton from '../applyJob/applyJob'
import "./Task.css"


function Task() {
  return (
    <div >
      <div className="card-header">
        <img src="./assets/images/elizabethMiller.jpg" alt="user"></img>
      </div>
      <div className="card-header-text">
        <h4 className="text-right">Task title</h4>
        <h6 className="text-right">First Name</h6>
        <i className="font-awesome text-right fas fa-map-marker-alt"> zipcode</i>
      </div>
      <div className="card-body">
        <p>Detailed description of the job posted by the user..</p>
        <h6>mm/dd/year</h6>
        <h4>$$$/hour</h4><i className="font-awesome mr-3 text-right far fa-envelope"></i>
        < ApplyButton />
      </div>
    </div>

  )
}

export default Task
