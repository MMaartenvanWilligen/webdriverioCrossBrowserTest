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
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,
    reporters: ['dot'],
    port: 4445,
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

