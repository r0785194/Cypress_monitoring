class shoppingCart_page {

    /*
     _____ _     _____ __  __ _____ _   _ _____ ____
    | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
    |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
    | |___| |___| |___| |  | | |___| |\  | | |  ___) |
    |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
    */

    get addToCartBtn(){
        return cy.get('.btn_primary')
    }
    get removeFromCartButtons(){
        return cy.get('.btn_secondary.cart_button')
    }
    get cartBtn(){
        return cy.get('.shopping_cart_link')
    }
    get cartBadge(){
        return cy.get('.shopping_cart_badge')
    }
    get itemName(){
        return cy.get('.inventory_item_name')
    }
    get cartItemsList(){
        return cy.get('.cart_list > div')
    }
    get cartItems(){
        return cy.get('.cart_item')
    }
    get removedCartItems(){
        return cy.get('.removed_cart_item')
    }
    get cartPage(){
        return cy.get('#cart_contents_container')
    }
    get checkoutBtn(){
        return cy.get('#checkout')
    }
    get checkoutTitle(){
        return cy.get('.title')
    }
    get firstName(){
        return cy.get('#first-name')
    }
    get lastName(){
        return cy.get('#last-name')
    }
    get postalCode(){
        return cy.get('#postal-code')
    }
    get continueBtn(){
        return cy.get('#continue')
    }
    get finishBtn(){
        return cy.get('#finish')
    }
    get checkoutComplete(){
        return cy.get('#checkout_complete_container')
    }

    /*
     __  __ _____ _____ _   _  ___  ____  ____
    |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
    | |\/| |  _|   | | | |_| | | | | | | \___ \
    | |  | | |___  | | |  _  | |_| | |_| |___) |
    |_|  |_|_____| |_| |_| |_|\___/|____/|____/
    */

    clickOnAddToCartByName(productName) {
        this.itemName.each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim() === productName) {
                    cy.wrap($el).parents('.inventory_item').find('.btn_primary').click();
                }
            });
        });
        return this
    }
    clickOnRemoveByNameOverview(productName) {
        this.itemName.each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim() === productName) {
                    cy.wrap($el).parents('.inventory_item').find('.btn_secondary').click();
                }
            });
        });
        return this
    }
    clickOnRemoveByNameCart(productName) {
        this.itemName.each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim() === productName) {
                    cy.wrap($el).parents('.cart_item').find('.btn_secondary').click();
                }
            });
        });
        return this
    }

    isInCart(productName){
        this.cartItems.each(($item) => {
            cy.wrap($item).find('.inventory_item_name').invoke('text').then((text) => {
                expect(text.trim()).to.equal(productName);
            });
        });
        return this
    }

    isRemovedFromCartOverview(productName){
        this.itemName.each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                if (text.trim() === productName) {
                    cy.wrap($el).parents('.inventory_item').find('.btn_primary').should('exist');
                }
            });
        });
    }

    isCartBadgeShown() {
        this.cartBadge.should('be.visible');
    }
    clickCartBtn(){
        this.cartBtn.click();
        return this
    }
    isOnCartPage(){
        this.cartPage.should("be.visible");
    }
    isCartEmpty(){
        this.cartItemsList.should('have.length', 2);
    }
    itemsRemovedFromCart(productName) {
        if(this.itemName.should('not.exist')) {
            this.removedCartItems.should('exist');
        } else {
            this.itemName.each(($itemName) => {
                cy.wrap($itemName).invoke('text').then((text) => {
                    expect(text.trim()).not.to.equal(productName);
                });
            });
        }
    }
    clickCheckoutBtn(){
        this.checkoutBtn.click();
        return this
    }
    filInCheckoutInfo(){
        this.firstName.type("john")
        this.lastName.type("doe")
        this.postalCode.type("3960")
    }
    clickContinueBtn(){
        this.continueBtn.click()
        return this
    }
    isOnCheckout(){
        this.checkoutTitle.should("contain.text", "Checkout: Your Information")
    }
    isOnCheckoutOverview(){
        this.checkoutTitle.should("contain.text", "Checkout: Overview")
    }
    clickFinishBtn(){
        this.finishBtn.click()
        return this
    }
    isCheckoutComplete(){
        this.checkoutComplete.should("be.visible")
    }

}
export default new shoppingCart_page()