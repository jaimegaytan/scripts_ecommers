export class PayMethodsOzono {
    constructor() {
    this.tarjeta1 = ".methods > :nth-child(1)"    
    this.cash1 = ".methods > :nth-child(3)"
    this.cash2 = ".methods > :nth-child(4)"
    this.venta = ".methods > :nth-child(5)"
    this.email2 = ".ng-untouched"
    this.continuar = ".slider-container"
    this.pagar1 =  ".submit-button-desk > app-custom-checkout-place-order > .cx-place-order-form > .row > .col-12 > .btn > .ng-star-inserted > .slider-container"
    

    }
    selecionarCard(){
        cy.get(this.tarjeta1).click()
        cy.get(this.continuar).click()   
    } 
    selecionarMercapago() {
    cy.get(this.cash1).click()
    cy.wait(2000)
    cy.get(this.continuar).click()   
    }
    selecionarConeckta() {
    cy.get(this.cash2).click()
    cy.wait(2000)
    cy.get(this.continuar).click()   
    }
    selecionarVentaAsistida() {
        cy.get(this.venta).click()
        cy.get(this.continuar).click()  
        cy.get(this.email2).type("sentraser99@gmail.com") 
    }
    dirrecion () {
        cy.get(this.continuar).click()
        cy.wait(2000)
        cy.get(this.continuar).click()
    }
    envio () {
        cy.wait(3000)
        cy.get(this.continuar).click()
        
    }
    pagar()
    {
        cy.wait(2000)
        cy.get(this.continuar).click() 
    
    }
   


}

const PayMethodsOzonoPageInstance = new PayMethodsOzono();
export default PayMethodsOzonoPageInstance;
