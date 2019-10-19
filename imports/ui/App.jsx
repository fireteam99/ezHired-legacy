import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';

import Header from './Header.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Header/>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
);

export default App;
