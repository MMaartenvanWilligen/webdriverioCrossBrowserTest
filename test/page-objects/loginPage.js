/**
 * Created by maarten on 29-09-16.
 */

var Page = require("./page");

/**
 * constructor HomePage object *
  * */

function Login() {

    Page.call(this, "http://localhost:8000/website/loginPage.html");
    this.inputUsername = "#username";
    this.inputPassword = "#userpass";
    this.submitButton = "#submit";
    this.ErrorHandlingFormSpan = ".mdl-textfield__error";

}

// subclass Homepage extends page
Login.prototype = Object.create(Page.prototype);
Login.prototype.constructor = Login;

/**
 * @desc method get value of input field username
 * @return promise value username
 * */

Login.prototype.inputUsernameGetValue = function () {
    return browser.getValue(this.inputUsername).then(function (value) {
        return value;
    });
};

/**
 * @desc method set input field username
 * @return promise
 * */

Login.prototype.inputUsernameSetValue = function (inputText) {
    return browser.setValue(this.inputUsername, inputText);
};

Login.prototype.inputPasswordGetValue = function () {
    return browser.getValue(this.inputPassword).then(function (value) {
        return value;
    });
};

Login.prototype.inputPasswordSetValue = function (inputText) {
    return browser.setValue(this.inputPassword, inputText);
};

Login.prototype.submitClick = function () {
    return browser.click(this.submitButton);
};

Login.prototype.loginProcess = function (Username, password) {
    this.inputUsernameSetValue(Username);
    this.inputPasswordSetValue(password);
    this.submitClick().then(function () {
    });
};

Login.prototype.errorHandlingSpanDisplayed = function () {
    return browser.isVisible(this.ErrorHandlingFormSpan).then(function (bool) {
        return bool;
    });
};

module.exports = Login;


