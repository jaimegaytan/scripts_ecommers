export class AddressPage {
    
    constructor() {
        this.RadioButton = '#sendHouse';
        this.ZipCode = ":nth-child(1) > .col-xs-12 > :nth-child(1) > .form-group"; // Este selector puede ser más robusto si usas un selector con un ID o clase más estable.
        this.neighbordhood = ":nth-child(1) > .col-xs-12 > :nth-child(2) > .form-group";
        this.cellphone = ':nth-child(1) > :nth-child(3) > .col-xs-12 > :nth-child(2)';
        this.Street = "#i18nAddressForm > :nth-child(1) > :nth-child(4)";
        this.FullName = '#i18nAddressForm > :nth-child(1) > :nth-child(5)';
        this.AdressSubmit = '#addressSubmit'; 
        this.DeliveyMethodSubmit = "#deliveryMethodSubmit";
      
    }

    // Método para llenar la dirección
    
    fillAddress(zipcode,telefono) {    
        // Selecciona y hace clic en el radio button para la casa
        cy.get(this.RadioButton).click();
        
        // Escribe el código postal
        cy.get(this.ZipCode).type('20268'); // Si no necesitas Shift, elimina el + '{shift}'
        cy.get(this.neighbordhood).click();
        // Escribe el número de teléfono y asegura que el campo sea visible
        cy.get(this.cellphone).type('4491933355');
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Evita que Cypress falle si hay un error de tipo 'missing ) in parenthetical'
            if (err.message.includes('missing ) in parenthetical')) {
              return false;  // Esto previene que el error falle la prueba
            }
            if (err.message.includes('Unexpected token \';\'')) {
              return false;  // Esto previene que el error falle la prueba
            }
          });
        // Escribe la calle
        cy.get(this.Street).type("teotlalpan 101");
        // Escribe el nombre completo, asegura que el campo sea visible
        cy.get(this.FullName).should('be.visible').type("Test test");
        // Si tienes un botón de envío, puedes descomentar esta línea para hacer clic en él
        cy.wait(3000)
        cy.get(this.AdressSubmit).click(); 
        cy.wait(3000)
        cy.get(this.DeliveyMethodSubmit).click();

      
    }


}

// Crea una instancia de la clase
const AddressPageInstance = new AddressPage();
export default AddressPageInstance;
