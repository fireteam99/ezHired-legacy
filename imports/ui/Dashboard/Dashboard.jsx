import React, { Component } from 'react';
import './Dashboard.css';
import Column from './Column.jsx';

export default class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
        <Column title="to apply" />
        <Column title="applied for" />
        <Column title="completed" />
      </div>
    );
  }
}
