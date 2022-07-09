var Select = function(){
    this.selectByValue = function(ele, value){
        cy.get(ele).select(value);
    }
}
module.exports = new Select();