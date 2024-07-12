describe('Prueba de pagina en Flexi', () => {
  beforeEach(() => {
    cy.visit('https://accstorefront.c2yi-servicios1-p1-public.model-t.cc.commerce.ondemand.com/es/');
    cy.document().should('exist').its('readyState').should('equal', 'complete');
    cy.viewport(1900, 1000)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Devolver false para evitar que Cypress falle la prueba
      return false;
    });
  });

  const selecionaCalzado = () => {
    //Esperar a que aparesca a la ventana emergente
    cy.wait(4000)
    //Cerrar la Ventana Emergente
    //cy.get('#wps-overlay-close-button').click()
    //Aceprar cookies
    cy.get('[data-code="MARKETING_NEWSLETTER"] > .row > :nth-child(4) > .consent-accept').click()
    //Selecionar dama
    cy.get(':nth-child(2) > .nav__link > a').click()
    //Selecionar Zapato
    cy.get('[src="/medias/sys_master/images/h70/h86/9526169468958/103404-oro-rosa-derecha/103404-oro-rosa-derecha.jpg"]').click()
    //Selecionar el numero de zapato
    cy.get('[data-url="/es/c/Sneaker-Casual-Sport-Flexi-para-Mujer---Estilo-103404/p/7500421451854"]').click()
    //Presionar comprar a ahora
    cy.get('#shopButton').click()
    //Presionar comprar a ahora nuevamente pero en la siguente imagen
    cy.get('.my-car-style > .col-md-3 > .btn').click()
    
    
  }
  const RellenarDirrecion = () => {

    //Selecionar envio a domicilio
    cy.get('#sendHouse').click()
    //Ingresar codigo postal
    cy.get(':nth-child(1) > .col-xs-12 > :nth-child(1) > .form-group').type('20269')
    //Selecionar colonia
    cy.get(':nth-child(1) > .col-xs-12 > :nth-child(2) > .form-group').click()
    //Ingresa Telefono
    cy.get(':nth-child(1) > :nth-child(3) > .col-xs-12 > :nth-child(2)').type('4491033223')
    //Ingresar Domicilio
    cy.get('#i18nAddressForm > :nth-child(1) > :nth-child(4)').type('Teo 123')
    //Ingresa Nombre
    cy.get('#i18nAddressForm > :nth-child(1) > :nth-child(5)').type('Benito G')
    //Click en siguente
    cy.get('#addressSubmit').click()
    //Espera de 2000 mili segundos
    cy.wait(2000)
    // Click en siguente Metodo de envio
    cy.get('#deliveryMethodSubmit').click()
 
    
    
  }
  const MercadoPago = () => {

    cy.wait(2000)
    //Selecionar en efectivo
    cy.get('#cash').click()
    // Selecionar mercado cash 7 elevent etc
    cy.get('#mercadopago').click()
    cy.wait(300)
    //Click en siguente
    cy.get(':nth-child(3) > .payment-op > .btn').click()
    //Espera de 2000
    cy.wait(2000)
    //Click en comprar
    cy.get('.place-order-form > #placeOrderForm1 > #placeOrder').click()
    
  }
  const PagoConTarjetaMercadopago = () => {

    cy.wait(2000)
    //Selecionar pago con tarjeta
    cy.get('#mercadopago_credit_debit').click()
    //Selecionar VISA
    cy.get('#card_cardType').select('001')
    //Numero de tarjeta
    cy.get('#silentOrderPostForm > :nth-child(22)').type('4075 5957 1648 3764')
    //Nombre de titular de tarea
    cy.get('#silentOrderPostForm > :nth-child(24)').type('J A')
    //Mes de expiracion
    cy.get('#expiryMonth').select('11')
    //Año de expiracion
    cy.get('#expiryYear').select('2025')
    //Ingresar el NIP
    cy.get(':nth-child(32) > :nth-child(1) > .col-xs-6').type('123')
    //Click siguente
    cy.get('#btn_payment').click()
    //Click compra ahora 
    cy.get('.place-order-form > #placeOrderForm1 > #placeOrder').click()
  
  }

  const PagoPayPal = () => {

    cy.get('#paypal').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .payment-op').should('be.visible').click()
    
    
  }
  const conecktaFlexi = () => {
     
    //Selecionar metodo en efectivo
    cy.get('#cash').click()
    //Selecionar metodo de coneckta oxxo
    cy.get('#coneckta').click()
    //Click en continuar
    cy.get('.payment-op > .btn').click()
    //Click en comprar
    cy.get('.place-order-form > #placeOrderForm1 > #placeOrder').click()
    
    
  }
  const usuario_invitado = () => {

     //Ingresar correo de invitado
     cy.get('#guestForm > :nth-child(1) > .form-group').should('be.visible').type('jaimeqa99@gmail.com')
     //Confirmar correo de invitado
    cy.get('#guestForm > :nth-child(2)').should('be.visible').type('jaimeqa99@gmail.com')
    //Click compra como invitado
    cy.get('#guestBtnId').click()
        
    
  }
  const usuario_Registrado = () => {

   //Ingresar correo
   cy.get('#loginForm > :nth-child(1)').type('jaimeqa99@gmail.com')
   //Ingresar la contraseña
   cy.get('#loginForm > :nth-child(2)').type('lookkg361')
   //Click a entrar
   cy.get('#loginForm > .btn-style-green').click()
   
   
 }
 const EscogerOtroProducto = () => {

  //ir al menu
  cy.get(':nth-child(3) > .nav__link > a').click()
  //Selecionar caballero
  cy.get('.js-offcanvas-links > :nth-child(3)').click()
  //Selecionar zapato
  cy.get('#addToCartForm7500421336076 > .btn').click()
  //Selecionar numero
  cy.get(':nth-child(4) > #btn').click()
  //Selecionar ver carrito
  cy.get('#submitPopUp').click()
  //Comprar ahora 
  cy.get('.my-car-style > .col-md-3 > .btn').click().screenshot()
  
}
const clickandcollect = () => {

    //Click en el boton de click&collect
    cy.get('#clickAndCollect').click()
     //Elegir CDMX
    cy.get('#clickReadyAddresState').select('MX-CMX')
     //Selecionar coyoacan centro
    cy.get('.list__entry__pos__0').click()
     //Click en continuar
    cy.wait(400)
    cy.get('#addressSubmit').click()
     //Click en metodo de pago mercado pago en efectivo
  
}
const ZapatoProductivo = () => {

    cy.get('.consent-reject').click()
    cy.get(':nth-child(2) > .nav__link > a').click()
    cy.get('#addToCartForm7500421747438 > .btn').click()
    cy.get(':nth-child(3) > #btn').click()
    cy.get('#submitPopUp').click()
    cy.get('.my-car-style > .col-md-3 > .btn').click()
  

}

