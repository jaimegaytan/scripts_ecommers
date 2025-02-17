export class PayMethodsQuirelli {
    constructor() {
      this.chooseMethod = ".ng-select-container";
      this.MercapagoSelect = "[id^=a][id$=1]"
      this.ConecktaSelect = "[id^=a][id$=2]"
      this.continue = ".cx-checkout-btns > :nth-child(2)"
      this.pay = "cx-progress-button > .btn"

    }
    MethodChoose()
    {
        cy.get(this.chooseMethod).click();
    }
    MercaPago()
    {
        cy.get(this.MercapagoSelect).click()
        cy.get(this.continue).click()
        cy.wait(2000)
        cy.get(this.pay).click()
        
    }
    Coneckta()
    {
        cy.get(this.ConecktaSelect).click()
        cy.get(this.continue).click()
        cy.wait(2000)
        cy.get(this.pay).click()
        
    }
   


}

const PayMethodsQuirelliPageInstance = new PayMethodsQuirelli();
export default PayMethodsQuirelliPageInstance;
