import React from 'react'
import Signup from "../components/signupForm/signup"
import How from "../components/How/How"
import LandingNav from "../components/LandingNav/LandingNav"
import Footer from "../components/footer/footer"

function Landing() {
  return (
    <div>
      <LandingNav/>
      <Signup />
      <How />
      <Footer/>
    </div>
  )
}

export default Landing;
