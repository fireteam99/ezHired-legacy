import SimpleSchema from 'simpl-schema';
import {Company} from './Company';
import {Interview} from './Interview';

Job = new SimpleSchema({
  company: {
    type: Company
  },
  title: {
    type: String
  },
  application: {
	type: String
  },
  interviews: {
	  type: [Interview]
  },
  offer: {
	  salary: Number,
	  deadline: Date
  }
});
