Feature: SignUp, Sign In and Purchase Product

    # @sanity
    # Scenario: TC_001 Create New user/SignUp
    #     Given I am on the home page
    #     Then Navigate to SignUp page
    #     And Create an account with the random username

    # @sanity
    # Scenario: TC_002 Sign In with newly created user credentials
    #     Given I am on the Sign In page
    #     When Login using newly created dynamic user credentials
    #     Then I shall verify that the user information

    # @regression
    # Scenario: TC_004 Create New user/SignUp
    #     Given I am on the home page
    #     Then Navigate to SignUp page
    #     And Create an account with the random username
    #     And User changes the address of the checkout
    #     And I am on the contact page
    #     Then I send refund request to customer care for prev. oder


    # @regression
    # Scenario: TC_003 User want to add some Items
    #     Given I am on the home page
    #     Then Navigate to SignUp page
    #     And Create an account with the random username
    #     And User changes the address of the checkout
        # When I Add below the product to cart
        #     | category | subCategory | name                  | model   | quantity |
        #     | Gear     | Bags        | Push It Messenger Bag | 24-WB04 | 20       |
        # | Gear     | Fitness Equipment | Harmony Lumaflex™ Strength Band Kit | 24-UG03 | 10       |
        # | Gear     | Watches           | Didi Sport Watch                    | 24-WG02 | 10       |
    #     Then I shall validate shopping cart as below
    #         | name                  | quantity |
    #         | Push It Messenger Bag | 20       |
    #     # | Harmony Lumaflex™ Strength Band Kit | 10       |
    #     # | Didi Sport Watch                    | 10       |
    #     Then I shall be able to buy the product



    # @regression
    # Scenario: TC_004 Verify all information in the YourCart Popup -> DONE
    #     Given I am on the home page
    #     Then Navigate to SignIn page
    #     And I loggin with the defualt username and password
    #     When I Add below the product to cart
    #         | category | subCategory       | name                                | model   | quantity |
    #         | Gear     | Bags              | Push It Messenger Bag               | 24-WB04 | 20       |
    #         | Gear     | Fitness Equipment | Harmony Lumaflex™ Strength Band Kit | 24-UG03 | 10       |
    #     And User clicks on YourCart button
    #     And Calculate all the products
    #     And I verify generally all the information is correct in the popup
    #         | totalItems | totalPrices | items |
    #         | 30         | 1120        | 2     |
        # And I verify details information are correct in the popup
    #         | name                                | price | quantity |
    #         | Push It Messenger Bag               | 22    | 20       |
    #         | Harmony Lumaflex™ Strength Band Kit | 45    | 10       |







    @regression
    Scenario: TC_004 User edit some qty in YourCartPopup
        Given I am on the home page
        Then Navigate to SignIn page
        And I loggin with the defualt username and password
        And User clicks on YourCart button
        And I want to update some quantity in each items in the popup
            | name                                | quantity |
            | Push It Messenger Bag               | 50       |
            | Harmony Lumaflex™ Strength Band Kit | 50       |





# And I verify details information are correct in the popup
#     | name                                | price | quantity |
#     | Push It Messenger Bag               | 22    | 20       |
#     | Harmony Lumaflex™ Strength Band Kit | 45    | 10       |


















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





