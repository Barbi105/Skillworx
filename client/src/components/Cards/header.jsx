import React from 'react'

function TaskHeader({
    firstName,
    image,
    title,
    zipcode
}) {
  return (
    <div>
      <div className="card-header">
        <img src="./assets/images/elizabethMiller.jpg" alt="user"></img>
        <div className="card-header-text">
          <h6 className="text-right">First Name</h6>

          <h4 className="text-right">{title}</h4>
          <i className="font-awesome text-right fas fa-map-marker-alt"> {zipcode}</i>
        </div>
      </div>
      
    </div>

  )
}

export default TaskHeader;
