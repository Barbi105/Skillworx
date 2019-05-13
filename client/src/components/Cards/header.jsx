import React from 'react'

function TaskHeader({
    firstName,
    image
}) {
  return (
    <div >
      <div className="card-header">
        <img src="./assets/images/elizabethMiller.jpg" alt="user"></img>
        <h6 className="text-right">{firstName}</h6>
      </div>
    </div>

  )
}

export default TaskHeader;
