export class CardOzono {
    constructor() {

      this.CardType = ".field.ng-untouched > .ng-select > .ng-select-container > .ng-arrow-wrapper";
      this.NumberCard = ".cardNumber > .group > .ng-untouched";
      this.UserCard  = ":nth-child(3) > app-custom-input > .group > .ng-untouched";
      this.MonthPaid  = ".col-12 > .ng-select-container > .ng-value-container > .ng-input"
      this.MonthCard = "[formcontrolname='expiryMonth']"
      this.YearCard = "[formcontrolname='expiryYear']"
      this.Nip = ".field--cvn > app-custom-input > .group > .ng-untouched";
  
      
        
        
    };

    FillCard(number , user , nips) {
      cy.get(this.CardType).click().type('Visa{enter}')
      cy.get(this.NumberCard).type(number)
      cy.get(this.UserCard).type(user)
      cy.get(this.Nip).type(nips)
      cy.get(this.MonthPaid).type('1{enter}')
      cy.get(this.MonthCard).type('11{enter}')
      cy.get(this.YearCard).type('2025{enter}')
       
    
             
    }
    

}
const CardPageInstance = new CardOzono();
export default CardPageInstance;

