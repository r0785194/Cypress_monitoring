import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { Before } from '@badeball/cypress-cucumber-preprocessor'
import login_page from "../pages/login_page";
import logout_page from "../pages/logout_page";

Before(() => {
    cy.visit('/')
})

Given('I am correctly logged in with username {string} and password {string}', function (username,password) {
    login_page
        .enterUsername(username)
        .enterPassword(password)
        .clickLogin()
});
Given('I am on the product page', function () {
    logout_page
        .isOnProductPage()
});
