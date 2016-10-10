/**
 * Created by maarten on 19-09-16.
 */
// Object Page

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
    return browser.url(this.urllocal).then(function (url) {
        return url
    });
};

Page.prototype.currentUrl = function () {
    return browser.getUrl().then(function (url) {
        console.log("current url:" + " " + url);
        return url;
    });
};

module.exports = Page;



