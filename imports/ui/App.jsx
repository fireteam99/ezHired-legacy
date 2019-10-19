import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <AccountsUIWrapper />
    <Hello />
    <Info />
  </div>
);

export default App;
