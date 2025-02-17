import loginPageInstanceQuirelli from "../PageObjects/loginpageQuirelli";
import PayMethodsQuirelliPageInstance from "../PageObjects/PayMethodsQuirelli";
describe('Login POM Ozono', () => {
    beforeEach(() => {
        
        loginPageInstanceQuirelli.sitio()
        loginPageInstanceQuirelli.chooseShoes()
        cy.fixture("credemcialesejemplo").then((credenciales) => {
        const users = credenciales[2];
        loginPageInstanceQuirelli.loginQuirelli(users.email, users.password);
        loginPageInstanceQuirelli.continue();
        loginPageInstanceQuirelli.metodo_de_envio();
             
        
            
        });
        
    });
    it('pago con Mercapago' , () => {
        PayMethodsQuirelliPageInstance.MethodChoose()
        PayMethodsQuirelliPageInstance.MercaPago()

    });
    it.only('pago con Conekta' , () => {
        PayMethodsQuirelliPageInstance.MethodChoose()
        cy.wait(2000)
        PayMethodsQuirelliPageInstance.Coneckta()

    });
});