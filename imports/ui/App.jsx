import React from 'react';

import Header from './Header.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import AddJob from './AddJob/AddJob.jsx';
import TaskList from './TaskList/TaskList.jsx';

import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Header/>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/taskList" component={TaskList} />
      <Route exact path="/addJob" component={AddJob} />
    </Switch>
  </Router>
);

export default App;
