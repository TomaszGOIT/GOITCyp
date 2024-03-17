
import { Login } from "../pages/Login";
const LoginPage = new Login();
import { HomePage } from "../pages/HomePage";
const HomeP = new HomePage();



describe('Testowanie logowania POP', () => {
    it('Loguje', () => {
      // Otwiera strone
        LoginPage.navigate()

      // Logowanie
      // Wprowadza dane do logowania
      LoginPage.setUserLogin("testowyqa@qa.team")
      LoginPage.setUserPassword("QA!automation-1")
      


      // Klika przycisk Log In
      LoginPage.validateLoginButton()
      // Klika przycisk Menu
        HomeP.validateMenuButton()
      // Klika przycisk Log out
        HomeP.validateLogoutButton()
      // Sprawdza czy po wylogowaniu pokazala sie stona glowna
        HomeP.validatePowrotDoStronyGlownej()
    })


})


  ghdfhgf
