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

/*
 * @desc export HomePage
 * */

module.exports = Home;






