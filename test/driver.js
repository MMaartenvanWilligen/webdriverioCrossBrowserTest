/**
 * Created by maarten on 19-09-16.
 */

var driver;
var webdriverio = require('webdriverio');

/*
 * @desc build driver if driver is not yet set
 * */

var webdriverio = require('webdriverio');

function GetDriver() {

    driver = buildDriver();
    return driver;
}

/*
 * @desc build driver with saucelabs tunnel
 * selenium driver that uses saucelabs
 * saucelabs tunnel needed for suacelabs to access the localhost
 *
 * @return driver
 * */

var buildDriver = function () {

    var driver = new webdriverio.remote({
        desiredCapabilities: {
            browserName: 'chrome',
            version: 'latest',
            platform: 'XP',
            tags: ['examples'],
            name: 'chrome remote',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
            'public': true
        },
        host: 'ondemand.saucelabs.com',
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        port: 80,
        logLevel: 'silent'
    }).init();

    return driver;

};

module.exports.GetDriver = GetDriver;



