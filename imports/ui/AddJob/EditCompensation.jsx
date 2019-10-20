import React, { Component } from 'react';
import "./AddJob.css";
import { withTracker } from 'meteor/react-meteor-data';
import { Jobs } from '../../api/jobs.js';

class EditCompensation extends Component{
    state = {
        interval: 'hourly',
        amount: 0
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const compensation = {
          deadline: this.state.deadline,
          link = this.state.link
        }
        // edit the corresponding job
        Jobs.update(this.props._id, {
          $set: { compensation: compensation }
        });
    }


    render(){
        if(this.props.loading){
            return(<div>loading</div>)
        }
        <div className = "addJob">
            <h2 className="pageHeader">Edit Compensation</h2>
            <form>
                <p className="label">Compensation</p>
                <select className = "addForm" value={this.state.interval} onChange={(e) => this.setState({interval: e.target.value})}>
                    <option value='hourly'>Hourly</option>
                    <option value='yearly'>Yearly</option>
                </select>
                <p className="label">Amount</p>
                <input className = "addForm"
                type='number'
                name='amount'
                placeHolder = {0}
                required
                onChange={(e) => this.setState({amount: e.target.value})}
                />
                <br/>
                <button type="submit" id="completed-task" className="addSubmit" onClick={() =>this.handleSubmit}>Next</button>
            </form>
        </div>
    }
}

export default withTracker(() => {
    return {
      jobs: Jobs.find({})
    }
  })(EditCompensation);
