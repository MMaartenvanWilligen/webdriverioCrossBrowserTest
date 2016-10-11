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

/*
 * @desc export HomePage
 * */

module.exports = Home;






