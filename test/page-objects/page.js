/**
 * Created by maarten on 19-09-16.
 */
// Object Page
var webdriver = require("selenium-webdriver");
var until = webdriver.until;

var driver;
var urllocal;

/*constructor
 * sets driver and url
 * */

function Page(driver, urllocal) {

    this.urllocal = urllocal;
    this.driver = driver;
}

/* method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function () {

    this.driver.url(this.urllocal);
    console.log("nsvigste to url");
    return webdriver.promise.fulfilled(true);

};

Page.prototype.currentUrl = function () {

    var d = webdriver.promise.defer();
    this.driver.getUrl().then(function (url) {
        console.log("current url:" + " " + url);
        d.fulfill(url);
    });

    return d.promise;

};

module.exports = Page;



