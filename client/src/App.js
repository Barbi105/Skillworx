import React from 'react';
import logo from './logo.svg';
import Main from "./components/Main"
import Task from "./components/Cards/Task.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Profile from "./components/Profile/Profile.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* <div className="row"> */}
          {/* <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task /> */}
          <Profile />
        {/* </div> */}
      </div>

    </div>
  );
}

export default App;
