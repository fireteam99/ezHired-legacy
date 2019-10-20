import React, { Component } from 'react';
import './Dashboard.css';
import {JOBS} from './jobtest';
import Column from './Column.jsx';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


export default class Dashboard extends Component {
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
  onComponentDidMount() {
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalID = this.toggleModalID.bind(this); 
  }

  state = {
    isModalOpen: false,
    modalID: -1,
    jobs: JOBS
  }

  toggleModalID = (item) => {
    console.log(item.id);
    const id = item.id;
    this.setState({
        modalID: id
    })
    console.log('id changed to ' + this.state.modalID)
  }

  toggleModal = () => {
    this.setState({
        isModalOpen: !this.state.isModalOpen,
    });
    console.log(this.state.isModalOpen);
  }
  
  RenderJobCard = ({item}) => {
    return (
        <Card>
            <CardTitle>{item.company}</CardTitle>
            <CardBody>
                <CardSubtitle>{item.position}</CardSubtitle>
                <CardText>{item.description}</CardText>
            </CardBody>   
        </Card>
    );
  }
  render() {
    return(
      <div className="dashboard">
        <Column title="to apply">

          <this.RenderJobCard item = {this.state.jobs[0]} />
          <Button onClick = {() => {this.toggleModal(); this.toggleModalID(this.state.jobs[0])}}>More info</Button>

        </Column>
        <Column title="applied for" />
        <Column title="completed" />
        <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} className = "modal">
        </Modal>
      </div>
    );
  }
}

//<this.RenderJobCard item = {this.state.jobs[0]} />
//<Button onClick={this.toggleModal(item)}>see more</Button>

