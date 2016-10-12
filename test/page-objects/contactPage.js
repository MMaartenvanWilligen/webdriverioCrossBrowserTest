

var Page = require("./page");

/**
 * @desc constructor Contact
 *
 * driver
 * */

function Contact(driver) {

    Page.call(this, driver, "http://localhost:8000/website/contactPage.html");
    console.log("driver" + " " + driver);

}

// subclass Homepage extends page
Contact.prototype = Object.create(Page.prototype);
Contact.prototype.constructor = Contact;

Contact.prototype.inputFirstname = function () {

    return this.driver.findElement(webdriver.By.id('firstname'));
};

module.exports = Contact;
