Feature: SignUp, Sign In and Purchase Product

    Scenario: TC_001 Create New user/SignUp
        Given I am on the home page
        Then Navigate to SignUp page
        And Create an account with the random username
    
    Scenario: TC_002 Sign In with newly created user credentials
        Given I am on the home page
        When Login using newly created user credentials
        Then I shall verify that the user information