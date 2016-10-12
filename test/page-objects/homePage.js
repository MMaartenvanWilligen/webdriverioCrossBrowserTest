/**
 * Created by maarten on 19-09-16.
 */

/*
 * @desc page object homepage
 *
 * */

var Page = require("./page");

/*
 * @desc constructor HomePage object
 * @param driver
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


Home.prototype.ctaButtonText = function () {
    return browser.getText(this.ctaButton).then(function (txt) {
        return txt;
    })
};

Home.prototype.ctaButtonClick = function () {
    return browser.click(this.ctaButton);
};

Home.prototype.checkLinkshref = function () {

    return browser.elements(this.nav > this.anchor).then(function (elements) {
        console.log(elements);
        return elements.value.forEach(function (ele) {
            return browser.elementIdAttribute(ele.ELEMENT, "href").then(function (href) {
                return console.log(href.value)
            });
        });
    });
};

/*
 * @desc export HomePage
 * */

module.exports = Home;

