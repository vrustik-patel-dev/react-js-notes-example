import React from 'react';
import ReactDOM from 'react-dom';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from './App'
import LoginPage from './Login';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/notes" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

