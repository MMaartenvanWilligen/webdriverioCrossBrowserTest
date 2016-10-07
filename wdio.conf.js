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
    services: ['sauce'],
    user: "Maaktnietzoveeluit",
    key: "519926b3-9bcf-4500-9725-eb09b0a50d5d",
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    build: process.env.TRAVIS_BUILD_NUMBER,
    sauceConnect: false,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'screenshots',
    waitforTimeout: 10000,
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
    ]
};

