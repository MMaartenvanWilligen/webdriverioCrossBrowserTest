/**
 * Created by maarten on 19-09-16.
 */

var driver;
var webdriverio = require('webdriverio');

/*
 * @desc build driver if driver is not yet set
 * */

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

    var options = {
        desiredCapabilities: {
            browserName: 'chrome',
            version: '27.0',
            platform: 'XP',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            name: 'integration',
            build: process.env.TRAVIS_BUILD_NUMBER
        }
    };

    webdriverio
        .remote(options)
        .init()
        .url('http://www.google.com')
        .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
        .end();

    //return driver;

};

module.exports.GetDriver = GetDriver;

