Feature: SignUp, Sign In and Purchase Product

    # Scenario: TC_001 Create New user/SignUp
    #     Given I am on the home page
    #     Then Navigate to SignUp page
    #     And Create an account with the random username

    # # Scenario: TC_002 Sign In with newly created user credentials
    # #     Given I am on the Sign In page
    # #     When Login using newly created user credentials
    # #     Then I shall verify that the user information

    # Scenario: TC_003 Add product to Online Cart an checkout
    #     Given I am on the Sign In page
    #     When Login using newly created user credentials
    #     And User changes the address of the checkout
    #    When I Add below the product to cart
    #         | category | subCategory       | name                                | model   | quantity |
    #         | Gear     | Bags              | Push It Messenger Bag               | 24-WB04 | 20       |
    #         | Gear     | Fitness Equipment | Harmony Lumaflex™ Strength Band Kit | 24-UG03 | 10       |
    #         | Gear     | Watches           | Didi Sport Watch                    | 24-WG02 | 10       |


    #         Then I shall validate shopping cart as below
    #     | name | model | quantity |

    # Then I shall be able to buy the product
    # And I shall be able to buy using cheque payment


    # All above it DONE




    # Scenario: TC_001 Create New user/SignUp
    #     Given I am on the home page
    #     Then Navigate to SignUp page
    #     And Create an account with the random username
    #     And User changes the address of the checkout
    #     When I Add below the product to cart
    #         | category | subCategory | name                  | model   | quantity |
    #         | Gear     | Bags        | Push It Messenger Bag | 24-WB04 | 20       |
    #     # | Gear     | Fitness Equipment | Harmony Lumaflex™ Strength Band Kit | 24-UG03 | 10       |
    #     # | Gear     | Watches           | Didi Sport Watch                    | 24-WG02 | 10       |
    #     Then I shall validate shopping cart as below
    #         | name                  | quantity |
    #         | Push It Messenger Bag | 20       |
    #     # | Harmony Lumaflex™ Strength Band Kit | 10       |
    #     # | Didi Sport Watch                    | 10       |
    #     Then I shall be able to buy the product
    #     # And I shall be able to buy using cheque payment
  

#    stop and to practice more step








Scenario: TC_001 Create New user/SignUp
        Given I am on the home page
        Then Navigate to SignUp page
        And Create an account with the random username
        And User changes the address of the checkout
        And I am on the contact page
        # Then I send refund request to customer care for prev. oder