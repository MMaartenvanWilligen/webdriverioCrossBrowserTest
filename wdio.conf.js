exports.config = {

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: "windows 10"
    }, {
        browserName: "firefox",
        version: 'latest',
        platform: "windows 10"
    }],
    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'screenshots',
    waitforTimeout: 10000,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    reporters: ['dot'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
    reporterOptions: {
        outputDir: './'
    },
    /**
     * specify test files
     */
    specs: [
        './test/first-test.js'
    ],
    onPrepare: function() {
        // do something
    },
    before: function() {
        // do something
    },
    after: function(failures, pid) {
        // do something
    },
    onComplete: function() {
        // do something
    }
};

