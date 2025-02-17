export class MercadoPago {
    constructor() {
    this.cashMercapago = '#cash';
    this.SelectMercapago = '#mercadopago';
    this.Next = ':nth-child(3) > .payment-op > .btn';
    this.SelectConecktas = '#coneckta';
    this.SelectVenta = '#mp_link';
    this.email = '#customerEmail';
    this.Next1 = ':nth-child(4) > .payment-op > .btn'
    this.paypal = "#paypal"
    this.terms = "#termsCheck"

    }
    selecionarMercapago() {
        cy.get(this.cashMercapago).click();
        cy.get(this.SelectMercapago).click();
        cy.get(this.Next).click()
        

    } 
    selecionarConeckta()  {
        cy.get(this.cashMercapago).click();
        cy.get(this.SelectConecktas).click();
        cy.get(this.Next).click()


    }
    selecionarAsistida(){
        cy.get(this.SelectVenta).click();
        cy.get(this.email).type('jaimeqa@gmail.com');
        cy.get(this.Next1).click()
    } 
    selecionarPayPalTarjeta()
    {
       cy.get(this.paypal).click()
       cy.get('iframe[id^="jsx-iframe-"]').should('be.visible').then(($iframe) => {
       cy.get('.paypal-button.paypal-button-number-0').click()
       cy.wrap($iframe).find('.paypal-button.paypal-button-number-0').should('be.visible')
    
        

    });
       
    
    } 



}

const MercadoPagoPageInstance = new MercadoPago();
export default MercadoPagoPageInstance;
