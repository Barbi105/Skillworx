import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './pages/landingPage'
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
