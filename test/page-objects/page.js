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

    browser.url(this.urllocal);
    console.log("nsvigste to url");
    return webdriver.promise.fulfilled(true);

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



