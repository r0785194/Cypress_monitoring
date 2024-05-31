@Regression
Feature: Log in to the website

  @Smoke
  Scenario: Successful Login
    Given I am on the login page
    When I fill in my username "standard_user"
    And I fill in my password "secret_sauce"
    And I click on the login button
    Then I am logged in
    And redirected to the product page

  @Sanity
  Scenario: failed login: correct username - wrong password
    Given I am on the login page
    When I fill in my username "standard_user"
    And I fill in my password "password"
    And I click on the login button
    Then an error message in login page is shown "Username and password do not match any user"

  @Sanity
  Scenario: failed login: no username filled out - password filled out
    Given I am on the login page
    When I fill in my username "<empty>"
    And I fill in my password "secret_sauce"
    And I click on the login button
    Then an error message in login page is shown "Username is required"

  @Sanity
  Scenario: failed login: username filled out - no password filled out
    Given I am on the login page
    When I fill in my username "standard_user"
    And I fill in my password "<empty>"
    And I click on the login button
    Then an error message in login page is shown "Password is required"

  @Sanity
  Scenario: failed login: locked out user
    Given I am on the login page
    When I fill in my username "locked_out_user"
    And I fill in my password "secret_sauce"
    And I click on the login button
    Then an error message in login page is shown "user has been locked out"
    And a red cross is shown by the username and password