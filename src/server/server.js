import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import morgan from 'morgan';
import { signup, signin, protect } from './utils/auth';

import userRouter from './api/user/user.router';
import competitionRouter from './api/competition/competition.router';

import { connect } from './utils/db';

export const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(morgan('dev'));

app.set('json spaces', 2);

app.post('/api/signup', signup);
app.post('/api/signin', signin);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// app.use('/api', protect);
app.use('/api/user', protect, userRouter);
app.use('/api/competition', competitionRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(PORT, handleListen(console.log, PORT));
  } catch (e) {
    console.error(e);
  }
};

export const handleListen = (log, port) =>
  log(`Listening on http://localhost:${port}/api!`);
