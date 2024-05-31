class ProductDetailPage {

    /*
     _____ _     _____ __  __ _____ _   _ _____ ____
    | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
    |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
    | |___| |___| |___| |  | | |___| |\  | | |  ___) |
    |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
    */

    get productNames(){
        return cy.get('.inventory_item_name')
    }
    get productDetailName() {
        return cy.get('.inventory_details_name')
    }

    /*
     __  __ _____ _____ _   _  ___  ____  ____
    |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
    | |\/| |  _|   | | | |_| | | | | | | \___ \
    | |  | | |___  | | |  _  | |_| | |_| |___) |
    |_|  |_|_____| |_| |_| |_|\___/|____/|____/
    */

    clickOnProductByName(productName) {
        this.productNames.each(($el) => {
            cy.wrap($el).then((el) => {
                if (el.text().trim() === productName) {
                    cy.wrap(el).click();
                }
            });
        });
    }

    isOnProductDetailPage(productName) {
        this.productDetailName.should('have.text', productName);
    }
}

export default new ProductDetailPage();
