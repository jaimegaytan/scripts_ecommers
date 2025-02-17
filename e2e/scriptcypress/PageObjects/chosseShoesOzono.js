export class ChooseShoesOzono {
    constructor() {
      this.chooseMenu = ":nth-child(1)>.fa"
      this.ChooseCat = ".mb-menu > [href='/c/Caballero']"
      this.shoes = ":nth-child(1) > .product-grid-wrapper > .cx-media-wrapper > .cx-product-image-container > .cx-media-container > .cx-product-image > .ng-star-inserted"
      this.add = ".slider-container"
      this.paidProcess =  ".cx-dialog-buttons > .btn-secondary"

    }
    sitioOzono() {
       
      cy.visit('https://jsapps.c2yi-servicios1-s1-public.model-t.cc.commerce.ondemand.com/');
  }
    NavToMenu() {
    
        cy.get(this.chooseMenu).click();
        cy.get(this.ChooseCat).click();
        cy.get(this.shoes).click()
        cy.get(this.add).click()
        cy.get(this.paidProcess).click()
        cy.wait(3000)
        cy.get(this.add).click()
        cy.wait(3000)
        cy.get(this.add).click()
        
       
    }

    

    
}

const shoesPageInstanceOzono = new ChooseShoesOzono();
export default shoesPageInstanceOzono;
