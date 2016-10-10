// var webdriver = require("webdriverio");
// var until = webdriver.until;
// var assert = require("assert");
// var chai = require('chai')
//     , expect = chai.expect
//     , should = chai.should();
//
//
// var Home = require("./page-objects/homePage");
//
// /*
//  * mocha describe
//  * mocha is promise aware framework
//  * */
// describe("functional testing in real browser", function () {
//
//     /*
//      * declaring variables
//      */
//
//     var driver;
//     var homepage;
//
//     /*
//      * @desc test HomePage
//      *
//      * */
//
//     describe('Home page', function () {
//
//         /*
//          * @desc mocha before, initialize driver
//          * */
//
//         driver = "";
//         before(function (done) {
//             driver = require("./driver").GetDriver();
//             done();
//         });
//
//         it("should open the homepage", function () {
//             homepage = new Home(driver);
//             return homepage.getUrl().then(function () {
//                 homepage.currentUrl().then(function (url) {
//                     assert.equal(url, homepage.url);
//                 })
//             });
//         });
//
//         // it("The title is 'demo website'", function () {
//         //     // Since we want the title from the page, we need to manually handle the Promise
//         //     return driver.getTitle().then(function (title) {
//         //         assert.equal(title, "Home Page");
//         //     });
//         // });
//         //
//         // it("CTA button should have text raised", function () {
//         //     return homepage.ctaButton().then(function (elm) {
//         //         elm.getText(elm).then(function (txt) {
//         //             assert.equal(txt, "RAISED");
//         //         });
//         //     });
//         // });
//         //
//         // it("Expect onclick text change to buttontransform", function () {
//         //     return homepage.ctaButtonClick().then(function (elm) {
//         //         elm.getText(elm).then(function (txt) {
//         //             assert.equal(txt, "BUTTONTRANSFORM");
//         //         });
//         //     });
//         // });
//     });
//
//     /*
//      * @desc mocha after, quit driver
//      * */
//
//     // after(function () {
//     //     return driver.quit();
//     // });
// });

describe("functional testing in real browser", function () {

    var client;
    var webdriverio = require('webdriverio');

    client = webdriverio.remote({
        desiredCapabilities: {
            browserName: 'chrome',
            version: 'latest',
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
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        logLevel: 'silent'
    }).init();


    it("Expect onclick text change to buttontransform", function (done) {
        client
            .url('http://localhost:8000/webdriverioProject/website/index.html')
            .pause(1000)
            .getTitle().then(function (title) {
            console.log(title);
            done();
        })

    });
});

