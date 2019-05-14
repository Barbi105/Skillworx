import React from 'react'
import ApplyButton from '../applyJob/applyJob'
import "./Task.css"
import moment from "moment"


function Task({
  title,
  description,
  zipcode,
  date,
  payRate,
  _id
}) {
  return (
    // <div >
    //   <div className="card-header">
    //    <TaskHeader/>
    //   </div>
    //   <div className="card-header-text">
    //     <h4 className="text-right">{title}</h4>
    //     <i className="font-awesome text-right fas fa-map-marker-alt"> {zipcode}</i>
    //   </div>
    //   <div className="card-body" id="taskCard">
    //     <p>{description}</p>
    //     <h6>{date}</h6>
    //     <h4>{payRate}</h4><i className="font-awesome mr-3 text-right far fa-envelope"></i>
    //     <ApplyButton _id={_id} />
    //   </div>
    // </div>
    // <div >
    <div className="card mb-3 mr-3 task-cards">
      <div className="card-header">
        <img src="./assets/images/elizabethMiller.jpg" alt="user"></img>
        <div className="card-header-text">
          <h4 className="text-right">{title}</h4>
          <h6 className="text-right">User Name</h6>
          <i className="font-awesome far fa-envelope"></i>

          <i className="font-awesome text-right fas fa-map-marker-alt"></i><span>{zipcode}</span>
        </div>

      </div>
      <div className="card-body task-card-body">
        <p className="text-left">{description}</p>
        <p id="date" className="text-left">{moment(date).format("MM/DD/YYYY")}</p>
        <p id="payRate" className="text-left">{payRate}</p>

        <ApplyButton/>
      </div>
    </div>  
  // </div>
  )
}

export default Task
