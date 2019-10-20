import React, { Component } from 'react';
import './Dashboard.css';
import {JOBS} from './jobtest';
import Column from './Column.jsx';
import Card from './Card.jsx';


export default class Dashboard extends Component {

  state = {
    jobs: JOBS
  }

  render() {
    return(
      <div className="dashboard">
        <Column title="to apply">


          <Card item = {this.state.jobs[0]} />


        </Column>
        <Column title="applied for" />
        <Column title="completed" />

      </div>
    );
  }
}

//<this.RenderJobCard item = {this.state.jobs[0]} />
//<Button onClick={this.toggleModal(item)}>see more</Button>
