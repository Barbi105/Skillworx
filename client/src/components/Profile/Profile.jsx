import React from 'react'
import "./Profile.css"

function Profile() {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
        <img id="user-pic" src="./assets/images/elizabethMiller.jpg" alt="user pic"></img>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <h1 className="text-right mb-3">Elizabeth Miller</h1>
        <h2 className="text-left">Bio</h2>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate labore molestias praesentium nostrum, ipsum, esse fugiat itaque id alias eaque incidunt dolore saepe. Ex culpa nisi iure possimus explicabo!
        </p>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <h4 className="text-left mb-3">Skills</h4>
        {/* <ul>
          <li>Painting</li>
          <li>Coding</li>
          <li>Cleaning</li>
          <li>Mentoring</li>
        </ul> */}
        <div id="skill-block">
          <div className="skill">Painting</div>
          <div className="skill">Coding</div>
          <div className="skill">Cleaning</div>
          <div className="skill">Mentoring</div>

        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <div className="card">
          <p>reviews</p>
        </div>
      </div>
    </div>
    
  )
}

export default Profile
