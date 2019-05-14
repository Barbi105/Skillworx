import React from 'react'
import Profile from "../components/Profile/Profile";
import { Container, Row, Col } from '../components/grid/grid';

function ProfilePage(props) {
  return (
    <div>
      <Container>
        <Profile {...props} />
      </Container>
    </div>
  )
}
export default ProfilePage;
