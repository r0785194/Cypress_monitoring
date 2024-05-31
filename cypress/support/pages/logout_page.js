class logout_page {
    /*
     _____ _     _____ __  __ _____ _   _ _____ ____
    | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
    |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
    | |___| |___| |___| |  | | |___| |\  | | |  ___) |
    |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
    */

    get hamburgerMenu() {
        return cy.get('.bm-burger-button')
    }
    get menuBtns() {
        return cy.get('.bm-menu-wrap')
    }
    get logOutBtn() {
        return cy.get('#logout_sidebar_link')
    }
    get logInBtn() {
        return cy.get('#login-button')
            .contains('Login')
    }
    get logInTitle(){
        return cy.get('.login_logo')
    }

    /*
     __  __ _____ _____ _   _  ___  ____  ____
    |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
    | |\/| |  _|   | | | |_| | | | | | | \___ \
    | |  | | |___  | | |  _  | |_| | |_| |___) |
    |_|  |_|_____| |_| |_| |_|\___/|____/|____/
    */

    isOnProductPage(){
        cy.url().should('include', '/inventory')
    }
    clickHamburgerMenu(){
        this.hamburgerMenu.click()
    }
    areButtonsDisplayed(){
        this.menuBtns.should('be.visible')
    }
    clickLogOutBtn(){
        this.logOutBtn.click()
    }
    isLoggedOut(){
        this.logInBtn.should('be.visible')
    }
    isOnLoginPage(){
        this.logInTitle.should('contain',"Swag Labs")
    }
}
export default new logout_page()
