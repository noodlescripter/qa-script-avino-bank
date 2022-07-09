var MenuClick = function(){
    this.click = function(option){
        if (option == 'Home') {
            cy.findByText("Home").should('be.visible').then(function(visible){
                if (visible) {
                    cy.findByText("Home").click();
                } else {
                    cy.log("HOME <<<<<<<<<<<< Lag gayeeeeeeeeeeeee reeeeeeeeeeeeeeeeeeeeeeee");
                }
            })
        } else if (option == 'Budget App'){
            cy.findByText("Budget App").should("be.visible").then(function(visible){
                if (visible) {
                    cy.findByText("Budget App").click();
                } else {
                    cy.log("Budget  app <<<<<<<<< lag gayeeeeeeeeee reeeeeeeeeeeeeeeeeee");
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
        } else {
            cy.log("Check your input you dummy!!!!!!!!");
        }
    }
}
module.exports = new MenuClick();