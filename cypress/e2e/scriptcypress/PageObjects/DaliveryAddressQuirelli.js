export class AddressPageQuirelli {
    
    constructor() {

        this.name2 = ":nth-child(1) > .form-group > label > .form-control";
        this.lastname2 = ":nth-child(2) > .form-group > label > .form-control";
        this.phone2 = ":nth-child(3) > .form-group > label > .form-control";
        this.zipcode2 = ":nth-child(4) > .form-group > label > .form-control";
        this.street1 = ":nth-child(9) > .form-group > label > .form-control";
        this.continue1 = ":nth-child(2) > .btn"

        
      
    }

    // Método para llenar la dirección
    
    fillAddress(name , lastname,phone,zipcode,street) { 
        cy.wait(2000)   
        cy.get(this.name2).type(name);
        cy.get(this.lastname2).type(lastname)
        cy.get(this.phone2).type(phone)
        cy.get(this.zipcode2).type(zipcode)
        cy.get(this.street1).type(street)
        cy.get(this.continue1).click()

    
          
        
      
    }


}

const AddressQuirelliPageInstance = new AddressPageQuirelli();
export default AddressQuirelliPageInstance;
