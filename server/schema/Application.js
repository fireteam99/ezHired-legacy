import SimpleSchema from 'simpl-schema';

Application = new SimpleSchema({
  deadline: {
    type: Date,
  }
});

export default Application;
