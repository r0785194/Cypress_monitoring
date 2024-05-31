@Regression
Feature: Log out of the website

  Background:
    Given I am correctly logged in with username "standard_user" and password "secret_sauce"

  @Smoke
  Scenario: Successful Logout
    Given I am on the product page
    When I click on the hamburger menu in the nav. bar
    Then I see a list of buttons
    When I click on logout
    Then I am logged out of the application
    And redirected to the Home Screen the login screen