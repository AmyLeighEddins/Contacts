require('jasmine-reporters');
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
    index: './e2e/index.specs.js',
    data: './e2e/data.specs.js'
  },
  baseUrl: 'http://localhost:3333',
  directConnect: true,
  onPrepare: function() {
    browser.manage().window().maximize();
  },
  jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: false
  }
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
