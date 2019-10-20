import React, { Component } from 'react';
import './Dashboard.css';

export default class Column extends Component {
  render() {
    return(
      <div>
      <div className="card topCard">
        top
      </div>
      <div className="card bottomCard">
      </div>
      </div>
    );
  }
}
