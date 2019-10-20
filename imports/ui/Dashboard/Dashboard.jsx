import React, { Component, useState } from 'react';
import './Dashboard.css';
import {JOBS} from './jobtest';
import Card from './Card.jsx';
import Column from './Column.jsx';
import { withTracker } from 'meteor/react-meteor-data';

import { Jobs } from '../../api/jobs.js';


class Dashboard extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //       isModalOpen: false,
  //       modalID: -1,
  //       jobs: JOBS
  //   }
  //   this.toggleModal = this.toggleModal.bind(this);
  //   this.toggleModalID = this.toggleModalID.bind(this);
  // }
  state = {
    jobs: JOBS
  }

  render() {
    return(
      <div className="dashboard">
        <h2 className="pageHeader">DASHBOARD</h2>
        <Column title="to apply">
            <Card company = "Wayfair" position="DevOps"/>
            <Card company = "Wayfair" position="DevOps"/>
        </Column>
        <Column title="applied for" />
        <Column title="completed" />

      </div>
    );
  }
}
export default Dashboard;

export default withTracker(() => {
  return {
    jobs: Jobs.find({}).fetch(),
  };
})(AddJob);
