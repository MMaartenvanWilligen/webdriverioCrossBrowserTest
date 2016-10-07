var BUILD_ID = process.env.TRAVIS_BUILD_ID || new Date().getTime();


exports.config = {

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: "windows 10",
        tags: ['examples'],
        name: 'This is an example test',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }, {
        browserName: "firefox",
        version: 'latest',
        platform: "windows 10",
        tags: ['examples'],
        name: 'This is an example test',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }],
    /**
     * test configurations
     */

    user: "Maaktnietzoveeluit",
    key: "519926b3-9bcf-4500-9725-eb09b0a50d5d",
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

