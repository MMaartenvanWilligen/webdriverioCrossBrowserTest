var sauceConnectLauncher = require('sauce-connect-launcher');
global.sauceConnectProcess = null;

exports.config = {

    /**
     * capabilities
     */
    /*
     commonCapabilities: {
     'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
     build: process.env.TRAVIS_BUILD_NUMBER
     },*/

    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: "windows 10",
        tags: ['examples'],
        name: 'chrome test'
        /*'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
         build: process.env.TRAVIS_BUILD_NUMBER*/
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
    /*port: 4445,
     /!*host: 'http://' + "Maaktnietzoveeluit" + ':' + "519926b3-9bcf-4500-9725-eb09b0a50d5d" + '@ondemand.saucelabs.com:80/wd/hub',*!/
     user: process.env.SAUCE_USERNAME,
     key: process.env.SAUCE_ACCESS_KEY,*/
    /*services:["sauce"],*/
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
    ],
    onPrepare: function () {
        return new Promise(function (resolve, reject) {
            sauceConnectLauncher({
                username: 'Maaktnietzoveeluit',
                accessKey: '27dde83a-1cf7-450d-8c88-857c4d3cde43'
            }, function (err, sauceConnectProcess) {
                if (err) {
                    return reject(err);
                }
                console.log('conexion realizada');
                global.sauceConnectProcess = sauceConnectProcess;
                resolve();
            });
        });
    }
};

