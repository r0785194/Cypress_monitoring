import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import logout_page from "../pages/logout_page";

/*
  ____ _____     _______ _   _
 / ___|_ _\ \   / / ____| \ | |
| |  _ | | \ \ / /|  _| |  \| |
| |_| || |  \ V / | |___| |\  |
 \____|___|  \_/  |_____|_| \_|
 */

/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/
When('I click on the hamburger menu in the nav\. bar', function () {
    logout_page
        .clickHamburgerMenu()
});
When('I click on logout', function () {
    logout_page
        .clickLogOutBtn()
});
/*
 _____ _   _ _____ _   _
|_   _| | | | ____| \ | |
  | | | |_| |  _| |  \| |
  | | |  _  | |___| |\  |
  |_| |_| |_|_____|_| \_|
 */
Then('I see a list of buttons', function () {
    logout_page
        .areButtonsDisplayed()
});
Then('I am logged out of the application', function () {
    logout_page
        .isLoggedOut()
});
Then('redirected to the Home Screen the login screen', function () {
    logout_page
        .isOnLoginPage()
});