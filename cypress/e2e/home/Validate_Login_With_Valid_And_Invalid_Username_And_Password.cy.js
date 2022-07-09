const ELogin = require("../lib/ELogin");
const wait = require("../lib/wait");

describe("Validate_Login_With_Valid_And_Invalid_Username_And_Password", function(){

    it("Validate_Login_With_Valid_And_Invalid_Username_And_Password_1: Verify that user can not login with valid username and invalid pass", function(){
        ELogin.loginAsAdmin("admin@admin.com", "World");
        wait.waitForEle(".notif.danger");
        cy.get(".notif.danger").invoke("text").then(function(errMsg){
            expect(errMsg).eq("Wrong username and password.");
        })
    }) // end of it

    it("Validate_Login_With_Valid_And_Invalid_Username_And_Password_2: Verify that user can not login with invalid username and valid pass", function(){
        ELogin.loginAsAdmin("admin", "abc123");
        wait.waitForEle(".notif.danger");
        cy.get(".notif.danger").invoke("text").then(function(errMsg){
            expect(errMsg).eq("Wrong username and password.");
        })
    }) // end of it 

    it("Validate_Login_With_Valid_And_Invalid_Username_And_Password_3: Verify that user can not login with invalid username and invalid pass", function(){
        ELogin.loginAsAdmin("admin", "World");
        wait.waitForEle(".notif.danger");
        cy.get(".notif.danger").invoke("text").then(function(errMsg){
            expect(errMsg).eq("Wrong username and password.");
        })
    }) // end of it

    it("Validate_Login_With_Valid_And_Invalid_Username_And_Password_1: Verify that user can login with valid user name and password", function(){
        ELogin.loginAsAdmin("admin@admin.com", "abc123");
        wait.waitForEle(":nth-child(1) > .details > h1");
        cy.get(":nth-child(1) > .details > h1").invoke('text').then(function(adminAcc){
            expect(adminAcc).eq("Admin Account");
        });
    }) // end of it
})