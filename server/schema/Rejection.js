import SimpleSchema from 'simpl-schema';

const Rejection = new SimpleSchema({
  reason: String,
  date: {
    defaultValue: new Date()
  }
});

export default Rejection;
