class login_page {
    /*
     _____ _     _____ __  __ _____ _   _ _____ ____
    | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
    |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
    | |___| |___| |___| |  | | |___| |\  | | |  ___) |
    |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
    */

    get logInTitle(){
        return cy.get('.login_logo')
    }
    get userNameTxtFld() {
        return cy.get('#user-name')
    }
    get passwordTxtFld() {
        return cy.get('#password')
    }
    get logInBtn() {
        return cy.get('#login-button')
        .contains('Login')
    }
    get productPage() {
        return cy.get('#inventory_container')
    }
    get messageLbl(){
        return cy.get('.error-message-container.error')
    }
    get redCross(){
        return cy.get('.error_icon')
    }

    /*
     __  __ _____ _____ _   _  ___  ____  ____
    |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
    | |\/| |  _|   | | | |_| | | | | | | \___ \
    | |  | | |___  | | |  _  | |_| | |_| |___) |
    |_|  |_|_____| |_| |_| |_|\___/|____/|____/
    */

    isOnLoginPage(){
        this.logInTitle.should('contain',"Swag Labs")
    }
    enterUsername(username) {
        if (username === '<empty>') {
            this.userNameTxtFld.clear();
        } else {
            this.userNameTxtFld.type(username);
        }
        return this
    }
    enterPassword(password) {
        if (password === '<empty>') {
            this.passwordTxtFld.clear();
        } else {
            this.passwordTxtFld.type(password);
        }
        return this
    }
    clickLogin() {
        this.logInBtn.click()
        return this
    }
    isLoggedIn(){
        cy.url().should('include', '/inventory')
    }
    isOnInventoryPage(){
        this.productPage.should('be.visible')
    }
    validateErrorMessage(message){
        this.messageLbl.should('be.visible')
            .and('contain', message)
    }
    validateRedCross(){
        this.redCross.should('be.visible')
    }
}
export default new login_page()
