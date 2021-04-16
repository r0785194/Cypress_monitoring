
Feature: login
  this feature checks the availability of the homepage and its blocks.

  Background:
    Given I navigate to the homepage of coolblue
    And I accept the usage of cookies

  Scenario: Generic - Correct login
    When  I login with valid credentials
    Then  I see the my account page

  Scenario: Parametrized - Correct login
    When  I login with:
      | username | nick.vandyck@hotmail.com |
      | password | test1234                 |
    Then  I see the my account page

  Scenario: Failed login
    When  I login with:
      | username | test@hotmail.com |
      | password | test@321!!!      |
    Then  Authentication failed error is displayed
