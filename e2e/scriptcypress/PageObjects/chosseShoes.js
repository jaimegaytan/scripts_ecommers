export class ChooseShoes {
    constructor() {
        //this.navDama = ":nth-child(2) > .nav__link > a";
        this.ChooseDama = ":nth-child(2) > .nav__link > a"
        this.selectShoes = ":nth-child(2) > .product-item";
        this.sizeShoes = '[data-url="/es/c/Flat-Urbano-Flexi-Para-Mujer-Estilo-28305/p/7500421197431"]';
        this.submit = "#shopButton";
        this.submitBuy = ".my-car-style > .col-md-3 > .btn";
    }
    navigateToDama() {
        //cy.get(this.navDama).click();
        cy.get(this.ChooseDama).click();
    }

    selectShoe() {
        cy.get(this.selectShoes).click();
    }

    chooseSize() {
        cy.get(this.sizeShoes).click();
    }

    submitPurchase() {
        cy.get(this.submit).click();
    }

    completePurchase() {
        cy.get(this.submitBuy).click();
    }

    purchaseShoes() {
        this.navigateToDama();
        this.selectShoe();
        this.chooseSize();
        this.submitPurchase();
        this.completePurchase();
    }
}

const shoesPageInstance = new ChooseShoes();
export default shoesPageInstance;
