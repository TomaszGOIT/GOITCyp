export class HomePage {


    validateMenuButton() {
        cy.get('#open-navigation-menu-mobile').click()
    }
     
    validateLogoutButton() {
        cy.get(':nth-child(9) > .next-bve2vl').click()
    }
  
    validatePowrotDoStronyGlownej() {
        cy.url().should('eq', 'https://www.edu.goit.global/account/login')
    }
}