class sortingProductPage_page {
    /*
     _____ _     _____ __  __ _____ _   _ _____ ____
    | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
    |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
    | |___| |___| |___| |  | | |___| |\  | | |  ___) |
    |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
    */

    get sortBtn(){
        return cy.get('.product_sort_container')
    }
    get itemName() {
        return cy.get('.inventory_item_name')
    }

    /*
     __  __ _____ _____ _   _  ___  ____  ____
    |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
    | |\/| |  _|   | | | |_| | | | | | | \___ \
    | |  | | |___  | | |  _  | |_| | |_| |___) |
    |_|  |_|_____| |_| |_| |_|\___/|____/|____/
    */

    selectOptionAToZ(){
        this.sortBtn.select('az')
    }
    selectOptionLoToHi(){
        this.sortBtn.select('lohi')
    }
    validateSortedAToZ(){
        this.itemName.first().should('have.text', 'Sauce Labs Backpack')
    }
    validateSortedLoToHi(){
        this.itemName.first().should('have.text', 'Sauce Labs Onesie')
    }
}
export default new sortingProductPage_page()
