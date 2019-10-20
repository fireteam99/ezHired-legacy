import React, { Component } from 'react';
import "./AddJob.css";

export default class AddJob extends Component {
  constructor(props) {
     super(props);
     this.state = {value: ''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
   }
  render() {
    return(
      <div className="addJob">
      <h2 className="pageHeader">ADD JOB</h2>
      <form className = "searchForm" onSubmit={this.handleSubmit}>
        <input className = "" type="text"  value={this.state.value} onChange={this.handleChange} />
        <button type="submit" id="completed-task" className="">
            SUBMIT
      </button>
      </form>
      </div>

    );
  }
}
