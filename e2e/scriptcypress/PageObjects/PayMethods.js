export class PayMethods {
    constructor() {

        this.SelectPaidCard =  "#mercadopago_credit_debit";
        this.TypeCard = "#card_cardType";
        this.CardNumber = "#silentOrderPostForm > :nth-child(22)";
        this.UserCredit =  "#silentOrderPostForm > :nth-child(24)";
        this.ExpiryMonth = "#expiryMonth";
        this.ExpiryYear = "#expiryYear"
        this.Nip = ":nth-child(32) > :nth-child(1) > .col-xs-6"
        this.Next = "#btn_payment";
       
        
        
    };

    
  
    FillCard(number , user , month , year , nip) {
      cy.get(this.SelectPaidCard).click()  
      cy.get(this.TypeCard).select('001')
      cy.get(this.CardNumber).type(number);
      cy.get(this.UserCredit).type(user);
      cy.get(this.ExpiryMonth).select(month);
      cy.get(this.ExpiryYear).select(year);
      cy.get(this.Nip).type(nip);
      cy.get(this.Next).click();
             
    }
    

}
const PayMethodsPageInstance = new PayMethods();
export default PayMethodsPageInstance;

