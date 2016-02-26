var browsers = {
  firefox: {
    name: "Firefox",
    browserName: "firefox"
  },
  chrome: {
    name: "Chrome",
    browserName: "chrome"
  }
};

exports.config = {
  suites: {
    index: './e2e/index/index.specs.js',
    data: './e2e/data/data.specs.js'
  },
  //specs: [
  //  './e2e/**/*.specs.js'
  //],
  baseUrl: 'http://localhost:3333',
  directConnect: true,
};

if (process.argv[3] === '--chrome') {
  exports.config.capabilities = browsers.chrome;
}
else if (process.argv[3] === '--firefox'){
  exports.config.capabilities = browsers.firefox;
}
else {
  exports.config.multiCapabilities = [
    browsers.firefox,
    browsers.chrome
  ];
}
