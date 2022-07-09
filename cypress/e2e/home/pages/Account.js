const AdminMenuClick = require("../../lib/AdminMenuClick");
const Select = require("../../lib/Select");

var Account = function(){
    this.createCheckingAccount = function(fullName, bal, email, pass){
        AdminMenuClick.click("Create Account");
        cy.wait(5000);
        cy.get("#fullname").clear().type(fullName);
        cy.get("#balance").clear().type(bal);
        Select.selectByValue("select", "Checking Account");
        cy.get("#email").clear().type(email);
        cy.get("#password").clear().type(pass);
        cy.get("input[class='btn']").click();
        cy.wait(5000);
    }

}
module.exports = new Account();