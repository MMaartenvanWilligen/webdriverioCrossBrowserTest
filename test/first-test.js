//
// var webdriverio = require('webdriverio'),
//     client = webdriverio.remote({
//         desiredCapabilities: {
//             browserName: 'chrome',
//             version: '27',
//             platform: 'XP',
//             tags: ['examples'],
//             name: 'This is an example test',
//             'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
//             build: process.env.TRAVIS_BUILD_NUMBER,
//
//
//             // If using Open Sauce (https://saucelabs.com/opensauce/),
//             // capabilities must be tagged as "public" for the jobs's status
//             // to update (failed/passed). If omitted on Open Sauce, the job's
//             // status will only be marked "Finished." This property can be
//             // be omitted for commerical (private) Sauce Labs accounts.
//             // Also see https://support.saucelabs.com/customer/portal/articles/2005331-why-do-my-tests-say-%22finished%22-instead-of-%22passed%22-or-%22failed%22-how-do-i-set-the-status-
//             'public': true
//         },
//         host: 'ondemand.saucelabs.com',
//         port: 80,
//         logLevel: 'silent'
//     }).init();
//
// client
//     .url('http://localhost:8000/website/index.html')
//     .pause(1000)
//     .getTitle(function(err,title) {
//         console.log(title);
//     })
//     .end();

var assert = require("assert");
describe('Home page', function () {

    var client = require('webdriverio').remote({
        desiredCapabilities: {
            browserName: 'chrome',
            version: 'latest',
            platform: 'Windows XP',
            tags: ['examples'],
            name: 'This is an example test',
            'public': true,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER
        },
        host: 'ondemand.saucelabs.com',
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        port: 80,
        logLevel: 'silent'
    });

    it("The title should be 'Home Page'", function (done) {
        // Since we want the title from the page, we need to manually handle the Promise
        client
            .init()
            .url('http://localhost:8000/website/index.html')
            .getTitle().then(function (title) {
            console.log(title);
            assert.equal(title, "Home Page");
            client.end();
            done()
        })
    });
});
