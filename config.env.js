const config = {
  development: {
    intro: {
      API_URL: 'http://www.xinoa.cc',
    },
  },
  test: {
    intro: {
      API_URL: 'http://www.xinoa.cc',
    },
  },
  production: {
    intro: {
      API_URL: 'https://www.byai.com',
    },
  },
};

const envConfig = config[process.env.NODE_ENV || 'production'];
module.exports = envConfig;
