import { Meteor } from 'meteor/meteor';
import Jobs from '/imports/api/jobs';
import SimpleSchema from 'simpl-schema';
import jobSchema from './schema/Job';
import job1 from './testData/job1';

Meteor.startup(() => {

  // Attach schema to Jobs
  Jobs.attachSchema(jobSchema);
  // Add some seed data
  if (Jobs.find().count() === 0) {
    Jobs.insert(job1);
  }
});
