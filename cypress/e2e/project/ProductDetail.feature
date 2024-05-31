@Regression
Feature: See the product detail page

  Background:
    Given I am correctly logged in with username "standard_user" and password "secret_sauce"

  @Sanity
  Scenario Outline: See product detail page
    Given I am on the product page
    When I click on the product "<Item>"
    Then I’m redirected to the product detail screen of "<Item>"

    Examples:
      | Item                     |
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
      | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Onesie        |