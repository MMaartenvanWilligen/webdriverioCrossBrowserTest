/*
 * @desc configuration file for wdio
 *
 * */

exports.config = {

    /**
     * @desc capabilities
     *       declaration in which browsers to test
     *       testing in browser: chrome, firefox and internet explorer
     *       saucelabs platform and browsers you can use: https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        tags: ['examples'],
        name: 'chrome test',
        'public': true,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,     //suacelabs tunnel set up by travis. for saucelabs integration
        build: process.env.TRAVIS_BUILD_NUMBER                  //travis build number. for saucelabs integration
    }, {
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 10',
        tags: ['examples'],
        name: 'firefox test',
        'public': true,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,     //suacelabs tunnel set up by travis. for Saucelabs integration
        build: process.env.TRAVIS_BUILD_NUMBER                  //travis build number. for saucelabs integration
    }, {
        browserName: 'internet explorer',
        version: 'latest',
        platform: 'Windows 10',
        tags: ['examples'],
        name: 'internet explorer test',
        'public': true,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,     //suacelabs tunnel set up by travis. for Saucelabs integration
        build: process.env.TRAVIS_BUILD_NUMBER                  //travis build number. for saucelabs integration
    }],

    /**
     * @desc test configurations
     *
     * maxInstances: as you have 3 different capabilities (Chrome, Firefox and Internet Explorer) and you have
     * set maxInstances to 1, wdio will spawn 3 processes in suacelabs. Therefor if you have 10 spec
     * files and you set maxInstances to 10, all test files will get tested at the same time
     * and 30 processes will get spawned in saucelabs.
     *
     */
    maxInstances: 10,                                       //max test files to run
    host: 'ondemand.saucelabs.com',                         //declare selenium host Saucelabs. for saucelab integration
    user: process.env.SAUCE_USERNAME,                       //string sauce username. for Saucelab integration
    key: process.env.SAUCE_ACCESS_KEY,                      //string suace acceskey. for Saucelab integration
    port: 80,                                               //for Saucelabs integration
    logLevel: 'silent',
    sync: false,                                            //sync set to false for using promises
    coloredLogs: true,
    waitforTimeout: 10000,
    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },
    framework: 'mocha',                                     //run tests with framework mocha
    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * @desc specify test files
     */
    specs: [
        './test/*-test.js'                                  //run all files in map 'test' with ' -test.js' in name
    ]
};

