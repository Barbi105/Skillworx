import React from 'react'
import Signup from "../components/signupForm/signup"
import How from "../components/How/How"
import LandingNav from "../components/LandingNav/LandingNav"

function Landing() {
  return (
    <div>
      <LandingNav></LandingNav>

      <Signup />
      <How />
    </div>
  )
}

export default Landing;
