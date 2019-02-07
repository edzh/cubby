import { handleListen, app } from '../server';
import request from 'supertest';

test('should call log with app', () => {
  const PORT = 3001;
  const log = jest.fn();
  handleListen(log, PORT);
  expect(log.mock.calls).toHaveLength(1);
  expect(log.mock.calls[0][0]).toBe(
    `Listening on http://localhost:${PORT}/api!`
  );
});

test('should pass integration tests', done => {
  request(app)
    .get('/')
    .expect(200, 'Hello World!')
    .end(err => {
      if (err) throw done(err);
      done();
    });
});
