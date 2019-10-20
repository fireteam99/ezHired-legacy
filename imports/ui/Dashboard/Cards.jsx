import React from 'react';
import {JOBS} from './jobtest';
import Column from './Column.jsx';
import Card2 from './Card.jsx';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, Button, UncontrolledCollapse } from 'reactstrap';

state = {
    jobs: JOBS
}
RenderJobCard = ({item}) => {
     return (
       <div>
           <Card body inverse style={{ backgroundColor: '#333', borderColor: 'Yellow', color: 'White' }} >
               <CardHeader><strong>{item.company}</strong></CardHeader>
               <CardTitle><i>{item.position}</i></CardTitle>
               <CardBody>
                   <CardText>{item.description}</CardText>
               </CardBody>
           </Card>
       </div>
     );
 }

const Cards = ({item}) => (
    <div className = "Cards">
    <Column title="to apply">
        <Card2 company="Wayfair" position="DevOps" />
        <Card2 company="Wayfair" position="DevOps" />
    </Column>
    <Column title="applied for" />
    <Column title="completed" />
  </div>
);

export default Cards;
