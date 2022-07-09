const AdminMenuClick = require("../lib/AdminMenuClick");
const ELogin = require("../lib/ELogin");
const wait = require("../lib/wait");
const Account = require("./pages/Account");

describe("Validate_Account_Creation",  function(){

    beforeEach(function () {
        cy.restoreLocalStorageCache();
    })

    var ammount = "10,000,000";

    it("Validate_Account_Creation_1: Verify that admin can create an checking account", function(){
        ELogin.loginAsAdmin("admin@admin.com", "abc123");
        Account.createCheckingAccount("Hamim Alam", ammount, "hamim.alam@test.com", "12345678");
        ELogin.logout();
    });

    it("Validate_Account_Creation_2: Verify that account created", function(){
        ELogin.loginAsAdmin("admin@admin.com", "abc123");
        cy.findByText("Hamim Alam").invoke("text").then(function(accName){
            expect(accName).eq("Hamim Alam");
        });
        ELogin.logout();
    });

    it("Validate_Account_Creation_3: Verify that new user can login", function(){
        ELogin.loginAsAdmin("hamim.alam@test.com", "12345678");
        cy.get('.details > h1').invoke("text").then(function(name){
            expect(name).eq("Hamim Alam");
        });
        cy.get('.balance').invoke("text").then(function(acAmount){
            expect(acAmount).eq(ammount);
        });
        ELogin.logout();
    });

    afterEach(function(){
        cy.saveLocalStorageCache();
    })
});