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
}



// subclass Homepage extends page
Home.prototype = Object.create(Page.prototype);
Home.prototype.constructor = Home;

/* @desc method get value header
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise of text header
 * */



/* @desc find element raised button
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise raised button element
 * */

Home.prototype.ctaButton = function () {
    return browser.element("#ctaButton");
};

/* @desc method click on raised button
 * need to manually handle the Promise so it can be handled by the mocha framework in first-test.js
 * @return promise raised button element
 * */
Home.prototype.ctaButtonClick = function () {
        this.ctaButton().then(function () {
            browser.click();
        })
        
};

/*
 * @desc export HomePage
 * */

module.exports = Home;






