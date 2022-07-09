var Login = function(){
    this.loginAsAdmin = function(username, pass){
       cy.visit("http://localhost:3000/banking-app/");
       cy.get('#logo', {timeout: 40000}).should('be.visible');
       cy.get("#username").clear().type(username);
       cy.get("#password").clear().type(pass);
       cy.get("button[type='submit']").should("be.visible").then(function(visible){
        if (visible) {
            cy.get("button[type='submit']").click();
        }
       });
    }
    this.logout = function(){
        cy.findByText("Logout").click();
        cy.get('#logo', {timeout: 40000}).should('be.visible');
    }
}
module.exports = new Login();