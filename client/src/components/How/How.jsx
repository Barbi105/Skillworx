import React from 'react'
import "./How.css"

function How() {
  return (
    <div id="how-section">
      <h2 className="text-center">How it works</h2>
      <div className="d-flex justify-content-around">
        <div className="how-item">
          <span className="text-center">1</span>
          <p>
            Let us know what you are in need of whether it's finding someone with a particular set of skills
            or someone who needs the skills you have to offer.
          </p>
        </div>
        <div className="how-item">
          <span className="text-center">2</span>
          <p>
            Based on what you're looking for,
            we'll match you up with people who have the skills to help you out or pair you with people that are in need of your skill-set.
            Our review system makes finding quality assistance easy!
          </p>
        </div>
        <div className="how-item">
          <span className="text-center">3</span>
          <p>
            Send them a message to make arrangements and leave each other a review once the job is done. 
            Enjoy the mutually benificial engagement faciliated by SkillWorx! 
          </p>
        </div>
      </div>
    </div>
  )
}

export default How
