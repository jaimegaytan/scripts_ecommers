import loginPageInstance from "../PageObjects/loginpage"; 
import ShoesPageInstance from "../PageObjects/chosseShoes";  // Asegúrate de corregir el nombre del archivo
import AddressPageInstance from "../PageObjects/DaliveryAddress"; 
import MercadoPagoPageInstance from "../PageObjects/mercaPago";
import PayMethodsPageInstance from "../PageObjects/PayMethods";
import PaidPageInstance from "../PageObjects/Paid";
describe('Prueba POM', () => {
     
    beforeEach(() => {
        cy.viewport(1900, 1200);
        loginPageInstance.sitio();
        ShoesPageInstance.purchaseShoes();
        cy.fixture("credemcialesejemplo").then((credenciales) => {
            const users = credenciales[0];
            loginPageInstance.login(users.email, users.password);
            AddressPageInstance.fillAddress();
            
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
        cy.get('.order-title')
        .invoke('text')  // Obtiene el texto del elemento
        .then((text) => {
        // Usa 'cy.writeFile()' para escribir el texto en un archivo .txt
        const filePath = 'cypress/fixtures/orderTextConeckta.txt';  // Ruta del archivo donde quieres guardar el texto
        cy.writeFile(filePath, text);  // Escribe el texto en el archivo
        cy.log('Texto guardado en el archivo: ' + text);  // Imprime en la consola de Cypress
      });
    
        
         
     });
     it('pago con efectivo venta asistida', () => { // Cambié 'function' por una función flecha
        MercadoPagoPageInstance.selecionarAsistida();
        PaidPageInstance.paidproduct(); 
        
        
         
     });
    
    

});
