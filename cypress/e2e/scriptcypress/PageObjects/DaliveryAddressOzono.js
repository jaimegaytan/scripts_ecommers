export class AddressPageOzono {
    
    constructor() {
        this.name1 = ":nth-child(1) > :nth-child(1) > .ng-tns-c250-2 > .group > .ng-untouched";
        this.lastname1 = ":nth-child(2) > .ng-tns-c250-2 > .group > .ng-untouched"
        this.zipcode1 =".ng-tns-c250-2.ng-dirty > :nth-child(2) > .form-group > .ng-tns-c250-2 > .group > .ng-untouched"
        this.Street1 = ":nth-child(5) > .ng-tns-c250-2 > .group > .ng-untouched"
        this.Phone = ":nth-child(6) > .ng-tns-c250-2 > .group > .ng-untouched"
        this.sumbit = ".slider-container"
        
      
    }

    // Método para llenar la dirección
    
    fillAddress(name , lastname,zipcode, Street, Phone) { 
        cy.wait(2000)   
        cy.get(this.name1).type(name);
        cy.get(this.lastname1).type(lastname)
        cy.get(this.zipcode1).type(zipcode)
        cy.get(this.Street1).type(Street)
        cy.get(this.Phone).type(Phone)
        cy.get(this.sumbit).click()
        cy.wait(10000)
        cy.get(this.sumbit).click()      
        
      
    }


}

const AddressOzonoPageInstance = new AddressPageOzono();
export default AddressOzonoPageInstance;
