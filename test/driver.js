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
            version: '27',
            platform: 'XP',
            tags: ['examples'],
            name: 'This is an example test',
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,


            // If using Open Sauce (https://saucelabs.com/opensauce/),
            // capabilities must be tagged as "public" for the jobs's status
            // to update (failed/passed). If omitted on Open Sauce, the job's
            // status will only be marked "Finished." This property can be
            // be omitted for commerical (private) Sauce Labs accounts.
            // Also see https://support.saucelabs.com/customer/portal/articles/2005331-why-do-my-tests-say-%22finished%22-instead-of-%22passed%22-or-%22failed%22-how-do-i-set-the-status-
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



