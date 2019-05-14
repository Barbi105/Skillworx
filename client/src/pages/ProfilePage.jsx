import React from 'react'
import Profile from "../components/Profile/Profile";
import Navbar from '../components/Navbar/Navbar'
import { Container, Row, Col } from '../components/grid/grid';

function ProfilePage() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Profile />
      </Container>
    </div>
  )
}
export default ProfilePage;
