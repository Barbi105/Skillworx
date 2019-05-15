import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/footer/footer"
import { Container } from '../components/grid/grid';
import SettingsForm from '../components/settingsForm';

function UserSettings() {
  return (
    <div>
      <Container fluid>
      <Navbar />
        <SettingsForm />
      <Footer />
      </Container>
    </div>
  )
}

export default UserSettings;
