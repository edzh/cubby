import mongoose from 'mongoose';

const dbUrl = 'mongodb://edzh:password1@ds221155.mlab.com:21155/cubby';

export const connect = (url = dbUrl) => {
  return mongoose.connect(url, { useNewUrlParser: true });
};
