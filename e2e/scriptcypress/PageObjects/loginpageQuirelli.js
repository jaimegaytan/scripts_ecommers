export class LoginPageQuirelli {
    constructor() {

      this.userNameQ = "form.ng-untouched > :nth-child(1)"
      this.passwordQ = ".ng-invalid.ng-dirty > :nth-child(2)"
      this.sumbit = ".btn";
      this.Menu = ".hamburger-box";
      this.MenCat  = ".NavigationBar > app-custom-navigation > .flyout > :nth-child(4) > cx-generic-link > a";
      this.Shoes = ':nth-child(1) > .cx-product-image-container > .cx-product-image > img';
      this.Buy1 = ".ng-untouched > .btn"
      this.Buy = ".cx-dialog-buttons > .btn-primary";
      this.AddCard = "cx-cart-totals > .btn"
      this.send = ":nth-child(2) > .cx-btn";
      this.MethodSend = ".cx-checkout-btns > :nth-child(2)"
      this.Guest =  ".btn-guest"
      this.emailQ = ":nth-child(1) > label > .form-control" 
      this.emailQ1 = ":nth-child(2) > label > .form-control"
    
        
    };
    sitio()  {
        cy.visit("https://quirelli.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/")

    }
    chooseShoes()
    {
        cy.get(this.Menu).click()
        cy.get(this.MenCat).click()
        cy.get(this.Shoes).click()
        cy.get(this.Buy1).click()
        cy.get(this.Buy).click()
        cy.get(this.AddCard).click()
        
    }

    loginQuirelli(email, password) {
        cy.get(this.userNameQ).type(email);
        cy.get(this.passwordQ).type(password);
        cy.get(this.sumbit).click();
    }
    continue(){
    cy.get(this.send).click()
    cy.wait(2000)
    }
    metodo_de_envio(){
        cy.wait(2000)
        cy.get(this.MethodSend).click() 
    }
    loginGuest(){
        cy.get(this.Guest).click()
    }   
    insertEmail(email){
        cy.get(this.emailQ).type(email)
        cy.get(this.emailQ1).type(email)
        cy.get(this.sumbit).click()
    }   

}
const loginPageInstanceQuirelli = new LoginPageQuirelli();
export default loginPageInstanceQuirelli;
