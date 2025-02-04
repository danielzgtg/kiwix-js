module.exports = function (config) {
  config.set({
    basePath: '../',
    // https://karma-runner.github.io/5.2/config/browsers.html
    // https://github.com/karma-runner/karma-sauce-launcher
    sauceLabs: {
      build: process.env.GITHUB_RUN_ID ? `${process.env.GITHUB_REPOSITORY} run #${process.env.GITHUB_RUN_ID}` : null,
      startConnect: true,
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY
    },
    customLaunchers: {
      firefox52: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '52.0'
      },
      firefox: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: 'latest'
      },
      chrome58: {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '58.0'
      },
      chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: 'latest'
      },
      edge: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        version: 'latest'
      },
      edge40: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        version: '15.15063'
      },
      edge44: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        version: '18.17763'
      },
      ie11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: 'latest'
      }
    },
    // The free account on Sauce does not allow more than 5 concurrent sessions
    concurrency: 4,

    // REMINDER: Keep this list in sync with the UI tests, in .github/workflows/CI.yml.
    browsers: [
      // 'firefox', // Disable latest Firefox due to #894
      'chrome',
      'edge',
      'edge40',
      'edge44',
      'firefox52',
      'chrome58'
      // 'ie11' // Disable IE11 due to Promise error
    ],
    frameworks: ['qunit'],
    client: {
      qunit: {
        autostart: false
      }
    },
    reporters: ['dots'],
    logLevel: 'WARN',
    files: [
      'www/js/lib/require.js',
      'tests/init.js',
      { pattern: 'www/**/*', included: false },
      { pattern: 'tests/**/*', included: false }
    ],
    singleRun: true,
    autoWatch: false
  });
};
