module.exports = {
  name: 'byai-intro',
  script: 'server.js',
  exec_mode: 'fork',
  watch: false,
  out_file: '/dev/null',
  instances: 1,
  env: {
    NODE_ENV: 'development',
  },
};
