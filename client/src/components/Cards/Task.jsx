import React from 'react'
import ApplyButton from '../applyJob/applyJob'
import "./Task.css"
import moment from "moment"

function Task({
  title,
  name,
  description,
  date,
  payRate,
  _id,
  createdById,
  image,
  zipcode
}) {
  return (

<div className="card mb-3 mr-3 task-cards">
<div className="card-header">
  <img src={image} alt="user"></img>
  <div className="card-header-text">
    <h4 className="text-right">{title}</h4>
    <h6 className="text-right">{name}</h6>
    <p className="text-right">
    <i className="font-awesome far fa-envelope"></i>
    <i className="font-awesome text-right fas fa-map-marker-alt"></i><span>{zipcode}</span>
    </p>
    
  </div>

</div>
<div className="card-body task-card-body">
  <p className="text-left">{description}</p>
  <p id="date" className="text-left">{moment(date).format("MM/DD/YYYY")}</p>
  <p id="payRate" className="text-left">{payRate}</p>

  <ApplyButton _id={_id} createdById={createdById}/>
</div>
</div>  

  )
}

Task.defaultProps = {
  image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
}

export default Task;
