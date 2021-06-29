import React from "react";
import "./icons/icons.js"

import './App.css';

import Sd from "./seller dashboard.js"
import Cd from "./customer dashboard.js"
import Ss from "./seller setting.js"
import Cn from "./customer notification.js"
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
    <div>

        <Switch>
        <Route  path="/customer dashboard" exact component={Cd} />
        <Route  path="/customer notification" exact component={Cn} />
        <Route  path="/seller dashboard" exact component={Sd} />
        <Route  path="/seller settings" exact component={Ss} />
        
        </Switch>
    </div>
      </Router>
  );
}

export default App;
