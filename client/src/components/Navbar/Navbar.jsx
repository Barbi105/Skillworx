import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <span className="navbar-brand mb-0">
          <span className="cap-brand">S</span>
          <span className="small-cap-brand">kill</span>
          <span className="cap-brand">W</span>
          <span className="small-cap-brand">orx</span>
        </span>
        <div className="d-flex">
          <div className="nav-item">
            <p>Services</p>
          </div>
          <div className="nav-item">
            <p>Sign Up</p>
          </div>
          <div className="nav-item">
            <p>Log In</p>
          </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
