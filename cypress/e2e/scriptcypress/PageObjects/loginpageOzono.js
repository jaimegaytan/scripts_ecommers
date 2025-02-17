export class LoginPageOzono {
    constructor() {

        this.userNameO =  ":nth-child(3) > app-custom-input > .group > .ng-untouched";
        this.passwordO = "[style='display: block;'] > .group > .ng-untouched";
        this.guestUser =  ":nth-child(9) > a";
        this.guestEmail = ":nth-child(1) > app-custom-input > .group > .ng-untouched"
        this.guestEmail1 = ":nth-child(2) > app-custom-input > .group > .ng-untouched"
        this.sumbit = ".slider-container";
        


        
    };
    loginGuest(email){
        
        cy.get(this.guestUser).click();
        cy.get(this.guestEmail).type(email);
        cy.get(this.guestEmail1).type(email);
        cy.get(this.sumbit).click();
        
    }

  
    loginOzono(email, password) {
        cy.get(this.userNameO).type(email);
        cy.get(this.passwordO).type(password);
        cy.get(this.sumbit).click();
    }
   

}
const loginPageInstanceOzono = new LoginPageOzono();
export default loginPageInstanceOzono;
