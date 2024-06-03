describe('Prueba de pagina de Ozono', () => {
  beforeEach(() => {
    cy.visit('https://jsapps.c2yi-servicios1-d1-public.model-t.cc.commerce.ondemand.com/c/Caballero_Botas_y_Botines');
    cy.document().should('exist').its('readyState').should('equal', 'complete');
  });
  const selecionaCalzado = () => {

    // Selecionar el calzado
    cy.get(':nth-child(1) > .product-grid-wrapper > .cx-media-wrapper > .cx-product-image-container > .cx-media-container > .cx-product-image > .ng-star-inserted').should('be.visible').click()
    // Selecionar el tamano
    cy.get(':nth-child(2) > .size').should('be.visible').click()
    // Click agregar al carrito
    cy.get('.slider-container').click()
    // Click a proceder pago
    cy.get('.cx-dialog-buttons > .btn-secondary').click()
    
    
  }
  const rellenardirrecion = () => {
    // Ingresar nombre
    cy.wait(100)    
    cy.get(':nth-child(1) > :nth-child(1) > .ng-tns-c249-2 > .group > .ng-untouched', ).should('be.visible').type('Gafe')
    // Ingresar apellido
    cy.get(':nth-child(2) > .ng-tns-c249-2 > .group > .ng-pristine').should('be.visible').type('Gafe')
     // Ingresar codigo postal
    cy.get('.ng-tns-c249-2.ng-dirty > :nth-child(2) > .form-group > .ng-tns-c249-2 > .group > .ng-untouched').should('be.visible').type("20269")
    // Ingresar calle y numero
    cy.get(':nth-child(5) > .ng-tns-c249-2 > .group > .ng-untouched').type("MK 4")
    // Ingresar Telefono
    cy.get(':nth-child(6) > .ng-tns-c249-2 > .group > .ng-untouched').type("4492556677")
    // Click a continuar
    cy.get('.slider-container').click()
    
  }
  const metodoEnvio  = () => {
    // Validar el nombre metodo de envio
    cy.get('.cx-checkout-title').should('be.visble').and('contain','MÉTODO DE ENVÍO')
    // Click a continuar
    cy.get('.slider-container',{ timeout: 10000 }).should('be.visible').click()


   
  }

  it('Comprar como invitado', () => {
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
    



  });
    
  it('Comprar con usuario registrado', () => {
    selecionaCalzado()
    // ingresar correo
    cy.get(':nth-child(3) > app-custom-input > .group > .ng-untouched').type('jaimeqa99@gmail.com')
    // Ingresa contraseña
    cy.get('[style="display: block;"] > .group > .ng-untouched').type('Lookkg361@123')
    // Continuar
    cy.get('.slider-container').click()
    cy.wait(4000)
    rellenardirrecion()
    metodoEnvio()
    
  });
  
});
