import mongoose from 'mongoose';
import options from '../config';

const dbUrl = options.dbUrl;

export const connect = (url = dbUrl) => {
  return mongoose.connect(url, { useNewUrlParser: true });
};
