module.exports = {
  name: 'byai-intro',
  script: 'server.js',
  watch: false,
  out_file: '/dev/null',
  instances: 1,
  exec_mode: 'fork',
  env: {
    NODE_ENV: 'production',
  },
};
