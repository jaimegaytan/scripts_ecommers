describe('Prueba de pagina en quirelli', () => {
    beforeEach(() => {
      cy.visit('https://jsappsquirelli.c2yi-servicios1-p1-public.model-t.cc.commerce.ondemand.com/');
      cy.document().should('exist').its('readyState').should('equal', 'complete');
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Devolver false para evitar que Cypress falle la prueba
        return false;
      });
    });
    const SelecionarZapato = () => {

        //Abrir la selecion de zapato
        cy.get('.hamburger-box').click()
        //Selecionar Nuevo producto
        cy.get('.NavigationBar > app-custom-navigation > .flyout > :nth-child(1) > cx-generic-link > a').click()
        //Selecionar calzado
        cy.get(':nth-child(1) > .cx-product-image-container > .cx-product-image > img').click()
         //Click en comprar
         cy.get('.ng-untouched > .btn').should('be.visible').click()
         //Click en comprar
         cy.get('.cx-dialog-buttons > .btn-primary').click()
         //Click en comprar
         cy.get('cx-cart-totals > .btn').click()
        
        
    }
    const RellenarDirrecionQ = () => {

        cy.wait(3000)
        //Ingresar nombre
        cy.get(':nth-child(1) > .form-group > label').type('Jaime')
        //Ingresar apellido
        cy.get(':nth-child(2) > .form-group > label').type('Solar')
        //Ingresa numero
        cy.get(':nth-child(3) > .form-group > label').type('4491923344')
        //Ingresar C.P
        cy.get(':nth-child(4) > .form-group > label').type('20269')
        //Ingresar calle y numero
        cy.get(':nth-child(9) > .form-group > label').type('Teo 123')
        //Click a continuar
        cy.get(':nth-child(2) > .btn').click()
        //Click a continuar Metodo de envio
        cy.wait(4000)
        cy.get('.cx-checkout-btns > :nth-child(2)').click()

        

        
        
    }

    const Mercadopago = () => {

        //Espera 3000 mile segundos
        cy.wait(3000)
        //Click en el select de metodo de pago
        cy.get('.ng-select-container').click()
        //Selecionar el metodo de pago con mercadopago
        cy.get('[id^=a][id$=2]').click()
        //Click en continuar
        cy.get(':nth-child(2) > .btn').click()     
    }
    const coneckta1 = () => {
        //Espera 3000 mile segundos
        cy.wait(3000)
        //Click en select de metodo de pago
        cy.get('.ng-select-container').click()
        //Seleciona metodo de pago Conecta
        cy.get('[id^=a][id$=1]').click()
        //Click en continuar
        cy.get(':nth-child(2) > .btn').click()     
    }
    const Pagopaypal = () => {
        //Espera 3000 mile segundos
        cy.wait(3000)
        //Click en select de metodo de pago
        cy.get('.ng-select-container').click()
        //Seleciona metodo de pago paypal
        cy.get('[id^=a][id$=0]').click()
        cy.wait(3000)
        cy.get('#termsCheck').click()
        cy.get('.paymentPaypal_container').click()
        cy.wait(4000)
        // Selector para encontrar el iframe por una parte constante del id
        cy.get('iframe[id^="jsx-iframe"]').as('dynamicIframe')
        cy.get('@dynamicIframe').should('be.visible').click()
        
        

          
     
    }
    it('Pago con coneckta', () => {

        //Usar la funcion de selecionar zapato
        SelecionarZapato()
        //Click en comprar como invitado
        cy.get('.btn-guest').click()
         //Ingresar correo electronico 
        cy.get('form.ng-untouched > :nth-child(1) > label').type('jaimeqa99@gmail.com')
         //Ingresar correo electronico
        cy.get(':nth-child(2) > label').type('jaimeqa99@gmail.com') 
         //Click al boton continuar.
        cy.get('.btn').click()
        RellenarDirrecionQ()
        coneckta1()
        cy.screenshot('pago conecta') 
    
    });

    it('Comprar como invitado efectivo', () => {

        //Usar la funcion de selecionar zapato
        SelecionarZapato()
        //Click en comprar como invitado
        cy.get('.btn-guest').click()
         //Ingresar correo electronico 
        cy.get('form.ng-untouched > :nth-child(1) > label').type('jaimeqa99@gmail.com')
         //Ingresar correo electronico
        cy.get(':nth-child(2) > label').type('jaimeqa99@gmail.com') 
         //Click al boton continuar.
        cy.get('.btn').click()
        RellenarDirrecionQ()
        Mercadopago()
        cy.screenshot('invitado efectivo')  
    
    });
    it('Comprar con usuario Registrado', () => {
        
        SelecionarZapato()
        cy.get('form.ng-untouched > :nth-child(1)').type('jaimeqa99@gmail.com')
        cy.get('.ng-invalid.ng-dirty > :nth-child(2)').type('Lookkg361@')
        cy.get('.btn').click()
        cy.get(':nth-child(2) > .cx-btn').click()
        cy.wait(3000)
        cy.get('.cx-checkout-btns > :nth-child(2)').click()
        Mercadopago()
        cy.screenshot('efectivo registrado')

         
    
    });
    it('Compra Via PayPal' , () => {
     SelecionarZapato()
     cy.get('.btn-guest').click()
      //Ingresar correo electronico 
     cy.get('form.ng-untouched > :nth-child(1) > label').type('jaimeqa99@gmail.com')
     //Ingresar correo electronico
     cy.get(':nth-child(2) > label').type('jaimeqa99@gmail.com') 
     //Click al boton continuar.
     cy.get('.btn').click()
     RellenarDirrecionQ()
     Pagopaypal()
     

    });
   


        
   

    
  });