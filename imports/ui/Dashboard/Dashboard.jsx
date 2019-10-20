import React, { Component, useState } from 'react';
import './Dashboard.css';
import {JOBS} from './jobtest';
import Cards from './Cards.jsx'


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
        <Cards />
      </div>
    );
  }
}
export default Dashboard;
//<this.RenderJobCard item = {this.state.jobs[0]} />
//<Button onClick={this.toggleModal(item)}>see more</Button>
