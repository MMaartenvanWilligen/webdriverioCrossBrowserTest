/**
 * Created by maarten on 19-09-16.
 */

/**
 * @desc page object homepage
 * */

var Page = require("./page");

/**
 * @desc constructor HomePage object
 * set the identifiers of homepage elements in variables
 * */

function Home() {
    Page.call(this, "http://localhost:8000/website/index.html");
    this.ctaButton = "#ctaButton";
    this.form = "#form";
    this.nav = "#nav";
    this.anchor = "<a>"
}

// subclass Homepage extends page
Home.prototype = Object.create(Page.prototype);
Home.prototype.constructor = Home;

/**
 * @desc method get text cat button
 * @return promise txt
 * */

Home.prototype.ctaButtonText = function () {
    return browser.getText(this.ctaButton).then(function (txt) {
        return txt;
    })
};

/**
 * @desc method get text cat button
 * @return promise
 * */

Home.prototype.ctaButtonClick = function () {
    return browser.click(this.ctaButton);
};

Home.prototype.checkLinkshref = function () {





   /* return browser.elements(this.anchor).then(function (elements) {
        console.log(elements);
        return elements.value.forEach(function (ele) {
            return browser.elementIdAttribute(ele.ELEMENT, "href").then(function (href) {
                return console.log(href.value)
            });
        });
    });*/
};

/*
 * @desc export HomePage
 * */

module.exports = Home;

/*
client.elements('<a />', function(err,res) {
    var i = 0;
    res.value.forEach(function(elem) {
        client.elementIdAttribute(elem, 'href', function(err,res) {
            console.log(++i, res.value);
        });
    });
});*/
