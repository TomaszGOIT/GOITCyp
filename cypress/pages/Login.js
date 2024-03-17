export class Login {

     navigate() {
          cy.visit('https://www.edu.goit.global/account/login')
     }

     setUserLogin(username){
     
          cy.get("#user_email").type(username);
}
     setUserPassword(password){
          cy.get("#user_password").type(password);
     }
     
     validateLoginButton() {
          cy.get('.eckniwg2.next-1bzq1af.e1wro88c0').click()

     }



}