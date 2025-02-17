import loginPageInstance from "../PageObjects/loginpage"; 
import ShoesPageInstance from "../PageObjects/chosseShoes";  // Asegúrate de corregir el nombre del archivo
import AddressPageInstance from "../PageObjects/DaliveryAddress"; 
import MercadoPagoPageInstance, { MercadoPago } from "../PageObjects/mercaPago";
import PayMethodsPageInstance from "../PageObjects/PayMethods";
import PaidPageInstance from "../PageObjects/Paid";
describe('Prueba POM', () => {
    beforeEach(() => {
        cy.clearCookies();             // Borra todas las cookies
        cy.clearLocalStorage();        // Borra todo el localStorage
        cy.viewport(1900, 1200);
        loginPageInstance.sitio();
        ShoesPageInstance.purchaseShoes();
        cy.fixture("credenciales").then(credenciales => {
            loginPageInstance.loginGuest(credenciales.email, credenciales.email);
            //AddressPageInstance.fillAddress();
            cy.get('#clickAndCollect').click();
            cy.get('#clickReadyAddresState').select('MX-CMX');
            cy.get("#\\31 82614").click();
            cy.wait(3000)
            cy.get('#addressSubmit').click() 
        });
    });

    it('pago con tarjeta', () => { 
        
        cy.fixture("TarjetasBancarias").then(TarjetasBancarias => {
        PayMethodsPageInstance.FillCard(TarjetasBancarias.numero,TarjetasBancarias.nombreTitular,TarjetasBancarias.mesExpiracion,TarjetasBancarias.anioExpiracion,TarjetasBancarias.nip);
        PaidPageInstance.paidproduct(); 
    });  
        
    
    });
    it('pago con efectivo Mercapago', () => { 
       MercadoPagoPageInstance.selecionarMercapago();
       PaidPageInstance.paidproduct(); 
       
        
    });
    it('pago con efectivo coneckta', () => { 
        MercadoPagoPageInstance.selecionarConeckta();
        PaidPageInstance.paidproduct(); 
    
        
         
     });
     it.only('pago con paypal tarjeta' , () => { 
        MercadoPagoPageInstance.selecionarPayPalTarjeta();
     }); 
        
});
