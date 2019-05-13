import React from 'react'
import Login from "../components/loginForm/login"
import Signup from "../components/signupForm/signup"
import How from "../components/How/How"
import Navbar from "../components/Navbar/Navbar"
import PayTest from "../components/payTest"

function Landing() {
  return (
    <div>
      <PayTest />
      <Navbar />
      <Login />
      <Signup />
      <How />
    </div>
  )
}

export default Landing;
