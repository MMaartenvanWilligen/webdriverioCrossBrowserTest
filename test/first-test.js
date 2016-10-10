var webdriver = require("selenium-webdriver");
var until = webdriver.until;
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var Home = require("./page-objects/homePage");


var homepage;

describe('Home page', function () {

    it("should open the homepage", function () {
        homepage = new Home();
        return homepage.getUrl().then(function () {
            homepage.currentUrl().then(function (url) {
                assert.equal(url, homepage.urllocal);
            })
        });
    });

    it("The title is 'demo website'", function () {
        // Since we want the title from the page, we need to manually handle the Promise
        return driver.getTitle().then(function (title) {
            assert.equal(title, "Home Page");
        });
    });
});
