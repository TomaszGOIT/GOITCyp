describe('Testowanie logowania', () => {
    it('Loguje, otwiera menu, wylogowuje', () => {
    // Otwiera strone
    cy.visit('https://www.edu.goit.global/account/login')

    // Logowanie
      // Wprowadza dane do logowania
      cy.login('testowyqa@qa.team' , 'QA!automation-1')


  // Klika przycisk Log In
  cy.get('.eckniwg2.next-1bzq1af.e1wro88c0').click()

    // Otwiera menu strony
    cy.get('#open-navigation-menu-mobile').click()

    // Kliknij przycisk "Log out"
    cy.get(':nth-child(9) > .next-bve2vl').click()

    // Sprawdza, czy powrócono do strony logowania
    cy.url().should('eq', 'https://www.edu.goit.global/account/login')
  });
})