const ZapatoProductivo2 = () => {

  cy.screenshot('venta-asisitida-productivo-efectivo-mercapago')
  cy.get(':nth-child(3) > .nav__link > a').click()
  cy.get('#addToCartForm7500421426371 > .btn').click()
  cy.get(':nth-child(5) > #btn').click()
   cy.get('#submitPopUp').click()
   cy.get('.my-car-style > .col-md-3 > .btn').click()
    


}

 it('Comprar como invitado Pagon con tarjeta Mercadopago', () => {
    
    //Usar la funcion calzado
    selecionaCalzado()
    usuario_invitado()
    RellenarDirrecion()
    PagoConTarjetaMercadopago()
    cy.screenshot('captura-tarjetaMercapago') 
  


  });
  it('Comoprar como usuario registrado tarjeta mercadopago', () => {
    
    //Usar la funcion calzado
    selecionaCalzado()
    usuario_Registrado()
    RellenarDirrecion()
    PagoConTarjetaMercadopago()
    cy.screenshot('captura-pagocontarjeta-usuario-registrado')

  });
  it('Comprar como usuario Registrado efectivo', () => {
    
    //Selecionar el calzado
    selecionaCalzado()
    usuario_Registrado()
    RellenarDirrecion()
    MercadoPago()
    cy.screenshot('captura-efectivo-usuario-registrado')

  });
  it('Comprar como usuario invitado en efectivo', () => {
    
    //Selecionar el calzado
    selecionaCalzado()
    usuario_invitado()
    RellenarDirrecion()
    MercadoPago()
    cy.screenshot('Invitado con efectivo')

  });
  it('Comprar como usuario Registrado paypal', () => {
    
    //Selecionar el calzado
    selecionaCalzado()
    usuario_Registrado()
    RellenarDirrecion()
    PagoPayPal()

  });
  it('Comprar con click&collect Usuario Registrado', () => {
    
    selecionaCalzado()
    usuario_Registrado()
    clickandcollect()
    MercadoPago()
    cy.screenshot('Compra click&collect-registrado')

  });
  it('Comprar con click&collect Usuario Invitado', () => {
    
    selecionaCalzado()
    usuario_invitado()
    clickandcollect()
    cy.wait(5000)
    MercadoPago()
    EscogerOtroProducto()
    cy.wait(300)
    usuario_invitado()
    clickandcollect()
    PagoConTarjetaMercadopago()
    cy.screenshot('Compra-click&collect-invitado')    

  });
  it('Comprar con click&collect Usuario Registrado MercaPago', () => {
    
    selecionaCalzado()
    usuario_Registrado()
    clickandcollect()
    cy.wait(5000)
    MercadoPago()
    cy.screenshot('Click&collect-MercadoPago')
        

  });
  it('Comprar con click&collect Usuario Registrado Tarjeta', () => {
    
    EscogerOtroProducto()
    usuario_Registrado()
    clickandcollect()
    cy.wait(5000)
    PagoConTarjetaMercadopago()
    cy.screenshot('RegistadoTarjeta')
        

  });
  it('Comprar con venta asistida', () => {
    
    selecionaCalzado()
    usuario_Registrado()
    RellenarDirrecion()
    cy.get('#mp_link').click()
    cy.get('#customerEmail').type('jaimeqa99@gmail.com')
    cy.get(':nth-child(4) > .payment-op > .btn').click()
    cy.get('.place-order-form > #placeOrderForm1 > #placeOrder').click()
    cy.screenshot('venta-asisitida')
        

  });
  it.only('Comprar efectivo productivo usuario invitado', () => {

    ZapatoProductivo()
    usuario_invitado()
    RellenarDirrecion()
    MercadoPago()
    cy.screenshot('Compra-efectivo-productivo')

  });
  it.only('Comprar efectivo productivo usuario registrado', () => {

    ZapatoProductivo()
    usuario_Registrado()
    RellenarDirrecion()
    MercadoPago()
    cy.screenshot('Compra-efectivo-productivo-registrado ')

  });
  it.only('Comprar con efectivoConeckta usuario invitado P', () => {

    ZapatoProductivo()
    usuario_invitado()
    RellenarDirrecion()
    conecktaFlexi()
    cy.screenshot('Compra efectivo coneckta productivo ')


  });
  it.only('Comprar con efectivoConeckta registrado P', () => {

    ZapatoProductivo()
    usuario_Registrado()
    RellenarDirrecion()
    conecktaFlexi()
    cy.screenshot('Compra efectivo coneckta productivo ')


  });
  it.only('Comprar ventaasistida P', () => {

    ZapatoProductivo()
    usuario_Registrado()
    RellenarDirrecion()
    cy.get('#mp_link').click()
    cy.get('#customerEmail').type('jaimeqa99@gmail.com')
    cy.get(':nth-child(4) > .payment-op > .btn').click()
    cy.get('.place-order-form > #placeOrderForm1 > #placeOrder').click()
    cy.screenshot('venta-asisitida-productivo')
  


  });
  it('Click&collect usuario invitado P', () => {

    ZapatoProductivo()
    usuario_invitado()
    clickandcollect()
    MercadoPago()
    cy.screenshot('Click&collect-productivo-mercapago-invitado')
    ZapatoProductivo2()
    usuario_invitado()
    clickandcollect()
    conecktaFlexi()
    cy.screenshot('Click&collect-productivo-invitado')  
    

  });
  it('Click&collect usuario Registrado P', () => {

    ZapatoProductivo()
    usuario_Registrado()
    clickandcollect()
    MercadoPago()
    cy.screenshot('Click&collect-productivo-mercapago-registrado')
    ZapatoProductivo2()
    usuario_Registrado()
    clickandcollect()
    conecktaFlexi()
    cy.screenshot('Click&collect-productivo-registrado')  
    

  });

  
});
