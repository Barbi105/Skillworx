import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/landingPage'
import Search from './pages/Search'
import ChatBox from './pages/ChatBox'
import ProfilePage from './pages/ProfilePage'
import PostJob from "./pages/PostJob"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/postForm" component={PostJob} />
          <Route exact path="/chat" component={ChatBox} />
          <Route exact path="/profile" component={ProfilePage}/>
          <Route path="/users/:id" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
