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

        return browser.elements('<a />', function(err,res) {
            var i = 0;
           return res.value.forEach(function(elem) {
               console.log(++i, elem.value);
               return  browser.elementIdAttribute(elem, 'href', function(err,res) {
                    return console.log(++i, res.value);
                });
            });
        });
    });

    it("links href'", function () {
        return browser.elements("a").then(function (res) {
            console.log("1 link elements res" + " " + res.value);
            console.log('a elements on page: ',res.value.length);
             return res.value.forEach(function (elem) {
                 console.log("2 link element" + " " + elem.id);
                 browser.elementIdAttribute(elem.Element, 'href').then( function (err, res) {
                     console.log("3 link res" + " " + res);
                     console.log("3 link res" + " " + res.value);
                     console.log("3 link err" + " " + err.value);
                     hrefString = res;
                     return hrefString.should.be.empty;
                 });
             });
         });
    });

});

/*
 client.elements('<a />', function(err,res) {
 var i = 0;
 res.value.forEach(function(elem) {
 client.elementIdAttribute(elem, 'href', function(err,res) {
 console.log(++i, res.value);
 });
 });
 });*/
