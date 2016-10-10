exports.config = {

    /**
     * capabilities
     */

    commonCapabilities: {
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    },

    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: "windows 10",
        tags: ['examples'],
        name: 'chrome test',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }, {
        browserName: "firefox",
        version: 'latest',
        platform: "windows 10",
        tags: ['examples'],
        name: 'firefox test'
    }],
    /**
     * test configurations
     */

    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services:["sauce"],
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

