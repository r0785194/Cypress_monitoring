import login_page from './login_page';

class home_page {

  /*
   _____ _     _____ __  __ _____ _   _ _____ ____
  | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
  |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
  | |___| |___| |___| |  | | |___| |\  | | |  ___) |
  |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
  * */

  get loginMenuBtn() {
    return cy.get('.coolbar-navigation--item')
    .contains('Aanmelden')
  }

  get cookieBtn() {
    return cy.get('.cookie-notification__body')
    .find('button')
    .contains('Oké')
  }

  /*
   __  __ _____ _____ _   _  ___  ____  ____
  |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
  | |\/| |  _|   | | | |_| | | | | | | \___ \
  | |  | | |___  | | |  _  | |_| | |_| |___) |
  |_|  |_|_____| |_| |_| |_|\___/|____/|____/
  * */

  clickLogin() {
    this.loginMenuBtn
    .click()

    this.loginMenuBtn
    .should('have.attr', 'href')
    .then((href) => cy.visit(href))

    return login_page
  }

  acceptCookies() {
    this.cookieBtn.click()
    return this
  }

}

export default new home_page()
