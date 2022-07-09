var wait = function(){
    this.waitForEle = function(ele){
        cy.get(ele, {timeout:4000000}).should("be.visible");
    }
}
module.exports = new wait();