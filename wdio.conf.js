exports.config = {

    /**
     * specify test files
     */
    specs: [
        './test/first-test.js'
    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest'
    }, {
        browserName: "firefox",
        version: 'latest'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'screenshots',
    waitforTimeout: 10000,
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    sauceConnect: true,
    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },
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