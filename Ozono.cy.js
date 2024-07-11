describe('Prueba de pagina de Ozono', () => {
  beforeEach(() => {
    cy.visit('https://jsapps.c2yi-servicios1-p1-public.model-t.cc.commerce.ondemand.com/c/Caballero_Botas_y_Botines');
    cy.document().should('exist').its('readyState').should('equal', 'complete');
  });
  const selecionaCalzado = () => {

    // Selecionar el calzado
    cy.get(':nth-child(1) > .product-grid-wrapper > .cx-media-wrapper > .cx-product-image-container > .cx-media-container > .cx-product-image > .ng-star-inserted').should('be.visible').click()
    // Selecionar el tamano
    cy.get(':nth-child(4) > .size').should('be.visible').click()
    // Click agregar al carrito
    cy.wait(400)
    cy.get('.slider-container').click()
    // Click a proceder pago
    cy.get('.cx-dialog-buttons > .btn-secondary').click()
    
    
  }
  const rellenardirrecion = () => {

    cy.wait(10000)
    //cy.get('form.ng-tns-c250-2').should('be.visible')
    // Ingresar nombre   
    cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(1) > .ng-tns-c250-2 > .group > .ng-untouched').type('gafe')
    // Ingresar apellido
    cy.get(':nth-child(2) > .ng-tns-c250-2 > .group > .ng-pristine').type('alto mando')
    // Ingresar C.P
    cy.get('.ng-tns-c250-2.ng-dirty > :nth-child(2) > .form-group > .ng-tns-c250-2 > .group > .ng-pristine').type('20269')
    // Ingresar Calle y numero
    cy.get(':nth-child(5) > .ng-tns-c250-2 > .group > .ng-pristine').type('Teo 109')
    // Ingresar telefono 
    cy.get(':nth-child(6) > .ng-tns-c250-2 > .group > .ng-pristine').type('4491824455')
    // Ingresar continuar
    cy.get('.slider-container').click()

    
  }
  const rellenardirrecionP = () => {

    cy.wait(300)
    //cy.get('form.ng-tns-c250-2').should('be.visible')
    // Ingresar nombre   
    cy.get(':nth-child(1) > :nth-child(1) > .ng-tns-c249-2 > .group > .ng-untouched').type('gafe')
    cy.get(':nth-child(2) > .ng-tns-c249-2 > .group > .ng-untouched').type('AltoMando')
    cy.get('.ng-tns-c249-2.ng-dirty > :nth-child(2) > .form-group > .ng-tns-c249-2 > .group > .ng-untouched').type('20269')
    cy.get(':nth-child(5) > .ng-tns-c249-2 > .group > .ng-untouched').type('Teo 127')
    cy.get(':nth-child(6) > .ng-tns-c249-2 > .group > .ng-untouched').type('4491826677')
    cy.get('.slider-container').click()
    
  }
  const metodoEnvio  = () => {
    
    // Validar el nombre metodo de envio
    // cy.get('.cx-checkout-title').should('be.visble').and('contain','MÉTODO DE ENVÍO')
    // Click a continuar
    cy.get('.slider-container',{ timeout: 10000 }).should('be.visible').click()
  }

  const usuarioRegistrado = () => {
    // ingresar correo
    cy.get(':nth-child(3) > app-custom-input > .group > .ng-untouched').type('jaimeqa99@gmail.com')
    // Ingresa contraseña
    cy.get('[style="display: block;"] > .group > .ng-untouched').type('Lookkg361@')
    // Continuar
    cy.get('.slider-container').click()
    cy.wait(4000)
   

  }
  
  const usuario_invitado = () => {

    //Click en link de compra como invitado
    cy.get(':nth-child(9) > a').click()
    //Ingresar el correo de invitado
    cy.get(':nth-child(1) > app-custom-input > .group > .ng-untouched').type('jaimeqa99@gmail.com')
    //Confirmar el correo de invitado
    cy.get(':nth-child(2) > app-custom-input > .group > .ng-untouched').type('jaimeqa99@gmail.com')
    //Click en continuar
    cy.get('.slider-container').click()

    

  }



  it('Comprar como invitado y pago con tarjeta', () => {
    selecionaCalzado()
    // Preciona el link de compra como invitado
    cy.get(':nth-child(9) > a').click()
    cy.wait(100)
    // Ingresar correo
    cy.get(':nth-child(1) > app-custom-input > .group > .ng-untouched').type('jaimeqa@gmail.com')
    cy.get('.ng-pristine').eq(0).type('jaimeqa@gmail.com')
    //click continuar
    cy.get('.slider-container').click()
    rellenardirrecion()
    // Escoger metodo de pago
    cy.wait(10000)
    //click continuar
    metodoEnvio()
    cy.get('.methods > :nth-child(1)',{ timeout: 30000 }).should('be.visible').click()
    cy.get('.slider-container',{ timeout: 20000 }).should('be.visible').click()
    // Tipo de Tarjeta(Visa , Mastercard , etc)
    cy.get('.field.ng-untouched > .ng-select > .ng-select-container > .ng-arrow-wrapper').click().type('Visa{enter}')
    // Numero de tarketa
    cy.get('.cardNumber > .group > .ng-untouched',{ timeout: 10000 }).should('be.visible').type('5474925432670366')
    // Ingresar nombre del  dueno de tarjeta
    cy.get(':nth-child(3) > app-custom-input > .group > .ng-untouched').should('be.visible').type('Jaime A')
    // Ingresar CVV
    cy.get('.group > .ng-pristine').should('be.visible').type('123')
    // click mes de expiracion de tarjeta
    cy.get('[formcontrolname="expiryMonth"]').type('11{enter}')
    //  click en año de expiracion de la tarjeta
    cy.get('[formcontrolname="expiryYear"]').type('2025{enter}')
     // Click pagar
    cy.get('.slider-container').should('be.visible').click()
    cy.screenshot('Invitado_tarjeta') 

  });
    
  it('Pago pypal', () => {
    selecionaCalzado()
    usuarioRegistrado()
    cy.wait(20000)
    rellenardirrecion()
    cy.wait(10000)
    metodoEnvio()
    // Selecionar paypal
    cy.get('.methods > :nth-child(2)').click()
    // Click continuar
    cy.wait(400)
    cy.get('.slider-container').click()
    // click aceptar terminos
    cy.wait(2000)
    cy.get('#termsCheck').click()
    // click boton de paypal
    cy.wait(4000)
    cy.get('.paypal-button-number-0:nth-child(1)').click()
  });
  it('Pago en efectivo con coneckta', () => {
    selecionaCalzado()
    usuarioRegistrado()
    rellenardirrecion()
    cy.wait(10000)
    metodoEnvio()
    // Selecionar pago en efectivo
    cy.get('.methods > :nth-child(4)').should('be.visible').click()
    cy.get('.slider-container').click()
    //cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()
    cy.screenshot('coneckta en efectivo')
      
  });
 it('Pago en efectivo con MercadoPago', () => {
    selecionaCalzado()
    usuarioRegistrado()
    rellenardirrecion()
    cy.wait(10000)
    metodoEnvio()
    // Selecionar pago con mercado pago
    cy.get(':nth-child(3) > .method--img > img').click()
    // Click al boton continuar
    cy.get('.slider-container').should('be.visible').click()
    // Click en continuar
    cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()  
    cy.screenshot('Mercapago en efectivo') 
  });
  it.only('Venta efectivo Mercapag P con usuario registrado' , () => {

    selecionaCalzado()
    usuarioRegistrado()
    rellenardirrecionP()
    cy.wait(10000)
    //click en Continuar
    cy.get('.slider-container').click()
    //click en selecionar metodo de pago
    cy.get('.methods > :nth-child(3)').click()
    //click en Continuar
    cy.get('.slider-container').click()
    //Click en comprar
    cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()
    cy.screenshot('Mercapago-Efectivo-Registado')

   });
  it.only('Venta efectivo Coneckta P usuario registrado' , () => {

    selecionaCalzado()
    usuarioRegistrado()
    rellenardirrecionP()
    cy.wait(10000)
    //click en Continuar
    cy.get('.slider-container').click()
    //click en selecionar metodo de pago
    cy.get('.methods > :nth-child(4)').click()
    //click en Continuar
    cy.get('.slider-container').click()
    //Click en comprar
    cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()
    cy.screenshot('coneckta en efectivo-usuario-registrado')

   });
   it.only('Venta efectivo Invitado con coneckta P' , () => {

    selecionaCalzado()
    usuario_invitado()
    rellenardirrecionP()
    cy.wait(10000)
    //click en Continuar
    cy.get('.slider-container').click()
    //click en selecionar metodo de pago
    cy.wait(300)
    cy.get('.methods > :nth-child(3)').click()
    //click en Continuar
    cy.get('.slider-container').click()
    //Click en comprar
    cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()
    cy.screenshot('coneckta-efectivo-Invitado-Productivo')

   });
   it.only('Venta efectivo Invitado con Mercadopago' , () => {

    selecionaCalzado()
    usuario_invitado()
    rellenardirrecionP()
    cy.wait(10000)
    //click en Continuar
    cy.get('.slider-container').click()
    //click en selecionar metodo de pago
    cy.get('.methods > :nth-child(2)').click()
    //click en Continuar
    cy.get('.slider-container').click()
    //Click en comprar
    cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()
    cy.screenshot('Mercadopago-efectivo-Invitado-Productivo')

   });
   it.only('Venta asistida productivo' , () => {

    selecionaCalzado()
    usuarioRegistrado()
    rellenardirrecionP()
    cy.wait(10000)
    //click en Continuar
    cy.get('.slider-container').click()
    //click en selecionar metodo de pago
    cy.get('.methods > :nth-child(1)').click()
    //ingresar correo electronico
    cy.get('.ng-untouched').type('jaimeqa99@gmail.com')
    //click en Continuar
    cy.get('.form_content > .btn > .slider-container').click()
    //Click en comprar
    cy.get('.submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container').click()
    cy.wait(600)
    cy.screenshot('Venta-asistida-productivo')

   });

  
 

 

  
});
