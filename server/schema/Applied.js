import SimpleSchema from 'simpl-schema';
import Interview from './InterviewSchema';
import Assignment from './AssignmentSchema';
import Interview from './Interview';

const Applied = new SimpleSchema({
  interviews: [InterviewSchema],
  assignments: [AssignmentSchema]
});

export default Applied;
