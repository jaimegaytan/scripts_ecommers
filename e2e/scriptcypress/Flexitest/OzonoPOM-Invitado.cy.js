import shoesPageInstanceOzono from "../PageObjects/chosseShoesOzono";
import loginPageInstanceOzono from "../PageObjects/loginpageOzono";
import AddressOzonoPageInstance from "../PageObjects/DaliveryAddressOzono";
import PayMethodsOzonoPageInstance from "../PageObjects/PayMethodsOzono";
import CardPageInstance from "../PageObjects/cardOzono";
describe('Login POM Ozono', () => {
    beforeEach(() => {
        
        shoesPageInstanceOzono.sitioOzono()
        shoesPageInstanceOzono.NavToMenu()
        cy.fixture("credemcialesejemplo").then((credenciales) => {
        const users =  credenciales[1]
        loginPageInstanceOzono.loginGuest(users.email, users.email);
        
        
            
        });
    });
    it('pago con tarjeta', () => {

        cy.fixture("addressOzono").then(a => { 
            AddressOzonoPageInstance.fillAddress(a.name,a.lastname,a.zipcode,a.street,a.phone);
            PayMethodsOzonoPageInstance.dirrecion()
            PayMethodsOzonoPageInstance.selecionarCard()
            
        });
        cy.fixture("TarjetasBancarias").then(tarjeta => {
           
            CardPageInstance.FillCard(tarjeta.numero,tarjeta.nombreTitular,tarjeta.nip)
        })
        PayMethodsOzonoPageInstance.pagar()  
        
      });
    it('pago con coneckta', () => {

    cy.fixture("addressOzono").then(a => { 
        AddressOzonoPageInstance.fillAddress(a.name,a.lastname,a.zipcode,a.street,a.phone);
        PayMethodsOzonoPageInstance.selecionarConeckta()
        PayMethodsOzonoPageInstance.pagar()  

    });
    
  });
  it.only('pago con Mercadopago', () => {

    cy.fixture("addressOzono").then(a => { 
        AddressOzonoPageInstance.fillAddress(a.name,a.lastname,a.zipcode,a.street,a.phone);
        PayMethodsOzonoPageInstance.selecionarMercapago()
        PayMethodsOzonoPageInstance.pagar()  

    });
    
    
   });

});


