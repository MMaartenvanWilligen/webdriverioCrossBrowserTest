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
        return homepage.ctaButtonText().then(function (txt) {
            console.log(txt);
            return assert.equal(txt, "RAISED");
        });
    });

    it("CTA button should have text 'buttonraised' after click", function () {
        return homepage.ctaButtonClick().then(function () {
            return homepage.ctaButtonText().then(function (txt) {
                console.log(txt);
                return assert.equal(txt, "BUTTONTRANSFORM");
            });
        });
    });

    it("links'", function () {
        browser.elements(this.anchor).then(function (res) {
            console.log(res);
            res.value.ELEMENT.forEach(function (elemID) {
                console.log(elem);
                browser.elementIdAttribute(elemID, 'href', function (err, res) {
                    console.log("link res" + " " + res);
                    console.log("link err" + " " + err);
                })
            });
        });
    });

});
