import React from 'react';
import logo from './logo.svg';
import Main from "./components/Main"
import Task from "./components/Cards/Task.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Profile from "./components/Profile/Profile.jsx"
import How from "./components/How/How.jsx"
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/landingPage'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        {/* <div className="row"> */}
          {/* <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task /> */}
          {/* <Profile /> */}
          <How />
        {/* </div> */}
      </div>

    </div>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/" component={Landing} />
    //       <Route exact path="/search" component={Search} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
