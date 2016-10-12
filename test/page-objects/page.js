/**
 * Created by maarten on 19-09-16.
 */
// Object Page

var urllocal;

/**
 * @desc constructor Page
 * set url
 * @param urllocal
 * */

function Page(urllocal) {
    this.urllocal = urllocal;
}

/**
 *  @desc method
 * @return url
 * @global 'browser' is wdio global. driver for browser automation
 * */

Page.prototype.getUrl = function () {
    return browser.url(this.urllocal).then(function (url) {
        return url
    });
};

/**
 * @desc method get current url in browser
 * @return url
 * @global 'browser' is wdio global. driver for browser automation
 * */

Page.prototype.currentUrl = function () {
    return browser.getUrl().then(function (url) {
        console.log("current url:" + " " + url);
        return url;
    });
};

module.exports = Page;



