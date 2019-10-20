import SimpleSchema from 'simpl-schema';

const Assignment = new SimpleSchema({
  deadline: date,
  description: {
    type: String,
    optional: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

export default Assignment;
