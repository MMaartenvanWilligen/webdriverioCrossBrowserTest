/**
 * Created by maarten on 04-10-16.
 */

/**
 * @desc declare variables
 * */

var assert = require("assert");  //assert libary
var chai = require('chai')       //chai assertions
    , expect = chai.expect
    , should = chai.should();

var Login = require("./page-objects/loginPage");   //login page module
var loginpage;  //loginpage for Home object

/**
 * @desc mocha describe tests login page
 * mocha is promise aware framework
 * mocha waits till promise is fulfilled when returning a promise
 * @global 'browser'  is webdriverio global. driver for browser automation
 * */

describe("Login test", function () {

    it("should open the loginPage", function () {
        loginpage = new Login();
        return loginpage.getUrl().then(function () {
            return loginpage.currentUrl().then(function (url) {
                return assert.equal(url, loginpage.urllocal);
            })
        });
    });

    it("The title should be 'Login page'", function () {
        return browser.getTitle().then(function (title) {
            return assert.equal(title, "Login page");
        });
    });

});




