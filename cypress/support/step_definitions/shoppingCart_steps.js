import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import shoppingCart_page from "../pages/shoppingCart_page";

/*
  ____ _____     _______ _   _
 / ___|_ _\ \   / / ____| \ | |
| |  _ | | \ \ / /|  _| |  \| |
| |_| || |  \ V / | |___| |\  |
 \____|___|  \_/  |_____|_| \_|
 */

Given('I am on the ‘Your cart’ page', function () {
    shoppingCart_page
        .clickCartBtn()
        .isOnCartPage()
});
/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/

When('I click on the ‘add to cart’ next to the {string}', function (productName) {
    shoppingCart_page
        .clickOnAddToCartByName(productName)
        .isCartBadgeShown()
});
When('I click on the shopping cart icon', function () {
    shoppingCart_page
        .clickCartBtn()
});
When('I click on the remove button in my overview page from the {string} I’ve added to my cart', function (productName) {
    shoppingCart_page
        .clickOnRemoveByNameOverview(productName)
});

When('I click on the `remove` button next to the {string} that I’ve added to my cart', function (productName) {
    shoppingCart_page
        .clickOnRemoveByNameCart(productName)
});
When('I click on ‘check out’', function () {
    shoppingCart_page
        .clickCheckoutBtn()
});
When('I complete filling out the fields', function () {
    shoppingCart_page
        .filInCheckoutInfo()
});
When('click on continue', function () {
    shoppingCart_page
        .clickContinueBtn()
});
When('I click on ‘finish’', function () {
    shoppingCart_page
        .clickFinishBtn()
});

/*
 _____ _   _ _____ _   _
|_   _| | | | ____| \ | |
  | | | |_| |  _| |  \| |
  | | |  _  | |___| |\  |
  |_| |_| |_|_____|_| \_|
 */

Then('I’m redirected to the ‘your cart’ screen', function () {
    shoppingCart_page
        .isOnCartPage()
});
Then('the {string} is added to my cart', function (productName) {
    shoppingCart_page
        .isInCart(productName)
});
Then('the list of products in my cart is empty', function () {
    shoppingCart_page
        .isCartEmpty()
});
Then('that {string} is removed from my cart in overview', function (productName) {
    shoppingCart_page
        .isRemovedFromCartOverview(productName)
});
Then('that {string} is removed from my cart', function (productName) {
    shoppingCart_page
        .itemsRemovedFromCart(productName)
});
Then('the list updates itself and I don’t see the {string} anymore that I just deleted', function (productName) {
    shoppingCart_page
        .itemsRemovedFromCart(productName)
});
Then('I am redirected to the ‘Checkout: your information’ page', function () {
    shoppingCart_page
        .isOnCheckout()
});
Then('I’m redirected to the ‘checkout: overview page’', function () {
    shoppingCart_page
        .isOnCheckoutOverview()
});
Then('I see an order confirmation screen', function () {
    shoppingCart_page
        .isCheckoutComplete()
});