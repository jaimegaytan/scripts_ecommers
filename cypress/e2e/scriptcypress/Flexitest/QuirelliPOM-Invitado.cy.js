import loginPageInstanceQuirelli from "../PageObjects/loginpageQuirelli";
import PayMethodsQuirelliPageInstance from "../PageObjects/PayMethodsQuirelli";
import AddressQuirelliPageInstance from "../PageObjects/DaliveryAddressQuirelli";
describe('Login POM Ozono', () => {
    beforeEach(() => {
        
        loginPageInstanceQuirelli.sitio()
        loginPageInstanceQuirelli.chooseShoes()
        loginPageInstanceQuirelli.loginGuest()
        cy.fixture("credemcialesejemplo").then((credenciales) => {
        const users = credenciales[2];
        loginPageInstanceQuirelli.insertEmail(users.email, users.email);
        
        
             
        
            
        });
        
    });
    it('pago con Mercapago' , () => {
        cy.fixture("addressOzono").then(a => { 
            AddressQuirelliPageInstance.fillAddress(a.name,a.lastname,a.phone,a.zipcode,a.street);
            loginPageInstanceQuirelli.metodo_de_envio()
            PayMethodsQuirelliPageInstance.MethodChoose()
            PayMethodsQuirelliPageInstance.MercaPago()
        });

    });
    it.only('pago con Conekta' , () => {
        cy.fixture("addressOzono").then(a => { 
            AddressQuirelliPageInstance.fillAddress(a.name,a.lastname,a.phone,a.zipcode,a.street);
            loginPageInstanceQuirelli.metodo_de_envio()
            PayMethodsQuirelliPageInstance.MethodChoose()
             cy.wait(2000)
            PayMethodsQuirelliPageInstance.Coneckta()

        
            
        });
       

    });
});