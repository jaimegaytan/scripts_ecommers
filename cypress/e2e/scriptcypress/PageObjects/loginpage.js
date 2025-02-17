export class LoginPage {
    constructor() {

        this.userName =  "#loginForm > :nth-child(1)";
        this.password = "#loginForm > :nth-child(2)";
        this.email1 = "#guestForm > :nth-child(1) > .form-group"
        this.confirmEmail = "#guestForm > :nth-child(2)"
        this.sumbit = "#loginForm > .btn-style-green";
        this.sumbitguest = "#guestBtnId";

        
    };

    sitio() {
       
        cy.visit('https://accstorefront.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/');
    }
  
    login(email, password) {
        cy.get(this.userName).type(email);
        cy.get(this.password).type(password)
        cy.get(this.sumbit).click()
    }
    loginGuest(emailGuest)
    {
        cy.get(this.email1).type(emailGuest);
        cy.get(this.confirmEmail).type(emailGuest);
        cy.wait(3000)
        cy.get(this.sumbitguest).should('be.visible').click();
    }

}
const loginPageInstance = new LoginPage();
export default loginPageInstance;

