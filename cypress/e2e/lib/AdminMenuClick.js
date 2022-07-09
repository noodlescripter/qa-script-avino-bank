const wait = require("./wait");

var AdminMenuClick = function(){
    this.click = function(option){
        if (option == 'Home') {
            cy.findByText("Home").should('be.visible').then(function(visible){
                if (visible) {
                    cy.findByText("Home").click();
                } else {
                    cy.log("HOME <<<<<<<<<<<< Lag gayeeeeeeeeeeeee reeeeeeeeeeeeeeeeeeeeeeee");
                }
            })
        } else if (option == 'Create Account'){
            cy.findByText("Create Account").should("be.visible").then(function(visible){
                if (visible) {
                    cy.findByText("Create Account").click();
                    wait.waitForEle("#form>h1")
                } else {
                    cy.log("Create account <<<<<<<<< lag gayeeeeeeeeee reeeeeeeeeeeeeeeeeee");
                }
            })
        } else if (option == 'Fund Transfer'){
            cy.findByText("Fund Transfer").should("be.visible").then(function(visible){
                if (visible) {
                    cy.findByText("Fund Transfer").click();
                } else {
                    cy.log("Fund Transfer <<<<<<<<< lag gayeeeeeeeeee reeeeeeeeeeeeeeeeeee");
                }
            })
        } else if (option == 'Deposit'){
            cy.findByText("Deposit").should("be.visible").then(function(visible){
                if (visible) {
                    cy.findByText("Deposit").click();
                } else {
                    cy.log("Deposit <<<<<<<<< lag gayeeeeeeeeee reeeeeeeeeeeeeeeeeee");
                }
            })
        } else if (option == 'Withdraw'){
            cy.findByText("Withdraw").should("be.visible").then(function(visible){
                if (visible) {
                    cy.findByText("Withdraw").click();
                } else {
                    cy.log("Withdraw <<<<<<<<< lag gayeeeeeeeeee reeeeeeeeeeeeeeeeeee");
                }
            })
        } else {
            cy.log("Check your input please, you stupid!!!!!!!!!!!!!");
        }
    }    
};

module.exports = new AdminMenuClick();
