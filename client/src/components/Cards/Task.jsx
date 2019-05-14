import React from 'react'
import ApplyButton from '../applyJob/applyJob'
import TaskHeader from './header.jsx'
import "./Task.css"


function Task({
  title,
  description,
  zipcode,
  date,
  payRate,
  _id
}) {
  return (
    <div >
      <div className="card-header">
       <TaskHeader/>
      </div>
      <div className="card-header-text">
        <h4 className="text-right">{title}</h4>
        <i className="font-awesome text-right fas fa-map-marker-alt"> {zipcode}</i>
      </div>
      <div className="card-body" id="taskCard">
        <p>{description}</p>
        <h6>{date}</h6>
        <h4>{payRate}</h4><i className="font-awesome mr-3 text-right far fa-envelope"></i>
        <ApplyButton _id={_id} />
      </div>
    </div>

  )
}

export default Task
