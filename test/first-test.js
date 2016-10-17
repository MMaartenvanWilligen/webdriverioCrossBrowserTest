/*
 * @desc declare variables
 * */

//libaries and frameworks
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

//home page module
var Home = require("./page-objects/homePage");
var homepage;

/**
 * @desc mocha describe
 * mocha is promise aware framework
 * mocha waits till promise is fulfilled when returning a promise
 * @global 'browser'  is webdriverio global. driver for browser automation
 * */

describe('Home page', function () {

    /**
     * @desc initialize homepage with Home object
     * */

    homepage = new Home();

    /**
     * @desc should go to homepage url
     * then get the current url and check if it is the homepage url
     * return for fulfilling promise
     * */

    it("should open the homepage", function () {
        return homepage.getUrl().then(function () {
            return homepage.currentUrl().then(function (url) {
                return assert.equal(url, homepage.urllocal);
            })
        });
    });

    it("The title is 'Home Page'", function () {
        return browser.getTitle().then(function (title) {
            return assert.equal(title, "Home Page");
        });
    });

    it("CTA button should have text raised", function () {
        return homepage.ctaButtonText().then(function (txt) {
            return assert.equal(txt, "RAISED");
        });
    });

    it("CTA button should have text 'buttonraised' after click", function () {
        return homepage.ctaButtonClick().then(function () {
            return homepage.ctaButtonText().then(function (txt) {
                return assert.equal(txt, "BUTTONTRANSFORM");
            });
        });
    });

});


