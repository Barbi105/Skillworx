import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/landingPage'
import Search from './pages/Search'
import ChatBox from './pages/ChatBox';

function App() {
  return (
    
    // <div className="App">
    //   <Navbar />
    //   <div className="container-fluid">
    //     {/* <div className="row"> */}
    //       {/* <Task />
    //       <Task />
    //       <Task />
    //       <Task />
    //       <Task />
    //       <Task /> */}
    //       {/* <Profile /> */}
    //       <How />
    //     {/* </div> */}
    //   </div>
    // </div>
    
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/chat" component={ChatBox} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
