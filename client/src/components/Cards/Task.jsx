import React from 'react'
import "./Task.css"

function Task() {
  return (
    <div >
      <div className="card mb-3 mr-3">
        <div className="card-header">
          <img src="./assets/images/elizabethMiller.jpg" alt="user"></img>
          <div className="card-header-text">
            <h4 className="text-right">Task Name</h4>
            <h6 className="text-right">User Name</h6>
            <i className="font-awesome mr-3 text-right far fa-envelope"></i>
            <i className="font-awesome text-right fas fa-map-marker-alt"></i>
          </div>
          
        </div>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
      </div>  
    </div>
    
  )
}

export default Task
