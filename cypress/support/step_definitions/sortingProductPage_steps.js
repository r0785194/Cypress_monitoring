import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import sortingProductPage_page from "../pages/sortingProductPage_page";

/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/

When('I change the filter option to ‘Name A to Z’', function () {
    sortingProductPage_page
        .selectOptionAToZ()
});
When('I change the filter option to ‘Price low to high’', function () {
    sortingProductPage_page
        .selectOptionLoToHi()
});

/*
 _____ _   _ _____ _   _
|_   _| | | | ____| \ | |
  | | | |_| |  _| |  \| |
  | | |  _  | |___| |\  |
  |_| |_| |_|_____|_| \_|
 */

Then('the products are shown in alphabetical order', function () {
    sortingProductPage_page
        .validateSortedAToZ()
});
Then('I see the products ordered with the product lowest price first and highest price last', function () {
    sortingProductPage_page
        .validateSortedLoToHi()
});