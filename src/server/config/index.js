const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3001,
  secrets: {
    // process.env.JWT_SECRET,
    jwtExp: '100d',
    jwt: 'learneverything'
  },
  dbUrl: 'mongodb://edzh:password1@ds221155.mlab.com:21155/cubby'
};

export default baseConfig;
