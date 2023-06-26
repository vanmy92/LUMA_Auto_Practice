Feature: SignUp, Sign In and Purchase Product

    @sanity
    Scenario: TC_001 Create New user/SignUp
        Given I am on the home page
        Then Navigate to SignUp page
        And Create an account with the random username

    @sanity
    Scenario: TC_002 Sign In with newly created user credentials
        Given I am on the Sign In page
        When Login using newly created dynamic user credentials
        Then I shall verify that the user information

    # @regression
    # Scenario: TC_004 Create New user/SignUp
    #     Given I am on the home page
    #     Then Navigate to SignUp page
    #     And Create an account with the random username
    #     And User changes the address of the checkout
    #     And I am on the contact page
    #     Then I send refund request to customer care for prev. oder


    # @regression
    # Scenario: TC_003 Create New user/SignUp
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



    @regression
    Scenario: TC_003 Create New user/SignUp
        Given I am on the home page
        Then Navigate to SignUp page
        And Create an account with the random username
        And User changes the address of the checkout
        When I Add below the product to cart
            | category | subCategory       | name                                | model   | quantity |
            | Gear     | Bags              | Push It Messenger Bag               | 24-WB04 | 20       |
            | Gear     | Fitness Equipment | Harmony Lumaflex™ Strength Band Kit | 24-UG03 | 10       |
        # | Gear     | Watches           | Didi Sport Watch                    | 24-WG02 | 10       |
        And Calculate all the products

# And I verify all the information is correct in the popup
#     | total | name                                | quantity |
#     | 30    | Push It Messenger Bag               | 20       |
#     | 30    | Harmony Lumaflex™ Strength Band Kit | 10       |


















#  Scenario: TC_003 Add product to Online Cart an checkout
#         Given I am on the Sign In page
#         When Login using newly created static user credentials
#         And User changes the address of the checkout
#         When I Add below the product to cart
#             | category | subCategory       | name                                | model   | quantity |
#             | Gear     | Bags              | Push It Messenger Bag               | 24-WB04 | 20       |
#             | Gear     | Fitness Equipment | Harmony Lumaflex™ Strength Band Kit | 24-UG03 | 10       |
#             | Gear     | Watches           | Didi Sport Watch                    | 24-WG02 | 10       |
#         Then I shall validate shopping cart as below
#             | name | model | quantity |

#         Then I shall be able to buy the product





