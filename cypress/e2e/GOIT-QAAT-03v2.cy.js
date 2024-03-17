import { HomePage } from "../pages/HomePage";
const HomeP = new HomePage();

describe('Testowanie Menu i Log out', () => {
    it('Otwiera Menu i wylogowuje', () => {
        HomeP.validateMenuButton()

        HomeP.validateLogoutButton()

        HomeP.validatePowrotDoStronyGlownej()
    })


})
