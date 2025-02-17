import loginPageInstanceOzono from "../PageObjects/loginpageOzono";
import shoesPageInstanceOzono  from "../PageObjects/chosseShoesOzono";  
import PayMethodsOzonoPageInstance from "../PageObjects/PayMethodsOzono";
import CardPageInstance from "../PageObjects/cardOzono";

describe('Login POM Ozono', () => {
    beforeEach(() => {
        
        shoesPageInstanceOzono.sitioOzono()
        shoesPageInstanceOzono.NavToMenu()
        cy.fixture("credemcialesejemplo").then((credenciales) => {
        const users = credenciales[1]
        loginPageInstanceOzono.loginOzono(users.email, users.password);
        cy.wait(3000)
        
            
        });
    });
    it('pago con tarjeta', () => {

        PayMethodsOzonoPageInstance.dirrecion()
        cy.fixture("TarjetasBancarias").then(TarjetasBancarias => {
        PayMethodsOzonoPageInstance.selecionarCard();
        CardPageInstance.FillCard(TarjetasBancarias.numero,TarjetasBancarias.nombreTitular,TarjetasBancarias.nip);
        cy.wait(30000)
        PayMethodsOzonoPageInstance.pagar()  
        

    });

    });
    it('Pago con mercadopago' , () => {
        PayMethodsOzonoPageInstance.dirrecion()
        PayMethodsOzonoPageInstance.envio()
        PayMethodsOzonoPageInstance.selecionarMercapago();
        cy.wait(30000)
        PayMethodsOzonoPageInstance.pagar()  
    });
    it('Pago con coneckta', () => {
        PayMethodsOzonoPageInstance.dirrecion()
        PayMethodsOzonoPageInstance.envio()
        PayMethodsOzonoPageInstance.selecionarConeckta();
        cy.wait(3000)
        PayMethodsOzonoPageInstance.pagar()  
    });
    it('Pago ventaAsistida', () => {
        PayMethodsOzonoPageInstance.dirrecion()
        PayMethodsOzonoPageInstance.envio()
        PayMethodsOzonoPageInstance.selecionarVentaAsistida();
        cy.wait(3000)
        PayMethodsOzonoPageInstance.pagar()  
    });
    
 });

