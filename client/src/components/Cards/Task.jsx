import React from 'react'
import ApplyButton from '../applyJob/applyJob'
import TaskHeader from './header.jsx'
import "./Task.css"


function Task({
  title,
  description,
  date,
  payRate,
  _id
}) {
  return (
     <div className="col-12 col-sm-12 col-md-4 col-lg-4">
      <div className="card mb-3 mr-3">
        <div className="card-header">
          <img src="./assets/images/elizabethMiller.jpg" alt="user"></img>
          <div className="card-header-text">
            <h4 className="text-right">{title}</h4>
            <h6 className="text-right">User Name</h6>
            <i className="font-awesome mr-3 text-right far fa-envelope"></i>
            <i className="font-awesome text-right fas fa-map-marker-alt"></i>
          </div>

        </div>
        <div className="card-body">
          <p>{description}</p>
          <p>${payRate}</p>
          <ApplyButton></ApplyButton>
        </div>
      </div>  
    </div>

  )
}

export default Task
