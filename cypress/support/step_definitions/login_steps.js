import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import login_page from "../pages/login_page";

/*
  ____ _____     _______ _   _
 / ___|_ _\ \   / / ____| \ | |
| |  _ | | \ \ / /|  _| |  \| |
| |_| || |  \ V / | |___| |\  |
 \____|___|  \_/  |_____|_| \_|
 */

Given('I am on the login page', function () {
    login_page
        .isOnLoginPage()
});

/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/
When('I fill in my username {string}', function (username) {
    login_page
        .enterUsername(username);
});
When('I fill in my password {string}', function (password) {
    login_page
        .enterPassword(password);
});
When('I click on the login button', function () {
    login_page
        .clickLogin()
});

/*
 _____ _   _ _____ _   _
|_   _| | | | ____| \ | |
  | | | |_| |  _| |  \| |
  | | |  _  | |___| |\  |
  |_| |_| |_|_____|_| \_|
 */

Then('I am logged in', function () {
    login_page
        .isLoggedIn()
});
Then('redirected to the product page', function () {
    login_page
        .isOnInventoryPage()
});
Then('an error message in login page is shown {string}', function (message) {
    login_page
        .validateErrorMessage(message);
});
Then('a red cross is shown by the username and password', function () {
    login_page
        .validateRedCross()
});