import { Meteor } from 'meteor/meteor';
import { Jobs } from '/imports/api/jobs';
import jobSchema from './schema/Job';
import job1 from './testData/job1';
import job2 from './testData/job2';
import job3 from './testData/job3';
import job4 from './testData/job4';
import job5 from './testData/job5';

Meteor.startup(() => {

  // Attach schema to Jobs
  Jobs.attachSchema(jobSchema);
  // Add some seed data
  if (Jobs.find().count() === 0) {
    Jobs.insert(job1);
    Jobs.insert(job2);
    Jobs.insert(job3);
    Jobs.insert(job4);
  }
});
