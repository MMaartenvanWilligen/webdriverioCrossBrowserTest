var Page = require("./page");

/**
 * @desc constructor Contact
 * not yet used!
 * */

function Contact() {
    Page.call(this, "http://localhost:8000/website/contactPage.html");
}

// subclass Homepage extends page
Contact.prototype = Object.create(Page.prototype);
Contact.prototype.constructor = Contact;

Contact.prototype.inputFirstname = function () {

    return this.driver.findElement(webdriver.By.id('firstname'));
};

module.exports = Contact;
