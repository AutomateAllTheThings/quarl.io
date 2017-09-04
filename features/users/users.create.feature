Feature: Create a New User
  Scenario: Submit With Valid Attributes
    Given I have valid user attributes
    When I POST to /users
    Then I should receive user details
  # Scenario: Submit With Invalid Attributes
  #   Given I have invalid user attributes
  #   When I POST to /users
  #   Then I should receive an invalid attributes error
