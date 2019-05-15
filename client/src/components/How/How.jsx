import React from 'react'
import "./How.css"

function How() {
  return (
    <div className="jumbotron" id="how-section">
      <h2 className="text-center">How it works</h2>

      <div class="card-group">
  <div class="card">
    <img src="./assets/images/card1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">1</h5>
      <p class="card-text"> Let us know what you are in need of whether it's finding someone with a particular set of skills
      or someone who needs the skills you have to offer.</p>
    </div>
  </div>
  <div class="card">
    <img src="./assets/images/card3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">2</h5>
      <p class="card-text">Based on what you're looking for,
            we'll match you up with people who have the skills to help you out or pair you with people that are in need of your skill-set.
      </p>
   
    </div>
  </div>
  <div class="card">
    <img src="./assets/images/card2-2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">3</h5>
      <p class="card-text">Send them a message to make arrangements and leave each other a review once the job is done. 
            Enjoy the mutually benificial engagement faciliated by SkillWorx! </p>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default How
