import { Meteor } from 'meteor/meteor';
import Jobs from '/imports/api/jobs';
import SimpleSchema from 'simpl-schema';
import jobSchema from './schema/Job';

Meteor.startup(() => {

  // Attach schema to Jobs
  Jobs.attachSchema(jobSchema);
  // Add some seed data
  if (Jobs.find().count() === 0) {
    Jobs.insert({
      user: 'test',
      description: 'this is a test job',
      title: 'garbage man',
      application: {
        deadline: new Date()
      },
      applied: null,
      offer: null,
      rejection: null,
      favorited: true,
      status: 'application'
    })
  }
});
