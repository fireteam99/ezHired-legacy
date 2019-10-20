import React, { Component } from 'react';
import "./AddJob.css";

export default class AddJob extends Component {
  state = {}
  render() {
    return(
      <div className="addJob">
      <h2 className="pageHeader">ADD JOB</h2>
      <form>

      <p>Company</p>
      <input className = "addForm"
        type='text'
        name='company'
        placeHolder='Company'
        onChange={(e) => this.setState({term: e.target.value})}
      />
      <p>Position</p>
      <input className = "addForm"
        type='text'
        name='position'
        placeHolder = 'Position'
        onChange={(e) => this.setState({term: e.target.value})}
      />
      <br/>
      <button type="submit" id="completed-task" className="addSubmit">
          Submit
          </button>
      </form>
      </div>

    );
  }
}
