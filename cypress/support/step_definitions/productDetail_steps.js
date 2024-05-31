import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import productDetail_page from "../pages/productDetail_page";

/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/

When('I click on the product {string}', function (productName) {
    productDetail_page
        .clickOnProductByName(productName)
});

/*
 _____ _   _ _____ _   _
|_   _| | | | ____| \ | |
  | | | |_| |  _| |  \| |
  | | |  _  | |___| |\  |
  |_| |_| |_|_____|_| \_|
 */

Then('I’m redirected to the product detail screen of {string}', function (productName) {
    productDetail_page
        .isOnProductDetailPage(productName)
});