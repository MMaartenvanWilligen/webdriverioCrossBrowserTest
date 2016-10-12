/**
 * Created by maarten on 04-10-16.
 */

var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Login = require("./page-objects/loginPage");

/*
 * declaring variables
 */

var loginpage;

/*
 * @desc test login page
 * */

describe("Login test", function () {
    /*
     * @desc before test initialize driver
     * */
    // before(function (done) {
    //     driver = require("./driver").GetDriver();
    //     done();
    //     loginpage = new Login(driver);
    // });

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

    it("should set value username field to 'Admin'", function () {
        return loginpage.inputUsernameSetValue("Admin").then(function () {
            return loginpage.inputUsernameGetValue().then(function (value) {
                assert.equal(value, "Admin");
            });
        });
    });

    it("should set value password field to 'Password'", function () {
        return loginpage.inputPasswordSetValue("Password").then(function () {
            return loginpage.inputPasswordGetValue().then(function (value) {
                assert.equal(value, "Password");
            });
        });
    });

    it("should not show texfield-errors", function () {
        return loginpage.errorHandlingSpanDisplayed().then(function (bool) {
                return assert.equal(false, bool[0])
        })
    });

    it("after submit should go to index", function () {
        return loginpage.submitClick().then(function () {
            return browser.getTitle().then(function (title) {
               return assert.equal(title, "Home Page");
            });
        });
    });

});




