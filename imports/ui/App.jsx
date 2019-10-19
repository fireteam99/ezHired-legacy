import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Login from './Login.jsx';

import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);

export default App;
