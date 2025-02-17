import loginPageInstance from "../PageObjects/loginpage"; 
import ShoesPageInstance from "../PageObjects/chosseShoes";  // Asegúrate de corregir el nombre del archivo
import AddressPageInstance from "../PageObjects/DaliveryAddress"; 
import MercadoPagoPageInstance from "../PageObjects/mercaPago";
import PayMethodsPageInstance from "../PageObjects/PayMethods";
import PaidPageInstance, { paid } from "../PageObjects/Paid";
describe('Prueba POM', () => {
    beforeEach(() => {
        
        cy.viewport(1900, 1200);
        loginPageInstance.sitio();
        ShoesPageInstance.purchaseShoes();
        cy.fixture("credenciales").then(credenciales => {
            loginPageInstance.login(credenciales.email, credenciales.pass);
            cy.get('#clickAndCollect').click();
            cy.get('#clickReadyAddresState').select('MX-CMX');
            cy.get("#\\31 82614").click();
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
    it.only('pago con efectivo coneckta', () => { 
        MercadoPagoPageInstance.selecionarConeckta();
        PaidPageInstance.paidproduct();
        
     });
     it.only('pago con efectivo venta asistida', () => { 
        MercadoPagoPageInstance.selecionarAsistida();
        PaidPageInstance.paidproduct();
         
     });
   
 

});
