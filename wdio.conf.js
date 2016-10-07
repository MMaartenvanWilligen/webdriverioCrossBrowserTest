exports.config = {

    /**
     * specify test files
     */
    specs: [
        'mocha test/first-test.js'
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
    framework: 'mocha',
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },
    mochaOpts: {
        ui: 'bdd'
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