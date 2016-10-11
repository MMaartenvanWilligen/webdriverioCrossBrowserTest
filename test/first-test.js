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
        return homepage.ctaButton().then(function () {
           return browser.getText().then(function (txt) {
               return assert.equal(txt, "RAISED");
            });
        });
    });
});
