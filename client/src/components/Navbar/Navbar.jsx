import React from 'react'
import "./Navbar.css"
import DropDown from '../NavbarDropDown/index'

function Navbar() {
  return (
    <div id="fixedNavbar">
    <nav className="navbar navbar-light notLanding" >
      <span className="navbar-brand mb-0">
        <span className="cap-brand">S</span>
        <span className="small-cap-brand kill">kill</span>
        <span className="cap-brand w">W</span>
        <span className="small-cap-brand">orx</span>
      </span>
      <div className="d-flex mr-5">
     <DropDown/>
      </div>

    </nav>
  </div>
  )
}

export default Navbar
