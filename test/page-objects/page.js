/**
 * Created by maarten on 19-09-16.
 */
// Object Page
var until = webdriver.until;


var urllocal;

/*constructor
 * sets driver and url
 * */

function Page(urllocal) {

    this.urllocal = urllocal;
}

/* method
 * get url with driver
 * return
 * */

Page.prototype.getUrl = function () {

    var d = webdriver.promise.defer();
    browser.url(this.urllocal).then(function (url) {
        d.fulfill(url);
    });
    return d.promise;
};

Page.prototype.currentUrl = function () {

    var d = webdriver.promise.defer();
    browser.getUrl().then(function (url) {
        console.log("current url:" + " " + url);
        d.fulfill(url);
    });

    return d.promise;

};

module.exports = Page;



