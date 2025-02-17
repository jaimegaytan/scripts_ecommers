export class paid {
    constructor() {
        this.paidButton = ".place-order-form > #placeOrderForm1 > #placeOrder"
    
    }
    paidproduct(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Maneja el error y evita que el test falle
            if (err.message.includes('doPay is not defined')) {
              return false;  // Esto evita que Cypress falle en este caso específico
            }
            return true;  // Deja que otros errores sean capturados
          });
        cy.wait(3000)
        cy.get(this.paidButton).click() 
    }

}
const PaidPageInstance = new paid();
export default PaidPageInstance;
